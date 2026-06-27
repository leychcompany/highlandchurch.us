"use client";

import { useState } from "react";

type LazyGoogleMapProps = {
  embedUrl: string;
  title: string;
  className?: string;
};

export function LazyGoogleMap({
  embedUrl,
  title,
  className = "aspect-video w-full",
}: LazyGoogleMapProps) {
  const [active, setActive] = useState(false);

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        className={`flex flex-col items-center justify-center gap-3 border-0 bg-sand/70 text-charcoal transition hover:bg-sand ${className}`}
        aria-label={`Load map: ${title}`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-md">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
        </span>
        <span className="text-sm font-medium">Tap to load map</span>
      </button>
    );
  }

  return (
    <iframe
      src={embedUrl}
      title={title}
      className={`border-0 ${className}`}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
