'use client';
import * as React from 'react';
import LanguageContext from "../contexts/LanguageContext"
import { useContext, useState } from "react";

const languages = [
  "English",
  "Spanish",
  "Danish",
  "Dutch",
  "Filipino",
  "French",
  "German",
  "Hindi",
  "Italian",
  "Japanese",
  "Mandarin",
  "Portuguese",
  "Russian",
  "Arabic",
];

const LanguageSection: React.FC = () => {

const language = useContext(LanguageContext);


const [value, setValue] = useState<string>(language || 'en');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setValue(value);
  console.log(`selected langauge: ${value}`);
}

  return (
    <form>
      <div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
        {languages.map((lang) => (
          <label key={lang} className="flex items-center gap-2 cursor-pointer font-inter font-bold text-5xl-custom">
            <input
              type="radio"
              name="language"
              value={lang}
              className="w-10 h-10 accent-white cursor-pointer"
              checked={value === lang}
              onChange={() => setValue(lang)}
            />
            {lang}
          </label>
        ))}
      </div>

      {/* Save button */}
      <button
        onClick={handleSubmit}
        className="w-full
        bg-deepSeaBlue text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors
        font-inter font-bold text-5xl-custom cursor-pointer"
      >
        SAVE
      </button>
    </div>
    {/* <RadioGroup
      aria-labelledby={id}
      value={value}
      onValueChange={(nextValue) => {
        setValue(nextValue as string);
      }}
      className="flex-column flex-wrap text-gray-900"
    >
      <div className="font-medium" id={id}>
      </div>

      <label className="flex items-center gap-2 font-Inter">
        <Radio.Root
          value="en"
          className="
          ring-4 ring-blue-800
          flex size-5 items-center justify-center rounded-full
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800
          data-[checked]:bg-red-900 data-[unchecked]:bg-white"
        >
          <Radio.Indicator className="flex before:size-2 before:rounded-full before:bg-blue-800 data-[unchecked]:hidden" />
        </Radio.Root>
        English
      </label>

      <label className="flex items-center gap-2">
        <Radio.Root
          value="es"
          className="
          ring-4 ring-blue-800
          flex size-5 items-center justify-center rounded-full
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800
          data-[checked]:bg-red-900 data-[unchecked]:bg-white"
        >
          <Radio.Indicator className="flex before:size-2 before:rounded-full before:bg-gray-50 data-[unchecked]:hidden" />
        </Radio.Root>
        Spanish
      </label>

      <label className="flex items-center gap-2">
        <Radio.Root
          value="fr"
          className="
          ring-4 ring-blue-800
          flex size-5 items-center justify-center rounded-full
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800
          data-[checked]:bg-red-900 data-[unchecked]:bg-white"
        >
          <Radio.Indicator className="flex before:size-2 before:rounded-full before:bg-gray-50 data-[unchecked]:hidden" />
        </Radio.Root>
        French
      </label>
    </RadioGroup>
    <Button onClick={handleSubmit} type="submit" className="flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-gray-200 rounded-md bg-gray-50 font-inherit text-base font-medium leading-6 text-gray-900 select-none hover:data-[disabled]:bg-gray-50 hover:bg-gray-100 active:data-[disabled]:bg-gray-50 active:bg-gray-200 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:-outline-offset-1 data-[disabled]:text-gray-500">
      Save
    </Button> */}
    </form>
  );
}

export default LanguageSection;
