import type { MetadataRoute } from "next";
import { projects, notes } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.kiregha.tech";
  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
  ];
  projects.forEach((p) => {
    routes.push({ url: `${base}/projects/${p.slug}`, lastModified: new Date() });
  });
  notes.forEach((n) => {
    routes.push({ url: `${base}/notes/${n.slug}`, lastModified: new Date() });
  });
  return routes;
}
