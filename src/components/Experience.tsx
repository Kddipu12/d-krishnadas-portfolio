import { motion } from "framer-motion";

const experiences = [
  {
    company: "Mozilor Technologies",
    role: "Software Engineer (R&D)",
    period: "Feb 2025 - Present",
    projects: [
      {
        name: "Autonomous Affiliate Onboarding Pipeline (CookieYes)",
        description: "Architected a 5-stage multi-agent pipeline that reduced affiliate onboarding latency from 3 weeks to 5 minutes through automated brand research and traffic scoring.",
      },
      {
        name: "Decision Memory System",
        description: "Developed a \"Decision Memory\" system using Vertex AI to capture human-in-the-loop logic, allowing agents to learn from manual approval/rejection patterns to refine future automated thresholds.",
      },
      {
        name: "Automated Financial Auditing",
        description: "Automated financial auditing and payment verification via bank APIs, with seamless integration into Tapfiliate for instant user provisioning.",
      },
      {
        name: "AI-First Revamp of WebYes",
        description: "Engineered advanced automation using LangGraph and Playwright to automate 20/37 WCAG manual accessibility checks, establishing an industry-leading automation rate.",
      },
      {
        name: "Real User Monitoring (RUM) Engine",
        description: "Designed and built the full RUM ingestion pipeline using AWS (API Gateway, Lambda, Kinesis Firehose, S3) and developed the client-side SDK for accurate telemetry capture.",
      },
      {
        name: "Plugin Recommender System",
        description: "Developed an AI recommendation system using fine-tuned OpenAI models to improve contextual accuracy for customer queries.",
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
    <section id="experience" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Experience</h2>
          <div className="h-px bg-gray-800 flex-1 ml-4" />
        </div>
      </motion.div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="text-sm font-mono text-gray-500 mb-2">{exp.period}</div>
                <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                <div className="text-primary font-mono text-sm">{exp.role}</div>
              </div>

              <div className="md:col-span-3 space-y-8">
                {exp.projects.map((project, projIndex) => (
                  <div key={projIndex} className="relative pl-6 border-l border-gray-800 group-hover:border-primary/50 transition-colors">
                    <div className="absolute w-2 h-2 rounded-full bg-black border border-primary -left-[5px] top-1.5" />
                    <h4 className="text-lg font-bold text-white mb-2">{project.name}</h4>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
