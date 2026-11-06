export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <h1 className="hero-title" id="hero-title">
        KUBO
      </h1>

      <div className="hero-meta">
        <div className="hero-copy">
          <p>Kubo is a digital platform for discovering and exploring creative assets.</p>
          <p>Browse, preview, and access digital resources in one organized space.</p>
          <p>Find the right assets for your next creative project.</p>
        </div>

        <p className="hero-year">
          <span className="sr-only">Copyright </span>© 2026
        </p>
      </div>
    </section>
  );
}
