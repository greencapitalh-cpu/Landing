"use client";

export default function ProblemSolution() {
  return (
    <section className="relative w-full py-28 bg-[#020B1A] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none">

        <img
          src="/images/security-bg.png"
          alt="Blockchain Infrastructure Background"
          className="w-full h-full object-cover opacity-50"
        />

        {/* Horizontal Fade */}
        <div className="absolute inset-0 bg-gradient-to-r
          from-[#020B1A]
          via-[#020B1A]/85
          via-[#020B1A]/60
          to-[#020B1A]" />

        {/* Vertical Fade */}
        <div className="absolute inset-0 bg-gradient-to-b
          from-[#020B1A]
          via-transparent
          to-[#020B1A]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* PROBLEM */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-6">
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
            <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-6">
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
