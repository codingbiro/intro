import { content } from '../data/content';
import Section from './Section';

export default function Background() {
  const { title, paragraphs, photo } = content.background;

  return (
    <Section id="background" title={title} photo={photo}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </Section>
  );
}
