import Reveal from './Reveal';

/** Standard page section: optional eyebrow, title and intro, then any children. */
export default function Section({ id, eyebrow, title, intro, className = '', children }) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={title ? titleId : undefined}>
      <div className="container">
        {(eyebrow || title || intro) && (
          <Reveal className="section__head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 id={titleId} className="h2">
                {title}
              </h2>
            )}
            {intro && <p className="lead">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
