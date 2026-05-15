"use client";

import Link from "next/link";

const languages = ["en", "es", "pt"];
const APP_URL = "https://app.udochain.com";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/en" className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f172a]">
          UDoChain
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <div className="hidden items-center gap-2 sm:flex">
            <a href={`${APP_URL}/login`} className="font-semibold text-[#475569] transition hover:text-[#0f172a]">
              Login
            </a>
            <a
              href={`${APP_URL}/register`}
              className="rounded-md bg-[#101827] px-3 py-2 font-semibold text-white transition hover:bg-[#1e293b]"
            >
              Register
            </a>
          </div>
          <div className="flex items-center gap-1 border-l border-[#e2e8f0] pl-2">
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
      </div>
    </nav>
  );
}
