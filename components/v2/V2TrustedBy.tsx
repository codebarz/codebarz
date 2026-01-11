"use client";

import { Award, Users, Clock, Rocket, Globe, Shield } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const stats = [
  { value: "50+", label: "Projects Shipped", Icon: Rocket },
  { value: "12+", label: "Years Experience", Icon: Clock },
  { value: "99.9%", label: "Uptime Delivered", Icon: Shield },
  { value: "8", label: "Countries Served", Icon: Globe },
  { value: "40+", label: "Engineers Strong", Icon: Users },
  { value: "3", label: "Acquisitions", Icon: Award },
];

function StatItem({ value, label, Icon }: { value: string; label: string; Icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-4 px-8 group cursor-default">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
        <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
        <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
}

export default function V2TrustedBy() {
  return (
    <section className="border-y border-white/5 bg-black py-16 overflow-hidden">
      <div className="flex w-full flex-col items-center gap-10 px-6 max-w-[1440px] mx-auto">
        <ScrollReveal variant="fade" duration={600}>
          <span className="font-mono text-xs uppercase tracking-widest text-slate-600">
            Engineering Excellence by the Numbers
          </span>
        </ScrollReveal>
      </div>

      {/* Marquee container */}
      <div className="relative mt-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex opacity-70 hover:opacity-100 transition-opacity duration-500">
          <div className="flex animate-marquee">
            {stats.map((stat) => (
              <StatItem
                key={`first-${stat.label}`}
                value={stat.value}
                label={stat.label}
                Icon={stat.Icon}
              />
            ))}
            {stats.map((stat) => (
              <StatItem
                key={`second-${stat.label}`}
                value={stat.value}
                label={stat.label}
                Icon={stat.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
