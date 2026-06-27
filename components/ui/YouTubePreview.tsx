import Image from "next/image";

type YouTubePreviewProps = {
  videoId: string;
  title: string;
  thumbnail?: string;
  className?: string;
};

export function YouTubePreview({
  videoId,
  title,
  thumbnail,
  className = "relative block aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900",
}: YouTubePreviewProps) {
  const thumb = thumbnail ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${className}`}
      aria-label={`Watch ${title} on YouTube`}
    >
      <Image
        src={thumb}
        alt={title}
        fill
        className="object-cover opacity-90 transition group-hover:opacity-100"
        sizes="(max-width: 768px) 100vw, 900px"
      />
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-forest/20 transition group-hover:bg-forest/30">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition group-hover:scale-105">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="ml-1 h-7 w-7 fill-current"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="text-sm font-medium text-white drop-shadow">
          Watch on YouTube
        </span>
      </span>
    </a>
  );
}
