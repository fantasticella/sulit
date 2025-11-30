function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-decor hero-decor--cloud" />
      <div className="hero-decor hero-decor--smiley" />
      <div className="hero-inner">
        <h1 className="hero-title">Sulit Design Studio</h1>
        <p className="hero-tagline">
          Soft, modern websites for real small businesses.
        </p>
        <p className="hero-subtitle">
          I create friendly, aesthetic websites that help beauty, service, and
          local businesses stand out online — without the stress or big-agency
          prices.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Start a Project
          </a>
        </div>
      </div>

      <div className="hero-photo-bubble">
        <span className="hero-photo-text">Your photo here</span>
      </div>
    </section>
  );
}

export default Hero;
