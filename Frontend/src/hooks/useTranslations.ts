import { useEffect, useState } from "react";
import { translateTextArray, LanguageOption } from "../utils/Translation";

type TranslationState = {
  data: Record<LanguageOption, string | null> | null;
  loading: boolean;
  error: string | null;
};

export function useTranslations(
  text: string,
  options: LanguageOption[]
): TranslationState {
  const [data, setData] = useState<TranslationState["data"]>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!text || options.length === 0) return;

    let cancelled = false;

    async function run() {
      setLoading(true);
      setError(null);

      try {
        const result = await translateTextArray(text, options);
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) setError("Translation failed");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [text, options.join(",")]);

  return { data, loading, error };
}<TranslationState["error"]>(null);