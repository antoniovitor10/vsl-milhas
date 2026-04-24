"use client";

import { useCallback, useEffect, useState } from "react";
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

export default function Home() {
  const [isVideoUnlocked, setIsVideoUnlocked] = useState(false);

  const handleUnlock = useCallback(() => setIsVideoUnlocked(true), []);

  useEffect(() => {
    if (isVideoUnlocked) {
      trackEvent("offer_unlocked", { delay_seconds: OFFER_UNLOCK_SECONDS });
    }
  }, [isVideoUnlocked]);

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
