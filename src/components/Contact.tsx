import { motion } from "framer-motion";
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
    <section id="contact" className="relative pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-mono text-sm">07.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Get In Touch</h2>
          <div className="h-px bg-gray-800 flex-1 ml-4" />
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-4xl md:text-6xl font-bold mb-6">What's Next?</h3>
        <p className="text-gray-400 font-mono text-sm max-w-lg mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 bg-transparent rounded-none px-8 py-6 uppercase tracking-wider text-xs font-mono transition-colors"
          asChild
        >
          <a href="mailto:dkrishnadas.mec@gmail.com">Say Hello</a>
        </Button>
      </div>

      <div className="flex justify-center gap-8 mt-24">
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label={contact.label}
          >
            <contact.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  );
}
