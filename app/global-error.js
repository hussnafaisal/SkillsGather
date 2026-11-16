'use client';

// Last-resort error screen: replaces the whole page if the root layout itself fails.
// It cannot use the site stylesheet, so it carries its own small inline styles.
export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#050d1f',
          color: '#eaf3ff',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <div>
          <h1 style={{ fontSize: '2rem', margin: '0 0 12px' }}>Something went wrong</h1>
          <p style={{ color: '#a9bdd9', margin: '0 0 24px' }}>Please reload the page and try again.</p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              background: 'linear-gradient(135deg,#2ba0e0,#1f5ca3)',
              color: '#fff',
              border: 0,
              borderRadius: 999,
              padding: '14px 28px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
