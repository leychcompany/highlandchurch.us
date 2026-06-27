import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { churchCenter, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
};

const beliefStatements = [
  "Christians should be known as the most generous people on the planet.",
  "We should give cheerfully, regularly, and sacrificially.",
  "We should live with open hands — always ready to give and receive.",
  "We give tithes and offerings motivated by grace, not guilt.",
  "Our church is built not on the generosity of a few, but on the sacrifice of many.",
  "We're generous with our time, talents, and treasure.",
  "God has given richly toward us; it's our privilege to give back to Him.",
];

export default function GivePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src="/images/highland-church-mountain.jpg"
          alt="Mountains near Cody, Wyoming"
          fill
          className="object-cover object-[48%_70%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-24 md:px-8 md:pb-20">
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage">
            <span className="h-px w-10 bg-sage/70" />
            Generosity is our joy
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl">
            Give
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/85 md:text-xl">
            Together we give. Together we see lives changed.
          </p>
        </div>
      </section>

      {/* What we believe about giving */}
      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            Our heart for generosity
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-forest md:text-4xl">
            We believe generosity is a privilege, not an obligation.
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {beliefStatements.map((statement) => (
              <div key={statement} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-clay"
                />
                <p className="text-lg leading-relaxed text-charcoal/75">
                  {statement}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm italic text-charcoal/55">
            Malachi 3:10 · Proverbs 11:24–26 · 2 Corinthians 8 &amp; 9
          </p>
        </div>
      </section>

      {/* Give online CTA */}
      <section className="bg-sand/50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-forest px-8 py-14 text-center shadow-[0_20px_50px_rgba(40,48,31,0.2)] md:px-12">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Give Online
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            The simplest, most secure way to give to the ministries of Highland
            Church.
          </p>
          <div className="mt-8">
            <Button href={churchCenter.giving} external variant="clay">
              Give Online
            </Button>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-cream/65">
            When you give online via a checking account, no fee is collected from
            your offering. If you give via credit or debit card, 3.5% of your gift
            will be deducted and given to the card agency. For giving-related help
            or questions, contact{" "}
            <a
              href={`mailto:${siteConfig.treasurerEmail}`}
              className="font-medium text-cream underline underline-offset-4 hover:text-sage"
            >
              {siteConfig.treasurerEmail}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Other ways to give */}
      <section className="bg-cream px-5 pb-24 pt-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-semibold text-forest md:text-4xl">
            Other ways to give
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-sand bg-white p-8 shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-forest">
                Give in person
              </h3>
              <p className="mt-4 leading-relaxed text-charcoal/75">
                Give in person at our Sunday Gathering using the giving boxes at
                the exits of the worship center.
              </p>
            </div>
            <div className="rounded-3xl border border-sand bg-white p-8 shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-forest">
                Give by mail
              </h3>
              <p className="mt-4 leading-relaxed text-charcoal/75">
                Mail your gift to:
                <br />
                Highland Church
                <br />
                2926 Big Horn Avenue
                <br />
                Cody, WY 81414
              </p>
            </div>
          </div>
          <p className="mt-12 text-center font-display text-xl font-medium text-forest">
            Thank you for generously supporting the ministries of Highland Church!
          </p>
        </div>
      </section>
    </>
  );
}
