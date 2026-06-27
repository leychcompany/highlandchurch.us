import Image from "next/image";
import { HomeHero } from "@/components/home/HomeHero";
import { Button } from "@/components/ui/Button";
import { MapPreview } from "@/components/ui/MapPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { homeServices } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Welcome / intro band */}
      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-clay">
              Welcome Home
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-forest md:text-4xl lg:text-5xl">
              A family learning to love Jesus together
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/75">
              At Highland Church, our pastors are called and equipped to guide,
              teach, care for, and pray over those that call Highland their home.
              Our team is excited to serve the needs of you and your family and
              those connected to you.
            </p>
            <div className="mt-8">
              <Button href="/our-team">Meet Our Team</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/medicine-bow.webp"
                alt="Wyoming landscape"
                fill
                className="object-cover"
                quality={60}
                sizes="(max-width: 1024px) 50vw, 300px"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/prayer/prayer-worship.jpg"
                alt="Hands lifted in worship"
                fill
                className="object-cover"
                quality={60}
                sizes="(max-width: 1024px) 50vw, 300px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care / services */}
      <section className="bg-sand/50 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Serve"
            title="We love serving our local community"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* What we believe — dark forest band */}
      <section className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
        <Image
          src="/images/highland-church-mountain.webp"
          alt=""
          fill
          className="object-cover object-center"
          quality={60}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/90" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sage">
            All About Jesus
          </p>
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
            What We Believe
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Our beliefs are at the heart of what makes us who we are. These
            aren&apos;t just concepts or ideas; these beliefs express what we
            believe to be true and real about God, the world He made, and where
            we fit in all of that. They help us live the way God intended,
            bringing glory to his Name.
          </p>
          <div className="mt-9">
            <Button href="/what-we-believe" variant="light">
              Read what we believe
            </Button>
          </div>
        </div>
      </section>

      {/* Visit / location */}
      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-clay">
              Plan Your Visit
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-forest md:text-4xl lg:text-5xl">
              We&apos;d love to see you Sunday
            </h2>
            <div className="mt-8 space-y-6 text-charcoal/80">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-pine">
                  Gather With Us
                </h3>
                <p className="mt-1 text-lg">{siteConfig.serviceTimes}</p>
                <p className="text-sm text-charcoal/60">
                  Sunday meals always served after service
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-pine">
                  Find Us
                </h3>
                <p className="mt-1 text-lg">
                  {siteConfig.address}, {siteConfig.city}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Get in Touch</Button>
              <Button href="/upcoming-events" variant="outline">
                Upcoming Events
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(40,48,31,0.12)]">
            <MapPreview className="aspect-square w-full md:aspect-[4/5]" />
          </div>
        </div>
      </section>
    </>
  );
}
