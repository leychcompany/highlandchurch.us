import type { Metadata } from "next";
import Image from "next/image";
import { beliefs } from "@/lib/content";

export const metadata: Metadata = {
  title: "What we believe",
};

export default function WhatWeBelievePage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <Image
          src="/images/medicine-bow-mountains-and-a-lake-landscape-15088317-683x1024.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16 md:px-6">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            What we believe
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Our beliefs are at the heart of what makes us who we are. These
            aren&apos;t just concepts or ideas; these beliefs express what we
            believe to be true and real about God, the world He made, and where
            we fit in all of that.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <p className="mb-12 text-center text-xl font-medium text-neutral-700">
          One Faith, One Savior, One Hope
        </p>
        <div className="space-y-10">
          {beliefs.map((belief) => (
            <article key={belief.title}>
              <h2 className="text-xl font-semibold">{belief.title}</h2>
              <p className="mt-3 leading-relaxed text-neutral-600">{belief.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
