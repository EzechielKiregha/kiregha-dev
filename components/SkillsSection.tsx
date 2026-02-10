import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Plug 
} from "lucide-react";
import { skills } from "@/data/portfolio";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: skills.languages,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: skills.frontend,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: skills.backend,
    color: "from-primary to-gold-light",
  },
  {
    title: "Databases",
    icon: Database,
    skills: skills.databases,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: skills.devops,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "APIs",
    icon: Plug,
    skills: skills.apis,
    color: "from-indigo-500 to-violet-500",
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="section-heading mb-4">
            Technologies I <span className="text-gradient-gold">Work With</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit for building scalable, modern applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="premium-card p-6 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Projects Completed", value: "15+" },
            { label: "Technologies", value: "25+" },
            { label: "Certifications", value: "3" },
          ].map((stat, index) => (
            <div key={index} className="text-center premium-card p-6">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
