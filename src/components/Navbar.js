"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { HanVisualsLockup } from "@/components/BrandLogos";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const navItems = [
    { href: "/#works", label: t.nav.works },
    { href: "/#services", label: t.nav.services },
    { href: "/#process", label: t.nav.workflow },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between gap-3 rounded-2xl bg-[#161922]/88 backdrop-blur-md border border-white/[0.08] px-4 sm:px-5 py-2.5 shadow-xl"
      >
        <Link
          href="/#top"
          className="inline-flex items-center min-h-[44px] py-1 rounded-lg"
        >
          <HanVisualsLockup size={30} voidColor="#FDFCF9" />
        </Link>

        <div className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-[44px] inline-flex items-center px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-han-turquoise rounded-lg transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/6281334535073"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[40px] inline-flex items-center gap-2 rounded-lg bg-[#1D202C] hover:bg-han-slate border border-white/[0.08] px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-han-turquoise transition-colors duration-200"
          >
            <span
              className="h-2 w-2 rounded-full bg-han-turquoise shrink-0"
              aria-hidden="true"
            />
            <span>{t.nav.status}</span>
          </a>

          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-[#1D202C] px-3.5 py-2 text-xs font-bold text-han-light border border-white/[0.08] hover:border-han-turquoise/40"
          >
            <span>{menuOpen ? t.nav.menuClose : t.nav.menuOpen}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="16"
              height="16"
              fill="none"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6H17M3 10H17M3 14H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          className="mt-2 rounded-2xl bg-[#181B24] border border-white/10 p-4 shadow-2xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="min-h-[44px] flex items-center px-3 py-2.5 text-base font-bold text-han-light hover:bg-han-slate/60 rounded-xl transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
            <a
              href="https://wa.me/6281334535073"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-200 hover:text-han-turquoise"
            >
              <span
                className="h-2 w-2 rounded-full bg-han-turquoise"
                aria-hidden="true"
              />
              <span>{t.nav.status}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
