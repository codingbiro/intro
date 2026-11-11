import { content } from '../data/content';
import Section from './Section';

export default function Outside() {
  const { title, paragraphs, photo } = content.outside;

  return (
    <Section id="outside" title={title} photo={photo}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </Section>
  );
}
