import { Camera } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function HowItWorksSection() {
  const { howItWorks } = siteContent;

  return (
    <section id="how-it-works" className="py-14 sm:py-18 bg-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {howItWorks.title}
          </h2>
          <div className="inline-flex items-center gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-xs sm:text-sm font-medium text-slate-800">
            <Camera className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
            <span>{howItWorks.tip}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-extrabold text-white">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2.5 text-sm text-slate-600 leading-snug">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
