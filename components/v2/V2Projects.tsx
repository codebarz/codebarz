"use client";

import { TrendingUp, Microscope, Network, ArrowRight, ArrowUpRight, Zap, Shield, Gauge } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const projects = [
  {
    Icon: TrendingUp,
    title: "Real-Time Trading Platform",
    description: "Built a high-frequency trading system processing 2M+ transactions daily. Custom WebSocket architecture, Redis clustering, and sub-millisecond order execution for a Series B fintech.",
    tag: "FinTech",
    version: "In Production",
    stats: [
      { label: "Latency", value: "<1ms" },
      { label: "Uptime", value: "99.99%" },
      { label: "Daily TXs", value: "2M+" },
    ],
    gradient: "from-emerald-500/20 via-transparent to-transparent",
    featured: true,
  },
  {
    Icon: Microscope,
    title: "AI Diagnostic Pipeline",
    description: "End-to-end ML infrastructure for medical imaging analysis. HIPAA-compliant, FDA 510(k) cleared.",
    tag: "HealthTech",
    version: "FDA Cleared",
    metric: { value: "99.2%", label: "Accuracy" },
    gradient: "from-blue-500/20 via-transparent to-transparent",
  },
  {
    Icon: Network,
    title: "Global Logistics Engine",
    description: "Route optimization for 10,000+ vehicles. Rust core compiled to WASM for edge deployment.",
    tag: "Logistics",
    version: "Enterprise",
    metric: { value: "34%", label: "Cost Saved" },
    gradient: "from-purple-500/20 via-transparent to-transparent",
  },
];

export default function V2Projects() {
  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section className="w-full px-6 py-32 md:px-12" id="projects">
      <div className="w-full max-w-[1440px] mx-auto pl-0 md:pl-12 lg:pl-16">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <ScrollReveal variant="fade-up" duration={600}>
              <span className="font-mono text-xs text-slate-500 mb-4 block">
                01 / WHAT WE BUILD
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100} duration={600}>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Complex Problems, <br className="hidden md:block" />Elegant Solutions
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fade-left" delay={200} duration={600}>
            <a
              className="group flex items-center gap-2 text-sm font-mono text-white hover:text-slate-300 transition-colors"
              href="#"
            >
              VIEW ARCHIVE
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </a>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Project - Large Card */}
          {featured && (
            <ScrollReveal
              variant="fade-up"
              duration={700}
              className="lg:col-span-7 lg:row-span-2"
            >
              <div className="group relative h-full min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${featured.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                      <featured.Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-4 inline-block">
                      {featured.tag}
                    </span>
                    <h3 className="font-display mb-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
                      {featured.title}
                    </h3>
                    <p className="mb-8 text-base leading-relaxed text-slate-400 max-w-lg">
                      {featured.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                    {featured.stats?.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs font-mono text-slate-500 uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">
                      {featured.version}
                    </span>
                    <button className="group/btn flex items-center gap-2 text-sm font-medium text-white hover:text-slate-300 transition-colors">
                      View Case Study
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Other Projects - Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {others.map((project, index) => (
              <ScrollReveal
                key={project.title}
                variant="fade-left"
                delay={index * 150 + 200}
                duration={700}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_-15px_rgba(255,255,255,0.1)]">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:-rotate-6">
                        <project.Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      
                      {/* Metric badge */}
                      {project.metric && (
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{project.metric.value}</div>
                          <div className="text-[10px] font-mono text-slate-500 uppercase">{project.metric.label}</div>
                        </div>
                      )}
                    </div>

                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-3 inline-block">
                      {project.tag}
                    </span>
                    <h3 className="font-display mb-2 text-2xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-xs font-mono text-slate-500">
                        {project.version}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Tech Stack Bar */}
        <ScrollReveal variant="fade-up" delay={400} duration={600}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 py-8 border-t border-white/5">
            <span className="text-xs font-mono text-slate-600 uppercase tracking-wider">Built with</span>
            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: Zap, name: "Edge Runtime" },
                { icon: Shield, name: "SOC2 Compliant" },
                { icon: Gauge, name: "99.99% SLA" },
              ].map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors cursor-default">
                  <tech.icon className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-xs font-mono">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
