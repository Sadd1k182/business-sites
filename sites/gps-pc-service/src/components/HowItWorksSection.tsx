'use client';

import {
  CheckCircle2,
  Handshake,
  PhoneCall,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const stepIcons = [PhoneCall, Handshake, Wrench, CheckCircle2] as const;

export function HowItWorksSection() {
  const { content } = useLanguage();
  const { howItWorks } = content;

  return (
    <section
      id="how-it-works"
      className="border-b border-slate-200 bg-white py-16 md:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            {howItWorks.eyebrow}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            {howItWorks.tip}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? CheckCircle2;
            const isLast = index === howItWorks.steps.length - 1;
            return (
              <div
                key={step.number}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-slate-300">
                      {step.number}
                    </span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white ${
                        isLast ? 'text-emerald-600' : 'text-blue-600'
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 text-[11px] font-medium text-slate-500">
                  {step.footerLabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
