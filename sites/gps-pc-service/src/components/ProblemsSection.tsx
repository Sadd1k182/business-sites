'use client';

import {
  AlertTriangle,
  ArrowRight,
  Gauge,
  SlidersHorizontal,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const problemStyles = [
  {
    Icon: SlidersHorizontal,
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    Icon: AlertTriangle,
    badgeClass: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    Icon: Gauge,
    badgeClass: 'bg-blue-50 text-blue-600 border-blue-100',
  },
] as const;

export function ProblemsSection() {
  const { content } = useLanguage();
  const { problemsSection } = content;

  return (
    <section
      id="problems"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16 md:py-20 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl md:mb-12">
          <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            {problemsSection.eyebrow}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {problemsSection.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            {problemsSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {problemsSection.items.map((item, index) => {
            const style = problemStyles[index] ?? problemStyles[0];
            const Icon = style.Icon;
            return (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors"
              >
                <div>
                  <div
                    className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl border ${style.badgeClass}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-start gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-blue-600">
                  <ArrowRight
                    className="mt-0.5 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item.solution}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
