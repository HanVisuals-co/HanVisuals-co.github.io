"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  pricingCategories,
  complexityFactors,
  paymentTerms,
} from "@/data/pricingData";
import AmbientCursor from "@/components/AmbientCursor";
import Navbar from "@/components/Navbar";
import OutroContact from "@/components/OutroContact";
import TiltCard from "@/components/TiltCard";
import {
  PrismCheckGlyph,
  PrismWhatsAppGlyph,
} from "@/components/BrandLogos";

export default function PricingPage() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filters = [
    { id: "all", label: t.pricingPage.filterAll },
    { id: "editing", label: t.pricingPage.filterEditing },
    { id: "videographer", label: t.pricingPage.filterVideographer },
    { id: "direction", label: t.pricingPage.filterDirection },
    { id: "web", label: t.pricingPage.filterWeb },
  ];

  const visibleCategories = pricingCategories.filter((cat) =>
    activeCategory === "all" ? true : cat.id === activeCategory
  );

  return (
    <div className="relative min-h-screen bg-han-dark text-han-light">
      <AmbientCursor />
      <Navbar />

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 pt-10 pb-16 md:pt-14 md:pb-20 space-y-14"
      >
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-lg bg-[#1D202C] border border-white/[0.08] px-3.5 py-1.5 text-xs font-bold text-han-turquoise">
              <span
                className="w-2 h-2 rounded-full bg-han-turquoise"
                aria-hidden="true"
              />
              <span>{t.pricingPage.badge}</span>
            </span>

            <Link
              href="/"
              className="min-h-[40px] inline-flex items-center text-xs sm:text-sm font-bold text-slate-300 hover:text-han-turquoise transition-colors"
            >
              ← {t.pricingPage.backHome}
            </Link>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-fluid-h1 font-extrabold text-han-light">
              {t.pricingPage.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t.pricingPage.subtitle}
            </p>
          </div>

          <div className="rounded-2xl bg-[#181B24] border border-han-turquoise/35 p-5 sm:p-6 space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-han-turquoise uppercase tracking-wider">
              <span
                className="w-2 h-2 rounded-full bg-han-turquoise"
                aria-hidden="true"
              />
              <span>{t.pricingPage.principleTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {t.pricingPage.principleDesc}
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter package categories"
            className="flex flex-wrap items-center gap-2 pt-2"
          >
            {filters.map((f) => {
              const active = activeCategory === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveCategory(f.id)}
                  aria-pressed={active}
                  className={`min-h-[42px] px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    active
                      ? "bg-han-turquoise text-han-dark shadow-sm"
                      : "bg-[#191C26] text-slate-300 border border-white/[0.08] hover:text-han-light hover:border-white/20"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-16">
          {visibleCategories.map((cat) => {
            const catLabel = lang === "id" ? cat.labelId : cat.labelEn;
            const catDesc = lang === "id" ? cat.descId : cat.descEn;

            return (
              <section
                key={cat.id}
                aria-labelledby={`cat-heading-${cat.id}`}
                className="space-y-6"
              >
                <div className="space-y-1.5 border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: cat.dotColor }}
                      aria-hidden="true"
                    />
                    <h2
                      id={`cat-heading-${cat.id}`}
                      className="text-fluid-h2 font-extrabold text-han-light"
                    >
                      {catLabel}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">
                    {catDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.packages.map((pkg) => {
                    const subGroup =
                      lang === "id" ? pkg.subGroupId : pkg.subGroupEn;
                    const tierName = lang === "id" ? pkg.tierId : pkg.tierEn;
                    const priceText = lang === "id" ? pkg.priceId : pkg.priceEn;
                    const unitText = lang === "id" ? pkg.unitId : pkg.unitEn;
                    const retainerText =
                      lang === "id" ? pkg.retainerId : pkg.retainerEn;
                    const summaryText =
                      lang === "id" ? pkg.summaryId : pkg.summaryEn;
                    const featuresList =
                      lang === "id" ? pkg.featuresId : pkg.featuresEn;

                    const waMessage = encodeURIComponent(
                      lang === "id"
                        ? `Halo hanvisuals, saya tertarik mendiskusikan paket: ${tierName} (${priceText}).`
                        : `Hello hanvisuals, I would like to discuss the package: ${tierName} (${priceText}).`
                    );

                    return (
                      <TiltCard key={pkg.id} intensity={3.2}>
                        <div className="p-6 sm:p-7 h-full flex flex-col justify-between space-y-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between gap-2">
                              <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-300">
                                <span
                                  className="w-2 h-2 rounded-full shrink-0"
                                  style={{ backgroundColor: cat.dotColor }}
                                  aria-hidden="true"
                                />
                                <span className="truncate">{subGroup}</span>
                              </span>

                              {pkg.isPopular && (
                                <span className="rounded-full bg-han-turquoise/15 border border-han-turquoise/40 px-2.5 py-0.5 text-[11px] font-bold text-han-turquoise shrink-0">
                                  {t.pricingPage.popularBadge}
                                </span>
                              )}
                            </div>

                            <div className="space-y-1.5">
                              <h3 className="text-lg sm:text-xl font-bold text-han-light">
                                {tierName}
                              </h3>
                              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                {summaryText}
                              </p>
                            </div>

                            <div className="rounded-xl bg-[#13151C] border border-white/[0.06] p-4 space-y-1.5">
                              <span className="block text-base sm:text-lg font-extrabold text-han-turquoise">
                                {priceText}
                              </span>
                              <span className="block text-xs text-slate-400">
                                {unitText}
                              </span>
                              {retainerText && (
                                <span className="block pt-1.5 border-t border-white/[0.06] text-xs font-semibold text-slate-200">
                                  {retainerText}
                                </span>
                              )}
                            </div>

                            <div className="space-y-2.5 pt-1">
                              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                                {t.pricingPage.includesLabel}
                              </span>
                              <ul className="space-y-2">
                                {featuresList.map((feat) => (
                                  <li
                                    key={feat}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                                  >
                                    <PrismCheckGlyph className="w-4 h-4 text-han-turquoise shrink-0 mt-0.5" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/[0.06]">
                            <a
                              href={`https://wa.me/6281334535073?text=${waMessage}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-full min-h-[46px] inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all ${
                                pkg.isPopular
                                  ? "bg-han-turquoise text-han-dark hover:bg-han-light"
                                  : "bg-[#13151C] text-han-light hover:bg-han-turquoise hover:text-han-dark border border-white/10"
                              }`}
                            >
                              <PrismWhatsAppGlyph className="w-4 h-4" />
                              <span>{t.pricingPage.orderWaBtn}</span>
                            </a>
                          </div>
                        </div>
                      </TiltCard>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Complexity Multipliers & Payment Terms */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
          <div className="lg:col-span-7 rounded-2xl bg-[#181B24]/95 border border-white/[0.08] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-han-light">
                {t.pricingPage.multipliersTitle}
              </h2>
              <div className="rounded-xl bg-[#12141B] border border-han-turquoise/30 px-4 py-2.5 font-mono text-xs sm:text-sm font-bold text-han-turquoise">
                {t.pricingPage.multipliersFormula}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {complexityFactors.map((factor) => {
                const fTitle =
                  lang === "id" ? factor.titleId : factor.titleEn;
                const fTiers =
                  lang === "id" ? factor.tiersId : factor.tiersEn;
                return (
                  <div
                    key={factor.num}
                    className="rounded-xl bg-[#13151C] border border-white/[0.06] p-4 space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-extrabold text-han-turquoise">
                        {factor.num}
                      </span>
                      <h3 className="text-sm font-bold text-han-light">
                        {fTitle}
                      </h3>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                      {fTiers.map((tier) => (
                        <li key={tier}>• {tier}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-[#181B24]/95 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-extrabold text-han-light">
                {t.pricingPage.termsTitle}
              </h2>

              <div className="rounded-xl bg-[#13151C] border border-white/[0.06] p-4 space-y-2.5">
                <h3 className="text-sm font-bold text-han-turquoise">
                  {lang === "id"
                    ? paymentTerms.video.titleId
                    : paymentTerms.video.titleEn}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  {(lang === "id"
                    ? paymentTerms.video.stepsId
                    : paymentTerms.video.stepsEn
                  ).map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <PrismCheckGlyph className="w-4 h-4 text-han-turquoise shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[#13151C] border border-white/[0.06] p-4 space-y-2.5">
                <h3 className="text-sm font-bold text-han-turquoise">
                  {lang === "id"
                    ? paymentTerms.web.titleId
                    : paymentTerms.web.titleEn}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  {(lang === "id"
                    ? paymentTerms.web.stepsId
                    : paymentTerms.web.stepsEn
                  ).map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <PrismCheckGlyph className="w-4 h-4 text-han-turquoise shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <p className="text-xs sm:text-sm font-bold text-han-light">
                {t.pricingPage.customTitle}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.pricingPage.customDesc}
              </p>
              <a
                href="https://wa.me/6281334535073?text=Halo%20hanvisuals,%20saya%20ingin%20konsultasi%20Tailored%20Proposal%20untuk%20proyek%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-han-turquoise hover:bg-han-light px-5 py-2.5 text-xs sm:text-sm font-extrabold text-han-dark transition-all"
              >
                <PrismWhatsAppGlyph className="w-4 h-4" />
                <span>{t.pricingPage.customBtn}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <OutroContact />
    </div>
  );
}
