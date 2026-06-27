import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  align?: "center" | "left";
  overlay?: boolean;
  children?: React.ReactNode;
};

export function PageHero({
  title,
  subtitle,
  image,
  align = "center",
  overlay = true,
  children,
}: PageHeroProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  if (image) {
    return (
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden md:min-h-[50vh]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        {overlay && <div className="absolute inset-0 bg-black/45" />}
        <div
          className={`relative z-10 mx-auto flex max-w-4xl flex-col gap-4 px-4 py-24 md:px-6 ${alignment}`}
        >
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-lg text-white/90 md:text-xl">{subtitle}</p>
          )}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream px-4 py-16 md:px-6 md:py-20">
      <div className={`mx-auto flex max-w-4xl flex-col gap-4 ${alignment}`}>
        <h1 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-lg text-neutral-600">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
