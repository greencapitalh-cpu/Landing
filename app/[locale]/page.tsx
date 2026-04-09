/*
import { getHeroContent } from "@/lib/heroDictionary";
import { locales } from "@/lib/locales";
import Hero from "@/components/Hero";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Page({
  params,
}: {
  params: { locale: string };
}) {
  const content = getHeroContent(params.locale);

  return (
    <main className="w-full overflow-hidden">
      <Hero content={content} locale={params.locale} />
    </main>
  );
}
*/
