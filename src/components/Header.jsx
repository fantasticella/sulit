function Header() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo" onClick={() => scrollToId("hero")}>
          <span className="logo-mark">:)</span>
          <span className="logo-text">Sulit Design Studio</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToId("services")}>Services</button>
          <button onClick={() => scrollToId("work")}>Work</button>
          <button onClick={() => scrollToId("about")}>About</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
