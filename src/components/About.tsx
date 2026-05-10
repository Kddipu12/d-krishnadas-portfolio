import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">About Me</h2>
          <div className="h-px bg-gray-800 flex-1 ml-4" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <div className="md:col-span-2 space-y-6 text-gray-400 font-mono text-sm leading-relaxed">
          <p>
            Hello! I'm D Krishnadas, a Software Engineer (R&D) with hands-on experience building AI-driven automation systems,
            real-user monitoring pipelines, ML-powered recommendation engines, and accessibility testing frameworks.
          </p>
          <p>
            Started as an AI Intern at Mozilor Technologies and transitioned into a full-time R&D engineer
            owning multiple high-impact projects across AI automation, backend engineering, LLM fine-tuning,
            and product experimentation.
          </p>
          <p>
            Strong in problem-solving, rapid prototyping, and designing scalable, production-ready systems.
            Passionate about leveraging cutting-edge AI technologies to solve real-world challenges.
          </p>
        </div>

        <div className="md:col-span-1">
          <div className="relative group w-full max-w-[300px] mx-auto aspect-square">
            <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 z-0" />
            <div className="absolute inset-0 bg-gray-900 border border-gray-800 z-10 flex items-center justify-center overflow-hidden">
               {/* Add your image here if you have one, else a placeholder graphic */}
               <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 opacity-80" />
               <span className="absolute font-mono text-gray-700 tracking-widest uppercase">IMAGE</span>
            </div>
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity z-20" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
