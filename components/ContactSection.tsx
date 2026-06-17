"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { toast } from "sonner";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const MY_PHONE = "250790802201";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const buildWhatsAppUrl = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error(
        "It will be much appreciated to know beforehand who's reaching out. Thank you.",
      );
      return;
    }

    if (!formData.email) {
      toast.error("Your email please!");
      return;
    }

    if (!formData.message) {
      toast.error("I will be happy to read your message!");
      return;
    }

    setStatus("loading");

    const message = `
👋 New Portfolio Contact

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
  `.trim();

    const whatsappUrl = `https://wa.me/${MY_PHONE}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-heading mb-4">
            Let&apos;s Build{" "}
            <span className="text-gradient-gold">Something Great</span>
          </h2>
          <p className="section-subheading mx-auto">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 premium-card hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 premium-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={buildWhatsAppUrl}
              className="premium-card p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Ezechiel Kiregha"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="kkiregha@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-500 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
