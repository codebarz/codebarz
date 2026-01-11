"use client";

import { Terminal, LayoutGrid, Star, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const repos = [
  {
    Icon: Terminal,
    name: "turbo-cache-redis",
    version: "v2.4.0",
    updated: "Updated 2 days ago",
    stars: "1.2k",
    description:
      "A high-performance Redis caching middleware for Node.js applications with automatic compression and invalidation strategies.",
    language: "JavaScript",
    color: "bg-yellow-400",
  },
  {
    Icon: LayoutGrid,
    name: "react-grid-masonry",
    version: "v1.0.3",
    updated: "Updated 5 hours ago",
    stars: "843",
    description:
      "Lightweight, zero-dependency masonry grid layout component for React with server-side rendering support.",
    language: "TypeScript",
    color: "bg-blue-500",
  },
];

export default function V2OpenSource() {
  return (
    <section className="w-full px-6 py-32 md:px-12" id="opensource">
      <div className="w-full max-w-[1440px] mx-auto pl-0 md:pl-12 lg:pl-16">
        <div className="mb-16 border-b border-white/5 pb-8 flex flex-col md:flex-row justify-between items-end">
          <div>
            <ScrollReveal variant="fade-up" duration={600}>
              <span className="font-mono text-xs text-slate-500 mb-4 block">
                03 / COMMUNITY
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100} duration={600}>
              <h2 className="font-display text-4xl font-bold tracking-tighter text-white">
                Open Source
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fade-left" delay={200} duration={600}>
            <p className="text-slate-500 text-sm font-mono mt-4 md:mt-0">
              TOOLS WE&apos;VE BUILT & SHARED
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {repos.map((repo, index) => (
            <ScrollReveal
              key={repo.name}
              variant={index === 0 ? "fade-right" : "fade-left"}
              delay={index * 150}
              duration={700}
            >
              <div className="group rounded-xl border border-white/10 bg-black p-8 transition-all duration-500 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] cursor-pointer">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <repo.Icon className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300 group-hover:scale-110" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-lg font-bold text-white font-mono group-hover:text-white/90 transition-colors">
                        {repo.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-mono mt-1">
                        {repo.version} • {repo.updated}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded border border-white/10 px-3 py-1 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-all duration-300">
                    <Star className="w-3.5 h-3.5 text-yellow-500 group-hover:scale-110 transition-transform" strokeWidth={2} fill="currentColor" />
                    <span className="text-xs font-mono text-white">
                      {repo.stars}
                    </span>
                  </div>
                </div>
                <p className="mb-8 text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {repo.description}
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-4">
                    <span className={`h-3 w-3 rounded-full ${repo.color} group-hover:scale-125 transition-transform`}></span>
                    <span className="text-xs font-mono text-slate-400">
                      {repo.language}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
