'use client';

import { Clock, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import {
  TelegramIcon,
  ViberIcon,
  WhatsAppIcon,
} from '@/components/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';

export function ContactSection() {
  const { content } = useLanguage();
  const { contact } = content;
  const { guarantee } = contact;

  return (
    <section id="contact" className="bg-white py-16 md:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{contact.workshopBadge}</span>
              </div>

              <h2 className="text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                {contact.ctaHeading}
              </h2>

              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {contact.ctaSubtitle}
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-sm font-medium text-slate-900">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                  <span>{contact.city}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 sm:text-sm">
                  <Clock
                    className="h-4 w-4 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                  <span>{contact.schedule}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-2 sm:gap-3">
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="inline-flex min-h-12 w-full sm:w-auto shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors"
                >
                  <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="tabular-nums">
                    {contact.callLabel}: {contact.phoneDisplay}
                  </span>
                </a>

                <a
                  href={contact.viberUrl}
                  className="inline-flex min-h-12 flex-1 sm:flex-initial shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-purple-200 hover:bg-purple-50 transition-colors"
                >
                  <ViberIcon className="h-4 w-4 shrink-0 text-[#7360F2]" />
                  <span>{contact.viberLabel}</span>
                </a>

                <a
                  href={contact.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-1 sm:flex-initial shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-sky-200 hover:bg-sky-50 transition-colors"
                >
                  <TelegramIcon className="h-4 w-4 shrink-0 text-[#229ED9]" />
                  <span>{contact.telegramLabel}</span>
                </a>

                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-1 sm:flex-initial shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-emerald-200 hover:bg-emerald-50 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{contact.whatsappLabel}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {guarantee.title}
                    </h3>
                    <span className="text-xs text-slate-500">
                      {guarantee.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-slate-600">
                  {guarantee.description}
                </p>

                <div className="space-y-2 rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5 text-xs">
                  {guarantee.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-3 font-medium text-slate-900"
                    >
                      <span>{row.label}</span>
                      <span className="font-mono text-emerald-600">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
