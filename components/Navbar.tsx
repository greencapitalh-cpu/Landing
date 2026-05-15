"use client";

import Link from "next/link";

const languages = ["en", "es", "pt"];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/en" className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f172a]">
          UDoChain
        </Link>
        <div className="flex items-center gap-2 text-sm">
          {languages.map((lang) => (
            <Link
              key={lang}
              href={`/${lang}`}
              className="rounded-md px-2 py-1 font-medium uppercase text-[#64748b] transition hover:bg-[#f1f5f9] hover:text-[#0f172a]"
            >
              {lang}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
