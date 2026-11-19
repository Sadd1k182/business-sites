'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Нагору / Scroll to top"
      className="fixed bottom-20 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <ArrowUp className="h-5 w-5 stroke-[2.5]" aria-hidden="true" />
    </button>
  );
}
