import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";

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
    value: "linkedin.com/in/dkrishnadas",
    href: "https://www.linkedin.com/in/dkrishnadas/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Kddipu12",
    href: "https://github.com/Kddipu12",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <SectionHeading
          invert
          index="07"
          title="Get in touch"
          intro="Open to new projects, research problems, and teams that want to ship careful software."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {contactInfo.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="group rounded-2xl border border-background/15 bg-background/5 p-5 transition-colors hover:bg-background/10"
            >
              <contact.icon className="h-4 w-4 text-primary" />
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-background/60">{contact.label}</p>
              <p className="mt-1 break-words text-base text-background">{contact.value}</p>
            </a>
          ))}
        </div>

        <Button asChild size="lg" className="mt-8 rounded-full px-6">
          <a href="mailto:dkrishnadas.mec@gmail.com">Send an email</a>
        </Button>

        <p className="mt-16 text-sm text-background/50">© {new Date().getFullYear()} D Krishnadas</p>
      </div>
    </section>
  );
}
