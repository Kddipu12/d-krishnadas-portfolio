import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dkrishnadas.mec@gmail.com",
    href: "mailto:dkrishnadas.mec@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7012770184",
    href: "tel:+917012770184",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/dkrishnadas/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View GitHub Profile",
    href: "https://github.com/Kddipu12",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-8 sm:mb-12 md:mb-16" />
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4 sm:p-6 md:p-8 lg:p-12">
            <p className="text-base sm:text-lg text-muted-foreground text-center mb-6 sm:mb-8 px-2">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/50 hover:border-primary/50 h-full min-h-[100px] sm:min-h-[120px]">
                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                        {contact.label}
                      </p>
                      <p className="text-sm sm:text-base text-foreground font-medium break-all sm:break-words leading-snug">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Email Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 text-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base w-full sm:w-auto px-6 sm:px-8"
                asChild
              >
                <a href="mailto:dkrishnadas.mec@gmail.com">Send an Email</a>
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
