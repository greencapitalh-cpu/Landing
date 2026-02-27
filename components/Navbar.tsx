"use client";

import Link from "next/link";
import { locales } from "@/lib/locales";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm px-8 py-6 flex justify-between items-center">
      <Link href={`/${locale}`} className="text-xl font-semibold">
        udochain
      </Link>

      <div className="flex gap-6 items-center">
        {locales.map((l) => (
          <Link
            key={l}
            href={`/${l}`}
            className={`text-sm ${
              l === locale ? "text-blue-400" : "text-gray-400"
            }`}
          >
            {l.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}
