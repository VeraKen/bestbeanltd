// FILE: components/Nav.jsx
export default function Nav() {
  return (
    <header className="site-header">
      <div className="wrap navbar">
        <div className="brand"><span className="mark" />BestBean</div>
        <nav className="navlinks">
          <a href="#about">About</a>
          <a href="#consulting">Consulting</a>
          <a href="#solutions">Solutions</a>
          <a href="#engagements">Engagements</a>
          <a href="#industries">Industries</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-cta">Schedule a Consultation</a>
      </div>
    </header>
  );
}
