"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries } from "@/data/dictionaries";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");
  const [motionPaused, setMotionPaused] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("hanvisuals_lang");
      if (saved === "en" || saved === "id") {
        setLangState(saved);
      }
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setMotionPaused(true);
      }
    } catch {
      // Ignore storage access errors in restricted privacy modes
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "id" ? "id" : "en";
    }
  }, [lang]);

  const setLang = (nextLang) => {
    setLangState(nextLang);
    try {
      window.localStorage.setItem("hanvisuals_lang", nextLang);
    } catch {
      // Ignore storage write errors
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "id" : "en");
  };

  const toggleMotion = () => {
    setMotionPaused((prev) => !prev);
  };

  const t = dictionaries[lang] || dictionaries.en;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        motionPaused,
        toggleMotion,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
