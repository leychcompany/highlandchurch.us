import Link from "next/link";
import { churchCenter, footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold leading-snug text-cream">
            {siteConfig.tagline}
          </p>
          <div className="mt-5 space-y-1 text-sm text-cream/70">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.city}</p>
            <p>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-sage">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-sage">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Quick links
          </p>
          <ul className="space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 transition hover:text-sage"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-cream/70 transition hover:text-sage"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-balance font-display text-2xl font-semibold leading-snug text-cream">
            See what God can do{" "}
            <span className="whitespace-nowrap">through you.</span>
          </p>
          <a
            href={churchCenter.serve}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-cream px-6 py-3 text-sm font-medium text-forest transition hover:bg-sage"
          >
            Get Involved
          </a>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-cream/70">
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sage"
            >
              Facebook
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sage"
            >
              Instagram
            </a>
            <a
              href={siteConfig.youtubeHandle}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sage"
            >
              YouTube
            </a>
            <a
              href={siteConfig.spotifyPodcast}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sage"
            >
              Spotify
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-cream/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} Highland Church. All rights reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://www.leych.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sage"
            >
              leych.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
