"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import TiltCard from "@/components/TiltCard";
import {
  PrismCheckGlyph,
  PrismExternalGlyph,
  PrismArrowRightGlyph,
  PrismArrowLeftGlyph,
  PrismCloseGlyph,
} from "@/components/BrandLogos";
import { waLink } from "@/lib/site";

export default function ServicesBento() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activePage, setActivePage] = useState(0); // 0 = first 3, 1 = second 3

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragMovedRef = useRef(false);

  const items = t.services.items || [];

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;
    const tolerance = 6;
    const atStart = el.scrollLeft <= tolerance;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - tolerance;
    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 10) {
      const ratio = el.scrollLeft / maxScroll;
      setActivePage(ratio >= 0.45 ? 1 : 0);
    }
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollState();

    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  useEffect(() => {
    if (expandedIndex === null) return;

    const handlePointerDown = (e) => {
      if (!e.target.closest("[data-service-card]")) {
        setExpandedIndex(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setExpandedIndex(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedIndex]);

  const scrollSlider = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.92;
    const target =
      direction === "left"
        ? el.scrollLeft - scrollAmount
        : el.scrollLeft + scrollAmount;
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest("button, a, input")) return;
    const el = sliderRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    dragMovedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const el = sliderRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    if (Math.abs(walk) > 5) {
      dragMovedRef.current = true;
    }
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleToggle = (idx, e) => {
    if (dragMovedRef.current) return;
    setExpandedIndex((prev) => {
      const next = prev === idx ? null : idx;
      if (next !== null) {
        const cardTarget = e?.currentTarget?.closest("[data-service-card]");
        if (cardTarget) {
          setTimeout(() => {
            cardTarget.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "nearest",
            });
          }, 80);
        }
      }
      return next;
    });
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 py-14 md:py-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-2 max-w-2xl">
          <h2
            id="services-heading"
            className="text-fluid-h2 font-bold text-han-light"
          >
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Header Action & Slider Navigation Controls */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto shrink-0">
          <Link
            href="/pricing"
            aria-label={t.services.viewPricingBtn}
            title={t.services.viewPricingBtn}
            className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-xl bg-han-turquoise hover:bg-han-light text-han-dark transition-colors"
          >
            <PrismExternalGlyph className="w-4 h-4" />
          </Link>

          {/* Slider Arrow Buttons & Counter Hint */}
          <div className="inline-flex items-center gap-1.5 rounded-xl bg-[#181B23] border border-white/[0.08] p-1">
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              disabled={!canScrollLeft}
              aria-label={t.services.prevSlide}
              className={`min-h-[38px] min-w-[38px] inline-flex items-center justify-center rounded-lg transition-colors ${
                canScrollLeft
                  ? "text-slate-200 hover:text-han-turquoise hover:bg-white/[0.06] cursor-pointer"
                  : "text-slate-600 opacity-40 cursor-not-allowed"
              }`}
            >
              <PrismArrowLeftGlyph className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono tabular-nums font-semibold text-slate-300 px-2 select-none">
              {activePage === 0 ? "01 - 03" : "04 - 06"}{" "}
              <span className="text-slate-500">/ 06</span>
            </span>

            <button
              type="button"
              onClick={() => scrollSlider("right")}
              disabled={!canScrollRight}
              aria-label={t.services.nextSlide}
              className={`min-h-[38px] min-w-[38px] inline-flex items-center justify-center rounded-lg transition-colors ${
                canScrollRight
                  ? "text-slate-200 hover:text-han-turquoise hover:bg-white/[0.06] cursor-pointer"
                  : "text-slate-600 opacity-40 cursor-not-allowed"
              }`}
            >
              <PrismArrowRightGlyph className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Slider Track Container */}
      <div className="relative">
        {/* Left Edge Gradient Fade Cue */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-han-dark via-han-dark/60 to-transparent z-20 transition-opacity duration-300 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right Edge Gradient Fade Cue */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-han-dark via-han-dark/60 to-transparent z-20 transition-opacity duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Scrollable Track */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex items-start gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pt-2 pb-6 px-1 cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {items.map((srv, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={srv.num}
                data-service-card
                className={`shrink-0 snap-start transition-all duration-300 ${
                  /* Desktop: exactly 3 cards fit visible width */
                  "lg:flex-[0_0_calc((100%-48px)/3)] lg:min-w-[calc((100%-48px)/3)] lg:max-w-[calc((100%-48px)/3)] " +
                  /* Tablet: 2 cards fit visible width */
                  "md:flex-[0_0_calc((100%-20px)/2)] md:min-w-[calc((100%-20px)/2)] md:max-w-[calc((100%-20px)/2)] " +
                  /* Mobile: 1 card + peek */
                  "flex-[0_0_86%] sm:flex-[0_0_75%] min-w-[280px] max-w-[360px]"
                } ${
                  isExpanded ? "z-30 relative" : "z-10 relative"
                }`}
              >
                <TiltCard className="h-full" disabled={isExpanded}>
                  <div
                    className={`p-6 sm:p-7 h-full flex flex-col justify-between space-y-5 rounded-2xl transition-all duration-300 ${
                      isExpanded
                        ? "bg-[#1B1E28] ring-1 ring-han-turquoise/50 shadow-xl"
                        : "bg-[#181B23] border border-white/[0.08] hover:border-white/[0.14]"
                    }`}
                  >
                    {/* Top Bar: Number only */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tabular-nums font-semibold text-slate-400">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: srv.dotColor }}
                            aria-hidden="true"
                          />
                          <span>{srv.num}</span>
                        </span>
                      </div>

                      {/* Title & Price Anchor */}
                      <div className="space-y-1.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-han-light">
                          {srv.title}
                        </h3>
                        {srv.priceAnchor && (
                          <p className="text-xs sm:text-sm font-bold tabular-nums text-han-turquoise">
                            {srv.priceAnchor}
                          </p>
                        )}
                      </div>

                      {/* Expandable Content Area (Smooth In-Place Reveal) */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded
                            ? "max-h-[850px] opacity-100 pt-3 border-t border-white/[0.08] space-y-5"
                            : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="space-y-1.5">
                          <h4 className="text-xs font-semibold text-slate-400">
                            {t.services.descHeading}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            {srv.desc}
                          </p>
                        </div>

                        <div className="space-y-2.5">
                          <h4 className="text-xs font-semibold text-slate-400">
                            {t.services.deliverablesTitle}
                          </h4>
                          <ul className="space-y-2">
                            {srv.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 rounded-lg bg-[#14161F] border border-white/[0.05] p-2.5 text-xs font-medium text-slate-200"
                              >
                                <PrismCheckGlyph className="w-3.5 h-3.5 text-han-turquoise shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2 flex flex-wrap items-center gap-2.5">
                          <Link
                            href="/pricing"
                            className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-han-turquoise hover:bg-han-light px-4 py-2 text-xs font-extrabold text-han-dark transition-colors"
                          >
                            <span>{srv.ctaLabel}</span>
                            <PrismExternalGlyph className="w-3.5 h-3.5" />
                          </Link>

                          <a
                            href={waLink(`Halo hanvisuals, saya ingin berdiskusi mengenai layanan: ${srv.title}.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-[#12141B] hover:bg-han-slate border border-white/10 px-3.5 py-2 text-xs font-bold text-slate-200 hover:text-han-turquoise transition-colors"
                          >
                            <span>{t.services.chatWaBtn}</span>
                            <PrismArrowRightGlyph className="w-3.5 h-3.5 text-han-turquoise" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom: Toggle Trigger Button */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={(e) => handleToggle(idx, e)}
                        aria-expanded={isExpanded}
                        aria-label={`${srv.title}: ${
                          isExpanded ? "Tutup rincian" : t.services.viewDetails
                        }`}
                        className="w-full min-h-[44px] inline-flex items-center justify-between text-xs sm:text-sm font-bold text-slate-300 hover:text-han-turquoise transition-colors"
                      >
                        <span>
                          {isExpanded
                            ? t.pricingPage.closeDetails
                            : t.services.viewDetails}
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

        {/* Bottom Affordance Hint */}
        <div className="mt-2 flex items-center justify-between pt-3 border-t border-white/[0.05] text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-han-turquoise select-none">
              &larr; &rarr;
            </span>
            <span className="font-medium text-slate-300">
              {t.services.sliderHint}
            </span>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="text-slate-500 hidden sm:inline">
              {t.services.dragHint}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
