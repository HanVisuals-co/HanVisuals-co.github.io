"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  pricingCategories,
  paymentTerms,
} from "@/data/pricingData";
import Navbar from "@/components/Navbar";
import OutroContact from "@/components/OutroContact";
import TiltCard from "@/components/TiltCard";
import {
  PrismCheckGlyph,
  PrismWhatsAppGlyph,
  PrismArrowRightGlyph,
  PrismCloseGlyph,
} from "@/components/BrandLogos";
import { waLink, WA_TERMS_TEXT } from "@/lib/site";

export default function PricingClient() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedPkgId, setExpandedPkgId] = useState(null);

  useEffect(() => {
    if (!expandedPkgId) return;

    const handlePointerDown = (e) => {
      if (!e.target.closest("[data-pricing-card]")) {
        setExpandedPkgId(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setExpandedPkgId(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedPkgId]);

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

  const handleToggle = (pkgId) => {
    setExpandedPkgId((prev) => (prev === pkgId ? null : pkgId));
  };

  return (
    <div className="relative min-h-screen bg-han-dark text-han-light">
      <Navbar />

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 pt-10 pb-16 md:pt-14 md:pb-20 space-y-14"
      >
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-lg bg-[#181B23] border border-white/[0.08] px-3.5 py-1.5 text-xs font-semibold text-han-turquoise">
              <span
                className="w-1.5 h-1.5 rounded-full bg-han-turquoise"
                aria-hidden="true"
              />
              <span>{t.pricingPage.badge}</span>
            </span>

            <Link
              href="/"
              className="min-h-[40px] inline-flex items-center text-xs sm:text-sm font-semibold text-slate-300 hover:text-han-turquoise transition-colors"
            >
              &larr; {t.pricingPage.backHome}
            </Link>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-fluid-h1 font-bold text-han-light">
              {t.pricingPage.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t.pricingPage.subtitle}
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
                  onClick={() => {
                    setActiveCategory(f.id);
                    setExpandedPkgId(null);
                  }}
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

        {/* Pricing Category Sections with in-place expanding cards */}
        <div className="space-y-16">
          {visibleCategories.map((cat) => {
            const catLabel = lang === "id" ? cat.labelId : cat.labelEn;

            return (
              <section
                key={cat.id}
                aria-labelledby={`cat-heading-${cat.id}`}
                className="space-y-6"
              >
                <div className="flex items-center gap-2.5 border-b border-white/[0.08] pb-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                  {cat.packages.map((pkg, idx) => {
                    const isExpanded = expandedPkgId === pkg.id;
                    const isDimmed = expandedPkgId !== null && !isExpanded;

                    // 3-Column Expansion Origin:
                    // Column 0: expands rightwards (lg:origin-top-left)
                    // Column 1: expands to both sides (lg:origin-top)
                    // Column 2: expands leftwards (lg:origin-top-right)
                    const desktopOrigin =
                      idx % 3 === 0
                        ? "lg:origin-top-left"
                        : idx % 3 === 1
                        ? "lg:origin-top"
                        : "lg:origin-top-right";

                    const tabletOrigin =
                      idx % 2 === 0
                        ? "md:origin-top-left"
                        : "md:origin-top-right";

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

                    const waMessage = (
                      lang === "id"
                        ? `Halo hanvisuals, saya tertarik mendiskusikan paket: ${tierName} (${priceText}).`
                        : `Hello hanvisuals, I would like to discuss the package: ${tierName} (${priceText}).`
                    );

                    return (
                      <div
                        key={pkg.id}
                        data-pricing-card
                        className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isExpanded
                            ? `z-30 relative scale-[1.02] md:scale-[1.05] lg:scale-[1.08] ${tabletOrigin} ${desktopOrigin} origin-top`
                            : "z-10 relative scale-100"
                        }`}
                      >
                        <TiltCard
                          className="h-full"
                          disabled={isExpanded}
                        >
                          <div
                            className={`p-6 sm:p-7 h-full flex flex-col justify-between space-y-6 rounded-2xl transition-all duration-300 ${
                              isExpanded
                                ? "bg-[#1C202B] ring-1 ring-han-turquoise/40 shadow-xl"
                                : "bg-[#181B23] border border-white/[0.08] hover:border-white/[0.14]"
                            }`}
                          >
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

                              {/* In-Place Expanded Details Area */}
                              <div
                                inert={!isExpanded}
                                aria-hidden={!isExpanded}
                                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                  isExpanded
                                    ? "max-h-[850px] opacity-100 pt-3 border-t border-white/[0.08] space-y-4"
                                    : "max-h-0 opacity-0 pointer-events-none"
                                }`}
                              >
                                <div className="space-y-1.5">
                                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    {t.pricingPage.packageOverview}
                                  </h4>
                                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                    {summaryText}
                                  </p>
                                </div>

                                <div className="space-y-2">
                                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    {t.pricingPage.includesLabel}
                                  </h4>
                                  <ul className="space-y-2">
                                    {featuresList.map((feat) => (
                                      <li
                                        key={feat}
                                        className="flex items-start gap-2.5 rounded-lg bg-[#12141B] border border-white/[0.05] p-2.5 text-xs font-medium text-slate-200"
                                      >
                                        <PrismCheckGlyph className="w-3.5 h-3.5 text-han-turquoise shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="pt-2">
                                  <a
                                    href={waLink(waMessage)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl bg-han-turquoise hover:bg-han-light px-4 py-2 text-xs sm:text-sm font-extrabold text-han-dark transition-colors"
                                  >
                                    <PrismWhatsAppGlyph className="w-4 h-4" />
                                    <span>{t.pricingPage.orderWaBtn}</span>
                                  </a>
                                </div>
                              </div>
                            </div>

                            {/* Card Bottom: Toggle Trigger Button */}
                            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                              <button
                                type="button"
                                onClick={() => handleToggle(pkg.id)}
                                aria-expanded={isExpanded}
                                aria-label={`${tierName}: ${
                                  isExpanded
                                    ? t.pricingPage.closeDetails
                                    : t.pricingPage.viewDetails
                                }`}
                                className="w-full min-h-[44px] inline-flex items-center justify-between text-xs sm:text-sm font-bold text-slate-300 hover:text-han-turquoise transition-colors"
                              >
                                <span>
                                  {isExpanded
                                    ? t.pricingPage.closeDetails
                                    : t.pricingPage.viewDetails}
                                </span>
                                <span
                                  className={`min-h-[36px] min-w-[36px] inline-flex items-center justify-center rounded-lg border border-white/[0.08] transition-all duration-300 ${
                                    isExpanded
                                      ? "bg-han-turquoise text-han-dark rotate-90"
                                      : "bg-[#13151C] text-slate-300 hover:bg-han-turquoise hover:text-han-dark"
                                  }`}
                                >
                                  {isExpanded ? (
                                    <PrismCloseGlyph className="w-4 h-4" />
                                  ) : (
                                    <PrismArrowRightGlyph className="w-4 h-4" />
                                  )}
                                </span>
                              </button>
                            </div>
                          </div>
                        </TiltCard>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Payment Terms & Milestones */}
        <section className="space-y-6 pt-4">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-han-light">
              {t.pricingPage.termsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {t.pricingPage.termsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video Services Milestone Card */}
            <div className="rounded-2xl bg-[#181B24]/95 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-[#FA9F1B]"
                    aria-hidden="true"
                  />
                  <h3 className="text-base sm:text-lg font-bold text-han-light">
                    {lang === "id"
                      ? paymentTerms.video.titleId
                      : paymentTerms.video.titleEn}
                  </h3>
                </div>

                <div className="space-y-3">
                  {(lang === "id"
                    ? paymentTerms.video.stepsId
                    : paymentTerms.video.stepsEn
                  ).map((step, sIdx) => (
                    <div
                      key={step}
                      className="rounded-xl bg-[#13151C] border border-white/[0.06] p-4 flex items-start gap-3.5"
                    >
                      <span className="min-h-[26px] min-w-[26px] inline-flex items-center justify-center rounded-lg bg-han-turquoise/15 text-han-turquoise font-mono text-xs font-extrabold shrink-0 mt-0.5">
                        0{sIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <PrismCheckGlyph className="w-4 h-4 text-han-turquoise shrink-0" />
                  <span>
                    {lang === "id"
                      ? "Revisi diselesaikan sebelum pelunasan final"
                      : "Revisions finalized prior to final settlement"}
                  </span>
                </span>
              </div>
            </div>

            {/* Web & Custom Applications Milestone Card */}
            <div className="rounded-2xl bg-[#181B24]/95 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-[#51B8B9]"
                    aria-hidden="true"
                  />
                  <h3 className="text-base sm:text-lg font-bold text-han-light">
                    {lang === "id"
                      ? paymentTerms.web.titleId
                      : paymentTerms.web.titleEn}
                  </h3>
                </div>

                <div className="space-y-3">
                  {(lang === "id"
                    ? paymentTerms.web.stepsId
                    : paymentTerms.web.stepsEn
                  ).map((step, sIdx) => (
                    <div
                      key={step}
                      className="rounded-xl bg-[#13151C] border border-white/[0.06] p-4 flex items-start gap-3.5"
                    >
                      <span className="min-h-[26px] min-w-[26px] inline-flex items-center justify-center rounded-lg bg-han-turquoise/15 text-han-turquoise font-mono text-xs font-extrabold shrink-0 mt-0.5">
                        0{sIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <PrismCheckGlyph className="w-4 h-4 text-han-turquoise shrink-0" />
                  <span>
                    {lang === "id"
                      ? "Kode sumber dan domain diserahkan saat pelunasan"
                      : "Source code & domain handed over on final milestone"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Full-Width Custom Retainer / Tailored Negotiation Box */}
          <div className="rounded-2xl bg-[#181B24]/95 border border-white/[0.08] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <h3 className="text-base sm:text-lg font-bold text-han-light">
                {t.pricingPage.customTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.pricingPage.customDesc}
              </p>
            </div>

            <a
              href={waLink(WA_TERMS_TEXT)}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-han-turquoise hover:bg-han-light px-6 py-3 text-xs sm:text-sm font-extrabold text-han-dark transition-all shrink-0 w-full sm:w-auto"
            >
              <PrismWhatsAppGlyph className="w-4 h-4" />
              <span>{t.pricingPage.customBtn}</span>
            </a>
          </div>
        </section>
      </main>

      <OutroContact />
    </div>
  );
}
