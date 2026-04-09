/*
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./lib/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore next internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const language =
      request.headers.get("accept-language")?.split(",")[0].split("-")[0];

    const locale = locales.includes(language || "")
      ? language
      : defaultLocale;

    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
*/

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./lib/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore next internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 🔥 Detect locale from path
  const localeFromPath = pathname.split("/")[1];

  const locale = locales.includes(localeFromPath)
    ? localeFromPath
    : (() => {
        const language =
          request.headers
            .get("accept-language")
            ?.split(",")[0]
            .split("-")[0];

        return locales.includes(language || "")
          ? language
          : defaultLocale;
      })();

  // 🔥 Redirect only if root
  const response =
    pathname === "/"
      ? NextResponse.redirect(new URL(`/${locale}`, request.url))
      : NextResponse.next();

  // 🔥 ALWAYS set cookie
  response.cookies.set("lang", locale, {
    path: "/",
    domain: ".udochain.com",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
