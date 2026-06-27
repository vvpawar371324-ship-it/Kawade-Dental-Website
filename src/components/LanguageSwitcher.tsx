import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../utils/i18n';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const toggle = () => {
    setLang(lang === 'en' ? 'mr' : 'en');
  };

  const options: { value: Language; label: string }[] = [
    { value: 'en', label: 'EN' },
    { value: 'mr', label: 'मराठी' },
  ];

  return (
    <div
      className="flex items-center rounded-full border border-gray-200 overflow-hidden bg-gray-50"
      role="group"
      aria-label="Language switcher"
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          id={`lang-${value}`}
          onClick={() => setLang(value)}
          aria-pressed={lang === value}
          className={`
            px-3 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer
            ${lang === value
              ? 'bg-[#0077b6] text-white'
              : 'text-[#6b7280] hover:text-[#0077b6]'}
          `}
        >
          {label}
        </button>
      ))}
      <button
        className="sr-only"
        onClick={toggle}
        aria-label="Toggle language"
      />
    </div>
  );
}
