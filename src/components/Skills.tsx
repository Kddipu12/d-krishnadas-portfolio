import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    category: "AI / ML",
    skills: ["Embedding models", "Fine-tuning", "Prompt engineering", "LLM integration"],
  },
  {
    category: "Automation",
    skills: ["LangChain", "LangGraph", "Playwright", "Puppeteer", "Selenium"],
  },
  {
    category: "Backend & cloud",
    skills: ["AWS", "Node.js", "Go", "FastAPI"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "Pandas", "NumPy", "Seaborn"],
  },
  {
    category: "Tools",
    skills: ["Linux", "macOS", "Git", "Docker"],
  },
  {
    category: "Working style",
    skills: ["Communication", "Problem solving", "Leadership", "Critical thinking"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="03" title="Skills" intro="The tools I use when a prototype has to become a system." />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-card p-6">
              <h3 className="font-sans text-sm font-semibold tracking-normal text-foreground">{category.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
