import { createContext } from "react";

export type Language = "en" | "es" | "fr";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default LanguageContext;
