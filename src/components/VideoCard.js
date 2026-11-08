"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import TiltCard from "@/components/TiltCard";
import { PlayPrismMark, PrismExternalGlyph } from "@/components/BrandLogos";

export default function VideoCard({ item }) {
  const { lang, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const title = lang === "id" ? item.titleId : item.titleEn;
  const summary = lang === "id" ? item.summaryId : item.summaryEn;
  const categoryLabel =
    lang === "id" ? item.categoryLabelId : item.categoryLabelEn;
  const externalLabel =
    lang === "id" ? item.externalLabelId : item.externalLabelEn;

  const handlePlay = () => {
    setIframeLoaded(false);
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
    setIframeLoaded(false);
  };

  return (
    <TiltCard intensity={3.2} disabled={isPlaying}>
      <div className="p-6 sm:p-7 h-full flex flex-col justify-between space-y-5">
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

          <div className="relative aspect-[16/10] w-full rounded-xl bg-[#12141B] overflow-hidden border border-white/[0.06] group">
            <img
              src={item.thumbnail}
              alt={title}
              loading="lazy"
              className={`w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isPlaying && iframeLoaded
                  ? "opacity-0 scale-105 pointer-events-none"
                  : "opacity-90 group-hover:scale-[1.03]"
              }`}
            />

            {!isPlaying && (
              <div
                onClick={item.videoEmbedUrl ? handlePlay : undefined}
                role={item.videoEmbedUrl ? "button" : undefined}
                tabIndex={item.videoEmbedUrl ? 0 : undefined}
                onKeyDown={
                  item.videoEmbedUrl
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handlePlay();
                        }
                      }
                    : undefined
                }
                aria-label={
                  item.videoEmbedUrl
                    ? `${t.showcase.playPreview}: ${title}`
                    : undefined
                }
                className={`absolute inset-0 bg-gradient-to-t from-[#12141B]/90 via-transparent to-transparent flex items-end justify-between p-4 ${
                  item.videoEmbedUrl ? "cursor-pointer" : ""
                }`}
              >
                <span className="rounded-lg bg-[#15171E]/85 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                  {item.aspectRatio}
                </span>

                {item.videoEmbedUrl && (
                  <span className="min-h-[40px] inline-flex items-center gap-2 rounded-xl bg-han-turquoise group-hover:bg-han-light px-3.5 py-2 text-xs font-extrabold text-han-dark transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] active:scale-95">
                    <PlayPrismMark size={15} voidColor="#15171E" />
                    <span>{t.showcase.playPreview}</span>
                  </span>
                )}
              </div>
            )}

            {isPlaying && item.videoEmbedUrl && (
              <iframe
                src={item.videoEmbedUrl}
                title={title}
                onLoad={() => setIframeLoaded(true)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  iframeLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-fluid-h3 font-bold text-han-light">{title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{summary}</p>
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

          <div className="flex items-center gap-3">
            {isPlaying && (
              <button
                type="button"
                onClick={handleClose}
                className="min-h-[40px] text-xs font-semibold text-slate-400 hover:text-han-light transition-colors"
              >
                {t.showcase.closePreview}
              </button>
            )}
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] inline-flex items-center gap-1.5 text-sm font-bold text-han-turquoise hover:text-han-light transition-colors"
            >
              <span>{externalLabel}</span>
              <PrismExternalGlyph className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
