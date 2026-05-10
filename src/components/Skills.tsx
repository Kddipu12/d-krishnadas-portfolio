import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "AI/ML",
    skills: ["Multi-Agent Orchestration", "Vertex AI Memory Banks", "Fine-Tuning", "RAG Architectures", "Prompt Engineering", "Embedding Models"],
  },
  {
    category: "Automation & R&D",
    skills: ["LangChain", "LangGraph", "Playwright", "Puppeteer", "Selenium"],
  },
  {
    category: "Backend & Cloud",
    skills: ["AWS", "API Gateway", "Lambda", "Node.js", "Go", "FastAPI"],
  },
  {
    category: "Data & Databases",
    skills: ["PostgreSQL", "Vector Databases", "Pandas", "NumPy", "Seaborn"],
  },
  {
    category: "Development Tools",
    skills: ["Linux", "macOS", "Windows", "Git", "Docker"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Leadership", "Critical Thinking"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Skills</h2>
          <div className="h-px bg-gray-800 flex-1 ml-4" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-800 p-6 bg-black hover:border-primary/50 transition-colors group"
          >
            <div className="text-primary font-mono text-sm mb-4">{'<'} {category.category} {'/>'}</div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-900 text-gray-300 font-mono text-xs border border-gray-800 group-hover:border-gray-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
