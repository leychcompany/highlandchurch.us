import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
};

const beliefStatements = [
  "We believe that Christians should be known as the most generous people on the planet.",
  "We believe that we should give cheerfully, regularly, and sacrificially.",
  "We believe that we should live with open hands always ready to give and receive.",
  "We believe in tithe and offerings motivated by grace, not guilt.",
  "Our church is not built on the generosity of a few but on the sacrifice and generosity of many.",
  "We're generous with our time, talents, and treasure.",
  "God has given richly towards us, it's our privilege to give back to Him.",
  "Generosity is our joy (Malachi 3:10, Proverbs 11:24-26, 2 Corinthians 8 & 9).",
];

export default function GivePage() {
  return (
    <>
      <PageHero
        title="Generosity is our joy"
        subtitle="Together we give. Together we see lives changed."
      />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 leading-relaxed text-neutral-700 md:px-6">
        <div className="space-y-5">
          {beliefStatements.map((statement) => (
            <p key={statement}>{statement}</p>
          ))}
        </div>
        <div className="pt-2">
          <Button href="https://highlnd.churchcenter.com/giving" external>
            Give Online
          </Button>
        </div>
        <p className="text-sm">
          *Please note that when you give online via a checking account, no fee
          is collected from your offerings. If you give via credit or debit card,
          3.5% of your gift will be deducted and given to the card agency. For
          giving related help or questions, please contact{" "}
          <a
            href={`mailto:${siteConfig.treasurerEmail}`}
            className="font-medium text-black underline underline-offset-4"
          >
            {siteConfig.treasurerEmail}
          </a>
        </p>
        <p className="pt-2 font-medium text-black">
          Thank you for generously supporting the ministries of Highland Church!
        </p>
        <h2 className="pt-8 text-2xl font-semibold text-black">
          Other ways to give
        </h2>
        <div className="space-y-4">
          <p>
            <strong>Give in person</strong> You can give in person at our Sunday
            weekend Gathering using the giving boxes at the exits of the worship
            center.
          </p>
          <p>
            <strong>Give by mail</strong> You can mail your gift to: Highland
            Church 2926 Big Horn Avenue Cody, WY 81414
          </p>
        </div>
      </section>
    </>
  );
}
