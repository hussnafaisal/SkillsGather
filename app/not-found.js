import Button from '@/components/Button';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="status-page">
      <div className="container status-page__inner">
        <p className="status-page__code" aria-hidden="true">
          404
        </p>
        <h1 className="h1">We could not find that page</h1>
        <p className="lead">The link may be broken or the page may have moved.</p>
        <div className="hero__actions">
          <Button href="/">Back to Home</Button>
          <Button href="/join" variant="ghost">
            Join the Pilot
          </Button>
        </div>
      </div>
    </section>
  );
}
