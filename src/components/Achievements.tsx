import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Award, Trophy } from "lucide-react";

const achievements = [
  {
    title: "HPAIR 2025 - Tokyo, Japan",
    description: "Participated in the Harvard Project for Asian and International Relations organized by Harvard College",
    icon: Trophy,
  },
  {
    title: "Millennium Fellow 2024",
    description: "Selected as a Millennium Fellow, a global leadership development program",
    icon: Award,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-8 sm:mb-12 md:mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all hover:border-primary/50">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <achievement.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground">
              <span className="font-semibold text-primary">Extracurricular Activities:</span> Roller Hockey, Badminton, Cricket
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
