"use client";

import Button from "./ui/Button";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <ScrollReveal variant="zoom-in" duration={800}>
        <div className="bg-white/5 rounded-2xl p-8 sm:p-12 lg:p-16 border border-white/10 text-center">
          <ScrollReveal variant="fade-up" delay={200} duration={600}>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to engineer your success?
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} duration={600}>
            <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
              Get in touch with our engineering team to discuss your technical
              requirements and how we can help you build scalable solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={400} duration={600}>
            <div className="mt-8 flex justify-center">
              <Button variant="primary">Schedule a Technical Call</Button>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
}
