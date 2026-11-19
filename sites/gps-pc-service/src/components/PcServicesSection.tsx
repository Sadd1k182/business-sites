'use client';

import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function PcServicesSection() {
  const { locale, content } = useLanguage();
  const { pcSection } = content;

  return (
    <section
      id="pc-services"
      className="py-16 sm:py-24 bg-[#F6F7F9] border-b border-slate-200 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-5">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl leading-tight">
              {pcSection.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {pcSection.subtitle}
            </p>

            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-500 mb-2.5">
                {locale === 'uk' ? 'Що входить у налаштування:' : 'Included with every setup:'}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pcSection.featurePills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-block rounded-md border border-slate-200/90 bg-white px-2.5 py-1 text-xs font-semibold text-slate-800"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 divide-y divide-slate-200 border-t border-b border-slate-200">
            {pcSection.services.map((service) => (
              <div
                key={service.title}
                className="py-7 first:pt-6 last:pb-6 grid gap-4 sm:grid-cols-12"
              >
                <div className="sm:col-span-5 pr-2">
                  <h3 className="font-display text-lg font-bold text-slate-950 leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="sm:col-span-7 space-y-2.5 sm:pl-4 sm:border-l sm:border-slate-200/80">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-medium text-slate-800"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
