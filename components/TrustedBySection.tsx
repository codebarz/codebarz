"use client";

import Icon from "./ui/Icon";
import ScrollReveal from "./ScrollReveal";

const companies = [
  { name: "VORTEX", icon: "deployed_code" },
  { name: "STRATA", icon: "layers" },
  { name: "NEXUS", icon: "hub" },
  { name: "VOLT", icon: "bolt" },
  { name: "CIPHER", icon: "code_off" },
];

function CompanyLogo({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 group cursor-default px-8">
      <Icon
        name={icon}
        size="4xl"
        className="text-white group-hover:text-primary transition-colors"
      />
      <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function TrustedBySection() {
  return (
    <section className="py-16 sm:py-20 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade" duration={600}>
          <p className="text-center text-sm font-semibold text-white/40 uppercase tracking-widest mb-10">
            Trusted by leading engineering teams
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex opacity-60 hover:opacity-80 transition-opacity duration-500">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {companies.map((company) => (
              <CompanyLogo
                key={`first-${company.name}`}
                name={company.name}
                icon={company.icon}
              />
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company) => (
              <CompanyLogo
                key={`second-${company.name}`}
                name={company.name}
                icon={company.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
