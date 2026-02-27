"use client";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        {/* Imagen más desplazada a la derecha */}
        <img
          src="/images/hero-bg.png"
          alt="Blockchain Infrastructure"
          className="w-full h-full object-cover object-[75%_center]"
        />

        {/* 40-45% oscuro sólido + transición profesional */}
        <div className="absolute inset-0">
          {/* Bloque oscuro sólido */}
          <div className="absolute left-0 top-0 h-full w-[45%] bg-[#020817]" />

          {/* Transición suave hacia luces */}
          <div className="absolute left-[45%] top-0 h-full w-[25%] bg-gradient-to-r from-[#061A35] to-transparent" />
        </div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl pt-24 pb-24">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white tracking-tight">
            {dict.hero.title}
            <br />
            <span className="text-blue-400">
              {dict.hero.subtitle}
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg lg:text-xl leading-relaxed">
            {dict.hero.description}
          </p>

          <div className="mt-12 flex gap-6">

            <a
              href="https://app.udochain.com"
              className="bg-blue-600 hover:bg-blue-700 
              transition-all duration-300 
              px-7 py-3.5 rounded-lg 
              text-white font-medium 
              shadow-xl shadow-blue-500/40"
            >
              Create Account
            </a>

            <a
              href="https://verify.udochain.com"
              className="border border-white/30 
              hover:border-white 
              px-7 py-3.5 rounded-lg 
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
