import { MapPin, PhoneCall, Send } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function Header() {
  const { contact } = siteContent;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a
          href="#"
          className="flex shrink-0 items-center gap-2.5 text-slate-900 font-bold tracking-tight"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col whitespace-nowrap">
            <span className="text-base sm:text-lg leading-tight font-extrabold">
              GPS та ПК Сервіс
            </span>
            <span className="hidden sm:block text-xs font-medium text-slate-500">
              Навігатори TIR • Windows • Linux
            </span>
          </span>
        </a>

        <nav
          aria-label="Основна навігація"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-semibold text-slate-600"
        >
          <a
            href="#gps-services"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            Навігатори
          </a>
          <a
            href="#pc-services"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            Windows і Linux
          </a>
          <a
            href="#how-it-works"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            Як працюємо
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            Питання
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap hover:text-blue-600 transition-colors py-2"
          >
            Контакти
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={contact.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex min-h-11 shrink-0 whitespace-nowrap items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <Send className="h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
            <span>Telegram</span>
          </a>
          <a
            href={`tel:${contact.phoneRaw}`}
            className="inline-flex min-h-11 shrink-0 whitespace-nowrap items-center gap-2 rounded-xl bg-blue-600 px-3.5 sm:px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
          >
            <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="sm:hidden">Подзвонити</span>
            <span className="hidden sm:inline">{contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
