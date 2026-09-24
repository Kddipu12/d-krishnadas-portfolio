import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Orma AI: Memory Support Bot",
    description:
      "A WhatsApp chatbot built with Langchain and the OpenAI API to help dementia patients recall and record memories. Retrieval augmented generation personalizes replies from past conversations.",
    tech: ["Langchain", "OpenAI API", "PostgreSQL", "RAG", "WhatsApp API"],
    link: "https://github.com/Kddipu12/Orma-AI",
  },
  {
    title: "CookieYes Affiliate Onboarding",
    description:
      "Affiliate onboarding for the CookieYes Partner Program, with instant AI approval and recurring revenue tracking.",
    tech: ["AI", "Affiliate program"],
    link: "https://www.cookieyes.com/partners/affiliates/",
  },
  {
    title: "RenderYes",
    description:
      "A framework for deterministic UI rendering in React, with constrained AI planning and secure data fetching.",
    tech: ["React", "Node.js", "AI"],
    link: "https://github.com/mozilor-technologies/RenderYes",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="04" title="Projects" intro="Selected work from research, product, and side builds." />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const linked = project.link !== "#";
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl leading-tight text-foreground">{project.title}</h3>
                  {linked ? (
                    <a
                      href={project.link}
                      className="mt-1 text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`Open ${project.title}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
