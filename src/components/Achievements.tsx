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
    <section id="achievements" className="py-24 relative bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-8 hover:shadow-xl transition-all hover:border-primary/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
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
          className="mt-12 text-center"
        >
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <span className="font-semibold text-primary">Extracurricular Activities:</span> Roller Hockey, Badminton, Cricket
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
