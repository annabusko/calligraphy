import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../config/i18n';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode).catch((error) => {
      console.error('Failed to change language:', error);
    });
  };

  return (
    <div role="group" aria-label="Language selection" className="flex gap-1">
      {SUPPORTED_LANGUAGES.map((language) => (
        <button
          key={language.code}
          onClick={() => handleLanguageChange(language.code)}
          className={`px-3 py-1 text-sm font-medium rounded transition-all ${
            i18n.language === language.code
              ? 'bg-orange-500 text-white shadow-sm'
              : 'text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:bg-white/10'
          }`}
          aria-pressed={i18n.language === language.code}
          aria-label={`Switch to ${language.name}`}
        >
          {language.nativeName}
        </button>
      ))}
    </div>
  );
};
