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
      <section className="grid min-h-[60vh] lg:grid-cols-2">
        <div className="relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/pexels-photo-9322688-683x1024.webp"
            alt="Prayer"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-center bg-cream px-6 py-16 md:px-12 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Prayer is our Priority
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Prayer</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            At Highland Church, we believe that prayer is not the spare tire of
            the church we go to when things break down; rather, we firmly hold
            that prayer is the engine from which the whole church gets its power!
          </p>
          <h2 className="mt-10 text-xl font-semibold">Submit a Prayer Request</h2>
          <p className="mt-3 text-neutral-600">
            Prayer is our first response. No matter what you&apos;re going
            through, we want to pray with you! Each and every request has the
            focus of our Prayer Team.
          </p>
          <div className="mt-8">
            <Button href={churchCenter.prayer} external>
              Submit a Prayer Request
            </Button>
          </div>
          <p className="mt-10 text-neutral-600">
            Join us for our pre-service prayer time, Sundays, 9:15 AM!
          </p>
        </div>
      </section>
    </>
  );
}
