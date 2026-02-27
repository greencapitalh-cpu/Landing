import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./lib/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
