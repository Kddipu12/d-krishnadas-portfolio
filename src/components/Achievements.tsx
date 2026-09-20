import { motion } from "framer-motion";
import { Trophy, Award, Globe, Medal, Activity, Sparkles } from "lucide-react";

const achievements = [
  {
    title: "HPAIR 2025 - Tokyo, Japan",
    subtitle: "Harvard Project for Asian and International Relations",
    description: "Selected to participate in the prestigious international conference organized by Harvard College in Tokyo, engaging in high-level discussions on technology, AI governance, and global innovation.",
    icon: Globe,
    tag: "International Summit",
    location: "Tokyo, Japan",
  },
  {
    title: "Millennium Fellow 2024",
    subtitle: "United Nations Academic Impact & MCN",
    description: "Selected for the Millennium Fellowship, a world-class leadership development program recognizing students taking action on sustainable development goals and tech for social impact.",
    icon: Trophy,
    tag: "Global Fellowship",
    location: "Global Program",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3">
            <Medal className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Achievements & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs font-mono text-cyan-300/80 mb-3">{item.subtitle}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="text-xs font-mono text-gray-400 pt-4 border-t border-white/10 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sports & Extracurriculars Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card p-6 rounded-2xl border border-white/10 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-cyan-300 font-mono">Extracurricular Pursuits:</span> Competitive Roller Hockey, Badminton, and Cricket.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
