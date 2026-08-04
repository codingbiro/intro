import { content } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {content.brand} · Copenhagen
        </p>
        <p className="footer-note">{content.footer.madeWith}</p>
        <a href="#home">{content.footer.top} ↑</a>
      </div>
    </footer>
  );
}
