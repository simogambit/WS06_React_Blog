import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">Portfolion alku</Link>
        <nav className="nav">
          {/* TODO (student): Add navigation links as you complete routes. */}
          <NavLink to="/" end>Koti</NavLink>
          <NavLink to="/about">Abouttiarallaa</NavLink>
          <NavLink to="/contact">Kontaktit</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/posts/new">Uusi postaus</NavLink>
          {/* Suggested links to add: /about, /contact, /posts/new */}
        </nav>
      </div>
    </header>
  )
}

export default Header