"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { SiAnthropic, SiUdemy } from "react-icons/si";
import { IconType } from "react-icons";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  duration?: string;
  verifyUrl: string;
  icon: IconType;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic (via Skilljar)",
    date: "2025",
    verifyUrl: "https://verify.skilljar.com/c/5mibu2p98ccw",
    icon: SiAnthropic,
    skills: ["Claude Code", "AI-Assisted Development", "Prompt Engineering"],
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    issuer: "Udemy — Dr. Angela Yu",
    date: "April 2023",
    duration: "65.5 hours",
    verifyUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-60bf63a0-2101-4836-8fee-7b404106b3e9.jpg",
    icon: SiUdemy,
    skills: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-20 md:px-6 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground uppercase tracking-tight">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificates.map((cert, index) => {
            const CertIcon = cert.icon;
            return (
            <motion.a
              key={index}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group relative block"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/30 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-[#b087ff]/50 hover:shadow-[0_0_30px_-5px_rgba(176,135,255,0.15)] hover:-translate-y-1">
                {/* Gradient accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-border flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500">
                    <CertIcon className="w-6 h-6 text-[#b087ff] group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title & Issuer */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-[#b087ff] transition-colors duration-300 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* External link icon */}
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-[#b087ff] transition-all duration-300 flex-shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                  {cert.duration && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {cert.duration}
                    </span>
                  )}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-foreground/60 bg-muted px-2.5 py-1 rounded-md border border-border group-hover:border-[#b087ff]/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify badge */}
                <div className="mt-5 pt-4 border-t border-border/50">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-[#b087ff] transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                    Verified Certificate — Click to view
                  </span>
                </div>
              </div>
            </motion.a>
           )})}
        </motion.div>
      </div>
    </section>
  );
};
