import { Camera } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function HowItWorksSection() {
  const { howItWorks } = siteContent;

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            {howItWorks.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xs"
            >
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-base font-extrabold text-white shadow-xs">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50/80 px-6 py-4 text-slate-800">
          <div className="flex items-center gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-slate-950">
              <Camera className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm sm:text-base font-medium leading-snug">
              {howItWorks.tip}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
