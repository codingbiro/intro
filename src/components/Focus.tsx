import { content } from '../data/content';
import Section from './Section';

export default function Focus() {
  const { title, lead, items } = content.focus;

  return (
    <Section id="focus" title={title} lead={lead}>
      <ul className="dashes">
        {items.map((item) => (
          <li key={item.slice(0, 32)}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}
