'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    clarity?: (command: string, ...args: string[]) => void;
  }
}

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID || '';

export function ClarityAnalytics() {
  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const target = (event.target as HTMLElement | null)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        window.clarity?.('event', 'contact_phone_click');
      } else if (href.startsWith('viber://')) {
        window.clarity?.('event', 'contact_viber_click');
      } else if (href.includes('t.me/')) {
        window.clarity?.('event', 'contact_telegram_click');
      } else if (href.includes('wa.me/')) {
        window.clarity?.('event', 'contact_whatsapp_click');
      }
    }

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  if (!CLARITY_PROJECT_ID) {
    return null;
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `}
    </Script>
  );
}
