import Reveal from './Reveal';

/** Closing call-to-action band repeated at the bottom of each page. */
export default function CtaBand({ title, text, children }) {
  return (
    <section className="section section--cta" aria-label="Call to action">
      <div className="container">
        <Reveal className="cta-band" direction="zoom">
          <div className="cta-band__glow" aria-hidden="true" />
          <h2 className="h2">{title}</h2>
          {text && <p className="lead">{text}</p>}
          <div className="cta-band__actions">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
