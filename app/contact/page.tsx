import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">Get in touch</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Have a question, need to speak with a pastor, or get in touch with
            someone on staff? Simply fill out the form below or utilize the
            information listed and we&apos;ll be in touch.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-6">
        <form
          action={`mailto:${siteConfig.email}`}
          method="post"
          encType="text/plain"
          className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Send message
          </button>
        </form>

        <div className="space-y-10">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8">
            <p className="text-lg font-semibold">{siteConfig.serviceTimes}</p>
            <p className="mt-2 text-neutral-600">
              Sunday meals always served after service
            </p>
            <p className="mt-6 text-2xl font-semibold">
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            </p>
            <p className="text-sm text-neutral-500">Give us a call directly</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">How to Find Us</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Our Address
                </h3>
                <p className="mt-2 text-neutral-700">
                  {siteConfig.address}
                  <br />
                  {siteConfig.city}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Email Us
                </h3>
                <p className="mt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-neutral-700 underline underline-offset-4"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Opening Hours
                </h3>
                <p className="mt-2 text-neutral-700">Sundays @ 10am & 5pm</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBAM2o7PiQqwk15LC1XRH2e_KJ-jUa7KYk&zoom=16&maptype=roadmap&q=2926+Big+Horn+Avenue%2C+Cody"
              title="Highland Church location"
              className="aspect-video w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
