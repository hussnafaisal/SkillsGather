import Reveal from './Reveal';

/** Page header: eyebrow, h1, lead text, action buttons and an optional visual on the right. */
export default function PageHero({ eyebrow, title, lead, actions, aside, size = 'page' }) {
  return (
    <section className={`hero hero--${size}`} aria-labelledby="page-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          {eyebrow && (
            <p className="eyebrow hero__in" style={{ '--i': 0 }}>
              {eyebrow}
            </p>
          )}
          <h1 id="page-title" className="h1 hero__in" style={{ '--i': 1 }}>
            {title}
          </h1>
          {lead && (
            <p className="lead hero__in" style={{ '--i': 2 }}>
              {lead}
            </p>
          )}
          {actions && (
            <div className="hero__actions hero__in" style={{ '--i': 3 }}>
              {actions}
            </div>
          )}
        </div>
        {aside && (
          <Reveal className="hero__aside" direction="zoom" delay={200}>
            {aside}
          </Reveal>
        )}
      </div>
    </section>
  );
}
