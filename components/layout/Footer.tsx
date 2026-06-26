import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">{siteConfig.tagline}</p>
          <div className="mt-4 space-y-1 text-sm text-neutral-300">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.city}</p>
            <p>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-cream">
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
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
                    className="text-neutral-300 transition hover:text-cream"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-neutral-300 transition hover:text-cream"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-2xl font-semibold leading-snug">
            See what God can do through you.
          </p>
          <p className="mt-8 text-sm text-neutral-400">
            © {new Date().getFullYear()} Highland Church by{" "}
            <a
              href="https://www.leych.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              leych.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
