export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'en', name: 'English', nativeName: 'English' },
];
