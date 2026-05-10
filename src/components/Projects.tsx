import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "InsightOps - Multimodal Medical Document Analysis",
    description: "Developed a secure and reliable platform for processing large volumes of multimodal medical documents using advanced ML models like Phi-3 Vision and LayoutLMv3.",
    tech: ["FastAPI", "React", "PostgreSQL", "Phi-3", "LayoutLMv3", "Docker"],
    github: "https://github.com/Kddipu12",
    link: "https://insightops.example.com"
  },
  {
    title: "Lumiere - End-to-End Deep Learning Framework",
    description: "Built a comprehensive deep learning framework offering a Keras-like API. Included fundamental components like dense, convolutional, pooling, dropout layers, optimizers, and loss functions from scratch.",
    tech: ["Python", "NumPy", "Matplotlib"],
    github: "https://github.com/Kddipu12",
    link: "https://lumiere.example.com"
  },
  {
    title: "MediSync",
    description: "Developed an Android application to manage doctor appointments securely and efficiently using decentralized identifiers and verifiable credentials.",
    tech: ["Java", "Firebase", "Hyperledger Aries"],
    github: "https://github.com/Kddipu12",
    link: "https://medisync.example.com"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Projects</h2>
          <div className="h-px bg-gray-800 flex-1 ml-4" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative border border-gray-800 bg-black p-8 hover:border-primary/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-gray-400 hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.link} className="text-gray-400 hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-auto">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-gray-500">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
