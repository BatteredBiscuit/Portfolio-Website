import { getBlogPosts } from "@/lib/blog";

export default async function sitemap() {
  const posts = getBlogPosts ? await getBlogPosts() : [];

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

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
