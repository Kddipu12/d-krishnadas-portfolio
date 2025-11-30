import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Orma AI: Memory Support Bot",
    description: "Developed a WhatsApp chatbot using Langchain and OpenAI API to assist dementia patients in recalling and recording memories. Implemented Retrieval Augmented Generation (RAG) to personalize responses based on past interactions.",
    tech: ["Langchain", "OpenAI API", "PostgreSQL", "RAG", "WhatsApp API"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-8 sm:mb-12 md:mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 sm:p-6 h-full hover:shadow-xl transition-all hover:border-primary/50 flex flex-col">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground pr-2">{project.title}</h3>
                  <a 
                    href={project.link}
                    className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary/50 text-xs sm:text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
