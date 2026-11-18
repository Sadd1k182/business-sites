import { Check, Laptop, MonitorCheck, ShieldCheck } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function PcServicesSection() {
  const { pcSection } = siteContent;

  return (
    <section
      id="pc-services"
      className="py-16 sm:py-24 bg-slate-100 border-y border-slate-200 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 text-sm font-semibold text-emerald-800">
            <Laptop className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{pcSection.label}</span>
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {pcSection.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {pcSection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pcSection.services.map((service, index) => {
            const Icon = index === 0 ? MonitorCheck : ShieldCheck;
            return (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:border-emerald-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base font-medium text-slate-800"
                    >
                      <Check
                        className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5"
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
