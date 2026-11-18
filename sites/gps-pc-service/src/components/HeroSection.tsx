import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Laptop,
  MessageCircle,
  PhoneCall,
  Send,
  Truck,
} from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function HeroSection() {
  const { hero, contact } = siteContent;

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/35 via-slate-950 to-slate-950"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-400/30 px-4 py-1.5 text-sm font-semibold text-amber-300">
              <Truck className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
              {hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>

            <ul className="space-y-3 pt-1">
              {hero.trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-200"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-3">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 text-base font-extrabold text-slate-950 shadow-lg hover:bg-amber-400 transition-colors"
              >
                <PhoneCall className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{contact.phoneDisplay}</span>
              </a>

              <a
                href={contact.viberUrl}
                className="inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-base font-bold text-white hover:bg-purple-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Написати у Viber</span>
              </a>

              <a
                href={contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-base font-bold text-white hover:bg-sky-500 transition-colors"
              >
                <Send className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <a
              href="#gps-services"
              className="group block rounded-2xl border border-blue-500/30 bg-gradient-to-br from-slate-900 to-slate-800/90 p-6 shadow-xl hover:border-blue-400 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                    <Compass className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400">
                      Для водіїв фур та авто
                    </span>
                    <h2 className="text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                      Прошивка GPS-навігаторів
                    </h2>
                  </div>
                </div>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-400 transition-transform"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-4 rounded-xl bg-slate-950/70 border border-slate-800 p-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between gap-2 text-slate-400">
                  <span>Було: Англійське меню / Старі карти</span>
                  <span className="text-amber-400 font-bold">→</span>
                  <span className="text-emerald-400 font-bold">Стало: УКР + Європа 2026</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Garmin dēzl / Drive', 'iGO Primo / NextGen', 'Габарити TIR / ADR', 'WinCE та Android'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-blue-500/10 border border-blue-400/20 px-2.5 py-1 text-xs font-semibold text-blue-200"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </a>

            <a
              href="#pc-services"
              className="group block rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 to-slate-800/90 p-6 shadow-xl hover:border-emerald-400 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                    <Laptop className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Для дому та роботи
                    </span>
                    <h2 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                      Windows та Linux «під ключ»
                    </h2>
                  </div>
                </div>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-400 transition-transform"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Повний комплект програм, драйверів та захист від реклами. Вмикаєте вдома ноутбук — і все одразу готове до роботи.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Windows 10 / 11 УКР', 'Швидкий Linux', 'Офісні програми', 'Збереження фото'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 text-xs font-semibold text-emerald-200"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800/90 pt-8 sm:grid-cols-4">
          {hero.stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-amber-400">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-300 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
