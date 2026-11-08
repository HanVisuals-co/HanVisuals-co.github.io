"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="inline-flex items-center rounded-xl bg-[#13151C] p-1 border border-white/[0.08]"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`min-h-[44px] min-w-[44px] px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
          lang === "en"
            ? "bg-han-turquoise text-han-dark"
            : "text-slate-300 hover:text-han-light"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("id")}
        aria-pressed={lang === "id"}
        className={`min-h-[44px] min-w-[44px] px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
          lang === "id"
            ? "bg-han-turquoise text-han-dark"
            : "text-slate-300 hover:text-han-light"
        }`}
      >
        ID
      </button>
    </div>
  );
}
