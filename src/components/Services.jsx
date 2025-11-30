function Services() {
  return (
    <section id="services" className="section section-services">
      <div className="section-heading">
        <h2>Services</h2>
        <p>Design that feels soft, clean, and made for real small businesses.</p>
      </div>

      <div className="cards-grid">
        <article className="card card--service">
          <h3>Web Design</h3>
          <p>
            Clean, mobile-friendly websites made for small business owners who
            want something simple, beautiful, and functional.
          </p>
          <ul>
            <li>1–5 page website</li>
            <li>Mobile-friendly layout</li>
            <li>Soft pastel design</li>
            <li>Contact forms &amp; social links</li>
            <li>Basic SEO &amp; Google setup</li>
          </ul>
          <p className="card-price">Starting at $250–$350</p>
        </article>

        <article className="card card--service">
          <h3>Branding + Logo</h3>
          <p>
            Aesthetic color palettes, logos, and visual identity that makes your
            business feel soft, modern, and memorable.
          </p>
          <ul>
            <li>Logo (1–2 variations)</li>
            <li>Color palette &amp; typography guide</li>
            <li>Moodboard &amp; social icons</li>
          </ul>
          <p className="card-price">Starting at $60–$120</p>
        </article>

        <article className="card card--service">
          <h3>Website Refresh</h3>
          <p>
            Turn your old site into something cute, clean, and aligned with your
            current brand.
          </p>
          <ul>
            <li>Updated layout &amp; styling</li>
            <li>New fonts and colors</li>
            <li>Mobile improvements</li>
          </ul>
          <p className="card-price">Starting at $100–$180</p>
        </article>

        <article className="card card--service">
          <h3>Business Setup Help</h3>
          <p>
            Everything you need to get online with confidence — without dealing
            with confusing tech.
          </p>
          <ul>
            <li>Domain purchase &amp; setup</li>
            <li>Google Business Profile</li>
            <li>Booking tools &amp; business email</li>
          </ul>
          <p className="card-price">Starting at $40–$80</p>
        </article>
      </div>
    </section>
  );
}

export default Services;
