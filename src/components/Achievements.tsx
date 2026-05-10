import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "HPAIR 2025 - Tokyo, Japan",
    description: "Participated in the Harvard Project for Asian and International Relations organized by Harvard College",
  },
  {
    title: "Millennium Fellow 2024",
    description: "Selected as a Millennium Fellow, a global leadership development program",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Achievements</h2>
          <div className="h-px bg-gray-800 flex-1 ml-4" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 border border-gray-800 bg-black p-6 group hover:border-primary/50 transition-colors"
          >
            <div className="mt-1">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-400 font-mono text-sm">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 border border-gray-800 p-6 flex items-center justify-between"
      >
        <div className="text-white font-bold">EXTRACURRICULAR ACTIVITIES</div>
        <div className="text-gray-400 font-mono text-sm text-right">
          Roller Hockey // Badminton // Cricket
        </div>
      </motion.div>
    </section>
  );
}
