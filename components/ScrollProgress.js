'use client';

import { useRef } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

/** Thin gradient bar at the very top that fills as you scroll down the page. */
export default function ScrollProgress() {
  const barRef = useRef(null);
  useScrollProgress(barRef);

  return (
    <div className="progress" aria-hidden="true">
      <div ref={barRef} className="progress__bar" />
    </div>
  );
}
