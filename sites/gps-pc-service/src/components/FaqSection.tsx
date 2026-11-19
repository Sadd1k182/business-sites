'use client';

import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function FaqSection() {
  const { content } = useLanguage();
  const { faqSection, faqs } = content;

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-[#F6F7F9] scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              {faqSection.title}
            </h2>
            <p className="mt-2.5 text-base text-slate-600 leading-relaxed">
              {faqSection.subtitle}
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-base sm:text-lg font-bold text-slate-950">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-slate-900"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-base text-slate-600 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
