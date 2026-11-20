'use client';

import {
  CheckCircle2,
  Compass,
  Cpu,
  Navigation,
  Truck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const serviceIcons = [Navigation, Compass, Cpu] as const;

export function GpsServicesSection() {
  const { content } = useLanguage();
  const { gpsSection, contact } = content;

  return (
    <section
      id="gps-services"
      className="border-b border-slate-200 bg-white py-16 md:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-md border border-amber-200/80 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
            <Truck className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{gpsSection.label}</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {gpsSection.title}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {gpsSection.subtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {gpsSection.devicePills.map((pill, index) => {
              const isHighlight = index === gpsSection.devicePills.length - 1;
              return (
                <span
                  key={pill}
                  className={
                    isHighlight
                      ? 'rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900'
                      : 'rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600'
                  }
                >
                  {pill}
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {gpsSection.services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Compass;
            const isFeatured = Boolean(service.featured);
            return (
              <article
                key={service.title}
                className={
                  isFeatured
                    ? 'relative flex flex-col justify-between rounded-2xl border-2 border-blue-600 bg-white p-7 shadow-sm transition-colors'
                    : 'flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 hover:border-slate-300 transition-colors'
                }
              >
                {isFeatured ? (
                  <div className="absolute -top-3 right-6 rounded-full bg-blue-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                    {gpsSection.featuredTag}
                  </div>
                ) : null}

                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span
                      className={
                        isFeatured
                          ? 'rounded border border-blue-100 bg-blue-50 px-2 py-0.5 font-mono text-xs font-semibold text-blue-700'
                          : 'rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-xs font-semibold text-blue-700'
                      }
                    >
                      {service.badge}
                    </span>
                    <Icon
                      className="h-5 w-5 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mb-8 space-y-3 text-sm text-slate-600">
                    {service.highlights.map((item, idx) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isFeatured ? 'text-blue-600' : 'text-emerald-600'
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={
                            isFeatured && idx === 0
                              ? 'font-medium text-slate-900'
                              : undefined
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`tel:${contact.phoneRaw}`}
                  className={
                    isFeatured
                      ? 'flex min-h-11 w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors'
                      : 'flex min-h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors'
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
