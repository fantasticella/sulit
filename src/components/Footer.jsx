function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Sulit Design Studio · Bay Area, CA</p>
        <p className="footer-links">
          <a
            href="https://github.com/fantasticella"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span>·</span>
          <a href="#hero">Back to top ↑</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
