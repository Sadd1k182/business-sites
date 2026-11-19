'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import {
  siteTranslations,
  type Locale,
  type SiteLocaleContent,
} from '@/data/site-content';

interface LanguageContextValue {
  readonly locale: Locale;
  readonly setLocale: (next: Locale) => void;
  readonly content: SiteLocaleContent;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'uk',
  setLocale: () => {},
  content: siteTranslations.uk,
});

export function LanguageProvider({ children }: { readonly children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('uk');

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        content: siteTranslations[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
