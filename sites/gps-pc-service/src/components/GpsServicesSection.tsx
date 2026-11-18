import { Check, Compass, Globe, Languages, Truck } from 'lucide-react';
import { siteContent } from '@/data/site-content';

const serviceIcons = [Languages, Truck, Compass] as const;

export function GpsServicesSection() {
  const { gpsSection } = siteContent;

  return (
    <section id="gps-services" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-semibold text-blue-700">
            <Truck className="h-4 w-4" aria-hidden="true" />
            <span>{gpsSection.label}</span>
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {gpsSection.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {gpsSection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {gpsSection.services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Globe;
            return (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 shadow-sm"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-5">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-medium text-slate-800"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-blue-600 mt-0.5"
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

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/60 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900">
            З якими навігаторами ми працюємо найчастіше:
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {gpsSection.supportedDevices.map((device) => (
              <div
                key={device}
                className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-xs border border-blue-100"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                <span>{device}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
