import { blogs } from "@/data/blogs";

export default async function sitemap() {
  // Base URL of your website
  const baseUrl = "https://hayden-oneill.io";

  // Static routes
  const routes = ["", "/about", "/projects", "/contact", "/blog"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  const postRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(blog.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
