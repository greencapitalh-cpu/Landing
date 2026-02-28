"use client";

export default function Security() {
  return (
    <section className="relative w-full py-32 bg-[#020B1A] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <img
          src="/images/security-bg.png"
          alt="Blockchain Security Shield"
          className="w-full h-full object-cover opacity-70"
        />

        {/* Fade lateral para integrar con fondo */}
        <div className="absolute inset-0 bg-gradient-to-r 
          from-[#020B1A] 
          via-[#020B1A]/80 
          via-[#020B1A]/40 
          to-[#020B1A]">
        </div>

        {/* Fade vertical suave */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-[#020B1A] 
          via-transparent 
          to-[#020B1A]">
        </div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">
          Security & Architecture
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Immutable infrastructure designed to ensure integrity,
          transparency, and institutional-grade security.
        </p>

        {/* FEATURES GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-medium text-white">
              Immutable Records
            </h3>
            <p className="mt-4 text-gray-400 text-sm">
              Cryptographic hash stored permanently on blockchain.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-medium text-white">
              Decentralized Validation
            </h3>
            <p className="mt-4 text-gray-400 text-sm">
              Independent verification without centralized control.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-medium text-white">
              Advanced Encryption
            </h3>
            <p className="mt-4 text-gray-400 text-sm">
              Secure data integrity with cryptographic proof.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-medium text-white">
              Regulatory Ready
            </h3>
            <p className="mt-4 text-gray-400 text-sm">
              Designed for institutional and enterprise compliance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
