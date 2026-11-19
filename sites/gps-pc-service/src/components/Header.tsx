'use client';

import { MapPin, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Header() {
  const { locale, setLocale, content } = useLanguage();
  const { contact, nav } = content;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2.5 sm:px-6 sm:py-3">
        <a
          href="#"
          className="flex shrink-0 items-center gap-2.5 text-slate-900 font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col whitespace-nowrap">
            <span className="text-base sm:text-lg leading-tight font-extrabold">
              {nav.brandTitle}
            </span>
            <span className="hidden md:block text-xs font-medium text-slate-500">
              {nav.brandSubtitle}
            </span>
          </span>
        </a>

        <nav
          aria-label="Основна навігація"
          className="hidden xl:flex items-center gap-5 text-sm font-semibold text-slate-600"
        >
          <a
            href="#gps-services"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            {nav.gps}
          </a>
          <a
            href="#pc-services"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            {nav.pc}
          </a>
          <a
            href="#how-it-works"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            {nav.howItWorks}
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            {nav.faq}
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            {nav.contact}
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex shrink-0 items-center rounded-xl border border-slate-200 bg-slate-100 p-1 text-xs font-bold"
          >
            <button
              type="button"
              onClick={() => setLocale('uk')}
              aria-pressed={locale === 'uk'}
              className={`cursor-pointer rounded-lg px-2.5 py-1.5 transition-colors ${
                locale === 'uk'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              UA
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className={`cursor-pointer rounded-lg px-2.5 py-1.5 transition-colors ${
                locale === 'en'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={`tel:${contact.phoneRaw}`}
            aria-label={nav.callShort}
            className="inline-flex min-h-10 sm:min-h-11 shrink-0 whitespace-nowrap items-center gap-2 rounded-xl bg-blue-600 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
          >
            <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">{contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
