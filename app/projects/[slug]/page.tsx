import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "@/data/portfolio";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectCaseStudy({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="container-custom py-16 max-w-3xl">
      <Link href="/#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        ← Back to work
      </Link>

      <div className="mt-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium px-2 py-0.5 rounded border border-border text-muted-foreground">
            {project.status}
          </span>
          <span className="text-xs text-muted-foreground">{project.period}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{project.title}</h1>
        <p className="text-primary mb-4">{project.role}</p>
        <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
      </div>

      {project.imageUrl && (
        <div className="relative w-full h-64 mb-10 rounded-lg overflow-hidden border border-border">
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {project.problem && (
        <Section title="Problem">
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </Section>
      )}

      {project.context && (
        <Section title="Context">
          <p className="text-muted-foreground leading-relaxed">{project.context}</p>
        </Section>
      )}

      {project.constraints && project.constraints.length > 0 && (
        <Section title="Constraints">
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {project.constraints.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>
      )}

      {project.responsibilities && project.responsibilities.length > 0 && (
        <Section title="My responsibilities">
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {project.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Section>
      )}

      {project.architecture && (
        <Section title="Architecture">
          <p className="text-muted-foreground leading-relaxed">{project.architecture}</p>
        </Section>
      )}

      {project.decisions && project.decisions.length > 0 && (
        <Section title="Engineering decisions and trade-offs">
          <div className="space-y-4">
            {project.decisions.map((d) => (
              <div key={d.title}>
                <h3 className="font-medium mb-1">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {project.implementation && project.implementation.length > 0 && (
        <Section title="Implementation details">
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {project.implementation.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Section>
      )}

      {project.complete && project.complete.length > 0 && (
        <Section title="What is complete">
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {project.complete.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>
      )}

      {project.remaining && project.remaining.length > 0 && (
        <Section title="What remains / next">
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {project.remaining.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Section>
      )}

      {project.lessons && project.lessons.length > 0 && (
        <Section title="Lessons learned">
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {project.lessons.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Stack">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded border border-border text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <div className="flex items-center gap-4 pt-4 border-t border-border">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Repository
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Live
          </a>
        )}
      </div>
    </main>
  );
}
