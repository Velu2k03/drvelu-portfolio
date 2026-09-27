"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../../lib/portfolio";

const navigationLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Background" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!isMenuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f7f7f2]/95 backdrop-blur-md">
      <div className="section-wrap">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Velu Murugan home"
            className="flex items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#252c27] text-xs font-semibold text-white"
            >
              vm<span className="text-orange-300">.</span>
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Velu Murugan
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-xs font-medium text-stone-600 transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-lg border border-stone-300 px-4 py-2.5 text-xs font-semibold transition hover:border-stone-500 md:inline-flex"
          >
            <Download size={14} aria-hidden="true" />
            Resume
          </a>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-stone-300 md:hidden"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="grid gap-1 border-t border-stone-200 pb-5 pt-3 md:hidden"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-stone-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resume}
              download
              onClick={() => setIsMenuOpen(false)}
              className="button-primary mt-2"
            >
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
