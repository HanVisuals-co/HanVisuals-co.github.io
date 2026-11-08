"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import VideoCard from "@/components/VideoCard";
import WebCard from "@/components/WebCard";
import { PlayPrismMark } from "@/components/BrandLogos";

export default function Showcase() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewState, setViewState] = useState("ready");

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

  const filters = [
    { id: "all", label: t.showcase.filterAll },
    { id: "video", label: t.showcase.filterVideo },
    { id: "web", label: t.showcase.filterWeb },
  ];

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setViewState("ready");
  };

  const filteredItems = portfolioData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 py-14 md:py-20"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2
          id="works-heading"
          className="text-fluid-h2 font-extrabold text-han-light"
        >
          {t.showcase.title}
        </h2>

        <div
          role="group"
          aria-label="Filter projects"
          className="inline-flex flex-wrap items-center gap-2 self-start sm:self-auto"
        >
          {filters.map((f) => {
            const active = activeFilter === f.id && viewState === "ready";
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => handleFilterChange(f.id)}
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

      {viewState === "ready" && filteredItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) =>
            item.category === "video" ? (
              <VideoCard key={item.id} item={item} />
            ) : (
              <WebCard key={item.id} item={item} />
            )
          )}
        </div>
      )}
    </section>
  );
}
