import { content } from '../data/content';
import { profile } from '../data/profile';

export default function Intro() {
  return (
    <header id="intro" className="intro">
      <img
        className="portrait"
        src="/photos/portrait.jpg"
        alt={content.a11y.portrait}
        width="480"
        height="480"
      />
      <h1>{content.name}</h1>
      <p className="label role">
        {content.role} · {content.location}
      </p>
      {content.intro.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
      <p className="links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </header>
  );
}
