"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PrismExternalGlyph } from "@/components/BrandLogos";

export default function CreatorStrip() {
  const { t } = useLanguage();

  return (
    <section
      aria-label="Studio leadership"
      className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 py-6"
    >
      <div className="rounded-2xl bg-[#181B24]/90 border border-white/[0.08] p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 max-w-3xl">
          <img
            src="/portfolio/roihan-editorial-grade.jpg"
            alt="Muhammad Roihan Wicahyo, Founder of hanvisuals"
            width="56"
            height="56"
            loading="lazy"
            className="w-14 h-14 rounded-2xl object-cover border border-white/15 shrink-0"
          />
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-han-turquoise">
              {t.studio.badge}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-han-light">
              {t.studio.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.studio.desc}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/pricing"
            className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-han-turquoise hover:bg-han-light px-4 py-2.5 text-xs sm:text-sm font-extrabold text-han-dark transition-colors"
          >
            <span>{t.studio.pricingLink}</span>
            <PrismExternalGlyph className="w-4 h-4" />
          </Link>

          <a
            href="https://ihanwcydev.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-[#13151C] hover:bg-han-slate px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-han-light border border-white/[0.08] transition-colors"
          >
            <span>{t.studio.founderLink}</span>
            <PrismExternalGlyph className="w-4 h-4 text-han-turquoise" />
          </a>
        </div>
      </div>
    </section>
  );
}
