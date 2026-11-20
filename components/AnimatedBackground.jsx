/** Fixed, pure-CSS animated background: drifting glow orbs, a faint grid and floating shapes. */
export default function AnimatedBackground() {
  const shapes = [
    { x: '8%', y: '22%', s: 54, d: 0 },
    { x: '86%', y: '14%', s: 38, d: 3 },
    { x: '72%', y: '62%', s: 64, d: 6 },
    { x: '18%', y: '74%', s: 44, d: 2 },
    { x: '48%', y: '40%', s: 30, d: 8 },
    { x: '92%', y: '86%', s: 48, d: 5 },
  ];

  return (
    <div className="bg" aria-hidden="true">
      <span className="bg__orb bg__orb--1" />
      <span className="bg__orb bg__orb--2" />
      <span className="bg__orb bg__orb--3" />
      <span className="bg__grid" />
      {shapes.map((shape, i) => (
        <span
          key={i}
          className="bg__shape"
          style={{ '--x': shape.x, '--y': shape.y, '--s': `${shape.s}px`, '--delay': `-${shape.d}s` }}
        />
      ))}
      <span className="bg__noise" />
    </div>
  );
}
