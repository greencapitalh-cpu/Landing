"use client";

import { campaignContent } from "@/lib/campaignContent";
import { authUrl, CampaignSlug, normalizeLocale, ui } from "@/lib/landingContent";

export default function CampaignLanding({
  locale,
  campaign,
}: {
  locale: string;
  campaign: CampaignSlug;
}) {
  const lang = normalizeLocale(locale);
  const labels = ui[lang];
  const campaignData = campaignContent[campaign];
  const copy = campaignData[lang];

  return (
    <main className="min-h-screen bg-[#f8faf9] text-[#0f172a]">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_0.88fr]">
        <div>
          <a href={`/${lang}`} className="text-sm font-semibold uppercase tracking-[0.16em] text-[#17695b]">
            UDoChain
          </a>
          <p className="mt-10 inline-flex rounded-md border border-[#b9c8c1] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#17695b]">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">{copy.description}</p>

          <div className="mt-8 max-w-md space-y-3">
            <a
              href={authUrl("google", lang, campaign)}
              className="flex w-full items-center justify-center gap-3 rounded-md border border-[#cbd5d1] bg-white px-5 py-3 text-sm font-semibold text-[#0f172a] shadow-sm transition hover:border-[#94a3b8]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#dbe2df] text-xs font-bold text-[#4285f4]">
                G
              </span>
              {labels.google}
            </a>
            <a
              href={authUrl("facebook", lang, campaign)}
              className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1877f2] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f65d8]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-xs font-bold text-[#1877f2]">
                f
              </span>
              {labels.facebook}
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-[#475569]">
            {copy.bullets.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#10a884]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#d7e0dc] bg-white p-4 shadow-2xl shadow-slate-900/10">
          <img src={campaignData.image} alt={copy.title} className="aspect-[4/5] w-full rounded-md object-cover" />
          <div className="mt-4 rounded-md bg-[#101827] p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9dd6c6]">Campaign CTA</p>
            <h2 className="mt-3 text-2xl font-semibold">{copy.primary}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{copy.secondary}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
