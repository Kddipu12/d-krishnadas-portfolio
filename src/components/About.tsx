import { motion } from "framer-motion";
import { Card } from "./ui/card";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-8 sm:mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Software Engineer (R&D) with hands-on experience building AI-driven automation systems, 
              real-user monitoring pipelines, ML-powered recommendation engines, and accessibility testing frameworks.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Started as an AI Intern at Mozilor Technologies and transitioned into a full-time R&D engineer 
              owning multiple high-impact projects across AI automation, backend engineering, LLM fine-tuning, 
              and product experimentation.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Strong in problem-solving, rapid prototyping, and designing scalable, production-ready systems. 
              Passionate about leveraging cutting-edge AI technologies to solve real-world challenges.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
