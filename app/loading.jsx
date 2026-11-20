export default function Loading() {
  return (
    <div className="container section" aria-busy="true" aria-live="polite">
      <div className="skeleton skeleton--title" />
      <div className="skeleton skeleton--line" />
      <div className="skeleton skeleton--line skeleton--short" />
      <div className="skeleton skeleton--card" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
