import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Messages",
};

export default function MessagesPage() {
  return (
    <>
      <PageHero title="Messages" subtitle="Sermons and teachings from Highland Church" />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/videoseries?list=${siteConfig.youtubeChannelId.replace(/^UC/, "UU")}`}
              title="Highland Church YouTube channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            href={`https://www.youtube.com/channel/${siteConfig.youtubeChannelId}`}
            external
          >
            View on YouTube
          </Button>
          <Button href={siteConfig.spotifyPodcast} external variant="outline">
            High Pursuit Podcast
          </Button>
        </div>
      </section>
    </>
  );
}
