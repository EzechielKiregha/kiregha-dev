"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { notes } from "@/data/portfolio";

export function NotesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="notes" className="section" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-sm font-medium text-primary mb-3">Engineering notes</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Short technical write-ups
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Written from real implementation notes. Drafts marked TODO_VERIFY until written.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {notes.map((note, index) => (
            <motion.div
              key={note.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-border rounded-lg p-5"
            >
              <h3 className="font-semibold mb-2">{note.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{note.summary}</p>
              <Link
                href={`/notes/${note.slug}`}
                className="text-sm text-primary hover:underline"
              >
                Read note
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
