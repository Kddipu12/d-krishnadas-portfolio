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
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 h-full hover:shadow-xl transition-all hover:border-primary/50 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <a 
                    href={project.link}
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary/50">
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
