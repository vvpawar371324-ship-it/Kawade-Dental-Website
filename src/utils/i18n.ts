import en from '../translations/en.json';
import mr from '../translations/mr.json';

export type Language = 'en' | 'mr';

type TranslationValue = string | Record<string, unknown>;
type TranslationDict = Record<string, TranslationValue>;

const translations: Record<Language, TranslationDict> = { en, mr };

/**
 * Resolve a dot-separated key from the translation dictionary.
 * Falls back to English if the key is missing in the current language.
 * Falls back to the key itself if missing in both.
 */
export function t(key: string, lang: Language = 'en'): string {
  const keys = key.split('.');
  let current: TranslationValue = translations[lang];

  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = (current as Record<string, TranslationValue>)[k];
    } else {
      // Fallback to English
      let fallback: TranslationValue = translations['en'];
      for (const fk of keys) {
        if (fallback && typeof fallback === 'object' && fk in (fallback as Record<string, TranslationValue>)) {
          fallback = (fallback as Record<string, TranslationValue>)[fk];
        } else {
          return key; // ultimate fallback
        }
      }
      return typeof fallback === 'string' ? fallback : key;
    }
  }

  return typeof current === 'string' ? current : key;
}
