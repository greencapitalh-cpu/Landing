"use client";

import { motion } from "framer-motion";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-8 pt-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(11,18,32,0.88), rgba(11,18,32,0.88)), url('/images/hero-bg.jpg')",
      }}
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight text-white">
            {dict.hero.title}
            <br />
            <span className="text-blue-400">
              {dict.hero.subtitle}
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            {dict.hero.description}
          </p>

          <div className="mt-10">
            <a
              href="https://app.udochain.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-blue-600/20"
            >
              {dict.hero.primary}
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block"
        >
          <div className="bg-white/5 backdrop-blur-md p-16 rounded-3xl border border-white/10 shadow-2xl">
            <div className="w-full h-72 bg-white/10 rounded-xl flex items-center justify-center text-white/30 text-sm tracking-wide">
              Blockchain Infrastructure
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
