import { Button } from "./Button";

type ServiceCardProps = {
  title: string;
  description: string;
  cta?: string;
  href?: string;
};

export function ServiceCard({ title, description, cta, href }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-sand bg-cream/60 p-7 transition hover:border-sage hover:bg-white hover:shadow-[0_12px_30px_rgba(40,48,31,0.08)]">
      <h3 className="font-display text-xl font-semibold text-forest">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
        {description}
      </p>
      {cta && href && (
        <div className="mt-6">
          <Button href={href} external variant="outline" className="w-full sm:w-auto">
            {cta}
          </Button>
        </div>
      )}
    </article>
  );
}
