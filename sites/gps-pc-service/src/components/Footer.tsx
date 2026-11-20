'use client';

import { PhoneCall } from 'lucide-react';
import { TelegramIcon, ViberIcon } from '@/components/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { content } = useLanguage();
  const { contact, nav } = content;
  const { footer } = contact;

  return (
    <footer className="w-full border-t border-slate-200 bg-white pt-12 pb-24 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-slate-200 pb-10 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="text-base font-bold text-slate-900">
                {nav.brandTitle}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{nav.cityPill}</span>
              </span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-600">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
              {footer.navHeading}
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a
                  href="#gps-services"
                  className="hover:text-blue-600 transition-colors"
                >
                  {footer.gpsLinkLabel}
                </a>
              </li>
              <li>
                <a
                  href="#pc-services"
                  className="hover:text-blue-600 transition-colors"
                >
                  {footer.pcLinkLabel}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-blue-600 transition-colors"
                >
                  {footer.stepsLinkLabel}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-600 transition-colors"
                >
                  {footer.faqLinkLabel}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
              {footer.channelsHeading}
            </h4>
            <div className="mb-3 flex items-center gap-2">
              <a
                href={contact.viberUrl}
                aria-label="Viber"
                title="Viber"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-[#F8FAFC] text-[#7360F2] hover:bg-purple-50 transition-colors"
              >
                <ViberIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-[#F8FAFC] text-[#229ED9] hover:bg-sky-50 transition-colors"
              >
                <TelegramIcon className="h-4 w-4" />
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                aria-label={contact.callLabel}
                title={contact.callLabel}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-[#F8FAFC] text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="font-mono text-xs font-semibold text-slate-900">
              {contact.phoneDisplay}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>{footer.copyright}</span>
          <div className="flex items-center gap-4">
            <span>{footer.privacyLabel}</span>
            <span>{footer.termsLabel}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
