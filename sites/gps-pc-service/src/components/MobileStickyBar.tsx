import { MessageCircle, PhoneCall, Send } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function MobileStickyBar() {
  const { contact } = siteContent;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-2.5 shadow-lg backdrop-blur sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${contact.phoneRaw}`}
          className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-3 py-2.5 text-xs font-bold text-white"
        >
          <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Подзвонити</span>
        </a>

        <a
          href={contact.viberUrl}
          className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-purple-600 px-3 py-2.5 text-xs font-bold text-white"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Viber</span>
        </a>

        <a
          href={contact.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-sky-600 px-3 py-2.5 text-xs font-bold text-white"
        >
          <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Telegram</span>
        </a>
      </div>
    </div>
  );
}
