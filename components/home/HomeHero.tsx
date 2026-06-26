import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const headline = [
  "Love Jesus,",
  "Live like Jesus,",
  "Lead others to Jesus.",
];

export function HomeHero() {
  return (
    <section className="relative bg-white">
      <div className="relative min-h-[72vh] md:min-h-[78vh]">
        <Image
          src="/images/highland-church-mountain.jpg"
          alt=""
          fill
          className="object-cover object-[48%_87%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 pb-36 pt-28 md:px-8 md:pb-44 md:pt-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 text-base text-white/95 sm:text-lg md:mt-6 md:text-xl">
              Join us every Sunday @ 10am &amp; 5pm
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-4 md:px-8">
        <div className="-mt-28 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:-mt-36">
          <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_1.4fr] md:gap-8 md:p-8 lg:p-10">
            <h2 className="text-2xl font-bold leading-tight text-black md:text-3xl lg:text-4xl">
              Watch our latest sermon
            </h2>
            <div className="overflow-hidden rounded-xl bg-neutral-100">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${siteConfig.latestSermonVideoId}`}
                  title="Latest sermon"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
          <Link
            href={siteConfig.spotifyPodcast}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-brand-blue px-6 py-4 text-center text-sm font-medium text-white transition hover:bg-brand-blue-dark sm:text-base"
          >
            Check Out Our High Pursuit Podcast — Click Here
          </Link>
        </div>
      </div>

      <div className="h-16 md:h-24" aria-hidden />
    </section>
  );
}
