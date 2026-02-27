"use client";

import { motion } from "framer-motion";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-28 pb-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Blockchain Background"
          className="w-full h-full object-cover object-[75%_center] lg:object-right"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14] via-[#071530]/80 to-[#050A14]/60"></div>

        {/* Extra right glow */}
        <div className="absolute right-0 top-0 w-[50%] h-full bg-blue-600/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight">
            {dict.hero.title}
            <br />
            <span className="text-blue-400">
              {dict.hero.subtitle}
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg lg:text-xl max-w-xl leading-relaxed">
            {dict.hero.description}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">

            <a
              href="https://app.udochain.com"
              className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl font-medium text-lg shadow-2xl shadow-blue-600/40 hover:scale-[1.03]"
            >
              Create Account
            </a>

            <a
              href="https://verify.udochain.com"
              className="inline-flex justify-center items-center border border-white/30 hover:border-white transition-all duration-300 px-8 py-4 rounded-xl font-medium text-lg text-gray-200 hover:text-white backdrop-blur-sm hover:bg-white/5"
            >
              Verify Evidence
            </a>

          </div>
        </div>

        {/* RIGHT SIDE GLASS PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="hidden lg:block"
        >
          <div className="relative bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl shadow-blue-900/40">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative w-full h-72 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center text-white/40 text-sm tracking-widest uppercase">
              Blockchain Infrastructure
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
