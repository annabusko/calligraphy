import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { SUPPORTED_LANGUAGES } from '@/i18n/config/i18n.types';

import { normalizeLanguageCode, changeLanguageAndFocus, handleLanguageKeyNavigation } from './languageSwitcher.helpers';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const groupRef = useRef<HTMLDivElement | null>(null);

  const currentLang = normalizeLanguageCode(i18n.language);

  const handleChange = (code: string) => changeLanguageAndFocus(i18n, code, groupRef);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) =>
    handleLanguageKeyNavigation(e, currentLang, handleChange, groupRef);

  return (
    <div ref={groupRef} role="radiogroup" aria-label="Language selection" className="flex gap-1" onKeyDown={onKeyDown}>
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            role="radio"
            data-lang={lang.code}
            aria-checked={isActive}
            aria-label={`Switch to ${lang.name}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => handleChange(lang.code)}
            className={`btn ${isActive ? 'btn-primary shadow-sm' : 'btn-ghost-light'}`}
          >
            {lang.nativeName}
          </button>
        );
      })}
    </div>
  );
};
