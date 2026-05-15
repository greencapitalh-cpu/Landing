import { cases, homeContent, modules, normalizeLocale, ui } from "@/lib/landingContent";

const APP_URL = "https://app.udochain.com";

export default function HomeLanding({ locale }: { locale: string }) {
  const lang = normalizeLocale(locale);
  const copy = homeContent[lang];
  const labels = ui[lang];
  const moduleItems = modules[lang];

  return (
    <main className="min-h-screen bg-[#f8faf9] text-[#0f172a]">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 lg:min-h-[calc(100vh-84px)] lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-4 inline-flex rounded-md border border-[#b9c8c1] bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#17695b]">
            {copy.eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#0f172a] sm:text-6xl lg:text-7xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">{copy.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/register`}
              className="rounded-md bg-[#10a884] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d8f72]"
            >
              {labels.register}
            </a>
            <a
              href={`${APP_URL}/login`}
              className="rounded-md border border-[#cbd5d1] bg-white px-6 py-3 text-center text-sm font-semibold text-[#0f172a] transition hover:border-[#94a3b8]"
            >
              {labels.login}
            </a>
            <a
              href="#modules"
              className="rounded-md border border-transparent px-6 py-3 text-center text-sm font-semibold text-[#17695b] transition hover:bg-white"
            >
              {labels.explore}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg bg-[#dce8e3]" />
          <div className="relative overflow-hidden rounded-lg border border-[#cad7d1] bg-white shadow-2xl shadow-slate-900/10">
            <img
              src="/images/udochain-mockup-board.png"
              alt="UDoChain platform preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="modules" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#17695b]">Platform</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#0f172a]">{copy.modulesTitle}</h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {moduleItems.map((item) => (
              <article key={item.slug} className="rounded-lg border border-[#e2e8f0] bg-[#fbfcfb] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#10a884]">{item.kicker}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#0f172a]">{item.title}</h3>
                <p className="mt-3 min-h-[96px] leading-7 text-[#475569]">{item.text}</p>
                <a
                  href={`/${lang}/${item.slug}`}
                  className="mt-6 inline-flex rounded-md bg-[#101827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e293b]"
                >
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8faf9] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#17695b]">Use cases</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#0f172a]">{copy.casesTitle}</h2>
            <p className="mt-5 leading-8 text-[#475569]">
              UDoChain connects legal-grade verification with practical workflows for evidence, production,
              assets and administration.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {cases[lang].map((item) => (
              <div key={item} className="rounded-lg border border-[#d7e0dc] bg-white p-5 text-[#334155]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101827] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-4xl font-semibold">{copy.finalTitle}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">{copy.finalText}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/register`}
              className="rounded-md bg-[#10a884] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#22b999]"
            >
              {labels.register}
            </a>
            <a
              href={`${APP_URL}/login`}
              className="rounded-md border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {labels.login}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
