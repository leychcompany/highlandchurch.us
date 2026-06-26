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
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
            light ? "text-cream/80" : "text-neutral-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
