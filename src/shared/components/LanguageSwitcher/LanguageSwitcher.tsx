import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../config/i18n';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode).catch((error) => {
      console.error('Failed to change language:', error);
    });
  };

  const currentLanguage = SUPPORTED_LANGUAGES.find(
    (lang) => lang.code === i18n.language
  ) || SUPPORTED_LANGUAGES[0];

  return (
    <div role="group" aria-label={t('languageSwitcher.label', 'Language selection')}>
      <select
        aria-label={t('languageSwitcher.selectLabel', 'Select language')}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
        value={currentLanguage.code}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {SUPPORTED_LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
};
