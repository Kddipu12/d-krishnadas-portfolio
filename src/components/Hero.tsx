import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const portrait = `${import.meta.env.BASE_URL}portrait.jpg`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-8 pt-6 sm:pb-16 sm:pt-10">
      <p className="text-center text-sm text-foreground/70 sm:text-base">
        <span aria-hidden>👋</span>, my name is Krishnadas and I am a
      </p>

      <div className="relative mx-auto mt-3 min-h-[560px] max-w-[1400px] px-2 sm:mt-5 sm:min-h-[680px] sm:px-6">
        <h1 className="relative z-20 text-center">
          <span className="hero-fill block text-foreground">Software</span>
        </h1>

        <button
          type="button"
          aria-label="See the work"
          onClick={(event) => scrollToSection("projects", event)}
          className="absolute left-1/2 top-[18%] z-30 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-foreground/15 bg-white shadow-sm transition-transform hover:scale-105 sm:h-14 sm:w-14"
        >
          <ArrowUpRight className="h-5 w-5" />
        </button>

        <p className="hero-stroke relative z-0 -mt-[0.08em] text-center" aria-hidden>
          Engineer
        </p>
        <p className="sr-only">Software Engineer</p>

        <img
          src={portrait}
          alt="D Krishnadas"
          className="portrait-fade pointer-events-none absolute left-1/2 top-[18%] z-10 h-[420px] w-[320px] -translate-x-1/2 object-cover object-[center_20%] sm:top-[22%] sm:h-[520px] sm:w-[380px]"
        />

        <div className="relative z-20 mt-2 flex items-end justify-between gap-4 px-3 sm:mt-0 sm:px-2">
          <p className="max-w-[9rem] text-left text-sm leading-snug text-foreground/80 sm:max-w-none sm:text-base">
            based in Kochi, India.
          </p>
          <p className="hidden text-right text-sm tracking-wide text-foreground/45 sm:block">
            Mozilor · AWS · OpenAI
          </p>
        </div>

        <div className="absolute bottom-2 left-0 right-0 z-30 flex flex-col items-center justify-center gap-3 sm:bottom-6 sm:flex-row">
          <button
            type="button"
            onClick={(event) => scrollToSection("projects", event)}
            className="rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            See the work
          </button>
          <button
            type="button"
            onClick={(event) => scrollToSection("contact", event)}
            className="rounded-lg border border-foreground/70 bg-white/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
