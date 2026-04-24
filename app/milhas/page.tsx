"use client";

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

export default function MilhasPage() {
  return (
    <main>
      <Navbar />
      <Hero
        onUnlock={() => {}}
        isUnlocked={true}
        isOfferUnlocked={true}
      />
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
    </main>
  );
}
