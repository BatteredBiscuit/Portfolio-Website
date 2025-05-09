import { blogs } from "@/data/blogs";

export default async function sitemap() {
  // Base URL of your website
  const baseUrl = "https://hayden-oneill.io";

  // Static routes with more detailed configuration
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.8,
    },
  ];

  const postRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(blog.date).toISOString(),
    changefreq: "daily",
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
