'use client';

import { Compass, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Header() {
  const { locale, setLocale, content } = useLanguage();
  const { contact, nav } = content;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-3 lg:px-8">
        <a
          href="#"
          className="flex shrink-0 items-center gap-2 sm:gap-3 rounded-lg"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 shadow-xs">
            <Compass className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col whitespace-nowrap">
            <span className="flex items-center gap-2">
              <span className="text-[15px] leading-tight font-bold tracking-tight text-slate-900">
                {nav.brandTitle}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{nav.cityPill}</span>
              </span>
            </span>
            <span className="hidden md:block text-xs text-slate-500">
              {nav.brandSubtitle}
            </span>
          </span>
        </a>

        <nav
          aria-label="Основна навігація"
          className="hidden xl:flex items-center gap-0.5 text-[13px] font-medium text-slate-600"
        >
          <a
            href="#problems"
            className="whitespace-nowrap rounded-lg px-2.5 py-1.5 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            {nav.problems}
          </a>
          <a
            href="#gps-services"
            className="whitespace-nowrap rounded-lg px-2.5 py-1.5 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            {nav.gps}
          </a>
          <a
            href="#pc-services"
            className="whitespace-nowrap rounded-lg px-2.5 py-1.5 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            {nav.pc}
          </a>
          <a
            href="#how-it-works"
            className="whitespace-nowrap rounded-lg px-2.5 py-1.5 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            {nav.howItWorks}
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap rounded-lg px-2.5 py-1.5 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            {nav.faq}
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex shrink-0 items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs font-semibold"
          >
            <button
              type="button"
              onClick={() => setLocale('uk')}
              aria-pressed={locale === 'uk'}
              className={`cursor-pointer rounded-md px-2 py-1.5 transition-colors ${
                locale === 'uk'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              UA
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className={`cursor-pointer rounded-md px-2 py-1.5 transition-colors ${
                locale === 'en'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={`tel:${contact.phoneRaw}`}
            aria-label={nav.callShort}
            className="inline-flex min-h-12 min-w-12 sm:min-h-9 sm:min-w-0 shrink-0 whitespace-nowrap items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100 px-2.5 sm:px-3 py-2 text-[13px] font-semibold text-slate-900 hover:bg-slate-200/70 transition-colors"
          >
            <PhoneCall className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
            <span className="hidden lg:inline tabular-nums">{contact.phoneDisplay}</span>
            <span className="hidden sm:inline lg:hidden">{nav.callShort}</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex min-h-9 shrink-0 whitespace-nowrap items-center justify-center rounded-lg bg-blue-600 px-3.5 py-2 text-[13px] font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors"
          >
            {nav.bookCta}
          </a>
        </div>
      </div>
    </header>
  );
}
