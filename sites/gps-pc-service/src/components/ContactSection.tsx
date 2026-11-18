import {
  Clock,
  MapPin,
  MessageCircle,
  PhoneCall,
  Send,
  Smartphone,
} from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white pt-16 pb-28 sm:pb-16 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-800/70 p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Потрібно оновити навігатор або налаштувати комп’ютер?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Зателефонуйте або напишіть у зручний для вас месенджер. Можна одразу надіслати фото навігатора чи моделі ноутбука — підкажемо все по суті.
              </p>

              <div className="space-y-3 pt-2 text-sm sm:text-base text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                  <span>{contact.city}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                  <span>{contact.schedule}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="sm:col-span-2 flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-amber-500 px-6 py-4 text-lg font-extrabold text-slate-950 shadow-md hover:bg-amber-400 transition-colors"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                <span>Зателефонувати: {contact.phoneDisplay}</span>
              </a>

              <a
                href={contact.viberUrl}
                className="flex min-h-13 items-center justify-center gap-2.5 rounded-2xl bg-purple-600 px-5 py-3.5 text-base font-bold text-white hover:bg-purple-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Написати у Viber</span>
              </a>

              <a
                href={contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-13 items-center justify-center gap-2.5 rounded-2xl bg-sky-600 px-5 py-3.5 text-base font-bold text-white hover:bg-sky-500 transition-colors"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                <span>Написати у Telegram</span>
              </a>

              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 flex min-h-13 items-center justify-center gap-2.5 rounded-2xl border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-base font-semibold text-emerald-400 hover:bg-slate-900 transition-colors"
              >
                <Smartphone className="h-5 w-5" aria-hidden="true" />
                <span>Написати у WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-slate-400">
          <p>
            © 2026 {contact.masterName}. Прошивка GPS-навігаторів та налаштування Windows / Linux.
          </p>
        </div>
      </div>
    </footer>
  );
}
