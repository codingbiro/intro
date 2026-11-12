export interface NavItem {
  id: string;
  label: string;
}

export interface Outcome {
  figure: string;
  title: string;
  text: string;
}

export interface TextLink {
  /** The exact words in a paragraph that become the link. */
  phrase: string;
  href: string;
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
      'Hi, I’m Vince. I’m a software engineer, and I lead two engineering teams. One runs a product catalogue and keeps billions of products current. The other runs the data platform a whole company works from.',
      'I lead by writing decisions down, handing over ownership early, and staying close to both the code and the cost. I like systems that keep working as they grow, and teams that can run them without me.',
    ],
  },
  outcomes: {
    title: 'Outcomes',
    lead: 'The scale I work at, and what I’ve built there with my teams.',
    items: [
      {
        figure: '50k',
        title: 'API requests a second at peak',
        text: 'The production traffic I build for, spread over dozens of horizontally autoscaled microservices on Kubernetes.',
      },
      {
        figure: '~1B',
        title: 'Product updates a day',
        text: 'Price and stock changes across a catalogue of billions of products. I led the team that kept it fast through a tenfold rise in traffic.',
      },
      {
        figure: '10M+',
        title: 'Web pages scraped a day',
        text: 'On a scraping platform my team rebuilt from scratch. It costs a quarter less to run and fails less often.',
      },
      {
        figure: '0 → 1',
        title: 'A data platform, and a team to run it',
        text: 'I hired the engineers and set the direction. Every pipeline now runs on it, and other teams use it without needing us.',
      },
      {
        figure: '−90%',
        title: 'Cost of vector search',
        text: 'I moved product search to a new vector search setup. It answers millions of searches a day in about 200 ms on average, at a tenth of the cost of the legacy one.',
      },
      {
        figure: 'GDPR',
        title: 'Privacy',
        text: 'Anonymisation and deletion of personal data, built into every part of the platform.',
      },
    ] satisfies Outcome[],
    note: 'I led the teams that built this. My part was choosing what to take on, making the trade-offs and finding the budget.',
  },
  focus: {
    title: 'Focus',
    lead: 'The problems I like working on.',
    items: [
      'Scale: capacity plans, load tests and runbooks finished well before the traffic arrives.',
      'Trustworthy data: every dataset easy to find, with a named owner, and every metric defined once.',
      'Cost: knowing what each system costs to run, and bringing it down.',
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
    links: [
      {
        phrase: 'IEEE Blockchain 2023',
        href: 'https://doi.org/10.1109/Blockchain60715.2023.00046',
      },
    ] satisfies TextLink[],
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
    note: 'No cookies. Visits are logged.',
  },
};
