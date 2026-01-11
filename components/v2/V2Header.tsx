"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Academy", href: "#academy" },
  { label: "Open Source", href: "#opensource" },
];

export default function V2Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "border-white/5 bg-black/90 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1440px] flex pl-0 md:pl-12 lg:pl-16">
          <div className="w-full px-6 md:px-12 flex items-center justify-between py-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/codebarz-logo-white.png"
                alt="Codebarz"
                width={120}
                height={30}
                priority
                className="h-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <button className="hidden md:flex cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white text-xs font-semibold uppercase tracking-wide transition-all hover:bg-white hover:text-black active:scale-95 backdrop-blur-md">
              Contact Us
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <button className="mt-4 w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white text-xs font-semibold uppercase tracking-wide">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
