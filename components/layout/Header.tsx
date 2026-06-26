"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/lib/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/highlandchurch_logo.png"
            alt="Highland Church"
            width={180}
            height={49}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-cream hover:text-black"
                  onClick={() => setDropdownOpen((v) => !v)}
                >
                  {item.label}
                  <span className="ml-1 text-xs">▾</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full min-w-52 rounded-xl border border-neutral-200 bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <NavLink key={child.label} item={child} className="block px-4 py-2 text-sm" />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                item={item}
                className="rounded-lg px-3 py-2 text-sm font-medium"
              />
            ),
          )}
        </nav>

        <button
          type="button"
          className="rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {mainNav.flatMap((item) =>
              item.children
                ? item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      item={child}
                      className="rounded-lg px-3 py-2 text-sm font-medium"
                      onClick={() => setMobileOpen(false)}
                    />
                  ))
                : [
                    <NavLink
                      key={item.label}
                      item={item}
                      className="rounded-lg px-3 py-2 text-sm font-medium"
                      onClick={() => setMobileOpen(false)}
                    />,
                  ],
            )}
          </nav>
        </div>
      )}
    </header>
  );
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
  const styles = `${className} text-neutral-700 transition hover:bg-cream hover:text-black`;

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        onClick={onClick}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={styles} onClick={onClick}>
      {item.label}
    </Link>
  );
}
