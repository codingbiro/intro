import { content } from '../data/content';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title={content.about.title}>
      <div className="about-grid">
        <div className="about-text">
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <ul className="about-facts">
          {content.about.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
