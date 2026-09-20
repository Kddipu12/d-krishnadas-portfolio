import { motion } from "framer-motion";
import SprayAnimation from "./SprayAnimation";
import { Github, Linkedin, Mail, Phone, ArrowDown, Sparkles, Code2, Cpu, Activity } from "lucide-react";
import { Button } from "./ui/button";

const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  window.location.hash = `/${sectionId}`;
  
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, 0);
};

export default function Hero() {
  const stats = [
    { label: "WCAG AI Automations", value: "20 / 37", icon: Cpu, sub: "Industry-leading R&D" },
    { label: "AWS RUM Pipeline", value: "Scalable", icon: Activity, sub: "Go & Lambda Serverless" },
    { label: "Specialization", value: "AI & ML", icon: Code2, sub: "LLMs, RAG & Fine-tuning" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D WebGL Background Canvas */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <SprayAnimation />
      </div>

      {/* Radiant Glow Gradient Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-10" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-nav border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>R&D Engineer @ Mozilor Technologies</span>
        </motion.div>

        {/* Main Name Heading with Handwriting & Gradient Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-2 mb-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-cursive font-bold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent inline-block drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
              {Array.from("D Krishnadas").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.3 + index * 0.08,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        {/* Role & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="space-y-2 max-w-3xl"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 tracking-tight">
            Software Engineer <span className="text-cyan-400 font-mono font-normal text-lg sm:text-xl">{"<R&D />"}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto px-4 font-normal">
            Specializing in <span className="text-cyan-300 font-medium">AI-driven automation</span>,{" "}
            <span className="text-blue-300 font-medium">Real-User Monitoring (RUM) pipelines</span>,{" "}
            and <span className="text-indigo-300 font-medium">production LLM applications</span>.
          </p>
        </motion.div>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center pt-8 px-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-sm rounded-full px-8 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
            onClick={(e) => scrollToSection("contact", e)}
          >
            Get In Touch
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white/15 text-gray-200 hover:text-white hover:bg-white/10 glass-card rounded-full px-8 text-sm transition-all hover:scale-105"
            onClick={(e) => scrollToSection("projects", e)}
          >
            View Projects
          </Button>
        </motion.div>

        {/* Quick Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex gap-5 justify-center pt-8 text-gray-400"
        >
          <a
            href="mailto:dkrishnadas.mec@gmail.com"
            className="p-2.5 rounded-full glass-card hover:text-cyan-300 hover:border-cyan-500/50 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="tel:+917012770184"
            className="p-2.5 rounded-full glass-card hover:text-cyan-300 hover:border-cyan-500/50 transition-all hover:scale-110"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/dkrishnadas/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card hover:text-cyan-300 hover:border-cyan-500/50 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Kddipu12"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card hover:text-cyan-300 hover:border-cyan-500/50 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Quick Highlights Stat Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full mt-12 px-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-4 text-left border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-white">{stat.value}</div>
                <div className="text-xs font-semibold text-cyan-300/90">{stat.label}</div>
                <div className="text-[11px] text-gray-400">{stat.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border border-white/20 glass-nav flex items-center justify-center p-1">
          <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
