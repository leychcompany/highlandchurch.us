import type { Metadata } from "next";
import { MessagesList } from "@/components/messages/MessagesList";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site";
import { getChannelVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Messages",
};

export default async function MessagesPage() {
  const videos = await getChannelVideos();

  return (
    <>
      <PageHero title="Messages" subtitle="Sermons and teachings from Highland Church" />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <MessagesList videos={videos} />
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Button href={`${siteConfig.youtubeHandle}/videos`} external>
            View all on YouTube
          </Button>
          <Button href={siteConfig.spotifyPodcast} external variant="outline">
            High Pursuit Podcast
          </Button>
        </div>
      </section>
    </>
  );
}
