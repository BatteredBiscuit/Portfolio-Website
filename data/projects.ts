export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  linkUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio website designed to showcase my projects, skills, and experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Material-UI",
      "Vercel",
      "Git",
      "GitHub",
    ],
    githubUrl: "https://github.com/BatteredBiscuit/portfolio-website",
  },
  {
    title: "Cardex",
    description: "An website to manage your trading card collection.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Material-UI",
      "Vercel",
      "Git",
      "GitHub",
    ],
    linkUrl: "https://cardex-app.com",
  },
];
