import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, CheckCircle2, Sparkles, Server, Cpu, ShieldCheck, Zap } from "lucide-react";

const experiences = [
  {
    company: "Mozilor Technologies",
    role: "Software Engineer (R&D)",
    period: "Feb 2025 - Present",
    badge: "Full-Time",
    projects: [
      {
        name: "Agency Sign-Up Automation System",
        icon: Zap,
        description: "Built automated agency verification workflow by scraping target websites, vectorizing content using DistilBERT & Facebook embeddings, and classifying them against domain keyword sets to automate email decisioning.",
        tech: ["DistilBERT", "Vector Embeddings", "Python", "Scraping", "Email Automation"],
      },
      {
        name: "Plugin Recommender System – WebToffee",
        icon: Cpu,
        description: "Engineered an AI-driven e-commerce plugin recommendation engine powered by fine-tuned OpenAI models trained on internal customer purchase and browsing dataset.",
        tech: ["OpenAI Fine-Tuning", "Python", "Recommendation Systems", "JSON Schema"],
      },
      {
        name: "AI-First Revamp of WebYes (Accessibility Engine)",
        icon: ShieldCheck,
        description: "Granted full R&D ownership to transform WebYes into an AI-first platform. Successfully automated 20 out of 37 WCAG manual accessibility checks — an industry-leading technical milestone.",
        tech: ["WCAG 2.1", "AI Automation", "Playwright", "AST Analysis", "TypeScript"],
      },
      {
        name: "Real User Monitoring (RUM) Infrastructure",
        icon: Server,
        description: "Designed and implemented the complete RUM telemetry ingestion pipeline on AWS: API Gateway → Lambda (Go) → Kinesis Firehose → S3. Built custom client-side SDK and metric enrichment services.",
        tech: ["AWS Lambda", "Go", "API Gateway", "Kinesis Firehose", "S3", "SDK Engineering"],
      },
    ],
  },
  {
    company: "IBS Software",
    role: "Project Trainee",
    period: "Jul 2024 – Sep 2024",
    badge: "Internship",
    projects: [
      {
        name: "Baggage Tracking & Recovery System",
        icon: Briefcase,
        description: "Contributed to improving baggage recovery workflows for airline operations. Optimized UI components and state management with JavaScript & CSS to enhance operator efficiency.",
        tech: ["JavaScript", "HTML5/CSS3", "UI/UX Optimization", "Enterprise Systems"],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Experience List */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-transparent">
          {experiences.map((exp, expIdx) => (
            <motion.div
              key={expIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: expIdx * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-10 sm:pl-16"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute left-1.5 sm:left-5 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl space-y-6">
                
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{exp.company}</h3>
                    <p className="text-base text-cyan-300 font-semibold">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                {/* Sub projects */}
                <div className="space-y-6">
                  {exp.projects.map((proj, projIdx) => (
                    <div
                      key={projIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                          <proj.icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-100">{proj.name}</h4>
                      </div>

                      <p className="text-sm text-gray-300 leading-relaxed pl-11">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pl-11 pt-1">
                        {proj.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
