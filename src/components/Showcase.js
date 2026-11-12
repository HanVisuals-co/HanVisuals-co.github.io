"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import {
  PlayPrismMark,
  PrismExternalGlyph,
  PrismArrowRightGlyph,
  PrismCloseGlyph,
  PrismCheckGlyph,
} from "@/components/BrandLogos";
import { waLink } from "@/lib/site";

export default function Showcase() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewState, setViewState] = useState("ready");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(null);

  // Floating hover preview state & refs
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const previewRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const posRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedState = params.get("state");
    if (
      requestedState === "loading" ||
      requestedState === "empty" ||
      requestedState === "error"
    ) {
      setViewState(requestedState);
    }
  }, []);

  // Pointer device check & smooth lerp mouse tracking
  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsFinePointer(media.matches);

    const handleMediaChange = (e) => setIsFinePointer(e.matches);
    media.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = () => {
      // Smooth linear interpolation (lerp factor: 0.14)
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.14;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.14;

      if (previewRef.current) {
        const previewWidth = 360;
        const previewHeight = 225;
        let targetX = posRef.current.x + 28;
        let targetY = posRef.current.y - previewHeight / 2;

        // Prevent off-screen clipping on the right edge
        if (targetX + previewWidth > window.innerWidth - 24) {
          targetX = posRef.current.x - previewWidth - 28;
        }

        // Clamp to screen height
        if (targetY < 20) targetY = 20;
        if (targetY + previewHeight > window.innerHeight - 20) {
          targetY = window.innerHeight - previewHeight - 20;
        }

        previewRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      media.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Close accordion on outside click or Escape
  useEffect(() => {
    if (expandedIndex === null) {
      setActiveVideoId(null);
      return;
    }

    const handlePointerDown = (e) => {
      if (!e.target.closest("[data-project-row]")) {
        setExpandedIndex(null);
        setActiveVideoId(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setExpandedIndex(null);
        setActiveVideoId(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedIndex]);

  const filters = [
    { id: "all", label: t.showcase.filterAll },
    { id: "video", label: t.showcase.filterVideo },
    { id: "web", label: t.showcase.filterWeb },
  ];

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setViewState("ready");
    setExpandedIndex(null);
    setHoveredIndex(null);
    setActiveVideoId(null);
  };

  const filteredItems = portfolioData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const handleToggle = (idx) => {
    setExpandedIndex((prev) => {
      const next = prev === idx ? null : idx;
      if (next === null) {
        setActiveVideoId(null);
      }
      return next;
    });
  };

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 py-14 md:py-24"
    >
      {/* Header & Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
        <div className="space-y-1">
          <h2
            id="works-heading"
            className="text-fluid-h2 font-bold tracking-tight text-han-light"
          >
            {t.showcase.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono tabular-nums text-slate-400">
            [ 0{filteredItems.length} {lang === "id" ? "Proyek Terpilih" : "Featured Projects"} ]
          </p>
        </div>

        {/* Filter Pills */}
        <div
          role="group"
          aria-label="Filter projects"
          className="inline-flex flex-wrap items-center gap-2 self-start sm:self-auto"
        >
          {filters.map((f) => {
            const active = activeFilter === f.id && viewState === "ready";
            const count =
              f.id === "all"
                ? portfolioData.length
                : portfolioData.filter((p) => p.category === f.id).length;

            return (
              <button
                key={f.id}
                type="button"
                onClick={() => handleFilterChange(f.id)}
                aria-pressed={active}
                className={`min-h-[42px] px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  active
                    ? "bg-han-turquoise text-han-dark shadow-[0_0_18px_rgba(81,184,185,0.35)]"
                    : "bg-[#161822] text-slate-300 border border-white/[0.08] hover:text-han-light hover:border-white/20"
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                    active
                      ? "bg-han-dark/25 text-han-dark"
                      : "bg-white/[0.06] text-slate-400"
                  }`}
                >
                  0{count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Loading State */}
      {viewState === "loading" && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl bg-[#191C26] border border-white/[0.08] p-12 text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-xl bg-han-dark">
            <PlayPrismMark size={32} voidColor="#FDFCF9" />
          </div>
          <p className="text-base font-bold text-han-light">
            {t.showcase.loadingText}
          </p>
        </div>
      )}

      {/* Error State */}
      {viewState === "error" && (
        <div
          role="alert"
          className="rounded-2xl bg-[#191C26] border border-han-crimson/40 p-10 text-center space-y-4"
        >
          <p className="text-base font-bold text-han-light">
            {t.showcase.errorTitle}
          </p>
          <button
            type="button"
            onClick={() => setViewState("ready")}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-han-crimson text-han-dark font-extrabold text-sm hover:bg-han-light transition-colors"
          >
            {t.showcase.errorAction}
          </button>
        </div>
      )}

      {/* Empty State */}
      {(viewState === "empty" ||
        (viewState === "ready" && filteredItems.length === 0)) && (
        <div className="rounded-2xl bg-[#191C26] border border-white/[0.08] p-10 text-center space-y-4">
          <p className="text-base font-bold text-han-light">
            {t.showcase.emptyTitle}
          </p>
          <button
            type="button"
            onClick={() => handleFilterChange("all")}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-han-turquoise text-han-dark font-extrabold text-sm hover:bg-han-light transition-colors"
          >
            {t.showcase.emptyAction}
          </button>
        </div>
      )}

      {/* Floating Hover Image Preview (Fine Pointer / Desktop Cursor Only) */}
      {isFinePointer && viewState === "ready" && filteredItems.length > 0 && (
        <div
          ref={previewRef}
          aria-hidden="true"
          className={`fixed top-0 left-0 z-50 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            hoveredIndex !== null && expandedIndex === null
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="relative w-[340px] md:w-[380px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#14161F] border border-white/15 shadow-2xl">
            {/* Cross-fading Image Stack */}
            {filteredItems.map((item, idx) => {
              const isCurrent = hoveredIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isCurrent
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <img
                    src={item.thumbnail}
                    alt={lang === "id" ? item.titleId : item.titleEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-mono text-slate-200">
                    <span className="truncate">{item.stackLabel}</span>
                    <span className="font-bold text-han-turquoise shrink-0">
                      {item.aspectRatio}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Editorial Project List */}
      {viewState === "ready" && filteredItems.length > 0 && (
        <div className="border-t border-b border-white/10 divide-y divide-white/10">
          {filteredItems.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            const isOtherHovered = hoveredIndex !== null && !isHovered;
            const isExpanded = expandedIndex === idx;
            const title = lang === "id" ? item.titleId : item.titleEn;
            const summary = lang === "id" ? item.summaryId : item.summaryEn;
            const externalLabel =
              lang === "id" ? item.externalLabelId : item.externalLabelEn;
            const num = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                data-project-row
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group transition-opacity duration-300 ${
                  isOtherHovered ? "opacity-35" : "opacity-100"
                }`}
              >
                {/* Horizontal Editorial Row Trigger */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleToggle(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleToggle(idx);
                    }
                  }}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between gap-4 py-6 sm:py-7 md:py-8 cursor-pointer select-none transition-colors duration-200"
                >
                  {/* Left Column: Number & Title */}
                  <div className="flex items-baseline sm:items-center gap-4 sm:gap-6 lg:gap-8 flex-1 min-w-0">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-slate-500 w-6 sm:w-8 shrink-0 transition-colors duration-300 group-hover:text-han-turquoise">
                      {num}
                    </span>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-han-light transition-all duration-200 group-hover:translate-x-1 group-hover:text-han-turquoise">
                      {title}
                    </h3>
                  </div>

                  {/* Right Column: Arrow Action Indicator */}
                  <div className="shrink-0 flex items-center justify-end">
                    <span
                      className={`min-h-[38px] min-w-[38px] inline-flex items-center justify-center rounded-xl border border-white/[0.08] transition-all duration-200 ${
                        isExpanded
                          ? "bg-han-turquoise text-han-dark rotate-90"
                          : "bg-[#181B23] text-slate-300 group-hover:bg-han-turquoise group-hover:text-han-dark group-hover:border-han-turquoise/40"
                      }`}
                    >
                      {isExpanded ? (
                        <PrismCloseGlyph className="w-4 h-4" />
                      ) : (
                        <PrismExternalGlyph className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Expandable Case Study Accordion */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isExpanded
                      ? "max-h-[950px] opacity-100 pb-8 pt-2"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="rounded-2xl bg-[#141720] border border-white/[0.08] p-5 sm:p-7 md:p-8 space-y-6">
                    {/* Media Display (Responsive: playable video iframe on explicit click or clean thumbnail frame) */}
                    <div>
                      {isExpanded &&
                      activeVideoId === item.id &&
                      item.category === "video" &&
                      item.videoEmbedUrl ? (
                        <div className="relative aspect-video w-full rounded-xl bg-black overflow-hidden border border-white/10 shadow-xl">
                          <iframe
                            src={`${item.videoEmbedUrl}${
                              item.videoEmbedUrl.includes("?") ? "&" : "?"
                            }autoplay=1`}
                            title={title}
                            sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                          />
                        </div>
                      ) : (
                        <div className="relative aspect-[16/10] w-full rounded-xl bg-[#0E1016] overflow-hidden border border-white/10 shadow-xl group/thumb">
                          {item.displayUrl && (
                            <div className="flex items-center justify-between gap-3 px-4 py-2 bg-[#161922] border-b border-white/[0.06]">
                              <span className="text-xs font-mono text-slate-400 truncate">
                                {item.displayUrl}
                              </span>
                              <span className="text-xs font-semibold text-han-turquoise shrink-0">
                                {item.aspectRatio}
                              </span>
                            </div>
                          )}
                          <div className="relative w-full h-full overflow-hidden">
                            <img
                              src={item.thumbnail}
                              alt={title}
                              loading="lazy"
                              className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover/thumb:scale-105"
                            />
                            {item.category === "video" && item.videoEmbedUrl && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveVideoId(item.id);
                                  }}
                                  aria-label={`${t.hero.reelWatch}: ${title}`}
                                  className="min-h-[46px] inline-flex items-center gap-2.5 rounded-xl bg-han-turquoise hover:bg-han-light px-5 py-2.5 text-xs sm:text-sm font-extrabold text-han-dark shadow-xl hover:scale-105 transition-all cursor-pointer"
                                >
                                  <PlayPrismMark size={18} voidColor="#15171E" />
                                  <span>{t.hero.reelWatch}</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* About Project & Scope */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                      <div className="md:col-span-8 space-y-2">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                          {t.showcase.aboutProject}
                        </h4>
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                          {summary}
                        </p>
                      </div>

                      <div className="md:col-span-4 space-y-2.5">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                          {t.showcase.tagsLabel}
                        </h4>
                        <ul className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-lg bg-[#11131A] border border-white/[0.06] px-2.5 py-1 text-xs font-medium text-slate-300"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-han-turquoise hover:bg-han-light px-5 py-2.5 text-xs sm:text-sm font-extrabold text-han-dark transition-colors"
                      >
                        <span>{externalLabel}</span>
                        <PrismExternalGlyph className="w-4 h-4" />
                      </a>

                      <a
                        href={waLink(`Halo hanvisuals, saya melihat proyek '${title}' di website dan ingin berdiskusi.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-[#11131A] hover:bg-han-slate border border-white/10 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-han-turquoise transition-colors"
                      >
                        <span>{t.showcase.inquireSimilar}</span>
                        <PrismArrowRightGlyph className="w-4 h-4 text-han-turquoise" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
