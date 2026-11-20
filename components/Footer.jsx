import Link from 'next/link';
import Logo from './Logo';
import { FOOTER_LINKS, LEGAL_LINKS } from '@/lib/content';
import { COPY } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link href="/" className="footer__logo" aria-label="SkillsGather home">
            <Logo size={44} />
          </Link>
          <p className="footer__tag">Exchange digital skills and help others put theirs to work.</p>
          <p className="footer__note">{COPY.privacy}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <h2 className="footer__title">Pages</h2>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__cta">
          <h2 className="footer__title">Faisalabad pilot</h2>
          <p>The team reviews submissions and coordinates matches manually.</p>
          <Link href="/join" className="btn btn--primary">
            <span>Join the Pilot</span>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} SkillsGather. Faisalabad pilot.</p>
          <nav aria-label="Legal">
            <ul className="footer__legal">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
