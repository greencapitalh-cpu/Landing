"use client";

import Link from "next/link";
import { locales } from "@/lib/locales";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0B1220]/95 to-[#0B1220]/70 backdrop-blur-md px-6 lg:px-8 py-4 flex justify-between items-center border-b border-white/5">

      {/* LOGO */}
      <Link
        href={`/${locale}`}
        className="text-lg lg:text-xl font-semibold tracking-tight text-white hover:opacity-90 transition-opacity"
      >
        udochain
      </Link>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-8">

        {/* LOCALE SWITCH */}
        <div className="flex gap-5">
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              className={`text-sm transition-colors duration-200 ${
                l === locale
                  ? "text-blue-400 font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {l.to
