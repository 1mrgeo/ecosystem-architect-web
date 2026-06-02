import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dtodos.lang");
      if (saved === "en" || saved === "es") {
        setLangState(saved);
        return;
      }
      const nav = (navigator.language || "en").toLowerCase();
      if (nav.startsWith("es")) setLangState("es");
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("dtodos.lang", l); } catch {}
  };

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}

/** Pick value by current language. Usage: pick({ en: "Hello", es: "Hola" }) */
export function usePick() {
  const { lang } = useLang();
  return <T,>(v: { en: T; es: T }): T => v[lang];
}

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      aria-label="Toggle language"
      className={`text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-gold transition-colors px-2.5 py-1.5 border border-white/10 rounded-md ${className}`}
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}
