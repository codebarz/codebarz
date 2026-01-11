import {
  Header,
  HeroSection,
  TrustedBySection,
  ServicesSection,
  EducationSection,
  AICTASection,
  CTASection,
  Footer,
} from "@/components";

export const metadata = {
  title: "codebarz - Engineering the Future (v1)",
  description:
    "We architect high-performance digital infrastructure for the world's most ambitious companies.",
};

export default function V1Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <EducationSection />
      </main>
      <AICTASection />
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
        <Footer />
      </div>
    </>
  );
}

