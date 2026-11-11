import { content } from '../data/content';
import Section from './Section';

export default function Outcomes() {
  const { title, lead, items, note } = content.outcomes;

  return (
    <Section id="outcomes" title={title} lead={lead}>
      <ul className="outcomes">
        {items.map((item) => (
          <li key={item.title}>
            <span className="figure">{item.figure}</span>
            <p>
              <strong>{item.title}</strong>
              {item.text}
            </p>
          </li>
        ))}
      </ul>
      <p className="note">{note}</p>
    </Section>
  );
}
