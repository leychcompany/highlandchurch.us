import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Youth",
};

const youthImages = [
  "https://highlandchurch.us/wp-content/uploads/2026/01/3L5A0952-scaled-e1768501749844-1024x855.jpg",
  "https://highlandchurch.us/wp-content/uploads/2026/01/3L5A0967-e1768501544426-801x1024.jpg",
  "https://highlandchurch.us/wp-content/uploads/2026/01/3L5A0958-e1768501628496-1024x406.jpg",
  "https://highlandchurch.us/wp-content/uploads/2026/01/3L5A0935-e1768501869646-1024x709.jpg",
];

export default function YouthPage() {
  return (
    <>
      <PageHero title="Youth" />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 leading-relaxed text-neutral-700 md:px-6">
        <p className="text-lg font-medium text-black">Pastor Sam here!</p>
        <p>
          Highland YTH aims to pass the baton of faith to the upcoming
          generation of Christians. Our desire is to instill in our students an
          unwavering love for God. We want to see students learn a fascination
          of His majesty that is so deep they can&apos;t help but enter into a
          lifelong journey of seeking, experiencing, and sharing Him.
        </p>
        <p>
          Some youth groups, with Godly intention and leading, focus on getting
          middle school and highschool students in the doors where they can have
          fun and build relationships in order to open the door to Jesus. At
          Highland, we are convinced that God has given us a conviction to feed
          our students strong and healthy spiritual food.
        </p>
        <p>
          We are not interested in catering to short attention spans and
          consumeristic desires. We are focused and deliberate in our aim to
          give the students God&apos;s word (contextually appropriate) in a way
          that challenges their attention spans and their learning capability.
          While it may take some time to adjust, we believe this approach builds
          lasting faith.
        </p>
        <p>
          We believe our strongest tool for evangelism to be the students
          themselves. When and if there are students that come on Wednesday
          nights that are new to church or the faith, the authentic passion for
          Jesus that is already so present in many of our youth is the driving
          inspiration for nonbelievers.
        </p>
        <p>
          What changed me personally in high school was when I saw a kid I
          didn&apos;t know who was legitimately in love with Jesus and unashamed
          about his faith. I saw that, and was convicted and inspired that I
          needed to find a faith of my own that was real. We know the authentic
          faith of our students will impact their peers.
        </p>
        <h2 className="pt-4 text-2xl font-semibold text-black">
          Come join us on Wednesday nights!
        </h2>
        <p>
          Middle School (6th grade – 8th grade) runs from 5:45pm to 7:20pm. And
          Highschool (9th grade- 12th grade) runs from 7pm – 8:45pm. Most
          evenings include a short game, a message from God&apos;s word, small
          groups, and a meal.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 md:grid-cols-2 md:px-6">
        {youthImages.map((src, i) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-2xl bg-neutral-100 ${
              i === 0 || i === 3 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
            }`}
          >
            <Image src={src} alt="Highland Youth" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        ))}
      </section>
    </>
  );
}
