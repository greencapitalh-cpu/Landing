"use client";

import Link from "next/link";
import { locales } from "@/lib/locales";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0B1220]/95 to-[#0B1220]/70 backdrop-blur-md px-8 py-5 flex justify-between items-center border-b border-white/5">
      {/* Logo */}
      <Link
        href={`/${locale}`}
        className="text-xl font-semibold tracking-tight text-white"
      >
        udochain
      </Link>

      {/* Language Switch */}
      <div className="flex gap-6 items-center">
        {locales.map((l) => (
          <Link
            key={l}
            href={`/${l}`}
            className={`text-sm transition-colors ${
              l === locale
                ? "text-blue-400 font-medium"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {l.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}
