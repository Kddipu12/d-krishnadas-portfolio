import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-bold font-mono text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            DK
          </div>
          <div>
            <p className="text-sm font-bold text-white tracking-tight">D Krishnadas</p>
            <p className="text-xs text-gray-400 font-mono">Software Engineer (R&D)</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 font-mono text-center flex items-center gap-1.5">
          <span>© {new Date().getFullYear()} D Krishnadas. Built with React & Vite.</span>
        </div>

        {/* Right actions & back to top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Kddipu12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-300 transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/dkrishnadas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-300 transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:dkrishnadas.mec@gmail.com"
            className="text-gray-400 hover:text-cyan-300 transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-card text-gray-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
