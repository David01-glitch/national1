import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/tutorials', label: 'Tutorials' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-forest-100">
      <nav className="container-px flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-forest-700">
          <span className="inline-block w-8 h-8 rounded-lg bg-forest-600 text-white grid place-items-center text-sm">NP</span>
          National Park Explorer
        </Link>
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-forest-700' : 'text-forest-900/70 hover:text-forest-700'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="hidden lg:inline-flex btn-primary text-sm">Plan a Trip</Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md hover:bg-forest-50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-forest-100 bg-white">
          <ul className="container-px py-3 space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-forest-900/80 hover:text-forest-700 font-medium"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
