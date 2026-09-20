import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Bot, LineChart, Code, Sparkles, Target, Zap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Bot,
      title: "AI & LLM Innovation",
      desc: "Building RAG systems, fine-tuning OpenAI models, and automating complex workflows with LangChain & LangGraph.",
    },
    {
      icon: LineChart,
      title: "Real-User Monitoring (RUM)",
      desc: "Architected end-to-end AWS serverless ingestion pipelines processing metrics at scale via Go, Lambda & Firehose.",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping & R&D",
      desc: "Transforming ambiguous ideas into production-grade systems with high execution speed and clean architecture.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & DISCIPLINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Overview Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              <p>
                I am a <strong className="text-cyan-300 font-semibold">Software Engineer (R&D)</strong> at Mozilor Technologies, specializing in AI-driven automation, real-user monitoring infrastructure, and custom ML recommendation engines.
              </p>
              <p>
                Starting as an AI Intern, I quickly transitioned into a full-time R&D engineer taking end-to-end ownership of core innovation initiatives. Among my proudest achievements is leading the AI-first transformation of <strong className="text-white">WebYes</strong>, where I successfully automated <strong className="text-cyan-300 font-semibold">20 out of 37 WCAG manual accessibility checks</strong> — establishing an industry benchmark.
              </p>
              <p>
                I thrive in fast-paced engineering environments that require deep technical problem solving, clean backend system design (Go, Node.js, Python), and leveraging state-of-the-art AI tooling to create scalable products.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card glass-card-hover p-6 rounded-2xl h-full border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
