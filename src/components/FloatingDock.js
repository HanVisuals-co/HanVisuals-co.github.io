"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  PrismWhatsAppGlyph,
  PrismInstagramGlyph,
} from "@/components/BrandLogos";

export default function FloatingDock() {
  const { t } = useLanguage();
  const [inHero, setInHero] = useState(true);
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("top");
    const contactEl = document.getElementById("contact");

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "top") {
            setInHero(entry.isIntersecting);
          } else if (entry.target.id === "contact") {
            setInContact(entry.isIntersecting);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (heroEl) observer.observe(heroEl);
    if (contactEl) observer.observe(contactEl);

    return () => observer.disconnect();
  }, []);

  if (inHero || inContact) return null;

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 pb-[env(safe-area-inset-bottom)] flex items-center gap-2 rounded-2xl bg-[#181B24]/95 border border-white/10 p-2 shadow-2xl"
    >
      <a
        href="https://wa.me/6281334535073?text=Halo%20hanvisuals,%20saya%20ingin%20berdiskusi%20mengenai%20proyek."
        target="_blank"
        rel="noopener noreferrer"
        className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-han-turquoise hover:bg-han-light px-3.5 py-2 text-xs font-extrabold text-han-dark transition-colors"
      >
        <PrismWhatsAppGlyph className="w-4 h-4" />
        <span>{t.dock.waLabel}</span>
      </a>

      <a
        href="https://www.instagram.com/hanvisuals._?cplk=MWhkOGE0cGYzajAwOA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-[#13151C] hover:bg-han-slate border border-white/[0.08] px-3.5 py-2 text-xs font-bold text-han-light transition-colors"
      >
        <PrismInstagramGlyph className="w-4 h-4 text-han-turquoise" />
        <span>{t.dock.dmLabel}</span>
      </a>

      <Link
        href="/pricing"
        className="min-h-[44px] inline-flex items-center rounded-xl bg-[#13151C] hover:bg-han-slate border border-white/[0.08] px-3.5 py-2 text-xs font-bold text-han-turquoise hover:text-han-light transition-colors"
      >
        {t.dock.pricingLabel}
      </Link>
    </aside>
  );
}
