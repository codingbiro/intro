import type { ReactNode } from 'react';
import { content, type TextLink } from '../data/content';
import Section from './Section';

/** Turns the first matching phrase in a paragraph into an outbound link. */
function withLink(paragraph: string, links: TextLink[]): ReactNode {
  for (const { phrase, href } of links) {
    const at = paragraph.indexOf(phrase);
    if (at === -1) continue;

    return (
      <>
        {paragraph.slice(0, at)}
        <a href={href} target="_blank" rel="noreferrer">
          {phrase}
        </a>
        {paragraph.slice(at + phrase.length)}
      </>
    );
  }
  return paragraph;
}

export default function Background() {
  const { title, paragraphs, links, photo } = content.background;

  return (
    <Section id="background" title={title} photo={photo}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{withLink(paragraph, links)}</p>
      ))}
    </Section>
  );
}
