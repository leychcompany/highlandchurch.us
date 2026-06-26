import type { Metadata } from "next";
import { TeamGrid } from "@/components/TeamGrid";
import { PageHero } from "@/components/ui/PageHero";
import {
  teamDeacons,
  teamElders,
  teamStaff,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Staff",
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero title="Our Staff" />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <p className="mx-auto mb-14 max-w-3xl text-center text-lg text-neutral-600">
          At Highland Church, we are more than a team—we are a family committed
          to leading with faith and serving with love. Each member of our team
          plays a vital role in equipping and nurturing our church community,
          from the pulpit to the behind-the-scenes operations. Get to know the
          leaders who are dedicated to guiding you on your spiritual journey.
        </p>
        <TeamGrid members={teamStaff} />
        <h2 className="mb-10 mt-20 text-center text-2xl font-semibold">Elders</h2>
        <TeamGrid members={teamElders} columns={4} />
        <h2 className="mb-10 mt-20 text-center text-2xl font-semibold">Deacons</h2>
        <TeamGrid members={teamDeacons} columns={2} />
      </section>
    </>
  );
}
