import "@/app/globals.css";
import { locales } from "@/lib/locales";
import Navbar from "@/components/Navbar";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <head />
      <body className="bg-[#0B1220] text-white antialiased">
        <Navbar locale={locale} />
        {children}
      </body>
    </html>
  );
}
