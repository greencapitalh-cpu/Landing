/*
import { getDictionary } from "@/lib/dictionaries";
import { locales } from "@/lib/locales";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Applications from "@/components/Applications";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Page({
  params,
}: {
  params: { locale: string };
}) {
  const dict = getDictionary(params.locale);

  return (
    <main className="w-full overflow-hidden">
      <Hero dict={dict} />
      <ProblemSolution />
      <HowItWorks />
      <Applications dict={dict} />
      <Security />
    </main>
  );
}
*/

/*
import { getDictionary } from "@/lib/dictionaries";
import { locales } from "@/lib/locales";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Applications from "@/components/Applications";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Page({
  params,
}: {
  params: { locale: string };
}) {
  const dict = getDictionary(params.locale);

  return (
    <main className="w-full overflow-hidden">
      <Hero dict={dict} />
      <ProblemSolution dict={dict} />
      <HowItWorks />
      <Applications dict={dict} />
      <Security />
    </main>
  );
}
*/


import { getDictionary } from "@/lib/dictionaries";
import { locales } from "@/lib/locales";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Applications from "@/components/Applications";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Page({
  params,
}: {
  params: { locale: string };
}) {
  const dict = getDictionary(params.locale);

  return (
    <main className="w-full overflow-hidden">
      <Hero dict={dict} />
      <ProblemSolution dict={dict} />
      <HowItWorks dict={dict} />
      <Applications dict={dict} />
      <Security />
    </main>
  );
}
