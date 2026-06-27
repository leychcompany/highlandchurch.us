import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { churchCenter } from "@/lib/site";

export const metadata: Metadata = {
  title: "Youth",
};

const philosophy = [
  "Highland YTH aims to pass the baton of faith to the upcoming generation of Christians. Our desire is to instill in our students an unwavering love for God. We want to see students learn a fascination of His majesty that is so deep they can't help but enter into a lifelong journey of seeking, experiencing, and sharing Him.",
  "Some youth groups, with Godly intention and leading, focus on getting middle school and highschool students in the doors where they can have fun and build relationships in order to open the door to Jesus. At Highland, we are convinced that God has given us a conviction to feed our students strong and healthy spiritual food.",
  "We are not interested in catering to short attention spans and consumeristic desires. We are focused and deliberate in our aim to give the students God's word (contextually appropriate) in a way that challenges their attention spans and their learning capability. While it may take some time to adjust, we believe this approach builds lasting faith.",
  "We believe our strongest tool for evangelism to be the students themselves. When and if there are students that come on Wednesday nights that are new to church or the faith, the authentic passion for Jesus that is already so present in many of our youth is the driving inspiration for nonbelievers.",
];

const gallery = [
  { src: "/images/youth/youth-game.jpg", alt: "Students laughing during a game" },
  { src: "/images/youth/youth-foosball.jpg", alt: "Students playing foosball" },
  { src: "/images/youth/youth-bible.jpg", alt: "A student following along in Scripture" },
];

export default function YouthPage() {
  return (
    <>
      {/* Immersive hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden">
        <Image
          src="/images/youth/youth-stage.jpg"
          alt="Highland YTH gathering"
          fill
          className="object-cover object-center"
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-sage">
            <span className="h-px w-10 bg-sage/70" />
            Wednesday Nights · Highland YTH
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl">
            Youth
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85 md:text-xl">
            Passing the baton of faith to the next generation — through God&apos;s
            word, real relationships, and a whole lot of fun.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={churchCenter.connect} external variant="clay">
              Connect With Us
            </Button>
            <a
              href="#gatherings"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-3 text-sm font-medium tracking-wide text-cream transition hover:bg-cream hover:text-forest"
            >
              Meeting Times
            </a>
          </div>
        </div>
      </section>

      {/* Intro — Pastor Sam */}
      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-clay">
              Pastor Sam here!
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-forest md:text-4xl">
              Our heart for students
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal/75">
              {philosophy.slice(0, 2).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(40,48,31,0.15)]">
            <Image
              src="/images/youth/youth-preaching.jpg"
              alt="Pastor Sam teaching at Highland YTH"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
          </div>
        </div>
      </section>

      {/* Remaining philosophy */}
      <section className="bg-sand/50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-charcoal/75">
          {philosophy.slice(2).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
        <Image
          src="/images/youth/youth-smallgroup.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/90" />
        <blockquote className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl font-medium italic leading-snug text-cream md:text-3xl lg:text-4xl">
            &ldquo;What changed me personally in high school was when I saw a kid I
            didn&apos;t know who was legitimately in love with Jesus and unashamed
            about his faith. I was convicted and inspired that I needed to find a
            faith of my own that was real.&rdquo;
          </p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-sage">
            Pastor Sam
          </footer>
        </blockquote>
      </section>

      {/* Gatherings / meeting times */}
      <section id="gatherings" className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            Join Us
          </p>
          <h2 className="font-display text-3xl font-semibold text-forest md:text-4xl lg:text-5xl">
            Come join us on Wednesday nights!
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-charcoal/70">
            Most evenings include a short game, a message from God&apos;s word,
            small groups, and a meal.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-sand bg-white p-8 text-center shadow-sm">
            <h3 className="font-display text-2xl font-semibold text-forest">
              Middle School
            </h3>
            <p className="mt-1 text-sm text-charcoal/60">6th – 8th grade</p>
            <p className="mt-5 font-display text-3xl font-semibold text-clay">
              5:45 – 7:20pm
            </p>
          </div>
          <div className="rounded-3xl border border-sand bg-white p-8 text-center shadow-sm">
            <h3 className="font-display text-2xl font-semibold text-forest">
              High School
            </h3>
            <p className="mt-1 text-sm text-charcoal/60">9th – 12th grade</p>
            <p className="mt-5 font-display text-3xl font-semibold text-clay">
              7:00 – 8:45pm
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href={churchCenter.connect} external>
            Get Connected
          </Button>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sand/50 px-5 pb-24 pt-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-display text-3xl font-semibold text-forest md:text-4xl">
            Life at Highland YTH
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
