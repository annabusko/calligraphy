export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'ru', name: 'Russian', nativeName: 'Ru' },
  { code: 'pl', name: 'Polish', nativeName: 'Pl' },
  { code: 'en', name: 'English', nativeName: 'En' },
];
