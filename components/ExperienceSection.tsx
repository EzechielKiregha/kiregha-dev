import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Work Experience
          </span>
          <h2 className="section-heading mb-4">
            Where I've <span className="text-gradient-gold">Made Impact</span>
          </h2>
          <p className="section-subheading mx-auto">
            Professional experience building enterprise-level solutions
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="premium-card p-8 relative overflow-hidden"
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{experience.role}</h3>
                    <p className="text-primary font-semibold">{experience.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{experience.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {experience.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {experience.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
