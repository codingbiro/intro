import { content } from '../data/content';
import { profile } from '../data/profile';
import Section from './Section';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';

export default function Contact() {
  return (
    <Section id="contact" title={content.contact.title}>
      <p className="contact-text">{content.contact.text}</p>
      <div className="contact-cards">
        <a className="card contact-card" href={`mailto:${profile.email}`}>
          <MailIcon size={22} />
          <span className="contact-label">{content.contact.emailCta}</span>
          <span className="contact-value">{profile.email}</span>
        </a>
        <a className="card contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon size={22} />
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">{profile.linkedinHandle}</span>
        </a>
        <a className="card contact-card" href={profile.github} target="_blank" rel="noreferrer">
          <GitHubIcon size={22} />
          <span className="contact-label">GitHub</span>
          <span className="contact-value">{profile.githubHandle}</span>
        </a>
      </div>
    </Section>
  );
}
