import { Button } from "./Button";

type ServiceCardProps = {
  title: string;
  description: string;
  cta?: string;
  href?: string;
};

export function ServiceCard({ title, description, cta, href }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
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
