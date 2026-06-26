import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Kids Ministry",
};

const kidsImages = [
  {
    src: "https://highlandchurch.us/wp-content/uploads/2024/10/boy-walking-1858057-1024x683.jpg",
    alt: "Child walking outdoors",
  },
  {
    src: "https://highlandchurch.us/wp-content/uploads/2024/10/man-carrying-his-son-over-the-shoulders-1456951-768x1024.jpg",
    alt: "Father carrying son",
  },
  {
    src: "https://highlandchurch.us/wp-content/uploads/2024/10/woman-in-green-white-and-blue-plaid-long-sleeve-shirt-8083736-683x1024.jpg",
    alt: "Woman with child",
  },
];

const ageGroups = [
  {
    title: "Babies + Toddlers",
    description:
      "Our Baby & Toddler Team is equipped to love on our littlest friends. Your child will be prayed for and welcomed into a safe and loving environment full of fun and worship. We have safe and age-appropriate toys and activities, and our goal is for you to feel confident dropping off your child so that you can worship freely.",
  },
  {
    title: "Pre-K + Kindergarten",
    description:
      "In our Pre-K and Kindergarten classes, we provide an intentional time of teaching, worship, and fun and activities. We teach foundational truths of what it means to not only follow Jesus but be loved by Him too!",
  },
  {
    title: "Elementary",
    description:
      "Elementary Kids is for our 1st – 5th graders. Each week kids spend time in incredible worship, amazing teaching, and play lots of fun and intentional games! We have an absolute blast while kids learn how to love Jesus, live like Jesus, and lead others to Jesus.",
  },
];

const curriculum = [
  "Christ Centered",
  "Heart Transforming",
  "Age Aligned",
  "Chronological",
  "Theologically Rich",
  "Missionally Minded",
];

const faqs: {
  question: string;
  answer?: string;
  intro?: string;
  list?: string[];
}[] = [
  {
    question: "What about check in?",
    answer:
      "You'll find our team ready to greet you at check in! Check in begins 30 minutes before each service and check out lasts for 15 minutes following service end.",
  },
  {
    question: "Are your Kid Leaders background checked?",
    answer:
      "Yes. Regardless of the role they play, every adult who serves in our Highland Kids area has passed a background check. We prohibit any adult from being alone with a child.",
  },
  {
    question: "What is your security policy?",
    answer:
      "Our Highland Kids area is a completely secured space. Upon checking in your child, you will receive a parent/guardian tag that permits you to enter the kids area. This tag includes a unique code, randomly assigned to you at check in for that particular day. Only the parent/guardian who drops your child off AND has this pickup tag, is permitted to pick up the child. If the parent or guardian chooses to hand this pickup tag to someone else, they will be permitted to pick up the child, so long as the secure code on the child's name tag and parent/guardian pickup tag match.",
  },
  {
    question: "What is your sick-child policy?",
    intro: "Please don't check in kids if:",
    list: [
      "They are experiencing any Covid-19 symptoms",
      "They have had a fever above 99° (without medicine) within the last 24 hours",
      "They have had diarrhea within the last 24 hours",
      "They have vomited within the last 24 hours",
      "They have green discharge from nose",
      "They have pink eye",
      "They have a persistent, deep-sounding cough",
      "They have Strep Throat (child should have started antibiotics more than 24 hours before attending)",
      "They have a contagious disease (flu, measles, rubella, mumps, whooping cough, meningitis)",
      "They have any open and/or weeping sores or wounds",
      "They have any unexplained and/or contagious rash (chicken pox, boils, ringworm, Hand Foot Mouth, impetigo)",
      "They have lice or scabies",
    ],
  },
  {
    question: "My child is nervous, can I stay in their classroom?",
    answer:
      "Because our Highland Kids area is a secure area, only our background checked team members are permitted in the classrooms. We have an experienced team and many leaders who are capable of making sure each child is well cared for. If your child needs your attention, we will contact you via text message.",
  },
];

export default function KidsMinistryPage() {
  return (
    <>
      <PageHero title="Kids Ministry" />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 leading-relaxed text-neutral-700 md:px-6">
        <p>
          At Highland Kids we know that there is no Junior Holy Spirit! With that
          in mind, and no matter the age, we empower kids in their faith to
          believe for the impossible, pray with authority, and worship fearlessly!
        </p>
        <p>
          Highland Kids is way more than childcare while the adults have
          &quot;real&quot; church. While we intentionally bring concepts down to
          kids&apos; levels developmentally, we take to heart Jesus&apos;
          teaching that the Kingdom belongs to little children!
        </p>
        <p>
          We want to lean in with the families of our house who are raising a
          generation of children to know and walk in a relationship with Jesus.
          We partner with parents in helping the kids of Highland love Jesus,
          live like Jesus, and Lead others to Jesus!
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-6">
        {kidsImages.map((img) => (
          <div key={img.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold">Age Groups</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {ageGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {group.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream px-4 py-16 md:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-semibold">Curriculum</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-neutral-600">
            Every week, Highland kids will experience the good news of the Gospel
            through a Bible study that is:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {curriculum.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white px-6 py-4 text-center font-semibold shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold">FAQ</h2>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold text-black">
                {faq.question}
              </h3>
              {faq.answer && (
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {faq.answer}
                </p>
              )}
              {faq.intro && (
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {faq.intro}
                </p>
              )}
              {faq.list && (
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-neutral-600">
                  {faq.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
