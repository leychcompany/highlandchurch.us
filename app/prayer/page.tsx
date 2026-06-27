import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { churchCenter } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prayer",
};

export default function PrayerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src="/images/prayer/prayer-worship.jpg"
          alt="Highland Church gathered in worship"
          fill
          className="object-cover object-center"
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-24 md:px-8 md:pb-20">
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage">
            <span className="h-px w-10 bg-sage/70" />
            Prayer is our Priority
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl">
            Prayer
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/85 md:text-xl">
            We believe that prayer is not the spare tire of the church we go to
            when things break down; rather, we firmly hold that prayer is the
            engine from which the whole church gets its power.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-clay">
              We want to pray with you
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-forest md:text-4xl">
              Submit a Prayer Request
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/75">
              Prayer is our first response. No matter what you&apos;re going
              through, we want to pray with you. Each and every request has the
              focus of our Prayer Team.
            </p>
            <div className="mt-8">
              <Button href={churchCenter.prayer} external variant="clay">
                Submit a Prayer Request
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-sand bg-sand/40 p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold text-forest">
              Pray with us
            </h3>
            <p className="mt-4 leading-relaxed text-charcoal/75">
              Join us for our pre-service prayer time every Sunday at 9:15 AM as
              we ask God to move in our church, our city, and our world before we
              gather to worship.
            </p>
            <p className="mt-6 font-display text-xl font-semibold text-clay">
              Sundays · 9:15 AM
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
