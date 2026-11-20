'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** Cycles through a list of words with a small animation. Stays still for reduced-motion users. */
export default function RotatingWord({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || words.length < 2) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [reduced, words.length, interval]);

  return (
    <span className="rotator">
      <span className="rotator__label">Starting with</span>
      <span key={words[index]} className="rotator__word" aria-live="off">
        {words[index]}
      </span>
    </span>
  );
}
