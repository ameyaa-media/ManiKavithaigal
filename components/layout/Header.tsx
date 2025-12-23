"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "../ui/Container";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Gallery", href: "/gallery" },
  { name: "Awards", href: "/awards" },
  { name: "Videos", href: "/videos" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-purple-100 dark:border-neutral-800 shadow-sm transition-colors duration-300">
      <Container>
        <a
          href="#author-intro"
          className="absolute left-[-9999px] top-auto w-1 h-1 overflow-hidden focus:left-4 focus:top-4 focus:w-auto focus:h-auto focus:px-3 focus:py-2 focus:bg-white dark:focus:bg-neutral-800 focus:text-purple-600 rounded-md z-50"
        >
          Skip to content
        </a>
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-all duration-300"
          >
            Mani Kavithaigal{" "}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-full",
                  pathname === item.href
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-purple-400"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-neutral-200 dark:border-neutral-700">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="p-2 text-neutral-900 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium transition-colors p-2 rounded-lg",
                    pathname === item.href
                      ? "text-neutral-900 bg-neutral-100 dark:text-white dark:bg-neutral-800"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
