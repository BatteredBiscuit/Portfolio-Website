export interface Skill {
  category: string;
  items: Array<{
    name: string;
    imagePath?: string;
  }>;
}

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "TypeScript", imagePath: "/images/skills/typescript.png" },
      { name: "JavaScript", imagePath: "/images/skills/javascript.png" },
      { name: "Python", imagePath: "/images/skills/python.png" },
      { name: "Java", imagePath: "/images/skills/java.png" },
      { name: "C++", imagePath: "/images/skills/cpp.png" },
      { name: "SQL" }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", imagePath: "/images/skills/react.png" },
      { name: "Next.js", imagePath: "/images/skills/nextjs.png" },
      { name: "Vue.js", imagePath: "/images/skills/vue.png" },
      { name: "HTML5", imagePath: "/images/skills/html5.png" },
      { name: "CSS3", imagePath: "/images/skills/css3.png" },
      { name: "SASS" },
      { name: "Material-UI", imagePath: "/images/skills/mui.png" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Django" },
      { name: "Spring Boot" },
      { name: "RESTful APIs" },
      { name: "GraphQL" }
    ]
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "AWS" },
      { name: "Firebase" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Azure" }
    ]
  },
  {
    category: "Tools & Methods",
    items: [
      { name: "Git" },
      { name: "CI/CD" },
      { name: "Agile" },
      { name: "Jira" },
      { name: "Jest" },
      { name: "Test-Driven Development" }
    ]
  }
];
