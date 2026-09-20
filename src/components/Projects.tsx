import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Sparkles, Bot, Shield, Code, ArrowUpRight } from "lucide-react";
import SprayAnimation from "./SprayAnimation";

const projects = [
  {
    title: "Orma AI: Dementia Memory Support Bot",
    category: "AI & Healthcare Automation",
    description: "Developed an intelligent WhatsApp chatbot using LangChain and OpenAI API to assist dementia patients in recording and recalling personal memories. Leveraged Retrieval-Augmented Generation (RAG) over PostgreSQL vector data to personalize interactions.",
    tech: ["LangChain", "OpenAI RAG", "PostgreSQL", "WhatsApp API", "Python"],
    link: "https://github.com/Kddipu12",
    featured: true,
    icon: Bot,
  },
  {
    title: "CookieYes Affiliate Onboarding Platform",
    category: "AI Approval & Partner System",
    description: "An automated affiliate onboarding and verification platform for the CookieYes Partner Program featuring instant AI verification, document classification, and recurring commission telemetry.",
    tech: ["AI Classification", "Affiliate SDK", "Node.js", "Analytics"],
    link: "https://www.cookieyes.com/partners/affiliates/",
    featured: true,
    icon: Shield,
  },
  {
    title: "RenderYes: Deterministic React Framework",
    category: "Developer Tools & UI Architecture",
    description: "A framework for deterministic UI rendering in React, featuring constrained AI planning algorithms, structured schema validation, and secure client-side data fetching.",
    tech: ["React", "TypeScript", "Node.js", "AI Planning"],
    link: "https://github.com/mozilor-technologies/RenderYes",
    featured: true,
    icon: Code,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Subtle WebGL Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <SprayAnimation />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Key <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between w-full relative group">
                <div>
                  {/* Top Bar with Icon & Link */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/20 flex items-center justify-center text-gray-300 hover:text-cyan-300 transition-all group-hover:scale-110"
                      aria-label="View project details"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <span className="text-xs font-mono text-cyan-400/90 tracking-wider uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-mono"
                    >
                      {t}
                    </span>
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
