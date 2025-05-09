export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://www.hayden-oneill.io/sitemap.xml",
    host: "https://www.hayden-oneill.io",
  };
}
