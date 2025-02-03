export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  logoPath: string;
}

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Lead developer for cloud-native applications. Architected and implemented microservices using Node.js and Docker. Reduced deployment time by 40% through CI/CD pipeline optimization.",
    logoPath: "/images/companies/techsolutions.png"
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    period: "2020 - 2022",
    description: "Developed and maintained multiple React-based web applications. Implemented real-time features using WebSocket. Mentored junior developers and conducted code reviews.",
    logoPath: "/images/companies/digital-innovations.png"
  },
  {
    title: "Software Developer",
    company: "StartUp Hub",
    period: "2019 - 2020",
    description: "Built RESTful APIs using Express and MongoDB. Implemented authentication and authorization systems. Collaborated with UX designers to implement responsive designs.",
    logoPath: "/images/companies/startup-hub.png"
  },
  {
    title: "Junior Developer",
    company: "Code Academy",
    period: "2018 - 2019",
    description: "Developed educational web applications. Created interactive coding exercises. Assisted in curriculum development for web development courses.",
    logoPath: "/images/companies/code-academy.png"
  }
];
