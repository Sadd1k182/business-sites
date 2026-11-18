import { MapPin, PhoneCall, Send } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function Header() {
  const { contact } = siteContent;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#"
          className="flex items-center gap-2.5 text-slate-900 font-bold tracking-tight"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-base sm:text-lg leading-tight">
              GPS та ПК Сервіс
            </span>
            <span className="text-xs font-medium text-slate-500">
              Навігатори (TIR) • Windows • Linux
            </span>
          </span>
        </a>

        <nav
          aria-label="Основна навігація"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700"
        >
          <a href="#gps-services" className="hover:text-blue-600 transition-colors py-2">
            GPS-навігатори
          </a>
          <a href="#pc-services" className="hover:text-blue-600 transition-colors py-2">
            Windows та Linux
          </a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors py-2">
            Як ми працюємо
          </a>
          <a href="#faq" className="hover:text-blue-600 transition-colors py-2">
            Часті питання
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors py-2">
            Контакти
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            <Send className="h-4 w-4 text-sky-600" aria-hidden="true" />
            <span>Telegram</span>
          </a>
          <a
            href={`tel:${contact.phoneRaw}`}
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            <span>{contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
