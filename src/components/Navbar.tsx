import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Education", href: "education" },
  { name: "Achievements", href: "achievements" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // ScrollSpy logic to highlight active nav item
      const sections = navItems.map((item) => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    window.location.hash = `/${id}`;
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#/about"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-bold font-mono text-lg shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
            DK
          </div>
          <div className="hidden sm:block text-left">
            <span className="font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors block text-sm">
              D Krishnadas
            </span>
            <span className="text-[10px] text-cyan-400/80 font-mono tracking-wider block">
              R&D ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-nav px-4 py-1.5 rounded-full shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/60 rounded-full text-xs font-mono gap-1.5"
            onClick={() => scrollTo("contact")}
          >
            <Send className="w-3.5 h-3.5" />
            Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl glass-nav text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-4 top-20 glass-nav rounded-2xl p-6 shadow-2xl border border-white/10 z-50 flex flex-col gap-3"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.href
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex gap-2">
              <Button
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-xs rounded-xl"
                onClick={() => scrollTo("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
