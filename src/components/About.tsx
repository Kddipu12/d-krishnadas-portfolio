import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const points = [
  "AI-driven automation and recommendation systems",
  "Real-user monitoring pipelines on AWS",
  "Accessibility testing and LLM experimentation",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading index="01" title="About" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            Software Engineer (R&D) with hands-on experience building AI-driven automation systems, real-user
            monitoring pipelines, ML-powered recommendation engines, and accessibility testing frameworks.
          </p>
          <p>
            Started as an AI Intern at Mozilor Technologies and moved into a full-time R&D role owning projects
            across AI automation, backend engineering, LLM fine-tuning, and product experimentation.
          </p>
          <p>
            Strong in problem-solving, rapid prototyping, and designing systems that can ship. I like using current
            AI tools on problems that already exist in a product.
          </p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-3">
            {points.map((point) => (
              <li key={point} className="rounded-xl border border-border bg-card px-4 py-4 text-sm leading-snug text-foreground">
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
