'use client';

import {
  BadgeCheck,
  FileText,
  Gauge,
  Laptop,
  Monitor,
  MousePointerClick,
  Shield,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const winSpecIcons = [BadgeCheck, FileText, Shield] as const;
const linuxSpecIcons = [MousePointerClick, Gauge, ShieldCheck] as const;

export function PcServicesSection() {
  const { content } = useLanguage();
  const { pcSection, contact } = content;

  return (
    <section
      id="pc-services"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16 md:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
            <Laptop className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{pcSection.label}</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {pcSection.title}
          </h2>
          <p className="mt-3 text-base text-slate-600">{pcSection.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {pcSection.featurePills.map((pill, index) => {
              let pillClass =
                'rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600';
              if (index === 2) {
                pillClass =
                  'rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800';
              } else if (index === 4) {
                pillClass =
                  'rounded-md border border-amber-200/80 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900';
              }
              return (
                <span key={pill} className={pillClass}>
                  {pill}
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {pcSection.services.map((service, index) => {
            const isWindows = index === 0;
            const CardIcon = isWindows ? Monitor : Terminal;
            const specIcons = isWindows ? winSpecIcons : linuxSpecIcons;
            return (
              <article
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 hover:border-slate-300 transition-colors sm:p-8"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span
                      className={
                        isWindows
                          ? 'rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600'
                          : 'rounded-md border border-amber-200/60 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800'
                      }
                    >
                      {service.badge}
                    </span>
                    <CardIcon
                      className={`h-6 w-6 shrink-0 ${
                        isWindows ? 'text-blue-600' : 'text-amber-700'
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <div className="mb-8 space-y-3">
                    {service.specs.map((spec, specIdx) => {
                      const SpecIcon = specIcons[specIdx] ?? BadgeCheck;
                      return (
                        <div
                          key={spec.title}
                          className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5"
                        >
                          <SpecIcon
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              isWindows ? 'text-blue-600' : 'text-amber-700'
                            }`}
                            aria-hidden="true"
                          />
                          <div>
                            <span className="block text-sm font-semibold text-slate-900">
                              {spec.title}
                            </span>
                            <span className="text-xs text-slate-600">
                              {spec.subtitle}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <a
                  href={`tel:${contact.phoneRaw}`}
                  className={
                    isWindows
                      ? 'flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700 transition-colors'
                      : 'flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors'
                  }
                >
                  {service.ctaLabel}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
