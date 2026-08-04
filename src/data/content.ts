export interface SkillGroup {
  title: string;
  items: string[];
}

export const content = {
  brand: 'Vince Biró',
  nav: {
    about: 'About',
    skills: 'Skills',
    contact: 'Contact',
    menu: 'Open menu',
    closeMenu: 'Close menu',
    skip: 'Skip to content',
  },
  a11y: {
    darkMode: 'Switch to dark mode',
    lightMode: 'Switch to light mode',
    portrait: 'Portrait of Vince Biró',
    scrollDown: 'Scroll to the about section',
  },
  hero: {
    greeting: 'Hi, I am Vince',
    roles: [
      'Engineer & technical leader',
      'Full stack engineering',
      'Data platforms & DevOps',
      'Teams and systems that scale',
    ],
    intro:
      'I am an engineer and technical leader who loves building things that scale — and helping teams do the same in a maintainable and automated way.',
    location: 'Copenhagen, Denmark',
    talk: "Let's talk",
  },
  about: {
    title: 'About me',
    paragraphs: [
      'Over the past 7+ years I have worked across the full stack: backend services in Node.js and TypeScript, frontends in React and Next.js, data platforms on BigQuery and dbt, and infrastructure on GCP, AWS, Kubernetes and serverless. I am just as comfortable debugging a gnarly microservice issue as I am shaping a data roadmap or mentoring engineers.',
      'These days I split my time between leading a software engineering team building high-throughput systems — billions of daily transactions, 100M+ daily scrapes — and standing up a new data engineering function from scratch: hiring the team, picking the stack and setting the direction.',
      'Before all that, I did a Master’s in Computer Security and Cloud Technologies, where I got into blockchain and Web3. My thesis on secure, decentralized IoT firmware dispatch was published at the IEEE Blockchain 2023 Conference.',
      'I care about code quality, security and automation. But mostly I care about building teams and systems that people can actually rely on.',
    ],
    facts: [
      '📍 Copenhagen, Denmark',
      '💼 Ønskeskyen · GoWish',
      '👥 3+ years leading teams',
      '📄 IEEE Blockchain 2023',
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Apollo Client', 'HTML & CSS'],
      },
      {
        title: 'Backend',
        items: ['Node.js', 'GraphQL', 'Apollo Server', 'REST APIs', 'Microservices', 'Blockchain & Web3'],
      },
      {
        title: 'Data platforms',
        items: ['BigQuery', 'dbt', 'PostgreSQL', 'Prisma'],
      },
      {
        title: 'DevOps & Cloud',
        items: ['Docker', 'Kubernetes', 'Serverless', 'AWS', 'GCP', 'CI/CD'],
      },
      {
        title: 'Leadership',
        items: [
          'Tech leadership',
          'Hiring & team building',
          'Mentoring',
          'Project management',
          'Data roadmaps',
        ],
      },
    ] satisfies SkillGroup[],
  },
  contact: {
    title: "Let's talk!",
    text: 'Have a question or a project in mind? My inbox is always open.',
    emailCta: 'Write me an email',
  },
  footer: {
    madeWith: 'Built with React, Vite & TypeScript. No cookies, no tracking.',
    top: 'Back to top',
  },
};
