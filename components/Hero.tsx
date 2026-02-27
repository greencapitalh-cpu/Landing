"use client";

import { motion } from "framer-motion";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-28 pb-20 bg-cover bg-[70%_center] lg:bg-[center_right]"
      style={{
        backgroundImage: `
          linear-gradient(
            120deg,
            rgba(5,10,20,0.96) 0%,
            rgba(7,15,30,0.94) 40%,
            rgba(8,18,40,0.88) 60%,
            rgba(5,10,20,0.96) 100%
          ),
          url('/images/hero-bg.jpg')
        `,
      }}
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-left z-10">
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
              className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl font-medium text-lg shadow-2xl shadow-blue-600/30 hover:scale-[1.03]"
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
          <div className="relative bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl shadow-blue-900/30">

            {/* subtle glow overlay */}
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
