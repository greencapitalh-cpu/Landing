import Hero from "@/components/Hero";
import Applications from "@/components/Applications";
import HowItWorks from "@/components/HowItWorks";

export default function Page({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return (
    <main>
      <Hero dict={dict} />
      <HowItWorks />
      <Applications dict={dict} />
    </main>
  );
}
