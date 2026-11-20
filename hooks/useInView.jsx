'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Tells you when an element has scrolled into view (IntersectionObserver).
 * Used by <Reveal /> to play the scroll animations once.
 */
export function useInView({ threshold = 0.12, rootMargin = '0px 0px -6% 0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Very old browsers: just show the content.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
