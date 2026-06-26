import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { connectCards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Connect",
};

export default function ConnectPage() {
  return (
    <>
      <PageHero
        title="Connect"
        subtitle="Take your next step with Highland Church"
      />
      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
        {connectCards.map((card) => (
          <article
            key={card.title}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">
              {card.description}
            </p>
            <div className="mt-8">
              <Button href={card.href} external className="w-full">
                {card.cta}
              </Button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
