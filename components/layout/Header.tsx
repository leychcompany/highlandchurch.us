"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = mainNav.filter((item) => item.label !== "Give");
  const giveItem = mainNav.find((item) => item.label === "Give");
  const solidHeader = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`z-50 transition-colors duration-300 ${
        isHome ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${
        solidHeader
          ? "border-b border-neutral-200/80 bg-white/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 md:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/highlandchurch_logo-white.png"
            alt="Highland Church"
            width={200}
            height={54}
            className={`h-9 w-auto transition-[filter] duration-300 md:h-11 ${
              solidHeader ? "" : "brightness-0 invert"
            }`}
            priority
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
                  <div className="absolute left-0 top-full min-w-52 rounded-xl border border-neutral-200 bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        item={child}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
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
              className="hidden rounded-md bg-brand-blue px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-blue-dark sm:inline-flex"
            >
              Give
            </Link>
          )}
          <button
            type="button"
            className={
              solidHeader
                ? "rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 lg:hidden"
                : "rounded-md border border-white/40 px-3 py-2 text-sm font-medium text-white lg:hidden"
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
              ? "border-t border-neutral-200 bg-white px-4 py-4 lg:hidden"
              : "border-t border-white/20 bg-black/80 px-4 py-4 backdrop-blur lg:hidden"
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
                className="mt-2 rounded-md bg-brand-blue px-3 py-2 text-center text-sm font-medium text-white"
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
    ? "rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-cream hover:text-black"
    : "rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:text-white/80";
}

function mobileNavLinkClass(solidHeader: boolean) {
  return solidHeader
    ? "rounded-lg px-3 py-2 text-sm font-medium text-neutral-700"
    : "rounded-lg px-3 py-2 text-sm font-medium text-white";
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
