"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PrismArrowRightGlyph } from "@/components/BrandLogos";

export default function Workflow() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 py-14 md:py-20"
    >
      <div className="max-w-xl space-y-2 mb-10">
        <h2
          id="process-heading"
          className="text-fluid-h2 font-extrabold text-han-light"
        >
          {t.workflow.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {t.workflow.subtitle}
        </p>
      </div>

      <div className="rounded-2xl bg-[#181B24]/90 border border-white/[0.08] p-6 sm:p-8 lg:p-10">
        <ol className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-4">
          {t.workflow.steps.map((step, index) => {
            const isLast = index === t.workflow.steps.length - 1;
            return (
              <React.Fragment key={step.num}>
                <li className="flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-han-turquoise/15 border border-han-turquoise/40 font-mono text-xs font-extrabold text-han-turquoise">
                        {step.num}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {step.phase}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-han-light">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </li>

                {!isLast && (
                  <div
                    className="flex items-center justify-center lg:px-2 py-1 lg:py-0 text-han-turquoise/80"
                    aria-hidden="true"
                  >
                    <PrismArrowRightGlyph className="w-6 h-6 rotate-90 lg:rotate-0 shrink-0" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
