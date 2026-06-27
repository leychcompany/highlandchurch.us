"use client";

import { useState } from "react";
import { YouTubePreview } from "@/components/ui/YouTubePreview";
import type { YouTubeVideo } from "@/lib/youtube";

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function MessagesList({ videos }: { videos: YouTubeVideo[] }) {
  const [activeId, setActiveId] = useState(videos[0]?.id ?? "");

  if (videos.length === 0) {
    return (
      <p className="text-center text-neutral-600">
        Messages are temporarily unavailable. Please visit our{" "}
        <a
          href="https://www.youtube.com/@highlandchurch2926/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-blue underline underline-offset-4"
        >
          YouTube channel
        </a>
        .
      </p>
    );
  }

  const active = videos.find((v) => v.id === activeId) ?? videos[0];

  return (
    <div>
      <div className="mx-auto max-w-4xl">
        <YouTubePreview
          key={active.id}
          videoId={active.id}
          title={active.title}
          thumbnail={active.thumbnail}
        />
        <h2 className="mt-5 text-xl font-semibold">{active.title}</h2>
        <p className="mt-1 text-sm text-neutral-500">
          {formatDate(active.published)}
        </p>
      </div>

      <h3 className="mb-6 mt-14 text-center text-2xl font-semibold">
        Recent Messages
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => {
          const isActive = video.id === activeId;
          return (
            <button
              key={video.id}
              type="button"
              onClick={() => {
                setActiveId(video.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`group flex flex-col overflow-hidden rounded-xl border text-left transition hover:shadow-md ${
                isActive
                  ? "border-brand-blue ring-2 ring-brand-blue/40"
                  : "border-neutral-200"
              }`}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="line-clamp-2 font-medium leading-snug text-black">
                  {video.title}
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  {formatDate(video.published)}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
