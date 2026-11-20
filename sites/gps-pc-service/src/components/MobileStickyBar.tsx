'use client';

import { PhoneCall } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TelegramIcon, ViberIcon } from '@/components/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';

export function MobileStickyBar() {
  const { content } = useLanguage();
  const { contact, nav } = content;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 380);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-2.5 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-lg backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${contact.phoneRaw}`}
          className="flex min-h-12 whitespace-nowrap items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-2.5 py-2.5 text-xs font-semibold text-white"
        >
          <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{nav.callShort}</span>
        </a>

        <a
          href={contact.viberUrl}
          className="flex min-h-12 whitespace-nowrap items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-2.5 text-xs font-semibold text-slate-900"
        >
          <ViberIcon className="h-4 w-4 shrink-0 text-[#7360F2]" />
          <span>Viber</span>
        </a>

        <a
          href={contact.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 whitespace-nowrap items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-2.5 text-xs font-semibold text-slate-900"
        >
          <TelegramIcon className="h-4 w-4 shrink-0 text-[#229ED9]" />
          <span>Telegram</span>
        </a>
      </div>
    </div>
  );
}
