"use client";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative hidden lg:flex min-h-screen w-full overflow-hidden bg-[#020B1A] items-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-end">

        {/* Imagen preservada sin recorte */}
        <img
          src="/images/hero-bg.png"
          alt="Blockchain Infrastructure"
          className="h-full w-auto object-contain select-none pointer-events-none"
        />

        {/* Oscurecimiento limpio sin romper la imagen */}
        <div
          className="absolute inset-0 bg-gradient-to-r
            from-[#020B1A]
            via-[#020B1A]/97
            via-[#020B1A]/85
            via-[#03142B]/60
            to-transparent"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">

          <h1 className="text-6xl font-semibold leading-[1.05] text-white tracking-tight">
            {dict.hero.title}
            <br />
            <span className="text-blue-400">
              {dict.hero.subtitle}
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-relaxed">
            {dict.hero.description}
          </p>

          <div className="mt-12 flex gap-6">

            <a
              href="https://app.udochain.com"
              className="bg-blue-600 hover:bg-blue-700
              transition-all duration-300
              px-8 py-4 rounded-lg
              text-white font-medium
              shadow-xl shadow-blue-500/40"
            >
              Create Account
            </a>

            <a
              href="https://verify.udochain.com"
              className="border border-white/30
              hover:border-white
              px-8 py-4 rounded-lg
              text-gray-200 hover:text-white
              transition-all duration-300"
            >
              Verify Evidence
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}
