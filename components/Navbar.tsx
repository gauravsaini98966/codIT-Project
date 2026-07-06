"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#path", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <div className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-r from-[#0A1330] via-[#15305F] to-[#0A1330] shadow-xl shadow-black/10 backdrop-blur-md">
        <div className="px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between">
          <Link href="/#top" className="flex items-center gap-2 shrink-0">
            <span className="font-display text-lg sm:text-xl tracking-tight text-white">
              Int<span className="text-green">itude</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-white/70">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="navy-link hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1"
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 px-5 sm:px-6 py-5 flex flex-col gap-4 text-white/80 font-medium">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-white/10 border border-white/15 text-white text-center rounded-full py-2.5 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
