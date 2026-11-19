'use client';

import { PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Header() {
  const { locale, setLocale, content } = useLanguage();
  const { contact, nav } = content;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <a
          href="#"
          className="flex shrink-0 items-center gap-2.5 text-slate-950"
        >
          <span className="inline-flex items-center rounded-md bg-[#185ADB] px-2 py-1 font-display text-xs font-extrabold tracking-tight text-white">
            TIR / PC
          </span>
          <span className="font-display text-base sm:text-lg font-extrabold tracking-tight whitespace-nowrap">
            {nav.brandTitle}
          </span>
          <span className="hidden md:inline-block border-l border-slate-300 pl-2.5 text-xs font-medium text-slate-500 whitespace-nowrap">
            { locale === 'uk' ? 'м. Рівне' : 'Rivne' }
          </span>
        </a>

        <nav
          aria-label="Основна навігація"
          className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <a
            href="#gps-services"
            className="whitespace-nowrap hover:text-slate-950 transition-colors py-1"
          >
            {nav.gps}
          </a>
          <a
            href="#pc-services"
            className="whitespace-nowrap hover:text-slate-950 transition-colors py-1"
          >
            {nav.pc}
          </a>
          <a
            href="#how-it-works"
            className="whitespace-nowrap hover:text-slate-950 transition-colors py-1"
          >
            {nav.howItWorks}
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap hover:text-slate-950 transition-colors py-1"
          >
            {nav.faq}
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap hover:text-slate-950 transition-colors py-1"
          >
            {nav.contact}
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex shrink-0 items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs font-bold"
          >
            <button
              type="button"
              onClick={() => setLocale('uk')}
              aria-pressed={locale === 'uk'}
              className={`cursor-pointer rounded-md px-2.5 py-1.5 transition-colors ${
                locale === 'uk'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              UA
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className={`cursor-pointer rounded-md px-2.5 py-1.5 transition-colors ${
                locale === 'en'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={`tel:${contact.phoneRaw}`}
            aria-label={nav.callShort}
            className="inline-flex min-h-10 shrink-0 whitespace-nowrap items-center gap-2 rounded-lg bg-[#0B1118] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-colors"
          >
            <PhoneCall className="h-4 w-4 shrink-0 text-[#F59E0B]" aria-hidden="true" />
            <span className="hidden sm:inline">{contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
