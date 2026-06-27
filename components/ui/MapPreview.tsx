import { siteConfig } from "@/lib/site";

type MapPreviewProps = {
  className?: string;
};

export function MapPreview({ className = "aspect-video w-full" }: MapPreviewProps) {
  return (
    <a
      href={siteConfig.mapsDirectionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center justify-center gap-3 border-0 bg-sand/70 text-charcoal transition hover:bg-sand ${className}`}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-md transition group-hover:scale-105">
        <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7 fill-current">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      </span>
      <span className="px-4 text-center">
        <span className="block text-sm font-medium">Open in Google Maps</span>
        <span className="mt-1 block text-xs text-charcoal/70">
          {siteConfig.address}, {siteConfig.city}
        </span>
      </span>
    </a>
  );
}
