"use client";

import { useState } from "react";

type LazyYouTubeEmbedProps = {
  videoId: string;
  title: string;
};

export function LazyYouTubeEmbed({ videoId, title }: LazyYouTubeEmbedProps) {
  const [active, setActive] = useState(false);

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-900 text-cream transition hover:bg-neutral-800"
        aria-label={`Play ${title}`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="ml-1 h-7 w-7 fill-current"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="text-sm font-medium">Watch latest message</span>
      </button>
    );
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 h-full w-full"
    />
  );
}
