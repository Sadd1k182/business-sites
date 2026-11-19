'use client';

import { useLanguage } from '@/context/LanguageContext';

export function HowItWorksSection() {
  const { content } = useLanguage();
  const { howItWorks } = content;

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-22 bg-white border-b border-slate-200 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 pb-10 border-b border-slate-200">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            {howItWorks.title}
          </h2>
          <p className="text-sm font-medium text-slate-600 max-w-xl">
            {howItWorks.tip}
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-extrabold text-[#185ADB]">
                  {step.number}
                </span>
                <div
                  aria-hidden="true"
                  className={`h-px flex-1 ${
                    idx === howItWorks.steps.length - 1
                      ? 'bg-slate-200'
                      : 'bg-slate-300'
                  }`}
                />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
