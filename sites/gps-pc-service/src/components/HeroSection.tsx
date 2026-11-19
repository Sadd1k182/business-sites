'use client';

import { ArrowUpRight, PhoneCall } from 'lucide-react';
import { TelegramIcon, ViberIcon } from '@/components/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';

export function HeroSection() {
  const { locale, content } = useLanguage();
  const { hero, contact } = content;

  return (
    <section className="relative bg-[#0B1118] text-white border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" aria-hidden="true" />
              <span>{contact.city}</span>
            </div>

            <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] text-white">
              {hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[62ch]">
              {hero.subtitle}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-3">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2.5 rounded-lg bg-[#F59E0B] px-5 py-3.5 text-base font-extrabold text-slate-950 hover:bg-amber-400 transition-colors"
              >
                <PhoneCall className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{contact.phoneDisplay}</span>
              </a>

              <a
                href={contact.viberUrl}
                className="inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2.5 rounded-lg bg-[#7360F2] px-5 py-3.5 text-base font-bold text-white hover:bg-[#624DE8] transition-colors"
              >
                <ViberIcon className="h-5 w-5 shrink-0" />
                <span>{contact.viberLabel}</span>
              </a>

              <a
                href={contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-lg bg-[#229ED9] px-5 py-3.5 text-base font-bold text-white hover:bg-[#1C8EC4] transition-colors"
              >
                <TelegramIcon className="h-5 w-5 shrink-0" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#111923]">
              <div className="flex items-center justify-between border-b border-slate-800 bg-[#15202E] px-5 py-3 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded bg-[#185ADB] px-1.5 py-0.5 font-display text-[11px] font-extrabold text-white">
                    M-06 / E40
                  </span>
                  <span>
                    {locale === 'uk'
                      ? 'Рівне → Україна та Європа'
                      : 'Rivne → Ukraine & Europe'}
                  </span>
                </div>
                <span className="text-emerald-400">
                  {locale === 'uk' ? 'Перевірка на місці' : 'Tested on the spot'}
                </span>
              </div>

              <div className="divide-y divide-slate-800">
                <a
                  href="#gps-services"
                  className="group block p-5 sm:p-6 hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-[#F59E0B]">
                        {locale === 'uk'
                          ? 'Для водіїв вантажівок (TIR) та авто'
                          : 'For truck (TIR) & car drivers'}
                      </div>
                      <h2 className="mt-1 font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {hero.card1Title}
                      </h2>
                      <p className="mt-1.5 text-sm text-slate-300 leading-snug">
                        {locale === 'uk'
                          ? 'Переклад меню та голосу з англійської на українську. Карти Європи 2026 з урахуванням висоти, ваги, осей та ADR.'
                          : 'English to Ukrainian menus & voice guidance. 2026 Europe maps configured for truck height, weight, axles, and ADR.'}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-slate-500 group-hover:text-amber-400 transition-colors mt-1"
                      aria-hidden="true"
                    />
                  </div>
                </a>

                <a
                  href="#pc-services"
                  className="group block p-5 sm:p-6 hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-emerald-400">
                        {locale === 'uk'
                          ? 'Для дому, навчання та роботи'
                          : 'For home, study & everyday work'}
                      </div>
                      <h2 className="mt-1 font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {hero.card2Title}
                      </h2>
                      <p className="mt-1.5 text-sm text-slate-300 leading-snug">
                        {locale === 'uk'
                          ? 'Чисте встановлення Windows 10/11 або швидкого Linux Mint з усіма драйверами, програмами та збереженням ваших фото.'
                          : 'Clean Windows 10/11 or fast Linux Mint installation with all drivers, daily apps, and 100% personal photo backup.'}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-slate-500 group-hover:text-emerald-400 transition-colors mt-1"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
