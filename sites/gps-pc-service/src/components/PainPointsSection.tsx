import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function PainPointsSection() {
  const { painPoints } = siteContent;

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600">
            Типові ситуації клієнтів
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            З якими проблемами до нас звертаються найчастіше
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {painPoints.map((item) => (
            <div
              key={item.problem}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
            >
              <div>
                <span
                  className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-bold ${
                    item.category === 'GPS / TIR'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-emerald-50 text-emerald-700'
                  }`}
                >
                  {item.category}
                </span>

                <div className="mt-4 flex items-start gap-3">
                  <AlertCircle
                    className="h-5 w-5 shrink-0 text-rose-500 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Проблема
                    </div>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                      {item.problem}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4 flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    Як ми це вирішуємо
                  </div>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
