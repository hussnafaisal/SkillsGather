'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { AlertIcon } from '@/components/Icons';

// Shown when something throws while rendering a page. The navbar and footer stay in place.
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('[SkillsGather] Page error:', error);
  }, [error]);

  return (
    <section className="status-page">
      <div className="container status-page__inner">
        <span className="status-page__icon">
          <AlertIcon size={40} />
        </span>
        <h1 className="h1">Something went wrong</h1>
        <p className="lead">
          We could not load this page. Please try again, or head back to the home page.
        </p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={() => reset()}>
            <span>Try again</span>
          </button>
          <Link href="/" className="btn btn--ghost">
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
