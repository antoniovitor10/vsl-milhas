import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import MentorsReveal from "@/components/MentorsReveal";
import ModulesGrid from "@/components/ModulesGrid";
import SocialProof from "@/components/SocialProof";
import PricingCard from "@/components/PricingCard";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainSection />
      <MentorsReveal />
      <ModulesGrid />
      <SocialProof />
      <PricingCard />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
