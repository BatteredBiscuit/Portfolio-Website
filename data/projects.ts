export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Test",
    description: "Test",
    technologies: ["Test"],
    githubUrl: "Test",
    demoUrl: "Test"
  }
];
