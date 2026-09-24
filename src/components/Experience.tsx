import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Mozilor Technologies",
    role: "Software Engineer (R&D)",
    period: "Feb 2025 – Present",
    projects: [
      {
        name: "AI Powered Affiliate Onboarding",
        description:
          "Affiliate onboarding for the CookieYes Partner Program, with instant AI approval and recurring revenue tracking.",
      },
      {
        name: "RenderYes",
        description:
          "A framework for deterministic UI rendering in React, with constrained AI planning and secure data fetching.",
      },
      {
        name: "AI-First Revamp of WebYes",
        description:
          "Owned the R&D effort to turn WebYes into an AI-first platform. Automated 20 of 37 WCAG manual accessibility checks.",
      },
      {
        name: "Real User Monitoring (RUM)",
        description:
          "Designed the RUM ingestion pipeline on AWS: API Gateway, Go Lambda, Kinesis Firehose, and S3. Built metric enrichment and the client-side RUM SDK.",
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
        description:
          "Improved baggage recovery workflows and shipped UI changes in JavaScript and CSS.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          title="Experience"
          intro="Product work across AI automation, monitoring, and accessibility."
        />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl text-foreground sm:text-3xl">{exp.company}</h3>
                  <p className="mt-1 text-sm text-primary sm:text-base">{exp.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {exp.projects.map((project) => (
                  <div key={project.name} className="rounded-xl bg-secondary/70 p-4">
                    <h4 className="font-sans text-sm font-semibold tracking-normal text-foreground">{project.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
