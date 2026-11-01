"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";

export function CredentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="credentials" className="section" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-sm font-medium text-primary mb-3">Education & credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Concise and verifiable
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Education
            </h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.id} className="border border-border rounded-lg p-4">
                  <p className="font-medium">{e.qualification}</p>
                  <p className="text-sm text-muted-foreground">{e.institution}</p>
                  <p className="text-xs text-muted-foreground mt-1">{e.period}</p>
                  {e.details && (
                    <p className="text-xs text-muted-foreground mt-2">{e.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" /> Credentials
            </h3>
            <div className="space-y-4">
              {certifications.map((c) => (
                <div key={c.id} className="border border-border rounded-lg p-4">
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.date}</p>
                  {c.credentialUrl && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline mt-2 inline-block"
                    >
                      View credential
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
