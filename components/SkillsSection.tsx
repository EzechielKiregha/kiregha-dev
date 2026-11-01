"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm font-medium text-primary mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Depth, not a shopping list
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Grouped by how I use them. No percentage bars or expert labels.
          </p>
        </motion.div>

        <div className="space-y-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Core tools used in recent work</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.core.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-border rounded-lg p-5"
                >
                  <h4 className="text-sm font-semibold mb-3 text-primary">{group.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs rounded border border-border text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Additional experience</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.additional.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-border rounded-lg p-5"
                >
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">{group.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs rounded border border-border text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Areas of interest</h3>
            <div className="flex flex-wrap gap-2">
              {skills.interests.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-full border border-border text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
