import Link from 'next/link';
import { ArrowRight } from './Icons';

/** Internal link styled as a button. variant: primary | ghost */
export default function Button({ href, variant = 'primary', arrow = true, className = '', children, ...rest }) {
  return (
    <Link href={href} className={`btn btn--${variant} ${className}`.trim()} {...rest}>
      <span>{children}</span>
      {arrow && <ArrowRight size={20} />}
    </Link>
  );
}
