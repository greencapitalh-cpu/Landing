"use client";

export default function ProblemSolution() {
  return (
    <section className="relative w-full h-[50vh] bg-[#0B1220] overflow-hidden">

      {/* IMAGEN INTACTA */}
      <div className="absolute right-0 bottom-0 pointer-events-none">
        <img
          src="/images/solution.png"
          alt="Vault Solution"
          className="block"
        />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-12">

          {/* PROBLEM */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg border border-blue-500/40 flex items-center justify-center bg-blue-500/10">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-white tracking-wide">
                Problem
              </h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Challenges in verifying real-world certifications and records
              lead to inefficiencies, fraud risks, and lack of institutional trust.
            </p>
          </div>

          {/* SOLUTION */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg border border-blue-500/40 flex items-center justify-center bg-blue-500/10">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-white tracking-wide">
                Solution
              </h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Udochain introduces a blockchain-based infrastructure layer
              that secures records and enables independent verification.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
