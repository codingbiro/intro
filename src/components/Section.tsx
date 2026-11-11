import type { ReactNode } from 'react';
import { content, type Photo } from '../data/content';

interface Props {
  id: string;
  title: string;
  lead?: string;
  /** Optional photo, shown beside the text on wide screens and below it on narrow ones. */
  photo?: Photo;
  children: ReactNode;
}

export default function Section({ id, title, lead, photo, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>
        {title}
        <a className="anchor" href={`#${id}`} aria-label={`${content.a11y.anchor}: ${title}`}>
          #
        </a>
      </h2>
      {lead ? <p className="lead">{lead}</p> : null}
      {photo ? (
        <div className="split">
          <div>{children}</div>
          <img
            className="photo"
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        children
      )}
    </section>
  );
}
