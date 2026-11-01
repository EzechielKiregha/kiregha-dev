"use client";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { Navigation } from "@/components/Navigation";
import { NotesSection } from "@/components/NotesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <section className="container-custom py-12">
          <div className="border border-border rounded-lg p-6">
            <p className="text-sm font-medium text-primary mb-2">Currently</p>
            <p className="text-sm text-muted-foreground">
              Developing USCOR Marketplace 2.0 and working on business software across commerce, POS and
              operations. Completing a BSc in Information Technology at AUCA.
            </p>
          </div>
        </section>
        <ProjectsSection />
        <JourneySection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CredentialsSection />
        {/* <NotesSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
