import { useEffect, useState } from 'react';
import { content } from '../data/content';
import useTheme from '../theme/useTheme';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links: Array<[string, string]> = [
    ['about', content.nav.about],
    ['skills', content.nav.skills],
    ['contact', content.nav.contact],
  ];

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <a className="skip-link" href="#main">
        {content.nav.skip}
      </a>
      <div className="container header-inner">
        <a className="brand" href="#home">
          <img src="/logo.png" alt={content.brand} width="256" height="256" />
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            aria-label={theme === 'dark' ? content.a11y.lightMode : content.a11y.darkMode}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? content.nav.closeMenu : content.nav.menu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav className="nav-mobile" aria-label="Primary">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
