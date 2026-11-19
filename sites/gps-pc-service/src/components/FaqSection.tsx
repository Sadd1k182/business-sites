'use client';

import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function FaqSection() {
  const { content } = useLanguage();
  const { faqSection, faqs } = content;

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-16"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {faqSection.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            {faqSection.subtitle}
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs open:border-blue-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold text-slate-900">
                <span>{faq.question}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
