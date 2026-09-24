import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "Bachelor of Engineering, Computer Science",
    institution: "Govt. Model Engineering College, Kochi",
    grade: "CGPA 8.00 / 10",
    period: "2021 – 2025",
  },
  {
    degree: "Class 12",
    institution: "Rajagiri Public School, Kalamassery",
    grade: "97.2%",
    period: "2019 – 2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="05" title="Education" />

        <div className="divide-y divide-border border-y border-border">
          {education.map((edu) => (
            <div key={edu.degree} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
              <div>
                <h3 className="font-display text-2xl text-foreground">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">{edu.institution}</p>
              </div>
              <div className="text-sm text-muted-foreground sm:text-right">
                <p className="text-foreground">{edu.grade}</p>
                <p className="mt-1">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
