"use client";

import { Blocks, Shield, Server, Code2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const courses = [
  {
    Icon: Blocks,
    title: "System Design",
    description: "Master the architecture patterns behind Netflix, Uber & Stripe. 8-week intensive.",
  },
  {
    Icon: Shield,
    title: "DevSecOps",
    description: "Build bulletproof CI/CD pipelines. SOC2, HIPAA, and PCI compliance covered.",
  },
  {
    Icon: Server,
    title: "Data Engineering",
    description: "From Kafka to Spark—process petabytes reliably. Real production scenarios.",
  },
  {
    Icon: Code2,
    title: "Performance Engineering",
    description: "Make any app 10x faster. Profiling, optimization, and monitoring mastery.",
  },
];

export default function V2Academy() {
  return (
    <section
      className="relative w-full border-y border-white/5 bg-black py-32"
      id="academy"
    >
      <div className="relative w-full px-6 md:px-12 max-w-[1440px] mx-auto pl-0 md:pl-12 lg:pl-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal variant="fade-up" duration={600}>
              <span className="font-mono text-xs text-slate-500 mb-4 block">
                02 / EDUCATION
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100} duration={700}>
              <h2 className="font-display mb-6 text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Level Up Your <br />
                Engineering Team.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200} duration={700}>
              <p className="mb-10 text-lg font-light text-slate-400 leading-relaxed">
                Private workshops taught by engineers who&apos;ve built systems
                at scale. No theory fluff—just battle-tested patterns from
                companies processing billions of requests.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300} duration={700}>
              <button className="px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-wide rounded-full hover:bg-slate-200 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                Explore Syllabus
              </button>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <ScrollReveal
                key={course.title}
                variant="fade-up"
                delay={index * 100}
                duration={600}
                className={index % 2 === 1 ? "mt-0 md:mt-8" : ""}
              >
                <div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer group">
                  <course.Icon
                    className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform animate-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                    strokeWidth={1.5}
                  />
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{course.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
