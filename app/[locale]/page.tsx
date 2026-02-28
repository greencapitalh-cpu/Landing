import { getDictionary } from "@/lib/dictionaries";
import { locales } from "@/lib/locales";
import Hero from "@/components/Hero";
import Applications from "@/components/Applications";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security"; // ← agregado

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Page({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return (
    <main>
      <Hero dict={dict} />
      <HowItWorks />
      <Applications dict={dict} />
      <Security /> {/* ← agregado */}
    </main>
  );
}
