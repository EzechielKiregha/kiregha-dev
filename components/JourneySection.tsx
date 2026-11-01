"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { journey } from "@/data/portfolio";

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="section" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm font-medium text-primary mb-3">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            2021 to present
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A progression, not a list of annual slogans. Each year is anchored by
            real work, courses or deployments.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-6">
          {journey.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-l-2 border-border pl-6 pb-2"
            >
              <p className="text-sm font-mono text-primary mb-1">{item.year}</p>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
