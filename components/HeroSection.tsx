"use client";

import Button from "./ui/Button";
import HeroBackground from "./HeroBackground";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative py-32 sm:py-40 text-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 flex flex-col items-center gap-6 pointer-events-none w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-down" duration={800}>
          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl max-w-4xl pointer-events-auto drop-shadow-2xl animate-shimmer [filter:_drop-shadow(0_0_20px_rgba(56,189,248,0.5))_drop-shadow(0_0_40px_rgba(56,189,248,0.3))]">
            Engineering world-class software
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200} duration={800}>
          <p className="text-base text-white/90 sm:text-lg max-w-2xl pointer-events-auto drop-shadow-lg font-medium [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">
            Codebarz is a premium software engineering firm. We design, build,
            and scale custom applications to solve your most complex business
            challenges.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={400} duration={800}>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
            <Button variant="primary" icon="calendar_month">
              Book Consultation
            </Button>
            <Button variant="secondary">View Our Work</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
