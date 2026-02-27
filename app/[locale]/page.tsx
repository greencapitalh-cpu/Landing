import { getDictionary } from "@/lib/dictionaries";
import Hero from "@/components/Hero";

export default function Page({
  params,
}: {
  params: { locale: string };
}) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <Hero dict={dict} />
    </>
  );
}
