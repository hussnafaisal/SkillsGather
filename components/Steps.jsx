import Reveal from './Reveal';

/** Numbered, connected steps. Each item: { title, text } */
export default function Steps({ items, className = '' }) {
  return (
    <ol className={`steps ${className}`.trim()} style={{ '--count': items.length }}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} className="step" delay={i * 90}>
          <span className="step__num" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="h4">{item.title}</h3>
          <p>{item.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
