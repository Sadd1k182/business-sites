'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTopButton() {
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
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Нагору / Scroll to top"
      className="fixed bottom-20 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-600 shadow-md transition-colors hover:border-blue-200 hover:bg-blue-50 sm:bottom-6 sm:right-6"
    >
      <ArrowUp className="h-5 w-5 stroke-[2.25]" aria-hidden="true" />
    </button>
  );
}
