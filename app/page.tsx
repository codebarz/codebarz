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

export default function Home() {
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

