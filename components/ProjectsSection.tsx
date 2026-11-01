"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio";

const STATUS_COLORS: Record<string, string> = {
  Live: "text-green-500 border-green-500/40",
  Delivered: "text-blue-500 border-blue-500/40",
  "In development": "text-yellow-500 border-yellow-500/40",
  "Academic prototype": "text-muted-foreground border-border",
  Concept: "text-muted-foreground border-border",
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );

  const featured = filtered.filter((p) => p.featured);
  const list = featured.length ? featured : filtered;

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-sm font-medium text-primary mb-3">Selected work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Four or five substantial case studies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Smaller or older experiments live in the archive below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="space-y-8">
          {list.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="border border-border rounded-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-56 md:h-auto bg-muted">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : null}
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded border ${STATUS_COLORS[project.status] ?? "text-muted-foreground border-border"
                        }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-primary mb-3">{project.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      Read case study <ArrowRight className="w-4 h-4" />
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Live site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Archive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-lg font-semibold mb-4">Earlier builds / archive</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="border border-border rounded-lg p-4 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{project.title}</span>
                    <span className="text-xs text-muted-foreground">{project.status}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{project.summary}</p>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
