import { motion } from "framer-motion";

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
    <section id="education" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Education</h2>
          <div className="h-px bg-gray-800 flex-1 ml-4" />
        </div>
      </motion.div>

      <div className="space-y-6 max-w-3xl">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6 group"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
              <p className="text-gray-400 font-mono text-sm">{edu.institution}</p>
            </div>
            <div className="flex flex-col md:items-end gap-1">
              <span className="text-white font-mono text-sm bg-gray-900 px-3 py-1 border border-gray-800">{edu.grade}</span>
              <span className="text-gray-500 font-mono text-xs">{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
