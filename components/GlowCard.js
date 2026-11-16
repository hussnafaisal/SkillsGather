'use client';

import Link from 'next/link';

/**
 * Glass card with a soft light that follows the pointer.
 * Renders a link when `href` is given, otherwise a plain div.
 */
export default function GlowCard({ href, className = '', children, ...rest }) {
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const classes = `card card--glow ${href ? 'card--link' : ''} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} onPointerMove={onMove} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <div className={classes} onPointerMove={onMove} {...rest}>
      {children}
    </div>
  );
}
