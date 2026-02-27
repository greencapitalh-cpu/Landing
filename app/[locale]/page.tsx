import { getDictionary } from "@/lib/dictionaries";
import Hero from "@/components/Hero";
import Applications from "@/components/Applications";

export default function Page({
  params,
}: {
  params: { locale: string };
}) {
  const dict = getDictionary(params.locale);

  return (
    <main>
      <Hero dict={dict} />
      <Applications dict={dict} />
    </main>
  );
}
