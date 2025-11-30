function Work() {
  return (
    <section id="work" className="section section-work">
      <div className="work-wrapper">
        <div className="section-heading">
          <h2>My Work</h2>
          <p>A few soft, modern projects I’ve designed and built.</p>
        </div>

        <div className="work-grid">
          <article className="card card--work">
            <div className="card-thumb card-thumb--placeholder">
              <span>Project Screenshot</span>
            </div>
            <div className="card-body">
              <h3>FantasticElla Portfolio</h3>
              <p className="card-meta">Web Design</p>
              <p>
                A simple, clean personal site built with modern styling and soft
                touches.
              </p>
              <a
                href="https://fantasticella.github.io"
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                View Live Site →
              </a>
            </div>
          </article>

          <article className="card card--work">
            <div className="card-thumb card-thumb--placeholder">
              <span>Salon Layout Preview</span>
            </div>
            <div className="card-body">
              <h3>Hair Salon Website</h3>
              <p className="card-meta">Small Business Website · In Progress</p>
              <p>
                A pastel, soft design for a stylist — focused on photos, booking
                details, and a friendly vibe.
              </p>
            </div>
          </article>
        </div>

        <div className="work-cta">
          <button className="btn btn-dark">View All Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Work;
