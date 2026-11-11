import { content } from '../data/content';
import { profile } from '../data/profile';
import Section from './Section';

export default function Contact() {
  const { title, text } = content.contact;

  return (
    <Section id="contact" title={title}>
      <p>{text}</p>
      <dl className="contact">
        <div>
          <dt className="label">Email</dt>
          <dd>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </dd>
        </div>
        <div>
          <dt className="label">LinkedIn</dt>
          <dd>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinHandle}
            </a>
          </dd>
        </div>
        <div>
          <dt className="label">GitHub</dt>
          <dd>
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.githubHandle}
            </a>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
