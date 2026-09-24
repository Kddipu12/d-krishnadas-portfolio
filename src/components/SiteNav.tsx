import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const links = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="relative z-40">
      <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[1.65rem] font-black tracking-[-0.06em] text-foreground"
        >
          KD<span className="text-[#ff3b30]">.</span>
        </button>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="text-[15px] font-medium tracking-tight text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/drive/folders/1_fiMq7L8c-DyozTaa_isPr3jpwayyuZk"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-foreground/20 px-4 py-2.5 text-sm font-medium text-foreground sm:inline-flex"
          >
            Résumé
          </a>
          <a
            href="mailto:dkrishnadas.mec@gmail.com"
            className="hidden rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background sm:inline-flex"
          >
            Say hello
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border px-5 py-2 md:hidden" aria-label="Mobile">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="block w-full py-3 text-left text-sm"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/drive/folders/1_fiMq7L8c-DyozTaa_isPr3jpwayyuZk"
            target="_blank"
            rel="noreferrer"
            className="block py-3 text-sm"
          >
            Résumé
          </a>
          <a href="mailto:dkrishnadas.mec@gmail.com" className="block py-3 text-sm">
            Say hello
          </a>
        </nav>
      ) : null}
    </header>
  );
}
