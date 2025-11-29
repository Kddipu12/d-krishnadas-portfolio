import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    company: "Mozilor Technologies",
    role: "Software Engineer (R&D)",
    period: "Feb 2025 - Present",
    projects: [
      {
        name: "Agency Sign-Up Automation",
        description: "Automated agency verification workflow by scraping websites, vectorizing content (DistilBERT/FB embeddings), and classifying them against domain-specific keyword sets. Built automated email decisioning system.",
      },
      {
        name: "Plugin Recommender System – WebToffee",
        description: "Developed an AI-based plugin recommendation system using fine-tuned OpenAI models, trained on internal customer–plugin datasets.",
      },
      {
        name: "AI-First Revamp of WebYes",
        description: "Granted full R&D ownership to transform WebYes into an AI-first platform. Successfully automated 20 out of 37 WCAG manual accessibility checks, an industry-leading achievement.",
      },
      {
        name: "Real User Monitoring (RUM)",
        description: "Designed and built the entire RUM ingestion pipeline using AWS: API Gateway → Lambda (Go) → Kinesis Firehose → S3. Developed Go-based Lambda for metric enrichment and built client-side RUM SDK.",
      },
    ],
  },
  {
    company: "IBS Software",
    role: "Project Trainee",
    period: "Jul 2024 – Sep 2024",
    projects: [
      {
        name: "Baggage Tracking System",
        description: "Contributed to improving baggage recovery workflows. Worked with JavaScript and CSS to implement UI changes and enhance user experience.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-16" />
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.company}</h3>
                    <p className="text-xl text-primary font-semibold">{exp.role}</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>

                <div className="space-y-6">
                  {exp.projects.map((project, projIndex) => (
                    <div key={projIndex} className="border-l-2 border-primary/50 pl-4">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {project.name}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
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
