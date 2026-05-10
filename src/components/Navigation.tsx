import { motion } from "framer-motion";

const navItems = [
  { name: "ABOUT", id: "about" },
  { name: "SKILLS", id: "skills" },
  { name: "EXPERIENCE", id: "experience" },
  { name: "PROJECTS", id: "projects" },
  { name: "EDUCATION", id: "education" },
  { name: "CONTACT", id: "contact" },
];

const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  window.location.hash = `/${sectionId}`;
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, 0);
};

export default function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex items-center justify-between mix-blend-difference text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 border border-white flex items-center justify-center">
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-white" />
        </div>
        <span className="font-mono text-sm tracking-widest hidden sm:block">D KRISHNADAS</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-gray-400">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={(e) => scrollToSection(item.id, e)}
            className="hover:text-white transition-colors uppercase"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="border border-white/20 px-4 py-2 flex items-center gap-2 text-xs font-mono">
        AVAILABLE FOR WORK <span className="w-2 h-2 rounded-full bg-primary" />
      </div>
    </motion.nav>
  );
}
