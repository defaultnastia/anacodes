export const getAboutText = (accentClass: string) => [
  {
    topic: "expierience",
    icon: "👩‍💻",
    text: (
      <>
        I spent several years in QA, working on both manual and automated
        testing and even leading teams. I’ve been lucky to work for big names
        like <span className={accentClass}>Zeiss</span> and{" "}
        <span className={accentClass}>Rakuten</span>, plus some exciting fintech
        and cybersecurity startups. Twice, I made the top-performers list, which
        was based on the team’s, manager’s and customer reviews.
      </>
    ),
  },
  {
    topic: "skills",
    icon: "💡",
    text: (
      <>
        Eventually, I got curious about development, so I learned JavaScript and
        HTML/CSS. I loved it and kept going with React, Redux, TypeScript,
        Tailwind, and Node.js — and now, I’m diving into Next.js. I’ve also got
        plans to learn Docker and Flutter soon to broaden my{" "}
        <span className={accentClass}>hard skills</span>.
      </>
    ),
  },
  {
    topic: "teamwork",
    icon: "🤝",
    text: (
      <>
        My QA experience really built up my{" "}
        <span className={accentClass}>teamwork skills</span> — responsibility,
        creativity, and communication, especially when it comes to sharing
        knowledge or presenting demo to teammates and clients. I also have a
        strong understanding of Scrum and other methodologies that help keep
        projects running smoothly.
      </>
    ),
  },
  {
    topic: "projects",
    icon: "🦄",
    text: (
      <>
        So far, I’ve led and contributed to group{" "}
        <span className={accentClass}>projects</span> as a developer and
        team-lead, and simple personal projects to showcase my skills. This
        portfolio app I designed in Figma and developed using Next.js +
        Tailwind. In the nearest future I plan to add backend on TypeScript +
        Express + MongoDB, it will allow to add recommendations.
      </>
    ),
  },
];
