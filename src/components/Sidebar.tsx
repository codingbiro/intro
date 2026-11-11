import { content } from '../data/content';
import useActiveSection from '../hooks/useActiveSection';
import useTheme from '../theme/useTheme';
import { MoonIcon, SunIcon } from './icons';

const SECTION_IDS = content.nav.items.map((item) => item.id);

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const active = useActiveSection(SECTION_IDS);

  return (
    <aside className="sidebar">
      <a className="skip-link" href="#main">
        {content.nav.skip}
      </a>
      <a className="brand" href="#intro">
        {content.name}
      </a>
      <nav className="toc" aria-label={content.nav.label}>
        <p className="label">{content.nav.label}</p>
        <ul>
          {content.nav.items.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? 'location' : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className="theme-toggle"
        aria-label={theme === 'dark' ? content.a11y.lightMode : content.a11y.darkMode}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <SunIcon size={17} /> : <MoonIcon size={17} />}
      </button>
    </aside>
  );
}
