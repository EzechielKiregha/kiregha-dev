import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { notes } from "@/data/portfolio";

type Params = { slug: string };

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return {};
  return { title: note.title, description: note.summary };
}

export default async function NotePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();

  return (
    <main className="container-custom py-16 max-w-3xl">
      <Link href="/#notes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        ← Back to notes
      </Link>
      <h1 className="text-3xl font-bold tracking-tight mt-6 mb-4">{note.title}</h1>
      <p className="text-muted-foreground mb-8">{note.summary}</p>
      <div className="space-y-4">
        {note.body.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
        ))}
      </div>
    </main>
  );
}
