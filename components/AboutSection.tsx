import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Heart, Lightbulb, Rocket, Target } from "lucide-react";
import { about } from "@/data/portfolio";

const interests = [
  { icon: Rocket, text: "Scalable SaaS Platforms" },
  { icon: Lightbulb, text: "AI & Machine Learning" },
  { icon: Target, text: "POS & Retail Systems" },
  { icon: Code, text: "Open Source" },
  { icon: Heart, text: "Tech Community" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section section-gradient" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="section-heading mb-4">
            Crafting <span className="text-gradient-gold">Digital Solutions</span> for Africa
          </h2>
          <p className="section-subheading mx-auto">
            A passionate developer on a mission to build impactful technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="premium-card p-8"
            >
              <h3 className="text-xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.summary}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="premium-card p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.philosophy}
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:border-primary/50 transition-colors"
                >
                  <interest.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{interest.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <h3 className="text-xl font-semibold mb-8">My Journey</h3>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-border space-y-8">
              {about.journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-9.25 top-1 w-3 h-3 rounded-full bg-primary glow-gold-sm" />

                  {/* Content */}
                  <div className="premium-card p-6">
                    <span className="text-primary font-mono text-sm font-semibold">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-semibold mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
