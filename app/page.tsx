"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import MentorsReveal from "@/components/MentorsReveal";
import ModulesGrid from "@/components/ModulesGrid";
import SocialProofPrints from "@/components/SocialProofPrints";
import SocialProof from "@/components/SocialProof";
import PricingCard from "@/components/PricingCard";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { OFFER_UNLOCK_SECONDS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const OFFER_VISIT_COUNT_STORAGE_KEY = "vsl_milhas_offer_visit_count";
const OFFER_REPEAT_VISIT_UNLOCK_COUNT = 2;

type UnlockSource = "video" | "repeat_visit";

export default function Home() {
  const [isVideoUnlocked, setIsVideoUnlocked] = useState(false);
  const [unlockSource, setUnlockSource] = useState<UnlockSource | null>(null);
  const visitCountedRef = useRef(false);
  const offerUnlockTrackedRef = useRef(false);

  const unlockOffer = useCallback((source: UnlockSource) => {
    setUnlockSource((currentSource) => currentSource ?? source);
    setIsVideoUnlocked(true);
  }, []);

  const handleUnlock = useCallback(() => unlockOffer("video"), [unlockOffer]);

  useEffect(() => {
    if (visitCountedRef.current) return;
    visitCountedRef.current = true;
    let unlockTimeoutId: number | undefined;

    try {
      const storedCount = window.localStorage.getItem(OFFER_VISIT_COUNT_STORAGE_KEY);
      const parsedCount = Number.parseInt(storedCount ?? "0", 10);
      const currentCount = Number.isFinite(parsedCount) && parsedCount > 0 ? parsedCount : 0;
      const nextCount = currentCount + 1;

      window.localStorage.setItem(
        OFFER_VISIT_COUNT_STORAGE_KEY,
        String(Math.min(nextCount, OFFER_REPEAT_VISIT_UNLOCK_COUNT))
      );

      if (nextCount >= OFFER_REPEAT_VISIT_UNLOCK_COUNT) {
        unlockTimeoutId = window.setTimeout(() => unlockOffer("repeat_visit"), 0);
      }
    } catch {
      // If browser storage is unavailable, the normal VSL unlock still works.
    }

    return () => {
      if (unlockTimeoutId !== undefined) {
        window.clearTimeout(unlockTimeoutId);
      }
    };
  }, [unlockOffer]);

  useEffect(() => {
    if (!isVideoUnlocked || !unlockSource || offerUnlockTrackedRef.current) {
      return;
    }

    offerUnlockTrackedRef.current = true;
    trackEvent("offer_unlocked", {
      delay_seconds: unlockSource === "video" ? OFFER_UNLOCK_SECONDS : 0,
      unlock_source: unlockSource,
      repeat_visit_threshold: OFFER_REPEAT_VISIT_UNLOCK_COUNT,
    });
  }, [isVideoUnlocked, unlockSource]);

  return (
    <main>
      <Navbar />
      <Hero
        onUnlock={handleUnlock}
        isUnlocked={isVideoUnlocked}
        isOfferUnlocked={isVideoUnlocked}
      />

      {isVideoUnlocked && (
        <>
          <PainSection />
          <MentorsReveal />
          <ModulesGrid />
          <SocialProofPrints />
          <SocialProof />
          <PricingCard />
          <Guarantee />
          <FAQ />
          <FinalCTA />
          <Footer />
        </>
      )}
    </main>
  );
}
