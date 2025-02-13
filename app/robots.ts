import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/Search",
    },
    sitemap: "https://it-s-ok.vercel.app/sitemap.xml",
  };
}
