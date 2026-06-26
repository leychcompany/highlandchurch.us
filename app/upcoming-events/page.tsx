import type { Metadata } from "next";
import { ChurchCenterCalendar } from "@/components/ChurchCenterCalendar";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        image="/images/pexels-matheus-bertelli-3797402.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <ChurchCenterCalendar />
      </section>
    </>
  );
}
