"use client";

const APP_URL = "https://app.udochain.com";

const proofSteps = [
  "Upload evidence",
  "Extract metadata",
  "Anchor the hash",
  "Share verification",
];

const useCases = [
  {
    title: "Legal evidence",
    text: "Create a verifiable timeline for documents, images, video, audio, and field records.",
  },
  {
    title: "Professional credentials",
    text: "Issue certifications that can be checked independently without exposing private files.",
  },
  {
    title: "Compliance workflows",
    text: "Keep immutable proof for reviews, audits, client intake, and operational controls.",
  },
];

const trustItems = [
  "UDoChain Investment LLC",
  "Blockchain anchoring",
  "Metadata-only or binary custody",
  "Public verification links",
];

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111827]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="/" className="text-lg font-semibold tracking-[0.08em] text-[#0f172a]">
          UDOCHAIN
        </a>
        <div className="flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="hidden text-sm font-medium text-[#334155] transition hover:text-[#0f172a] sm:inline"
          >
            Login
          </a>
          <a
            href={`${APP_URL}/register`}
            className="rounded-md bg-[#101827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e293b]"
          >
            Start
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:min-h-[calc(100vh-84px)] lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
        <div>
          <p className="mb-4 inline-flex rounded-md border border-[#b9c8c1] bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#17695b]">
            Legal proof infrastructure
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#0f172a] sm:text-6xl lg:text-7xl">
            Verifiable digital evidence for legal and business workflows.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">
            UDoChain turns files, metadata, and process records into independent proof:
            cryptographic hashes, blockchain anchoring, Aereware custody when needed,
            and public verification pages for third parties.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/register`}
              className="rounded-md bg-[#17695b] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#11564b]"
            >
              Create verifiable proof
            </a>
            <a
              href={`${APP_URL}/login`}
              className="rounded-md border border-[#cbd5d1] bg-white px-6 py-3 text-center text-sm font-semibold text-[#0f172a] transition hover:border-[#94a3b8]"
            >
              Access platform
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 text-sm text-[#475569] sm:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="border-l border-[#b8c6bd] pl-3">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg bg-[#dce8e3]" />
          <div className="relative overflow-hidden rounded-lg border border-[#cad7d1] bg-white shadow-2xl shadow-slate-900/10">
            <div className="border-b border-[#e2e8f0] bg-[#f8fafc] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="mb-8 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748b]">
                    Evidence record
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">
                    Contract amendment package
                  </h2>
                </div>
                <span className="rounded-md bg-[#e7f5ef] px-3 py-2 text-xs font-semibold text-[#17695b]">
                  Verified
                </span>
              </div>

              <div className="space-y-4">
                {proofSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-md border border-[#e2e8f0] p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#101827] text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-[#172033]">{step}</p>
                      <p className="text-sm text-[#64748b]">
                        {index === 0 && "PDF, image, video, audio, or operational file"}
                        {index === 1 && "Preserve relevant technical data and context"}
                        {index === 2 && "Register immutable proof without exposing private content"}
                        {index === 3 && "Give counterparties a clean validation link"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-md bg-[#0f172a] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9dd6c6]">
                  Proof hash
                </p>
                <p className="mt-2 break-all font-mono text-sm text-[#dbeafe]">
                  0x8f4d...b721 / Polygon anchor / Aereware metadata
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#17695b]">
              Why it matters
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#0f172a]">
              Trust should be easy to verify, not hard to request.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#475569]">
              UDoChain is built for teams that need a record to survive screenshots,
              edited files, internal systems, and time. Metadata can be registered
              lightly, while sensitive binaries can receive stronger custody when the
              case requires it.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {useCases.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e2e8f0] bg-[#fbfcfb] p-6">
                <h3 className="text-xl font-semibold text-[#0f172a]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#475569]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d7e0dc] bg-[#f7f8f6] px-5 py-8 text-center text-sm text-[#64748b]">
        <p className="font-semibold text-[#0f172a]">UDoChain</p>
        <p className="mt-2">30 N Gould St Ste R, Sheridan, WY 82801, United States</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} UDoChain. All rights reserved.</p>
      </footer>
    </main>
  );
}
