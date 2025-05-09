"use client";

import { useEffect } from "react";

interface PageMetaTagsProps {
  title: string;
  description: string;
}

export default function PageMetaTags({
  title,
  description,
}: PageMetaTagsProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Find and update description meta tag or create it if it doesn't exist
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute("content", description);

    // Update OG and Twitter meta tags
    const metaTags = [
      { name: "og:title", content: title },
      { name: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ];

    metaTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", tag.content);
    });
  }, [title, description]);

  return null;
}
