import Link from 'next/link';
import PageHero from './PageHero';
import Reveal from './Reveal';
import { LEGAL_UPDATED } from '@/lib/legal';
import { LEGAL_LINKS } from '@/lib/content';

/** Shared layout for Terms, Privacy and Cookie pages. `doc` comes from lib/legal.jsx. */
export default function LegalPage({ doc, currentHref }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} lead={doc.intro} />

      <section className="section" aria-label={doc.title}>
        <div className="container legal">
          <aside className="legal__side">
            <nav className="card legal__nav" aria-label="Contents">
              <h2 className="legal__navtitle">On this page</h2>
              <ol>
                {doc.sections.map((section, i) => (
                  <li key={section.title}>
                    <a href={`#s${i + 1}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="legal__body">
            <p className="legal__updated">Last updated: {LEGAL_UPDATED}</p>
            {doc.sections.map((section, i) => (
              <Reveal key={section.title} as="section" className="legal__block" id={`s${i + 1}`}>
                <h2 className="h3">
                  {i + 1}. {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>
            ))}

            <div className="legal__more">
              <p>Other documents:</p>
              <ul>
                {LEGAL_LINKS.filter((link) => link.href !== currentHref).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="btn btn--ghost">
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
