'use client';

import { PhoneCall } from 'lucide-react';
import {
  TelegramIcon,
  ViberIcon,
  WhatsAppIcon,
} from '@/components/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';

export function ContactSection() {
  const { content } = useLanguage();
  const { contact } = content;

  return (
    <footer
      id="contact"
      className="bg-[#0B1118] text-white pt-16 pb-28 sm:pb-16 border-t border-slate-800 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start pb-14 border-b border-slate-800">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl leading-tight">
              {contact.ctaHeading}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-[56ch]">
              {contact.ctaSubtitle}
            </p>

            <div className="pt-2 space-y-1.5 text-sm text-slate-400">
              <p className="font-medium text-slate-200">{contact.city}</p>
              <p>{contact.schedule}</p>
            </div>
          </div>

          <div className="lg:col-span-6 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="sm:col-span-2 flex min-h-13 whitespace-nowrap items-center justify-center gap-2.5 rounded-lg bg-[#F59E0B] px-5 py-3.5 text-base sm:text-lg font-extrabold text-slate-950 hover:bg-amber-400 transition-colors"
            >
              <PhoneCall className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{contact.callLabel}: </span>
              <span>{contact.phoneDisplay}</span>
            </a>

            <a
              href={contact.viberUrl}
              className="flex min-h-12 whitespace-nowrap items-center justify-center gap-2.5 rounded-lg bg-[#7360F2] px-4 py-3 text-base font-bold text-white hover:bg-[#624DE8] transition-colors"
            >
              <ViberIcon className="h-5 w-5 shrink-0" />
              <span>{contact.viberLabel}</span>
            </a>

            <a
              href={contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 whitespace-nowrap items-center justify-center gap-2.5 rounded-lg bg-[#229ED9] px-4 py-3 text-base font-bold text-white hover:bg-[#1C8EC4] transition-colors"
            >
              <TelegramIcon className="h-5 w-5 shrink-0" />
              <span>{contact.telegramLabel}</span>
            </a>

            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 flex min-h-12 whitespace-nowrap items-center justify-center gap-2.5 rounded-lg border border-slate-700 bg-[#111923] px-4 py-3 text-base font-semibold text-emerald-400 hover:bg-slate-800 transition-colors"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>{contact.whatsappLabel}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-400">
          <p>
            © 2026 {contact.masterName}. {contact.copyrightSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}
