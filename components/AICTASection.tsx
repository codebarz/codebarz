"use client";

import Icon from "./ui/Icon";
import ScrollReveal from "./ScrollReveal";

export default function AICTASection() {
  return (
    <section className="w-full bg-primary py-24 sm:py-32 relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20vw] lg:text-[15vw] font-black text-white/10 -rotate-[25deg] select-none whitespace-nowrap">
          codebarz
        </span>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center">
          <ScrollReveal variant="zoom-in" duration={500}>
            <div className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-black/10 text-black border border-black/20">
              <Icon name="psychology" size="lg" />
              <span>AI Integration</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100} duration={700}>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mt-6 max-w-2xl">
              Supercharge your business with AI
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <p className="mt-4 text-base text-black/70 max-w-xl mx-auto">
              Leverage our expertise in artificial intelligence to automate
              workflows, analyze data, and create smarter products.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} duration={700}>
            <div className="mt-8 flex justify-center">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white hover:bg-white/90 text-black text-base font-bold transition-colors gap-2">
                <span className="truncate">Explore AI Solutions</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
