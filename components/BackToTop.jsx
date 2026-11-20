'use client';

import { useScrolled } from '@/hooks/useScrolled';
import { ArrowUp } from './Icons';

/** Floating button that appears after scrolling and returns to the top. */
export default function BackToTop() {
  const visible = useScrolled(600);

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={`to-top ${visible ? 'is-visible' : ''}`}
      onClick={goTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={22} />
    </button>
  );
}
