import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Govt. Model Engineering College, Kochi",
    grade: "CGPA: 8.00 / 10.00",
    period: "May 2021 – July 2025",
    details: "Core Focus: Artificial Intelligence, Data Structures & Algorithms, Machine Learning, Operating Systems, Database Management Systems.",
  },
  {
    degree: "Class 12th (Higher Secondary - Science)",
    institution: "Rajagiri Public School, Kalamassery",
    grade: "Percentage: 97.2%",
    period: "May 2019 – May 2021",
    details: "Focus: Physics, Chemistry, Mathematics & Computer Science.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Education <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Background</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                      <p className="text-base font-semibold text-cyan-300">{item.institution}</p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-200 text-xs font-mono font-semibold">
                      {item.grade}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed pl-0 sm:pl-16">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
