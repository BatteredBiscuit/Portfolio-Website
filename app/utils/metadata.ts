export const pageMetadata = {
  home: {
    title: "Hayden O'Neill | Portfolio",
    description:
      "Hi, I'm Hayden O'Neill, a final-year Computer Science student at Northumbria University, on track to graduate with a first-class degree. With a strong passion for technology and coding.",
  },
  about: {
    title: "About Me | Hayden O'Neill",
    description:
      "Learn about my educational background, skills, and professional certifications. Computer Science student at Northumbria University with expertise in multiple programming languages.",
  },
  projects: {
    title: "Projects | Hayden O'Neill",
    description:
      "Explore my portfolio of projects spanning software development, web applications, and more. Featuring work with various technologies and programming languages.",
  },
  experience: {
    title: "Experience | Hayden O'Neill",
    description:
      "My professional experience and work history. From retail and hospitality to sports officiating, I've developed a well-rounded skill set applicable to tech environments.",
  },
  blog: {
    title: "Blog | Hayden O'Neill",
    description:
      "Read my latest thoughts and insights on software development, technology trends, and computer science concepts.",
  },
  blogPost: (title: string) => ({
    title: `${title} | Blog | Hayden O'Neill`,
    description: `Read my blog post about ${title}. Insights and thoughts on this topic from my perspective as a software developer.`,
  }),
};
