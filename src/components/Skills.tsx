import { content } from '../data/content';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" title={content.skills.title}>
      <div className="skills-grid">
        {content.skills.groups.map((group) => (
          <div className="card skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="chip-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
