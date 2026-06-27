type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  className = "",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-sage" : "text-clay"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
