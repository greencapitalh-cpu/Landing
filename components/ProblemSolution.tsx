"use client";

export default function ProblemSolution() {
  return (
    <section className="relative w-full py-32 bg-[#0B1220] overflow-hidden">

      {/* IMAGE RIGHT SIDE - SIN DEFORMAR */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none">
        <img
          src="/images/solution.png"
          alt="Vault Solution"
          className="h-auto w-auto object-contain"
        />
      </div>

      {/* CONTENT LEFT SIDE */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="max-w-2xl space-y-20">

          {/* PROBLEM */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide mb-6">
              Problem
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Challenges in verifying real-world certifications and records
              lead to inefficiencies, fraud risks, and lack of institutional trust.
              Centralized systems allow modification of records and create
              structural vulnerabilities.
            </p>
          </div>

          {/* SOLUTION */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide mb-6">
              Solution
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
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
