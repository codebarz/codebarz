"use client";

import SectionWrapper from "./ui/SectionWrapper";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: "code_blocks",
    title: "Custom Software Engineering",
    description:
      "We build tailored, scalable software architectures that fit your specific business processes and performance requirements.",
    floatClass: "animate-float",
  },
  {
    icon: "cloud_sync",
    title: "Cloud Architecture & Migration",
    description:
      "Securely migrate your legacy systems to the cloud with minimal downtime and maximum horizontal scalability.",
    floatClass: "animate-float-delay-1",
  },
  {
    icon: "engineering",
    title: "Engineering Strategy",
    description:
      "Expert advice on technology stack selection, system design, and digital transformation strategies for engineering teams.",
    floatClass: "animate-float-delay-2",
  },
  {
    icon: "security",
    title: "Security Engineering & Audits",
    description:
      "Comprehensive security assessments, penetration testing, and implementation of DevSecOps best practices.",
    floatClass: "animate-float-delay-3",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper className="py-24 sm:py-32">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5 text-center items-center">
          <ScrollReveal variant="fade-up" duration={700}>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl max-w-3xl">
              Comprehensive Software Solutions
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150} duration={700}>
            <p className="text-base text-white/70 max-w-2xl sm:text-lg">
              From architectural design to full-scale deployment, we provide the
              engineering rigor to turn your vision into robust reality.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              variant={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index * 100}
              duration={600}
            >
              <div className="flex items-start gap-4 group">
                <div
                  className={`text-primary shrink-0 ${service.floatClass} group-hover:scale-110 transition-transform duration-300`}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 32 }}
                  >
                    {service.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
