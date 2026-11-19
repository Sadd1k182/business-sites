'use client';

import {
  ArrowRight,
  Compass,
  Laptop,
  PhoneCall,
  Truck,
} from 'lucide-react';
import { TelegramIcon, ViberIcon } from '@/components/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';

export function HeroSection() {
  const { content } = useLanguage();
  const { hero, contact } = content;

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-12 sm:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/35 via-slate-950 to-slate-950"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-amber-300">
              <Truck className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
              {hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-3">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 text-base font-extrabold text-slate-950 shadow-lg hover:bg-amber-400 transition-colors"
              >
                <PhoneCall className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{contact.phoneDisplay}</span>
              </a>

              <a
                href={contact.viberUrl}
                className="inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2.5 rounded-xl bg-purple-600 px-5 py-3.5 text-base font-bold text-white hover:bg-purple-500 transition-colors"
              >
                <ViberIcon className="h-5 w-5 shrink-0" />
                <span>{contact.viberLabel}</span>
              </a>

              <a
                href={contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-base font-bold text-white hover:bg-sky-500 transition-colors"
              >
                <TelegramIcon className="h-5 w-5 shrink-0" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="#gps-services"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-blue-500/30 bg-slate-900/90 p-5 shadow-lg hover:border-blue-400 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Compass className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-amber-400">
                    {hero.card1Tag}
                  </span>
                  <h2 className="text-lg font-extrabold text-white group-hover:text-blue-300 transition-colors">
                    {hero.card1Title}
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm text-slate-400">
                    {hero.card1Meta}
                  </p>
                </div>
              </div>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-400 transition-transform"
                aria-hidden="true"
              />
            </a>

            <a
              href="#pc-services"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-5 shadow-lg hover:border-emerald-400 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Laptop className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {hero.card2Tag}
                  </span>
                  <h2 className="text-lg font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {hero.card2Title}
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm text-slate-400">
                    {hero.card2Meta}
                  </p>
                </div>
              </div>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-400 transition-transform"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
