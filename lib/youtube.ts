import { siteConfig } from "./site";

export type YouTubeVideo = {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  description: string;
  url: string;
};

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

function pick(entry: string, regex: RegExp): string {
  const match = entry.match(regex);
  return match ? match[1] : "";
}

/**
 * Fetches the channel's most recent uploads from the public YouTube RSS feed.
 * The feed returns roughly the latest 15 videos and requires no API key.
 */
export async function getChannelVideos(): Promise<YouTubeVideo[]> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${siteConfig.youtubeChannelId}`;

  try {
    const res = await fetch(feedUrl, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const entries = xml.split("<entry>").slice(1);

    return entries.map((entry) => {
      const id = pick(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
      const title = decodeEntities(pick(entry, /<title>([^<]*)<\/title>/));
      const published = pick(entry, /<published>([^<]+)<\/published>/);
      const thumbnail = pick(entry, /<media:thumbnail url="([^"]+)"/);
      const description = decodeEntities(
        pick(entry, /<media:description>([\s\S]*?)<\/media:description>/),
      );

      return {
        id,
        title,
        published,
        thumbnail,
        description,
        url: `https://www.youtube.com/watch?v=${id}`,
      };
    });
  } catch {
    return [];
  }
}
