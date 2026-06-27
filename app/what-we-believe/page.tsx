import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { beliefs } from "@/lib/content";
import { churchCenter } from "@/lib/site";

export const metadata: Metadata = {
  title: "What we believe",
};

export default function WhatWeBelievePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src="/images/highland-church-mountain.webp"
          alt="Mountains near Cody, Wyoming"
          fill
          className="object-cover object-[50%_60%]"
          preload
          fetchPriority="high"
          quality={65}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-24 md:px-8 md:pb-20">
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage">
            <span className="h-px w-10 bg-sage/70" />
            One Faith · One Savior · One Hope
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl">
            What we believe
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/85 md:text-xl">
            These aren&apos;t just concepts or ideas — they express what we hold
            to be true and real about God, the world He made, and where we fit in
            all of it.
          </p>
        </div>
      </section>

      {/* Beliefs grid */}
      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-clay">
              Our Statement of Faith
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-forest md:text-4xl">
              The convictions at the heart of who we are
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {beliefs.map((belief, index) => (
              <article
                key={belief.title}
                className="group rounded-3xl border border-sand bg-white p-8 shadow-sm transition hover:border-clay/40 hover:shadow-md"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl font-semibold text-clay/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-forest">
                    {belief.title}
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-charcoal/75">
                  {belief.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-forest px-5 py-20 text-center md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Have questions about faith?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/80">
            We&apos;d love to talk. Whether you&apos;re exploring Christianity for
            the first time or have been walking with Jesus for years, there&apos;s
            a place for you here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={churchCenter.connect} external variant="clay">
              Connect With Us
            </Button>
            <Button href="/contact" variant="light">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
