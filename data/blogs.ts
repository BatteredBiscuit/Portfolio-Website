export interface Blog {
  id: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
  image?: string;
}

// Sample blog data
export const blogs: Blog[] = [
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2023-04-15",
    tags: ["Next.js", "React", "Web Development"],
    summary:
      "My journey learning Next.js and how it has improved my development workflow.",
    content: `
# Getting Started with Next.js

Next.js is a powerful React framework that enables server-side rendering and static site generation. 
In this post, I'll share my experience getting started with Next.js and how it has improved my development workflow.

## Why I Chose Next.js

After working with React for several years, I wanted a framework that would help me build more performant and SEO-friendly applications.
Next.js provided the perfect solution with its built-in routing, server-side rendering, and static site generation capabilities.

## Key Features I Love

- **File-based routing**: Simply create a file in the pages directory, and it becomes a route
- **Server-side rendering**: Better SEO and initial load performance
- **API Routes**: Build API endpoints easily within your Next.js app
- **Static Site Generation**: Pre-render pages at build time for even better performance

I'm excited to continue exploring Next.js and building more projects with it!
    `,
    image: "https://placehold.co/600x400/png",
  },
  {
    id: "building-a-portfolio-website",
    title: "Building My Portfolio Website",
    date: "2023-05-10",
    tags: ["Portfolio", "React", "Next.js", "CSS"],
    summary:
      "The process of designing and building my portfolio website using modern web technologies.",
    content: `
# Building My Portfolio Website

Creating a personal portfolio website is an important step for any developer. Here's how I approached building mine.

## Planning and Design

I started by sketching out the main sections I wanted to include:
- Home/Introduction
- About Me
- Projects
- Skills
- Contact

Then I created wireframes for each section using Figma, focusing on a clean, minimalist design that would showcase my work.

## Technology Stack

For my portfolio, I chose:
- **Next.js**: For fast rendering and SEO benefits
- **TypeScript**: For type safety
- **Material UI**: For pre-built components I could customize
- **Framer Motion**: For subtle animations

## Challenges and Solutions

The biggest challenge was creating a responsive design that worked well on all devices. I solved this by:

1. Using CSS Grid and Flexbox for layouts
2. Implementing mobile-first design principles
3. Testing regularly on different screen sizes

I'm proud of the result and plan to continue improving it as I learn new technologies!
    `,
    image: "https://placehold.co/600x400/png",
  },
  {
    id: "learning-typescript",
    title: "My TypeScript Journey",
    date: "2023-06-20",
    tags: ["TypeScript", "JavaScript", "Programming Languages"],
    summary:
      "How learning TypeScript has improved my development skills and code quality.",
    content: `
# My TypeScript Journey

After using JavaScript for years, I finally decided to dive into TypeScript. Here's what I've learned and why I think it's worth the effort.

## Getting Started with TypeScript

The transition from JavaScript to TypeScript wasn't as difficult as I expected. The TypeScript documentation is excellent, and there are many resources available online.

## Benefits I've Experienced

TypeScript has significantly improved my development workflow in several ways:

1. **Fewer Bugs**: The type system catches errors at compile time rather than runtime
2. **Better IDE Support**: Autocomplete and IntelliSense are much more powerful
3. **Code Readability**: Types serve as documentation and make code easier to understand
4. **Safer Refactoring**: The compiler warns you about breaking changes

## Tips for New TypeScript Developers

If you're just getting started with TypeScript, here are some tips:

- Start with the basics of type annotations
- Use interfaces to define object shapes
- Take advantage of generics for reusable components
- Don't overuse the 'any' type

TypeScript has become an essential part of my development toolkit, and I highly recommend it to any JavaScript developer looking to level up their skills.
    `,
    image: "https://placehold.co/600x400/png",
  },
];

// Helper function to search blogs
export function searchBlogs(
  query: string,
  selectedTags: string[] = []
): Blog[] {
  if (!query && selectedTags.length === 0) {
    return blogs;
  }

  const lowerCaseQuery = query.toLowerCase();

  return blogs.filter((blog) => {
    // Match by title or content
    const matchesQuery =
      !query ||
      blog.title.toLowerCase().includes(lowerCaseQuery) ||
      blog.content.toLowerCase().includes(lowerCaseQuery) ||
      blog.summary.toLowerCase().includes(lowerCaseQuery);

    // Match by tags
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => blog.tags.includes(tag));

    return matchesQuery && matchesTags;
  });
}

// Get all unique tags from blogs
export function getAllTags(): string[] {
  const tagsSet = new Set<string>();

  blogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
  });

  return Array.from(tagsSet).sort();
}

// Get a blog by ID
export function getBlogById(id: string): Blog | undefined {
  return blogs.find((blog) => blog.id === id);
}
