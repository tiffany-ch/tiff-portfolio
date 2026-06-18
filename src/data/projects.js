export const projects = [
  {
    slug: "portfolio-emailer",
    title: "AI-Powered Client Email Generator",
    description:
      "Generates personalised client emails from spreadsheet data using the Claude API.",
    longDescription:
      "A Python script that reads client data from a CSV file and uses the Claude API to generate tailored, professional email drafts for each client. Includes error handling and retry logic for reliability.",
    techStack: ["Python", "Claude API", "CSV"],
    category: "ai",
    githubUrl: "https://github.com/tiffany-ch/portfolio-emailer",
    liveUrl: null,
    highlights: [
      "Reduced manual email drafting time by ~80%",
      "Built-in error handling with automatic retries",
      "Processes batch client data from CSV files",
    ],
  },
  {
    slug: "travel-explorer",
    title: "Travel Explorer",
    description:
      "An interactive React app for browsing, searching, and favouriting travel destinations using live country data.",
    longDescription:
      "Built in React with the RestCountries API, this app lets users search and filter destinations by region, favourite the ones they're interested in, and view live data like population and capital city. Fully responsive with a polished UI.",
    techStack: ["React", "JavaScript", "RestCountries API"],
    category: "web",
    githubUrl: "https://github.com/tiffany-ch/travel-explorer",
    liveUrl: null,
    highlights: [
      "Real-time search and region filtering",
      "Favouriting system with live count",
      "Fully responsive, deployed on Netlify",
    ],
  },
  {
    slug: "yoga-website-template",
    title: "AI Agent Workflow for Client Websites",
    description:
      "A structured markdown-based system for directing AI coding agents to build client websites, using a real yoga studio site as the test case.",
    longDescription:
      "This project explores how to direct AI coding agents reliably using structured markdown files: skill.md defines the agent's role, design.md specifies what's being built and why, implementation.md breaks the build into steps, and UAT.md sets pass/fail acceptance criteria. The workflow also uses a set of reusable skills for animation, UX critique, accessibility auditing, and final polish, applied to building a real yoga studio website.",
    techStack: ["Claude Code", "Markdown", "AI Agents"],
    category: "automation",
    githubUrl: "https://github.com/tiffany-ch/yoga-website-template",
    liveUrl: null,
    highlights: [
      "Structured agent direction system (skill/design/implementation/UAT)",
      "Reusable skills for animation, UX critique, and accessibility audits",
      "Applied to a real client website build",
    ],
  },
  {
    slug: "surf-spot-finder",
    title: "Surf Spot Finder",
    description: "A Svelte app for discovering and comparing surf spots.",
    longDescription:
      "Built with Svelte to explore an alternative framework to React, this app helps users browse and compare surf spots based on key criteria. A hands-on way to test how Svelte's reactivity model compares to React's component-based approach.",
    techStack: ["Svelte", "JavaScript"],
    category: "web",
    githubUrl: "https://github.com/tiffany-ch/surf-spot-finder",
    liveUrl: null,
    highlights: [
      "Built with Svelte to compare against React",
      "Clean, reactive UI for browsing surf locations",
    ],
  },
  {
    slug: "ai-tip-of-the-day",
    title: "AI Tip of the Day",
    description:
      "A simple app that fetches and displays a random fact from a live API.",
    longDescription:
      "An early project focused on mastering the fetch API: calling a live public API, handling the response, and rendering it dynamically on the page. A foundational exercise that underpins every later project involving live data.",
    techStack: ["JavaScript", "Fetch API"],
    category: "web",
    githubUrl: "https://github.com/tiffany-ch/ai-tip-of-the-day",
    liveUrl: null,
    highlights: [
      "First hands-on project calling a live external API",
      "Dynamic DOM rendering of fetched data",
    ],
  },
  {
    slug: "client-website",
    title: "Client Website Rebuild",
    description:
      "Recreated a client's CMS-built homepage as a standalone, hand-coded web page.",
    longDescription:
      "Took an existing CMS-based website built for a client and rebuilt the homepage from scratch using plain HTML and CSS, with no CMS dependency. Demonstrates the ability to translate an existing design into clean, maintainable code.",
    techStack: ["HTML", "CSS"],
    category: "web",
    githubUrl: "https://github.com/tiffany-ch/client-website",
    liveUrl: null,
    highlights: [
      "Rebuilt a real client site without CMS dependency",
      "Hand-coded HTML/CSS matching existing design",
    ],
  },
];
