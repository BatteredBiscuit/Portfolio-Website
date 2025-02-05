interface DegreeInfo {
  university: string;
  classification: string;
  overallPercentage: string;
  period: string;
  status: 'predicted' | 'final';
}

interface Module {
  name: string;
  description: string;
  grade?: string;
}

interface YearModules {
  year: string;
  modules: Module[];
  average?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credential?: string;
}

export interface Education {
  institution: string;
  period: string;
  qualifications: Array<{
    name: string;
    grade: string;
  }>;
}

export const degreeInfo: DegreeInfo = {
  university: "Northumbria University",
  classification: "First Class Honours",
  overallPercentage: "82.5%",
  period: "2022-2025",
  status: 'predicted',
};

export const modules: YearModules[] = [
  {
    year: "First Year",
    average: "75%",
    modules: [
      {
        name: "Relational Databases",
        description: "Fundamentals of database design and SQL.",
        grade: "64%",
      },
      {
        name: "Computing Fundamentals",
        description: "Core concepts of computer science and programming.",
        grade: "88%",
      },
      {
        name: "Programming 1",
        description: "Introduction to Java programming language.",
        grade: "100%",
      },
      {
        name: "Web Technologies",
        description: "Basics of web development and design.",
        grade: "84%",
      },
      {
        name: "Systems Analysis",
        description: "Methods for analyzing and designing software systems.",
        grade: "40%",
      },
      {
        name: "Programming 2",
        description: "Advanced Java programming concepts.",
        grade: "75%",
      },
    ],
  },
  {
    year: "Second Year",
    average: "82%",
    modules: [
      {
        name: "Web Programming",
        description: "Advanced web development techniques and frameworks.",
        grade: "96%",
      },
      {
        name: "Program Design and Development",
        description: "Software design patterns and development methodologies.",
        grade: "83%",
      },
      {
        name: "Human Computer Interaction",
        description: "Principles of user interface design and user experience.",
        grade: "75%",
      },
      {
        name: "Software Engineering Practice",
        description: "Professional software development practices and tools.",
        grade: "73%",
      },
      {
        name: "Intelligent Systems",
        description: "Introduction to AI and machine learning concepts.",
        grade: "75%",
      },
      {
        name: "Computer Networks, Security, and Operating Systems",
        description: "Fundamentals of networking, security, and OS architecture.",
        grade: "92%",
      },
    ],
  },
  {
    year: "Final Year",
    average: "In Progress",
    modules: [
      {
        name: "Team Project and Professionalism",
        description: "Collaborative software development and professional skills.",
        grade: "In Progress",
      },
      {
        name: "Data Analytics",
        description: "Statistical analysis and data visualization techniques.",
        grade: "In Progress",
      },
      {
        name: "Cloud Computing",
        description: "Cloud services, virtualization, and deployment strategies.",
        grade: "In Progress",
      },
      {
        name: "Data Security and Governance",
        description: "Information security principles and regulatory compliance.",
        grade: "In Progress",
      },
      {
        name: "Computing Project",
        description: "Individual final year research and development project.",
        grade: "In Progress",
      },
    ],
  },
];

export const certificates: Certificate[] = [
  {
    name: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "In Progress",
  },
];

export const secondaryEducation: Education[] = [
  {
    institution: "Whitburn Church of England Academy Sixth Form",
    period: "2020-2022",
    qualifications: [
      { name: "Computer Science", grade: "A" },
      { name: "Geography", grade: "B" },
      { name: "Maths", grade: "C" },
    ],
  },
  {
    institution: "Whitburn Church of England Academy",
    period: "2015-2020",
    qualifications: [{ name: "GCSEs", grade: "Grades 6-8" }],
  },
];
