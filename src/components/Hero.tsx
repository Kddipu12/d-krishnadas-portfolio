import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  window.location.hash = `/${sectionId}`;
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 20;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, 0);
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-black text-white pl-8 md:pl-24">
      {/* Background circles graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-30 md:opacity-100 flex items-center justify-center">
        <div className="absolute w-[800px] h-[800px] rounded-full border border-gray-800" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-gray-800" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-800" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-800" />

        {/* Nodes */}
        <div className="absolute top-[20%] right-[30%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">Express</div>
        <div className="absolute top-[35%] right-[50%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">React</div>
        <div className="absolute top-[35%] right-[20%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">Node.js</div>
        <div className="absolute top-[45%] right-[10%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">Docker</div>
        <div className="absolute top-[50%] right-[60%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">JWT</div>
        <div className="absolute top-[55%] right-[35%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">MongoDB</div>
        <div className="absolute top-[60%] right-[15%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">Python</div>
        <div className="absolute top-[65%] right-[55%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">FastAPI</div>
        <div className="absolute top-[70%] right-[30%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">SQL</div>
        <div className="absolute top-[75%] right-[40%] px-3 py-1 border border-gray-700 bg-black text-xs text-gray-400">AI/LLM</div>
      </div>

      <div className="relative z-20 max-w-4xl pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Location / Title bar */}
          <div className="inline-flex flex-col border border-gray-800 p-2 text-xs text-gray-500 uppercase tracking-widest font-mono mb-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              BACKEND-FOCUSED SOFTWARE DEVELOPER
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">D</h1>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-outline mb-2">Krishnadas</h1>
          </motion.div>

          <motion.div
            className="space-y-4 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl font-mono text-gray-300">
              Building <span className="text-white font-bold">Scalable</span>
            </p>
            <p className="text-sm md:text-base text-gray-400 font-mono leading-relaxed">
              Scalable backend systems, REST APIs, and AI-powered applications. Passionate about intelligent automation and clean architectures.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              variant="outline"
              className="border-gray-800 hover:border-primary hover:text-primary text-white bg-transparent rounded-none px-8 py-6 uppercase tracking-wider text-xs font-mono group"
              onClick={(e) => scrollToSection("projects", e)}
            >
              View Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="border-gray-800 hover:bg-gray-900 text-white bg-transparent rounded-none px-8 py-6 uppercase tracking-wider text-xs font-mono"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-8 pt-16 border-t border-gray-900 mt-16 w-max"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="https://github.com/Kddipu12" className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors">
              <Github className="w-4 h-4" /> GITHUB
            </a>
            <a href="https://www.linkedin.com/in/dkrishnadas/" className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" /> LINKEDIN
            </a>
            <a href="mailto:dkrishnadas.mec@gmail.com" className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> EMAIL
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-widest text-gray-600 font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
