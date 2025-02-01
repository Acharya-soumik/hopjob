import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { ResumeBuilder } from "@/components/ResumeBuilder";
import { DsaLearning } from "@/components/DsaLearning";
import { Community } from "@/components/Community";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ValueProposition />
      <ResumeBuilder />
      <DsaLearning />
      <Community />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      {/* Add other sections here as we build them */}
    </main>
  );
}
