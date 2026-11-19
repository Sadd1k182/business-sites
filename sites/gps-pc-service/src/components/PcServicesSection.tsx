'use client';

import { Check, Laptop, MonitorCheck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function PcServicesSection() {
  const { content } = useLanguage();
  const { pcSection } = content;

  return (
    <section
      id="pc-services"
      className="py-14 sm:py-20 bg-slate-100 border-y border-slate-200 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs sm:text-sm font-semibold text-emerald-800">
              <Laptop className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{pcSection.label}</span>
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {pcSection.title}
            </h2>
            <p className="mt-2 text-base text-slate-600">
              {pcSection.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {pcSection.featurePills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                <span>{pill}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pcSection.services.map((service, index) => {
            const Icon = index === 0 ? MonitorCheck : ShieldCheck;
            return (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
