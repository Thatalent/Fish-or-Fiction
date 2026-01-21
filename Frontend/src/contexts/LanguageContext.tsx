import { createContext } from "react";

type Language = "en" | "es" | "da" |"nl" | "fil" | "fr"|"de" | "hi" | "it"|"ja" | "zh" | "pt"| "ru" | "ar";

const LanguageContext = createContext<Language>('en');

export default LanguageContext;
