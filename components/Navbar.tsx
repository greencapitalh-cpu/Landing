"use client";

import Link from "next/link";
import { locales } from "@/lib/locales";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0B1220]/95 to-[#0B1220]/70 backdrop-blur-md px-6 lg:px-8 py-4 flex justify-between items-center border-b border-white/5">
      
      <Link
        href={`/${locale}`}
        className="text-lg lg:text-xl font-semibold tracking-tight text-white"
      >
        udochain
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <div className="flex gap-5">
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

        <a
          href="https://verify.udochain.com"
          className="text-sm text-gray-300 hover:text-white transition"
        >
          Verify
        </a>

        <a
          href="https://app.udochain.com"
          className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-sm font-medium shadow-lg shadow-blue-600/20"
        >
          Create Account
        </a>
      </div>
    </nav>
  );
}
