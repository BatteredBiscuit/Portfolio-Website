export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and order tracking. Features include user authentication, product search, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe", "JWT"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "https://demo-ecommerce.example.com"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, file sharing, and team chat functionality. Includes drag-and-drop task organization and progress tracking.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://task-manager-demo.example.com"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts for multiple locations. Features include interactive maps and severe weather alerts.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Leaflet", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-dashboard"
  },
  {
    title: "Social Media Analytics",
    description: "An analytics platform that processes and visualizes social media data. Provides insights on engagement metrics, audience demographics, and content performance.",
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "D3.js"],
    githubUrl: "https://github.com/yourusername/social-analytics",
    demoUrl: "https://social-analytics.example.com"
  },
  {
    title: "Fitness Tracker",
    description: "A mobile-responsive fitness tracking application that monitors workouts, nutrition, and progress. Includes custom workout plans and achievement system.",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    githubUrl: "https://github.com/yourusername/fitness-tracker"
  },
  {
    title: "Code Review Tool",
    description: "A web-based code review tool with syntax highlighting, inline comments, and version control integration. Supports multiple programming languages and team collaboration.",
    technologies: ["Angular", "Spring Boot", "MySQL", "GitLab API"],
    githubUrl: "https://github.com/yourusername/code-review-tool",
    demoUrl: "https://code-review.example.com"
  }
];
