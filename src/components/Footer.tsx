import { content } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer label">
      <span>
        © {year} {content.name}
      </span>
      <span>{content.footer.note}</span>
    </footer>
  );
}
