import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';
import Button from './ui/Button';
import { siteData } from '../data/siteData';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_LINKS = [
  { label: 'Projects',  href: '#projects'  },
  { label: 'Services',  href: '#services'  },
  { label: 'Process',   href: '#process'   },
  { label: 'About',     href: '#about'     },
  { label: 'Contact',   href: '#contact'   },
];

const SECTION_IDS = ['projects', 'services', 'process', 'about', 'contact'];
const MD_BREAKPOINT = 768;

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= MD_BREAKPOINT : true
  );
  const activeId = useScrollSpy(SECTION_IDS);

  // Detect scroll for sticky glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Detect desktop breakpoint
  useEffect(() => {
    const onResize = () => {
      const desktop = window.innerWidth >= MD_BREAKPOINT;
      setIsDesktop(desktop);
      if (desktop) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    transition: 'background .3s ease, box-shadow .3s ease',
    background: 'var(--nav-bg)',
    borderBottom: '1px solid var(--nav-border)',
    boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,.18)' : 'none',
  };

  const activeLinkStyle = {
    color: '#fff',
    borderBottom: '2px solid rgba(255,255,255,0.8)',
  };

  const baseLinkStyle = {
    fontSize: '0.9rem',
    fontWeight: 500,
    color: 'var(--nav-muted)',
    padding: '4px 0',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: 'inherit',
    textDecoration: 'none',
    transition: 'color .2s ease, border-color .2s ease',
    display: 'inline-block',
  };

  return (
    <header role="banner" style={navStyle}>
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', height: 64, gap: '1rem' }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Minhaj — back to top"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.15rem',
            color: 'var(--nav-text)',
            marginRight: 'auto',
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}
        >
          {siteData.name}<span style={{ color: 'rgba(255,255,255,0.55)' }}>.</span>
        </a>

        {/* Desktop nav links */}
        {isDesktop && (
          <nav
            aria-label="Main navigation"
            style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}
          >
            {NAV_LINKS.map(link => {
              const id = link.href.slice(1);
              const isActive = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  style={{
                    ...baseLinkStyle,
                    ...(isActive ? activeLinkStyle : {}),
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--nav-text)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--nav-muted)'; }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        )}

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {isDesktop && (
            <Button
              as="a"
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              style={{
                height: 36,
                padding: '0 1.1rem',
                fontSize: '0.85rem',
                background: '#fff',
                color: '#014BAA',
                border: 'none',
                boxShadow: 'none',
              }}
            >
              Get a free quote
            </Button>
          )}

          {/* Mobile hamburger */}
          {!isDesktop && (
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(v => !v)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 38, height: 38,
                borderRadius: 8,
                border: '1px solid var(--nav-border)',
                background: 'transparent',
                color: 'var(--nav-text)',
                cursor: 'pointer',
                transition: 'background .15s ease',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {!isDesktop && menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          style={{
            position: 'fixed',
            top: 64, left: 0, right: 0, bottom: 0,
            background: 'var(--nav-bg)',
            padding: '2rem 1.5rem 3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            zIndex: 99,
            overflowY: 'auto',
          }}
        >
          {NAV_LINKS.map(link => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: activeId === id ? '#fff' : 'var(--nav-muted)',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--nav-border)',
                  display: 'block',
                  transition: 'color .15s ease',
                }}
              >
                {link.label}
              </a>
            );
          })}

          <Button
            as="a"
            href="#contact"
            onClick={e => handleNavClick(e, '#contact')}
            style={{ marginTop: '2rem', justifyContent: 'center', width: '100%' }}
          >
            Get a free quote
          </Button>

          {/* Available badge in menu */}
          <div style={{
            marginTop: '1.5rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.82rem', color: 'var(--muted)',
          }}>
            <span className="dot-available" />
            {siteData.availabilityText}
          </div>
        </nav>
      )}
    </header>
  );
}
