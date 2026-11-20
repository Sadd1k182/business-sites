'use client';

import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function FaqSection() {
  const { content } = useLanguage();
  const { faqSection, faqs } = content;

  return (
    <section
      id="faq"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16 md:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            {faqSection.eyebrow}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {faqSection.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            {faqSection.subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300 open:border-blue-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 text-left text-sm font-bold text-slate-900 sm:text-base">
                <span>{faq.question}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:text-blue-600"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-5 pb-5">
                <p className="border-t border-slate-100 pt-3 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
