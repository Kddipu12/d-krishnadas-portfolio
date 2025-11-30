import { motion } from "framer-motion";
import { Card } from "./ui/card";

const skillCategories = [
  {
    category: "AI/ML",
    skills: ["Embedding Models", "Fine-Tuning", "Prompt Engineering", "LLM Integration"],
  },
  {
    category: "Automation & R&D",
    skills: ["LangChain", "LangGraph", "Playwright", "Puppeteer", "Selenium"],
  },
  {
    category: "Backend & Cloud",
    skills: ["AWS (API Gateway, Lambda, S3, Firehose)", "Node.js", "Go", "FastAPI"],
  },
  {
    category: "Data & Databases",
    skills: ["PostgreSQL", "Pandas", "NumPy", "Seaborn"],
  },
  {
    category: "Development Tools",
    skills: ["Linux", "macOS", "Windows", "Git", "Docker"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Leadership", "Time Management", "Critical Thinking"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-8 sm:mb-12 md:mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 sm:p-6 h-full hover:shadow-xl transition-all hover:border-primary/50">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm border border-border/50"
                    >
                      {skill}
                    </span>
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
