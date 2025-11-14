function Header({ title, subtitle, description }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <p className="eyebrow">{subtitle}</p>
        <h1>{title}</h1>
        <p className="description">{description}</p>
      </div>
    </header>
  );
}

export default Header;
