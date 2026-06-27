import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "clay";
  external?: boolean;
  className?: string;
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-pine text-cream hover:bg-forest",
  outline:
    "border border-pine/40 text-pine hover:border-pine hover:bg-pine hover:text-cream",
  light: "bg-cream text-forest hover:bg-sage hover:text-forest",
  clay: "bg-clay text-cream hover:bg-clay/85",
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors";
  const styles = variantStyles[variant];

  const classes = `${base} ${styles} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
