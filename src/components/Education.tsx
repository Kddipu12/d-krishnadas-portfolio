import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering (Computer Science)",
    institution: "Govt. Model Engineering College, Kochi",
    grade: "CGPA 8.00/10",
    period: "May 2021 - July 2025",
  },
  {
    degree: "Class 12th",
    institution: "Rajagiri Public School, Kalamassery",
    grade: "Percentage - 97.2%",
    period: "May 2019 - May 2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-8 sm:mb-12 md:mb-16" />
        </motion.div>

        <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-primary/50">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-base sm:text-lg text-primary font-semibold mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 text-sm sm:text-base text-muted-foreground">
                      <span>{edu.grade}</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
