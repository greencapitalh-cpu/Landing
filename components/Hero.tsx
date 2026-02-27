"use client";

import { motion } from "framer-motion";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-32">
      <div className="max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
            {dict.hero.title}
            <br />
            <span className="text-blue-400">
              {dict.hero.subtitle}
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            {dict.hero.description}
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-500 px-6 py-3 rounded-lg">
              {dict.hero.primary}
            </button>

            <button className="border border-gray-500 px-6 py-3 rounded-lg">
              {dict.hero.secondary}
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-16 rounded-3xl">
            <div className="w-full h-64 bg-blue-400/10 rounded-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
