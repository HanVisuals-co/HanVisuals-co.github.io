"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import TiltCard from "@/components/TiltCard";
import {
  PrismExternalGlyph,
  PrismArrowRightGlyph,
} from "@/components/BrandLogos";

export default function WebCard({ item, onSelect }) {
  const { lang, t } = useLanguage();

  const title = lang === "id" ? item.titleId : item.titleEn;
  const categoryLabel =
    lang === "id" ? item.categoryLabelId : item.categoryLabelEn;
  const externalLabel =
    lang === "id" ? item.externalLabelId : item.externalLabelEn;

  return (
    <TiltCard intensity={3.8}>
      <div
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect && onSelect();
          }
        }}
        aria-haspopup="dialog"
        aria-label={`${title}: ${t.showcase.openModalHint}`}
        className="p-6 sm:p-7 h-full flex flex-col justify-between space-y-5 cursor-pointer group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-han-turquoise rounded-2xl"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3 text-xs text-slate-300">
            <span className="inline-flex items-center gap-2 font-semibold">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.dotColor }}
                aria-hidden="true"
              />
              <span>{item.stackLabel}</span>
            </span>
            <span className="text-slate-400">{categoryLabel}</span>
          </div>

          <div className="rounded-xl bg-[#12141B] overflow-hidden border border-white/[0.06]">
            <div className="flex items-center justify-between gap-3 px-3.5 py-2 bg-[#161922] border-b border-white/[0.06]">
              <span className="text-[11px] font-mono text-slate-400 truncate">
                {item.displayUrl}
              </span>
              <span className="text-[11px] font-semibold text-han-turquoise shrink-0">
                {item.aspectRatio}
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0E1016]">
              <img
                src={item.thumbnail}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <h3 className="text-fluid-h3 font-bold text-han-light group-hover:text-han-turquoise transition-colors">
              {title}
            </h3>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          <ul className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg bg-[#13151C] px-2.5 py-1 text-xs font-medium text-slate-300"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <span className="min-h-[40px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 group-hover:text-han-turquoise transition-colors">
              <span>{t.showcase.viewDetails}</span>
              <PrismArrowRightGlyph className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
