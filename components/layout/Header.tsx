"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const transparentRoutes = ["/", "/youth"];
  const isTransparent = transparentRoutes.includes(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = mainNav.filter((item) => item.label !== "Give");
  const giveItem = mainNav.find((item) => item.label === "Give");
  const solidHeader = !isTransparent || scrolled;

  useEffect(() => {
    if (!isTransparent) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isTransparent]);

  return (
    <header
      className={`z-50 transition-colors duration-300 ${
        isTransparent ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${
        solidHeader
          ? "border-b border-sand bg-cream/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 md:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/highlandchurch_logo.webp"
            alt="Highland Church"
            width={200}
            height={54}
            className={`h-9 w-auto transition-[filter] duration-300 md:h-11 ${
              solidHeader ? "brightness-0" : ""
            }`}
          />
        </Link>

        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={navLinkClass(solidHeader)}
                  onClick={() => setDropdownOpen((v) => !v)}
                >
                  {item.label}
                  <span className="ml-1 text-xs">▾</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full min-w-52 rounded-xl border border-sand bg-cream py-2 shadow-lg">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        item={child}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-sand/60 hover:text-pine"
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                item={item}
                className={navLinkClass(solidHeader)}
              />
            ),
          )}
        </nav>

        <div className="flex items-center justify-end gap-3">
          {giveItem && (
            <Link
              href={giveItem.href}
              className="hidden rounded-full bg-clay px-6 py-2.5 text-sm font-medium text-cream transition hover:bg-clay/85 sm:inline-flex"
            >
              Give
            </Link>
          )}
          <button
            type="button"
            className={
              solidHeader
                ? "rounded-lg border border-sand px-3 py-2 text-sm font-medium text-charcoal lg:hidden"
                : "rounded-md border border-cream/40 px-3 py-2 text-sm font-medium text-cream lg:hidden"
            }
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={
          solidHeader
            ? "border-t border-sand bg-cream px-4 py-4 lg:hidden"
            : "border-t border-cream/20 bg-forest/90 px-4 py-4 backdrop-blur lg:hidden"
        }
        >
          <nav className="flex flex-col gap-1">
            {navItems.flatMap((item) =>
              item.children
                ? item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      item={child}
                      className={mobileNavLinkClass(solidHeader)}
                      onClick={() => setMobileOpen(false)}
                    />
                  ))
                : [
                    <NavLink
                      key={item.label}
                      item={item}
                      className={mobileNavLinkClass(solidHeader)}
                      onClick={() => setMobileOpen(false)}
                    />,
                  ],
            )}
            {giveItem && (
              <Link
                href={giveItem.href}
                className="mt-2 rounded-full bg-clay px-3 py-2 text-center text-sm font-medium text-cream"
                onClick={() => setMobileOpen(false)}
              >
                Give
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

function navLinkClass(solidHeader: boolean) {
  return solidHeader
    ? "rounded-lg px-3 py-2 text-sm font-medium text-charcoal transition hover:text-pine"
    : "rounded-lg px-3 py-2 text-sm font-medium text-cream transition hover:text-sage";
}

function mobileNavLinkClass(solidHeader: boolean) {
  return solidHeader
    ? "rounded-lg px-3 py-2 text-sm font-medium text-charcoal"
    : "rounded-lg px-3 py-2 text-sm font-medium text-cream";
}

function NavLink({
  item,
  className,
  onClick,
}: {
  item: { label: string; href: string; external?: boolean };
  className?: string;
  onClick?: () => void;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}
