"use client";

import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-semibold">{personalInfo.name}</p>
            <p className="text-sm text-muted-foreground">{personalInfo.headline}</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
              Email
            </a>
            <a href={personalInfo.cvUrl} download className="hover:text-primary transition-colors">
              CV
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {personalInfo.name}
          </p>
          <button
            onClick={scrollToTop}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
