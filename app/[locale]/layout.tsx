import "@/app/globals.css";
import { locales } from "@/lib/locales";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body className="bg-[#0B1220] text-white">
        <Navbar locale={locale} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
