"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = mainNav.filter((item) => item.label !== "Give");
  const giveItem = mainNav.find((item) => item.label === "Give");

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur"
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 md:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src={
              isHome
                ? "/images/highlandchurch_logo-white.png"
                : "/images/highlandchurch_logo.png"
            }
            alt="Highland Church"
            width={isHome ? 200 : 180}
            height={isHome ? 54 : 49}
            className={isHome ? "h-9 w-auto md:h-11" : "h-10 w-auto md:h-12"}
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
                  className={navLinkClass(isHome)}
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
                className={navLinkClass(isHome)}
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
              isHome
                ? "rounded-md border border-white/40 px-3 py-2 text-sm font-medium text-white lg:hidden"
                : "rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium lg:hidden"
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
            isHome
              ? "border-t border-white/20 bg-black/80 px-4 py-4 backdrop-blur lg:hidden"
              : "border-t border-neutral-200 bg-white px-4 py-4 lg:hidden"
          }
        >
          <nav className="flex flex-col gap-1">
            {navItems.flatMap((item) =>
              item.children
                ? item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      item={child}
                      className={
                        isHome
                          ? "rounded-lg px-3 py-2 text-sm font-medium text-white"
                          : "rounded-lg px-3 py-2 text-sm font-medium text-neutral-700"
                      }
                      onClick={() => setMobileOpen(false)}
                    />
                  ))
                : [
                    <NavLink
                      key={item.label}
                      item={item}
                      className={
                        isHome
                          ? "rounded-lg px-3 py-2 text-sm font-medium text-white"
                          : "rounded-lg px-3 py-2 text-sm font-medium text-neutral-700"
                      }
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

function navLinkClass(isHome: boolean) {
  return isHome
    ? "rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:text-white/80"
    : "rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-cream hover:text-black";
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
