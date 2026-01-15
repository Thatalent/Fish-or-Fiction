'use client';
import * as React from 'react';
import LanguageContext from "../contexts/LanguageContext"
import { useContext, useState } from "react";
import type { Language } from '../contexts/LanguageContext';

const translations: Record<Language, {settingsTitle: string}> = {
    en: {
      settingsTitle: "Settings"
    },
    es: {
      settingsTitle: "Configuración"
    },
    fr: {
      settingsTitle:"Paramètres"
    }
  }

const LANGUAGES: { label: string; value: Language }[] = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
];



const LanguageSection: React.FC = () => {

const context = useContext(LanguageContext);
if(!context) {
  throw new Error("SettingsPage must be wrapping in LanguageContext Provider");
}
const {language, setLanguage} = context;

const [selectedLanguage, setSelectedLanguage] = useState<Language>(language);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLanguage(selectedLanguage);
  };

  return (

      <form onSubmit={handleSubmit}>
        <h1>{translations[language].settingsTitle}</h1>
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6 mx-auto">
        {LANGUAGES.map(({label, value}) => (
          <label key={value} className="flex items-center gap-2 cursor-pointer font-inter font-bold text-5xl-custom">
            <input
              type="radio"
              name="language"
              value={value}
              className="w-10 h-10 accent-white cursor-pointer"
              checked={selectedLanguage === value}
              onChange={() => setSelectedLanguage(value)}
            />
            {label}
          </label>
        ))}
      </div>

      {/* Save button */}
      <button
      type="submit"
        className="w-full
        bg-deepSeaBlue text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors
        font-inter font-bold text-5xl-custom cursor-pointer"
      >
        SAVE
      </button>
    </form>
  );
}

export default LanguageSection;
