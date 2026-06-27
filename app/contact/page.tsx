import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { LazyGoogleMap } from "@/components/ui/LazyGoogleMap";
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
        <ContactForm />

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
            <LazyGoogleMap
              embedUrl={siteConfig.mapsEmbedUrl}
              title="Highland Church location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
