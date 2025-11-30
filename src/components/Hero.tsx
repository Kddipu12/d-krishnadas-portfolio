import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  
  // Update hash using HashRouter format (#/sectionId)
  window.location.hash = `/${sectionId}`;
  
  // Use setTimeout to ensure DOM is ready
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 20; // 20px offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, 0);
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 sm:space-y-6"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-cursive font-semibold leading-tight px-2 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan bg-clip-text text-transparent inline-block">
              {Array.from("D Krishnadas").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.05,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.div
            className="space-y-1 sm:space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Software Engineer
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/80 font-light tracking-wider">
              Research & Development
            </p>
          </motion.div>
          
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            Building AI-driven automation systems, real-user monitoring pipelines, 
            and ML-powered solutions
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base w-full sm:w-auto"
              onClick={(e) => scrollToSection("contact", e)}
              type="button"
            >
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base w-full sm:w-auto"
              onClick={(e) => scrollToSection("projects", e)}
              type="button"
            >
              View Projects
            </Button>
          </motion.div>
          
          <motion.div
            className="flex gap-4 sm:gap-6 justify-center pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
          >
            <a 
              href="mailto:dkrishnadas.mec@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="tel:+917012770184" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dkrishnadas/" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://github.com/Kddipu12" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3, duration: 1.5, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1.5 sm:mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
