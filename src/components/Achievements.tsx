import SectionHeading from "./SectionHeading";

const achievements = [
  {
    title: "HPAIR 2025, Tokyo",
    description: "Harvard Project for Asian and International Relations, organized by Harvard College.",
  },
  {
    title: "Millennium Fellow 2024",
    description: "Selected for a global leadership development program.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="06" title="Also" intro="A few things outside the day-to-day engineering work." />

        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((achievement) => (
            <article key={achievement.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-2xl text-foreground">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{achievement.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Outside work: roller hockey, badminton, and cricket.
        </p>
      </div>
    </section>
  );
}
