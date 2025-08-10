import type { i18n as I18nInstance } from 'i18next';

export const normalizeLanguageCode = (code: string): string => code.split('-')[0];

export const changeLanguageAndFocus = async (
  i18n: I18nInstance,
  languageCode: string,
  groupRef?: React.RefObject<HTMLDivElement | null>,
) => {
  try {
    await i18n.changeLanguage(languageCode);
    if (groupRef?.current) {
      const btn = groupRef.current.querySelector<HTMLButtonElement>(`[data-lang="${languageCode}"]`);
      btn?.focus();
    }
  } catch (error) {
    console.error('Failed to change language:', error);
  }
};

export const handleLanguageKeyNavigation = (
  e: React.KeyboardEvent<HTMLDivElement>,
  currentLang: string,
  changeLang: (code: string) => void,
  groupRef?: React.RefObject<HTMLDivElement | null>,
) => {
  const items = Array.from(groupRef?.current?.querySelectorAll<HTMLButtonElement>('[role="radio"]') || []);
  if (!items.length) return;

  const idx = items.findIndex((el) => el.getAttribute('data-lang') === currentLang);

  const move = (nextIdx: number) => {
    const el = items[(nextIdx + items.length) % items.length];
    const code = el.getAttribute('data-lang');
    if (code) changeLang(code);
  };

  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      e.preventDefault();
      move(idx + 1);
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      e.preventDefault();
      move(idx - 1);
      break;
    case 'Home':
      e.preventDefault();
      move(0);
      break;
    case 'End':
      e.preventDefault();
      move(items.length - 1);
      break;
  }
};
