import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ClientCarousel } from "@/components/ClientCarousel";
import { VisionReality } from "@/components/VisionReality";
import { AIModels } from "@/components/AIModels";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientCarousel />
      <AIModels />
      <TrustStats />
      <WhyChooseUs />
      <VisionReality />
    </>
  );
}
