import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { homeServices } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Love Jesus, Live like Jesus, Lead others to Jesus."
        subtitle="Join us every Sunday @ 10am & 5pm"
        image="/images/highland-church-mountain.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading title="Watch our latest sermon" />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl shadow-lg">
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
        <p className="mt-6 text-center text-neutral-600">
          Check Out Our High Pursuit Podcast –{" "}
          <a
            href={siteConfig.spotifyPodcast}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black underline underline-offset-4 hover:text-neutral-700"
          >
            Click Here
          </a>
        </p>
      </section>

      <section className="bg-white px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Community"
            title="We Love Serving Our Local Community"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-neutral-600">
            At Highland Church, our pastors are called and equipped to guide,
            teach, care for and pray over those that call Highland their home!
            Our team is excited to serve the needs of you and your family and
            those connected to you.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 md:px-6">
        <Image
          src="/images/medicine-bow-mountains-and-a-lake-landscape-15088317-683x1024.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/80">
            All About Jesus
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            What We Believe
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Our beliefs are at the heart of what makes us who we are. These
            aren&apos;t just concepts or ideas; these beliefs express what we
            believe to be true and real about God, the world He made, and where
            we fit in all of that. They help us live the way God intended,
            bringing glory to his Name.
          </p>
          <div className="mt-8">
            <Button href="/what-we-believe" className="bg-cream text-black hover:bg-white">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 text-center md:px-6 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600">
          {siteConfig.serviceTimes}
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          {siteConfig.address}, Cody, Wyoming
        </h2>
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBAM2o7PiQqwk15LC1XRH2e_KJ-jUa7KYk&zoom=16&maptype=roadmap&q=2926+Big+Horn+Avenue%2C+Cody"
            title="Highland Church location"
            className="aspect-video w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
