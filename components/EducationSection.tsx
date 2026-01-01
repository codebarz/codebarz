"use client";

import Icon from "./ui/Icon";
import Button from "./ui/Button";
import SectionWrapper from "./ui/SectionWrapper";
import ScrollReveal from "./ScrollReveal";

const resources = [
  {
    icon: "school",
    title: "Interactive Tutorials",
    description:
      "Step-by-step guides covering modern tech stacks including React, Node.js, and Kubernetes orchestration.",
  },
  {
    icon: "article",
    title: "Engineering Blog",
    description:
      "In-depth articles written by our senior engineers sharing insights from real-world enterprise projects.",
  },
  {
    icon: "podcasts",
    title: "Tech Talks Podcast",
    description:
      "Weekly discussions with industry leaders about the future of software development and AI.",
  },
];

function VideoCard() {
  return (
    <div className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group">
      <div className="aspect-video w-full bg-[#1e1e1e] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <div className="absolute inset-0 opacity-30 flex flex-col p-6 text-xs font-mono text-blue-400 select-none">
          <div className="flex gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p>function scaleArchitecture() &#123;</p>
          <p className="pl-4">const system = new System();</p>
          <p className="pl-4">await system.optimize();</p>
          <p className="pl-4">return &quot;High Performance&quot;;</p>
          <p>&#125;</p>
        </div>
        <Icon
          name="play_circle"
          size="7xl"
          className="text-white/90 z-20 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg cursor-pointer"
        />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
            YouTube Channel
          </span>
          <span className="text-white/40 text-sm flex items-center gap-1">
            <Icon name="schedule" size="sm" />
            New videos weekly
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Codebarz Academy</h3>
        <p className="text-white/60 mb-6">
          Join thousands of engineers learning about microservices, distributed
          systems, and scalable backend architecture. We break down complex
          topics into digestible lessons.
        </p>
        <Button variant="youtube" icon="subscriptions" fullWidth>
          Subscribe to Channel
        </Button>
      </div>
    </div>
  );
}

function ResourceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/[0.07] transition-all group cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
          <Icon name={icon} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
          <p className="text-white/60 text-sm">{description}</p>
        </div>
        <Icon
          name="arrow_forward"
          className="ml-auto text-white/30 group-hover:text-white transition-colors"
        />
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <SectionWrapper className="py-24 sm:py-32 border-t border-white/5 bg-[#050505]">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5 text-center items-center">
          <ScrollReveal variant="zoom-in" duration={500}>
            <div className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-red-500/10 text-red-500 border border-red-500/20">
              <Icon name="play_circle" size="lg" />
              <span>Learning Hub</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100} duration={700}>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl max-w-3xl">
              Education
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <p className="text-base text-white/70 max-w-2xl sm:text-lg">
              Elevate your skills with our free educational resources. Deep dive
              into system design, advanced coding patterns, and architectural
              best practices on our YouTube channel.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollReveal variant="fade-right" duration={800}>
            <VideoCard />
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {resources.map((resource, index) => (
              <ScrollReveal
                key={resource.title}
                variant="fade-left"
                delay={index * 150}
                duration={600}
              >
                <ResourceCard
                  icon={resource.icon}
                  title={resource.title}
                  description={resource.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
