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
      { name: "TypeScript", imagePath: "images/skill/typescript.png" },
      { name: "JavaScript", imagePath: "images/skill/javascript.png" },
      { name: "Java", imagePath: "images/skill/java.png" },
      { name: "Python", imagePath: "images/skill/python.png" },
      { name: "C#", imagePath: "images/skill/cs.png" },
      { name: "SQL", imagePath: "images/skill/sql.png" },
      { name: "Assembly Language" },
      { name: "C", imagePath: "images/skill/c.png" },
      { name: "R", imagePath: "images/skill/r.png" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", imagePath: "images/skill/react.png" },
      { name: "Next.js", imagePath: "images/skill/nextjs.png" },
      { name: "HTML5", imagePath: "images/skill/html5.png" },
      { name: "CSS3", imagePath: "images/skill/css3.png" },
      { name: "SASS", imagePath: "images/skill/sass.png" },
      { name: "Bootstrap", imagePath: "images/skill/bootstrap.png" },
      { name: "Material-UI", imagePath: "images/skill/materialui.png" },
      { name: "Tailwind CSS", imagePath: "images/skill/tailwindcss.png" },
      { name: "jQuery", imagePath: "images/skill/jquery.svg" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", imagePath: "images/skill/nodejs.png" },
      { name: "PHP", imagePath: "images/skill/php.png" },
    ],
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB", imagePath: "images/skill/mongodb.png" },
      { name: "MySQL", imagePath: "images/skill/mysql.png" },
      { name: "SQLite", imagePath: "images/skill/sqlite.png" },
      { name: "Cloudflare", imagePath: "images/skill/cloudflare.png" },
      { name: "Azure", imagePath: "images/skill/azure.png" },
      { name: "Vercel", imagePath: "images/skill/vercel.png" },
      {
        name: "Neon - Serverless Postgres",
        imagePath: "images/skill/neon.png",
      },
    ],
  },
  {
    category: "Tools & Methods",
    items: [
      { name: "Git", imagePath: "images/skill/git.png" },
      { name: "Agile" },
      { name: "CLI" },
      { name: "GitHub", imagePath: "images/skill/github.png" },
      { name: "Jest", imagePath: "images/skill/jest.png" },
      { name: "Test-Driven Development" },
      {
        name: "Google Workspace",
        imagePath: "images/skill/googleworkspace.png",
      },
      {
        name: "Microsoft Office",
        imagePath: "images/skill/microsoftoffice.png",
      },
      { name: "Wordpress", imagePath: "images/skill/wordpress.png" },
      { name: "APIs" },
      { name: "SEO" },
      { name: "Web Protocols" },
    ],
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
      { name: "Quick-Learner" },
    ],
  },
  {
    category: "Other",
    items: [{ name: "Experienced Driver" }],
  },
];
