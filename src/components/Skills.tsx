import { motion } from "framer-motion";
import { Brain, Terminal, Cloud, Database, Wrench, Lightbulb, Sparkles, Layers } from "lucide-react";

const skillCategories = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    color: "from-cyan-500 to-blue-500",
    skills: ["Embedding Models (DistilBERT)", "OpenAI Fine-Tuning", "Prompt Engineering", "LLM Integration", "RAG Systems", "Semantic Search"],
  },
  {
    category: "Automation & Agentic R&D",
    icon: Terminal,
    color: "from-blue-500 to-indigo-500",
    skills: ["LangChain", "LangGraph", "Playwright", "Puppeteer", "Selenium", "Web Scraping Automation"],
  },
  {
    category: "Backend & Cloud Infrastructure",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    skills: ["AWS API Gateway", "AWS Lambda (Go)", "AWS S3", "AWS Kinesis Firehose", "Node.js", "Go", "FastAPI", "RESTful APIs"],
  },
  {
    category: "Data & Databases",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: ["PostgreSQL", "Vector Databases", "Pandas", "NumPy", "Seaborn", "Data Processing"],
  },
  {
    category: "Development Tools & Environment",
    icon: Wrench,
    color: "from-cyan-500 to-teal-500",
    skills: ["Git & GitHub", "Docker", "Linux / macOS", "VS Code", "Vite & React", "TypeScript / JavaScript"],
  },
  {
    category: "Engineering & Leadership Competencies",
    icon: Lightbulb,
    color: "from-teal-500 to-cyan-500",
    skills: ["Rapid Prototyping", "R&D System Ownership", "Complex Problem Solving", "Technical Leadership", "Agile Execution"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
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
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-300">
                        <cat.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">{cat.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-gray-200 hover:text-cyan-200 text-xs font-mono transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
