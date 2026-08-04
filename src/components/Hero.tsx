import { content } from '../data/content';
import { profile } from '../data/profile';
import useTypewriter from '../hooks/useTypewriter';
import { ArrowDownIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './icons';

export default function Hero() {
  const typed = useTypewriter(content.hero.roles);

  return (
    <section id="home" className="hero">
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />
      <div className="blob blob-c" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="avatar-ring">
          <img src="/face.jpg" alt={content.a11y.portrait} width="800" height="800" />
        </div>
        <p className="hero-location">
          <PinIcon size={15} />
          {content.hero.location}
        </p>
        <h1>
          <span className="wave" aria-hidden="true">
            👋
          </span>{' '}
          {content.hero.greeting}
        </h1>
        <p className="hero-type">
          <span className="sr-only">{content.hero.roles.join(' · ')}</span>
          <span aria-hidden="true">
            {typed}
            <span className="cursor" />
          </span>
        </p>
        <p className="hero-copy">{content.hero.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <MailIcon size={17} />
            {content.hero.talk}
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            <GitHubIcon size={17} />
            GitHub
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon size={17} />
            LinkedIn
          </a>
        </div>
      </div>
      <a className="hero-scroll" href="#about" aria-label={content.a11y.scrollDown}>
        <ArrowDownIcon size={20} />
      </a>
    </section>
  );
}
