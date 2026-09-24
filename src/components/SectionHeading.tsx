type SectionHeadingProps = {
  index: string;
  title: string;
  intro?: string;
  invert?: boolean;
};

export default function SectionHeading({ index, title, intro, invert = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-primary">{index}</p>
      <h2 className={`font-display text-4xl tracking-tight md:text-5xl ${invert ? "text-background" : "text-foreground"}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${invert ? "text-background/70" : "text-muted-foreground"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
