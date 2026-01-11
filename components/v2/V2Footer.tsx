"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Terminal, AtSign } from "lucide-react";

const footerLinks = {
  services: [
    "Full-Stack Development",
    "System Architecture",
    "Cloud & DevOps",
    "AI/ML Engineering",
    "Technical Due Diligence",
  ],
  resources: [
    "Engineering Academy",
    "Open Source Projects",
    "Technical Blog",
    "Case Studies",
  ],
  company: ["About Us", "Careers", "Contact", "Partners"],
  legal: ["Privacy Policy", "Terms of Service", "Security"],
};

export default function V2Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black px-6 py-20 md:px-12">
      <div className="max-w-[1440px] mx-auto pl-0 md:pl-12 lg:pl-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/codebarz-logo-white.png"
                alt="Codebarz"
                width={120}
                height={30}
                className="h-auto"
              />
            </Link>
            <h3 className="font-display text-3xl font-bold text-white tracking-tight">
              Ship Faster. Scale Further.
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Elite software engineering for ambitious companies.
              San Francisco HQ, distributed team across 8 countries.
            </p>
            <form className="mt-4 flex flex-col gap-3">
              <label className="text-[10px] font-mono uppercase tracking-wider text-slate-600">
                Get our weekly engineering insights
              </label>
              <div className="group relative flex items-center rounded-full border border-white/10 bg-white/[0.02] p-1.5 transition-all duration-300 focus-within:border-white/30">
                <Mail className="w-4 h-4 text-slate-600 ml-3 mr-2" strokeWidth={1.5} />
                <input
                  className="flex-1 bg-transparent py-2 text-sm text-white placeholder-slate-600 focus:outline-none"
                  placeholder="email@domain.com"
                  type="email"
                />
                <button className="rounded-full bg-white px-5 py-2 text-black text-xs font-bold uppercase tracking-wide hover:bg-slate-100 transition-all duration-300 active:scale-95">
                  Join
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    className="text-sm text-slate-500 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a
                    className="text-sm text-slate-500 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    className="text-sm text-slate-500 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a
                    className="text-sm text-slate-500 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} Codebarz Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1"
              href="#"
            >
              <Github className="w-[18px] h-[18px] group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
            </a>
            <a
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1"
              href="#"
            >
              <Terminal className="w-[18px] h-[18px] group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
            </a>
            <a
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1"
              href="#"
            >
              <AtSign className="w-[18px] h-[18px] group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
