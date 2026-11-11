export interface NavItem {
  id: string;
  label: string;
}

export interface Outcome {
  figure: string;
  title: string;
  text: string;
}

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const content = {
  name: 'Vince Biró',
  role: 'Head of Data & Product Platforms at GoWish',
  location: 'Copenhagen',
  nav: {
    label: 'On this page',
    skip: 'Skip to content',
    items: [
      { id: 'intro', label: 'Intro' },
      { id: 'outcomes', label: 'Outcomes' },
      { id: 'background', label: 'Background' },
      { id: 'focus', label: 'Focus' },
      { id: 'outside', label: 'Outside work' },
      { id: 'contact', label: 'Contact' },
    ] satisfies NavItem[],
  },
  a11y: {
    darkMode: 'Switch to dark mode',
    lightMode: 'Switch to light mode',
    portrait: 'Portrait of Vince Biró',
    anchor: 'Link to section',
  },
  intro: {
    paragraphs: [
      'Hi, I’m Vince. I’m a software engineer, and I lead two engineering teams at GoWish (Ønskeskyen), the social wishlist app. One runs the product catalogue and keeps billions of products current. The other runs the data platform the rest of the company works from.',
      'I lead by writing decisions down, handing over ownership early, and staying close to both the code and the cost. I like systems that keep working as they grow, and teams that can run them without me.',
    ],
  },
  outcomes: {
    title: 'Outcomes',
    lead: 'The scale we work at, and a few results from the teams I lead.',
    items: [
      {
        figure: '1B+',
        title: 'API requests a day',
        text: 'Across all of GoWish’s services.',
      },
      {
        figure: '~1B',
        title: 'Product updates a day',
        text: 'Price and stock changes for a catalogue of billions of products. The team kept it fast through a tenfold rise in traffic.',
      },
      {
        figure: '10M+',
        title: 'Web pages scraped a day',
        text: 'On a scraper we rebuilt in-house, on infrastructure we own. It costs a quarter less to run and fails less often.',
      },
      {
        figure: '0 → 1',
        title: 'A data platform, and a team to run it',
        text: 'I hired the engineers and set the direction. They migrated every existing pipeline, and the other engineering teams now serve themselves.',
      },
      {
        figure: '−90%',
        title: 'Cost of search',
        text: 'We moved product search to a different platform. It also got faster.',
      },
      {
        figure: 'GDPR',
        title: 'Privacy',
        text: 'Anonymisation and deletion of personal data across the platform, reviewed and signed off by Legal.',
      },
    ] satisfies Outcome[],
    note: 'The teams did this work. My part was deciding what to take on, making the trade-offs and finding the budget.',
  },
  focus: {
    title: 'Focus',
    lead: 'What I’m working on now.',
    items: [
      'Peak readiness: capacity plans, load tests and runbooks settled well before the busiest weeks of the year.',
      'A data catalogue, so anyone can find a dataset, see who owns it, and trust that a metric means the same thing everywhere.',
      'Wider catalogue coverage: more product feeds and better product matching.',
    ],
  },
  background: {
    title: 'Background',
    paragraphs: [
      'I joined GoWish as a senior software engineer and became technical lead of the e-commerce platform team a few months later. I then founded the company’s data engineering function, and today I lead both as Head of Data & Product Platforms.',
      'Before that I spent two years at Wiredelta in Copenhagen, building e-commerce systems for Danish clients. I started out in Budapest: full-stack development at Zoosh, where I first mentored other engineers, project management at Technokrats on projects for the National Bank of Hungary, and an internship at Telekom.',
      'I studied computer engineering at BME in Budapest and did my master’s in computer science at DTU, on the computer security line. My thesis, on secure and decentralised firmware updates for IoT devices, was published at IEEE Blockchain 2023.',
      'I’m originally from Hungary and live in Copenhagen.',
    ],
    photo: {
      src: '/photos/coast.jpg',
      alt: 'Vince leaning on a wooden railing in front of white chalk cliffs above a pale green sea',
      width: 750,
      height: 1000,
    } satisfies Photo,
  },
  outside: {
    title: 'Outside work',
    paragraphs: [
      'I hike a lot, mostly in the Alps and the Norwegian fjords. I also photograph the northern lights, and build models to predict when they’ll show up.',
      'The gym is a big part of my week. I’m also a little obsessed with my VO₂ max, so I try to run and cycle as well.',
      'To wind down I play chess (blitz and classical), the New York Times games and Counter-Strike, and I watch LaLiga.',
    ],
    photo: {
      src: '/photos/ridge.jpg',
      alt: 'Vince in a rain shell and beanie on a snow-dusted mountain ridge, with jagged peaks behind',
      width: 800,
      height: 1000,
    } satisfies Photo,
  },
  contact: {
    title: 'Contact',
    text: 'Email is the best way to reach me.',
  },
  footer: {
    note: 'No cookies, no tracking.',
  },
};
