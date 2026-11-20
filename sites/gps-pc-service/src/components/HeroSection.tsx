'use client';

import {
  CheckCircle2,
  Laptop,
  Navigation,
  PhoneCall,
} from 'lucide-react';
import {
  TelegramIcon,
  ViberIcon,
  WhatsAppIcon,
} from '@/components/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';

const statToneClasses = {
  neutral: 'text-slate-900',
  brand: 'text-blue-600',
  emerald: 'text-emerald-600',
} as const;

export function HeroSection() {
  const { content } = useLanguage();
  const { hero, contact } = content;

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-medium text-blue-700">
          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
          <span>{hero.badge}</span>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-7">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-[1.18] sm:text-4xl lg:text-[42px]">
              {hero.title}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:gap-3">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex min-h-12 w-full sm:w-auto shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 active:scale-[0.99] transition-all"
              >
                <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">
                  {hero.callPrefix}: {contact.phoneDisplay}
                </span>
              </a>

              <a
                href={contact.viberUrl}
                className="inline-flex min-h-12 flex-1 sm:flex-initial shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-purple-200 hover:bg-purple-50/60 transition-colors"
              >
                <ViberIcon className="h-4 w-4 shrink-0 text-[#7360F2]" />
                <span>Viber</span>
              </a>

              <a
                href={contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 sm:flex-initial shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-sky-200 hover:bg-sky-50/60 transition-colors"
              >
                <TelegramIcon className="h-4 w-4 shrink-0 text-[#229ED9]" />
                <span>Telegram</span>
              </a>

              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 sm:flex-initial shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-emerald-200 hover:bg-emerald-50/60 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-2.5 pt-3 sm:gap-3">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 sm:p-3.5"
                >
                  <span
                    className={`block font-mono text-base sm:text-xl font-bold tracking-tight ${statToneClasses[stat.tone]}`}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-0.5 block text-[11px] sm:text-xs text-slate-500 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative space-y-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-xs sm:p-6">
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-50" />
                  <span className="truncate text-xs font-semibold uppercase tracking-wider text-slate-900">
                    {hero.benchTitle}
                  </span>
                </div>
                <span className="shrink-0 whitespace-nowrap rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-[11px] font-medium text-slate-500">
                  {hero.benchStatus}
                </span>
              </div>

              <a
                href="#gps-services"
                className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="mb-1.5 inline-flex items-center rounded border border-amber-200/70 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                      {hero.card1Tag}
                    </span>
                    <h2 className="text-sm font-bold text-slate-900">
                      {hero.card1Title}
                    </h2>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {hero.card1Meta}
                    </p>
                  </div>
                  <Navigation
                    className="h-5 w-5 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-2.5 text-[11px] text-slate-500">
                  <CheckCircle2
                    className="h-3.5 w-3.5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span>{hero.card1Check}</span>
                </div>
              </a>

              <a
                href="#pc-services"
                className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="mb-1.5 inline-flex items-center rounded border border-blue-100 bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                      {hero.card2Tag}
                    </span>
                    <h2 className="text-sm font-bold text-slate-900">
                      {hero.card2Title}
                    </h2>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {hero.card2Meta}
                    </p>
                  </div>
                  <Laptop
                    className="h-5 w-5 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-2.5 text-[11px] text-slate-500">
                  <CheckCircle2
                    className="h-3.5 w-3.5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span>{hero.card2Check}</span>
                </div>
              </a>

              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px]">
                {hero.hardwareBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-600"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
