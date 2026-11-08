"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import TiltCard from "@/components/TiltCard";
import {
  PrismCheckGlyph,
  PrismExternalGlyph,
  PrismArrowRightGlyph,
} from "@/components/BrandLogos";

export default function ServicesBento() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 py-14 md:py-20"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="space-y-2 max-w-2xl">
          <h2
            id="services-heading"
            className="text-fluid-h2 font-extrabold text-han-light"
          >
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <Link
          href="/pricing"
          className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-han-turquoise hover:bg-han-light px-4 py-2.5 text-xs sm:text-sm font-extrabold text-han-dark transition-colors self-start sm:self-auto"
        >
          <span>{t.services.viewPricingBtn}</span>
          <PrismExternalGlyph className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.services.items.map((srv) => (
          <TiltCard key={srv.num} className="h-full" intensity={3.2}>
            <div className="p-6 sm:p-7 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: srv.dotColor }}
                      aria-hidden="true"
                    />
                    <span>
                      {srv.num} / {srv.category}
                    </span>
                  </span>

                  <span className="rounded-lg bg-[#13151C] border border-white/[0.06] px-2.5 py-1 text-xs font-medium text-slate-300">
                    {srv.stack}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-han-light">
                    {srv.title}
                  </h3>
                  {srv.priceAnchor && (
                    <p className="text-xs sm:text-sm font-extrabold text-han-turquoise">
                      {srv.priceAnchor}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <ul className="space-y-2">
                  {srv.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-200"
                    >
                      <PrismCheckGlyph className="w-4 h-4 text-han-turquoise shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/pricing"
                    className="min-h-[40px] inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-han-turquoise hover:text-han-light transition-colors"
                  >
                    <span>{srv.ctaLabel}</span>
                    <PrismArrowRightGlyph className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
