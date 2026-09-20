import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Address",
    value: "dkrishnadas.mec@gmail.com",
    href: "mailto:dkrishnadas.mec@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+91 7012770184",
    href: "tel:+917012770184",
    copyable: true,
  },
  {
    icon: Linkedin,
    title: "LinkedIn Profile",
    value: "linkedin.com/in/dkrishnadas",
    href: "https://www.linkedin.com/in/dkrishnadas/",
    copyable: false,
  },
  {
    icon: Github,
    title: "GitHub Repositories",
    value: "github.com/Kddipu12",
    href: "https://github.com/Kddipu12",
    copyable: false,
  },
];

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    toast.success(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">Interested in collaborating or discussing AI / R&D roles?</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Feel free to reach out directly via email, phone, or LinkedIn. I am always open to discussing new engineering projects, technical innovation, or employment opportunities.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
            {contactMethods.map((item, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-white/5 flex items-center justify-between gap-4 group"
              >
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 group-hover:scale-105 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono text-gray-400 mb-0.5">{item.title}</p>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                </a>

                {item.copyable && (
                  <button
                    onClick={() => handleCopy(item.value, item.title)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-300 transition-colors border border-white/10 shrink-0"
                    title={`Copy ${item.title}`}
                  >
                    {copiedField === item.title ? (
                      <Check className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center pt-4 border-t border-white/10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-sm rounded-full px-10 py-6 shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:scale-105 gap-2"
              asChild
            >
              <a href="mailto:dkrishnadas.mec@gmail.com">
                <Send className="w-4 h-4" />
                <span>Send Me An Email Directly</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
