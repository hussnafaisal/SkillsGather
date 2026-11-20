'use client';

import { useInView } from '@/hooks/useInView';

/**
 * Wraps content and fades/slides it in when it scrolls into view.
 * direction: up | left | right | zoom
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  direction = 'up',
  children,
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${direction} ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={{ '--d': `${Math.round(delay * 0.5)}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
