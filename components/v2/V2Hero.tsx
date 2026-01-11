"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

export default function V2Hero() {
  return (
    <section className="relative flex w-full flex-col justify-center px-6 pt-40 pb-20 md:px-12 min-h-screen">
      <div className="flex w-full flex-col gap-16 lg:flex-row lg:items-end max-w-[1440px] mx-auto pl-0 md:pl-12 lg:pl-16">
        <div className="flex flex-1 flex-col gap-8 text-left z-10">
          <ScrollReveal variant="fade-up" duration={600}>
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-mono text-xs text-slate-300">
                ACCEPTING NEW PROJECTS
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100} duration={800}>
            <h1 className="font-display text-6xl font-bold leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[7rem]">
              We Build What <br />
              <span className="animate-shimmer-v2">
                Others Can&apos;t.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={800}>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-slate-400">
              Elite software engineering for companies that refuse to compromise.
              From complex distributed systems to AI-powered platforms—we turn
              ambitious ideas into production-grade reality.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} duration={800}>
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="group relative flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-black text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95">
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </button>
              <button className="group flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-white text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95">
                View Case Studies
                <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" strokeWidth={2} />
              </button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variant="fade-left"
          delay={400}
          duration={1000}
          className="relative flex flex-1 items-center justify-center lg:justify-end lg:h-[600px] h-[400px]"
        >
          <div className="absolute w-full h-full flex items-center justify-center">
            {/* Spinning circles */}
            <div className="w-64 h-64 border border-white/10 rounded-full animate-spin-slow"></div>
            <div className="absolute w-96 h-96 border border-white/5 rounded-full animate-spin-slow-reverse"></div>
            <div className="absolute w-[30rem] h-[30rem] border border-dashed border-white/5 rounded-full animate-spin-slowest"></div>

            {/* Stats card */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 backdrop-blur-xl bg-black/80 border border-white/10 p-6 rounded-2xl shadow-2xl w-72 animate-float-card animate-glow-pulse">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                <span className="text-xs font-mono text-slate-500">PROJECTS SHIPPED</span>
                <span className="text-xs font-mono text-green-400 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  150+
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full animate-progress"></div>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-500 rounded-full animate-progress-half"></div>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-xs font-mono text-slate-500">CLIENT RETENTION</span>
                  <span className="text-xs font-mono text-white">98%</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
