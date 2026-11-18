import {
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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-4 py-1.5 text-sm font-medium text-blue-300">
              <Truck className="h-4 w-4 text-amber-400" aria-hidden="true" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              {hero.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>

            <ul className="space-y-3 pt-1">
              {hero.trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base text-slate-200">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-amber-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg hover:bg-amber-400 transition-colors"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                <span>Зателефонувати: {contact.phoneDisplay}</span>
              </a>

              <a
                href={contact.viberUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-base font-semibold text-white hover:bg-purple-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Написати у Viber</span>
              </a>

              <a
                href={contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-base font-semibold text-white hover:bg-sky-500 transition-colors"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="#gps-services"
              className="group rounded-2xl border border-slate-700/80 bg-slate-800/90 p-6 hover:border-blue-400 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                  <Compass className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Напрямок 1
                  </span>
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    GPS-навігатори (Фури та Авто)
                  </h2>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Переклад меню та голосу з англійської на українську. Встановлення iGO та свіжих карт Європи для Garmin, WinCE і Android.
              </p>
            </a>

            <a
              href="#pc-services"
              className="group rounded-2xl border border-slate-700/80 bg-slate-800/90 p-6 hover:border-emerald-400 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400">
                  <Laptop className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Напрямок 2
                  </span>
                  <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Windows та Linux «під ключ»
                  </h2>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Повне налаштування ноутбуків та ПК для людей, які хочуть просто увімкнути комп’ютер і користуватися без зайвого клопоту.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
