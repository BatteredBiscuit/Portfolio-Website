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
      { name: "TypeScript", imagePath: "@/images/skills/TypeScript.png" },
      { name: "JavaScript", imagePath: "@/images/skills/JavaScript.png" },
      { name: "Java", imagePath: "@/images/skills/Java.png" },
      { name: "Python", imagePath: "@/images/skills/Python.png" },
      { name: "C#", imagePath: "@/images/skills/CS.png" },
      { name: "SQL", imagePath: "@/images/skills/SQL.png" },
      { name: "Assembly Language" },
      { name: "C", imagePath: "@/images/skills/C.png" },
      { name: "R", imagePath: "@/images/skills/R.png" }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", imagePath: "@/images/skills/React.png" },
      { name: "Next.js", imagePath: "@/images/skills/NextJS.png" },
      { name: "HTML5", imagePath: "@/images/skills/HTML5.png" },
      { name: "CSS3", imagePath: "@/images/skills/CSS3.png" },
      { name: "Material-UI", imagePath: "@/images/skills/MaterialUI.png" },
      { name: "Tailwind CSS", imagePath: "@/images/skills/TailwindCSS.png" }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", imagePath: "@/images/skills/NodeJS.png" },
      { name: "PHP", imagePath: "@/images/skills/PHP.png" }
    ]
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB", imagePath: "@/images/skills/MongoDB.png" },
      { name: "MySQL", imagePath: "@/images/skills/MySQL.png" },
      { name: "SQLite", imagePath: "@/images/skills/SQLite.png" },
      { name: "Cloudflare", imagePath: "@/images/skills/Cloudflare.png" },
      { name: "Azure", imagePath: "@/images/skills/Azure.png" },
      { name: "Vercel", imagePath: "@/images/skills/Vercel.png" }
    ]
  },
  {
    category: "Tools & Methods",
    items: [
      { name: "Git", imagePath: "@/images/skills/Git.png" },
      { name: "Agile" },
      { name: "GitHub", imagePath: "@/images/skills/GitHub.png" },
      { name: "Jest", imagePath: "@/images/skills/Jest.png" },
      { name: "Test-Driven Development" }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Problem-Solving" },
      { name: "Punctual" },
      { name: "Solution-Oriented" },
      { name: "Flexible" },
      { name: "Approachable" },
      { name: "Quick-Learner" }
    ]
  },
  {
    category: "Other",
    items: [
      { name: "Experienced Driver" }
    ]
  }
];
