export const LANGUAGE_OPTIONS = {
  English: "en",
  Spanish: "es",
  Danish: "da",
  Dutch: "nl",
  Filipino: "fil",
  French: "fr",
  German: "de",
  Hindi: "hi",
  Italian: "it",
  Japanese: "ja",
  Mandarin: "zh",
  Portuguese: "pt",
  Russian: "ru",
  Arabic: "ar",
} as const;

export type LanguageOption =
  (typeof LANGUAGE_OPTIONS)[keyof typeof LANGUAGE_OPTIONS];

export async function translateText(
  text: string,
  option: LanguageOption
): Promise<string> {
  return `[${option}] ${text}`;
}

export async function translateTextArray(
    text: string,
    options: LanguageOption[]): Promise<Record<LanguageOption, string| null>> {
  const results = {}as Record<LanguageOption, string | null>;
await Promise.all(
    options.map(async (option) => {
        try {
            results[option] = await translateText(text, option);
        } catch {
            results[option] = null;
        }
    })
) ;
return results; 
}