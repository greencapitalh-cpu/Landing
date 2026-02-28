"use client";

export default function ProblemSolution() {
  return (
    <section className="relative w-full py-28 bg-[#0B1220] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/security-bg.png"
          alt="Blockchain Infrastructure"
          className="w-full h-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r
          from-[#0B1220]
          via-[#0B1220]/40
          to-[#0B1220]" />

        <div className="absolute inset-0 bg-gradient-to-b
          from-[#0B1220]/70
          via-transparent
          to-[#0B1220]/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          {/* PROBLEM */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg border border-blue-500/40 
                              flex items-center justify-center 
                              bg-blue-500/10">
                {/* Shield Icon */}
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

            <p className="text-gray-200 text-lg leading-relaxed">
              Challenges in verifying real-world certifications and records
              lead to inefficiencies, fraud risks, and lack of institutional trust.
              Centralized systems allow modification of records and create
              structural vulnerabilities.
            </p>
          </div>

          {/* SOLUTION */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg border border-blue-500/40 
                              flex items-center justify-center 
                              bg-blue-500/10">
                {/* Cube / Blockchain Icon */}
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

            <p className="text-gray-200 text-lg leading-relaxed">
              Udochain introduces a blockchain-based infrastructure layer
              that cryptographically secures records, ensures immutable
              timestamps, and enables independent verification without
              centralized control.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
