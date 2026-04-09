"use client";

import { useState } from "react";
import Link from "next/link";
import { locales } from "@/lib/locales";

export default function Navbar({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-end px-6 py-4">

      <div className="relative">

        {/* ACTIVE LANGUAGE */}
        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-medium text-gray-800"
        >
          {locale.toUpperCase()}
        </button>

        {/* DROPDOWN */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden">

            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm text-gray-800 text-center ${
                  l === locale
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}

          </div>
        )}

      </div>

    </nav>
  );
}
