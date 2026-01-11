"use client";

import { useState } from "react";
import { User, Mail, Building2, FileEdit, MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

interface FloatingInputProps {
  label: string;
  type?: string;
  Icon: React.ElementType;
}

function FloatingInput({ label, type = "text", Icon }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative group">
      {/* Icon */}
      <div
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isActive ? "text-white" : "text-slate-600"
        }`}
      >
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full bg-transparent border-0 border-b-2 border-white/10 pl-12 pr-4 pt-6 pb-2 text-white text-base outline-none transition-all duration-300 focus:border-white/30"
      />

      {/* Floating label */}
      <label
        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
          isActive
            ? "top-1 text-[10px] font-mono uppercase tracking-wider text-slate-500"
            : "top-1/2 -translate-y-1/2 text-base text-slate-600"
        }`}
      >
        {label}
      </label>

      {/* Animated underline */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-500 ease-out ${
          isFocused ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

function FloatingTextarea({ label, Icon }: { label: string; Icon: React.ElementType }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative group">
      {/* Icon */}
      <div
        className={`absolute left-4 top-6 transition-all duration-300 ${
          isActive ? "text-white" : "text-slate-600"
        }`}
      >
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>

      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={4}
        className="peer w-full bg-transparent border-0 border-b-2 border-white/10 pl-12 pr-4 pt-6 pb-2 text-white text-base outline-none transition-all duration-300 focus:border-white/30 resize-none"
      />

      {/* Floating label */}
      <label
        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
          isActive
            ? "top-1 text-[10px] font-mono uppercase tracking-wider text-slate-500"
            : "top-6 text-base text-slate-600"
        }`}
      >
        {label}
      </label>

      {/* Animated underline */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-500 ease-out ${
          isFocused ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

export default function V2Contact() {
  return (
    <section id="contact" className="w-full border-t border-white/5 bg-black px-6 py-32 md:px-12">
      <div className="flex w-full flex-col gap-20 lg:flex-row max-w-[1440px] mx-auto pl-0 md:pl-12 lg:pl-16">
        <div className="flex-1">
          <ScrollReveal variant="fade-up" duration={600}>
            <span className="font-mono text-xs text-slate-500 mb-4 block">
              04 / CONTACT
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} duration={700}>
            <h2 className="font-display mb-8 text-5xl font-bold tracking-tighter text-white">
              Let&apos;s Talk About <br />
              Your Challenge.
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <p className="mb-12 max-w-md text-slate-400 text-lg font-light">
              Whether you&apos;re scaling from 1,000 to 1 million users, rebuilding
              legacy systems, or launching something new—we&apos;ve done it before.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            <ScrollReveal variant="fade-up" delay={300} duration={600}>
              <div className="group flex items-center gap-4 text-slate-300 cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-sm group-hover:text-white transition-colors">
                  hello@codebarz.io
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={400} duration={600}>
              <div className="group flex items-center gap-4 text-slate-300 cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-sm group-hover:text-white transition-colors">
                  San Francisco, CA
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal
          variant="fade-left"
          delay={200}
          duration={800}
          className="flex-1"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-sm">
            {/* Subtle gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

            <form className="relative flex flex-col gap-8">
              {/* Form header */}
              <div className="mb-4">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Get a Technical Assessment
                </h3>
                <p className="text-sm text-slate-500">
                  Share your challenge—we&apos;ll respond within 24 hours with
                  initial thoughts and next steps.
                </p>
              </div>

              {/* Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FloatingInput label="Your name" type="text" Icon={User} />
                <FloatingInput label="Email address" type="email" Icon={Mail} />
              </div>

              <FloatingInput label="Company (optional)" type="text" Icon={Building2} />

              <FloatingTextarea label="Tell us about your project" Icon={FileEdit} />

              {/* Budget selector */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Project Budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"].map(
                    (budget) => (
                      <button
                        key={budget}
                        type="button"
                        className="px-4 py-2 rounded-full border border-white/10 text-sm text-slate-400 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 focus:outline-none focus:border-white focus:text-white"
                      >
                        {budget}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Submit button */}
              <button
                className="group relative mt-4 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white py-4 text-sm font-bold text-black uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-[0.98]"
                type="button"
              >
                <span className="relative z-10">Send Message</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Privacy note */}
              <p className="text-center text-xs text-slate-600">
                By submitting, you agree to our{" "}
                <a href="#" className="text-slate-400 hover:text-white transition-colors underline underline-offset-2">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
