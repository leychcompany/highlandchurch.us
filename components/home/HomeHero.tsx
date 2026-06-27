import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { YouTubePreview } from "@/components/ui/YouTubePreview";
import { churchCenter, siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative bg-cream">
      <div className="relative min-h-[88vh]">
        <Image
          src="/images/highland-church-mountain.webp"
          alt="Mountains near Cody, Wyoming"
          fill
          className="object-cover object-[48%_80%]"
          preload
          fetchPriority="high"
          quality={55}
          sizes="100vw"
        />
        {/* Warm forest-tinted gradient for contrast + earthy mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/45 to-forest/80" />
        <div className="absolute inset-0 bg-charcoal/15" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 pb-44 pt-32 md:px-8 md:pb-52">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage">
              <span className="h-px w-10 bg-sage/70" />
              A church in Cody, Wyoming
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-[5rem]">
              Love Jesus,
              <br />
              Live like Jesus,
              <br />
              <span className="italic text-sage">Lead others</span> to Jesus.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-cream/85 md:text-xl">
              Join us every Sunday at 10am &amp; 5pm — with a shared meal after
              each service. Come as you are.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" variant="clay">
                Plan Your Visit
              </Button>
              <a
                href={churchCenter.connect}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-3 text-sm font-medium tracking-wide text-cream transition hover:bg-cream hover:text-forest"
              >
                New Here? Connect
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping latest sermon card */}
      <div className="relative z-20 mx-auto max-w-6xl px-5 md:px-8">
        <div className="-mt-32 overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(40,48,31,0.18)] md:-mt-40">
          <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_1.4fr] md:gap-10 md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
                Latest Message
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest lg:text-4xl">
                Watch our latest sermon
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                Catch up on the most recent teaching from Highland Church, or
                browse the full archive of messages.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/messages">All Messages</Button>
                <Link
                  href={siteConfig.spotifyPodcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-pine/30 px-6 py-3 text-sm font-medium text-pine transition hover:bg-pine hover:text-cream"
                >
                  High Pursuit Podcast
                </Link>
              </div>
            </div>
            <YouTubePreview
              videoId={siteConfig.latestSermonVideoId}
              title="Latest sermon"
              className="relative block aspect-video overflow-hidden rounded-2xl bg-neutral-900"
            />
          </div>
        </div>
      </div>

      <div className="h-16 md:h-24" aria-hidden />
    </section>
  );
}
