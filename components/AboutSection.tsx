"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/data/portfolio";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm font-medium text-primary mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            The kinds of problems I like solving
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {about.summary}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {about.philosophy}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {about.interests.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-full text-sm border border-border text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
