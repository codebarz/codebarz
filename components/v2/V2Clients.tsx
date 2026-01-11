"use client";

import ScrollReveal from "../ScrollReveal";

// Client logos - using styled text placeholders
// Replace these with actual logo images when available
const clients = [
  { name: "Stripe", industry: "Fintech" },
  { name: "Vercel", industry: "Infrastructure" },
  { name: "Linear", industry: "Productivity" },
  { name: "Notion", industry: "Collaboration" },
  { name: "Figma", industry: "Design" },
  { name: "Raycast", industry: "Developer Tools" },
  { name: "Mercury", industry: "Banking" },
  { name: "Ramp", industry: "Finance" },
];

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-10 py-6 group cursor-default">
      <span className="text-2xl font-display font-bold text-white/20 group-hover:text-white/40 transition-colors duration-300 tracking-tight whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function V2Clients() {
  return (
    <section className="border-b border-white/5 bg-black py-20 overflow-hidden">
      <div className="flex w-full flex-col items-center gap-6 px-6 max-w-[1440px] mx-auto pl-0 md:pl-12 lg:pl-16">
        <ScrollReveal variant="fade" duration={600}>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
            Trusted by teams at
          </span>
        </ScrollReveal>
      </div>

      {/* Marquee container */}
      <div className="relative mt-8">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* First marquee track - left to right */}
        <div className="flex">
          <div className="flex animate-marquee">
            {clients.map((client) => (
              <ClientLogo key={`first-${client.name}`} name={client.name} />
            ))}
            {clients.map((client) => (
              <ClientLogo key={`second-${client.name}`} name={client.name} />
            ))}
          </div>
        </div>

        {/* Second marquee track - right to left */}
        <div className="flex mt-4">
          <div className="flex animate-marquee-reverse">
            {[...clients].reverse().map((client) => (
              <ClientLogo key={`third-${client.name}`} name={client.name} />
            ))}
            {[...clients].reverse().map((client) => (
              <ClientLogo key={`fourth-${client.name}`} name={client.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Social proof text */}
      <ScrollReveal variant="fade-up" delay={200} duration={600}>
        <div className="flex justify-center mt-12 px-6">
          <p className="text-center text-sm text-slate-600 max-w-md">
            From Y Combinator startups to Fortune 500 enterprises, 
            we&apos;ve helped teams ship world-class software.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

