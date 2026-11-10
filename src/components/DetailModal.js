"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  PrismCloseGlyph,
  PrismArrowLeftGlyph,
  PrismArrowRightGlyph,
} from "@/components/BrandLogos";

export default function DetailModal({
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
  counter = "",
  ariaLabel = "Detail preview",
  children,
}) {
  const { t } = useLanguage();
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Save previous active element to restore focus on close
    const previousActiveElement = document.activeElement;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-focus close button or modal container
    const focusTimer = setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      } else if (modalRef.current) {
        modalRef.current.focus();
      }
    }, 40);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft" && hasPrev && onPrev) {
        e.preventDefault();
        onPrev();
      } else if (e.key === "ArrowRight" && hasNext && onNext) {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimer);
      if (previousActiveElement && previousActiveElement.focus) {
        previousActiveElement.focus();
      }
    };
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
    >
      {/* Dimmed backdrop with blur */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Content Container */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] my-auto flex flex-col rounded-2xl sm:rounded-3xl bg-[#161922] border border-white/10 shadow-2xl overflow-hidden focus:outline-none"
      >
        {/* Top Control Bar with Navigation and Close */}
        <div className="flex items-center justify-between gap-3 px-5 py-3.5 sm:px-6 sm:py-4 bg-[#191D28]/95 border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-2">
            {counter && (
              <span className="font-mono text-xs font-bold text-slate-300 px-2.5 py-1 rounded-md bg-[#12141B] border border-white/[0.06]">
                {counter}
              </span>
            )}
            <span className="text-xs text-slate-400 hidden sm:inline">
              {t?.modal?.navHint || "(Use \u2190 / \u2192 arrows to navigate)"}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {onPrev && (
              <button
                type="button"
                onClick={onPrev}
                disabled={!hasPrev}
                aria-label={t?.modal?.prevItem || "Previous item"}
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl bg-[#13151C] hover:bg-han-slate border border-white/[0.08] text-slate-200 hover:text-han-turquoise disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <PrismArrowLeftGlyph className="w-4 h-4" />
              </button>
            )}

            {onNext && (
              <button
                type="button"
                onClick={onNext}
                disabled={!hasNext}
                aria-label={t?.modal?.nextItem || "Next item"}
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl bg-[#13151C] hover:bg-han-slate border border-white/[0.08] text-slate-200 hover:text-han-turquoise disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <PrismArrowRightGlyph className="w-4 h-4" />
              </button>
            )}

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={t?.modal?.closeModal || "Close dialog (Esc)"}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl bg-[#1D202C] hover:bg-han-crimson text-slate-200 hover:text-white border border-white/[0.08] transition-colors ml-1"
            >
              <PrismCloseGlyph className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-5 sm:p-7 md:p-8 overflow-y-auto space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
