"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="
      relative 
      bg-white 
      text-gray-900
      flex items-center
      lg:h-[80vh]   /* 80% del alto en laptop */
      py-24 lg:py-0 /* en mobile normal, en laptop sin padding vertical */
    ">
      <div className="max-w-6xl mx-auto px-6 text-center w-full">

        <h2 className="text-4xl font-semibold tracking-tight">
          How It Works
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          A simple infrastructure layer that connects processes
          with cryptographic verification.
        </p>

        <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-16">

          {/* STEP 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-2xl border border-gray-200 flex items-center justify-center text-sm text-gray-500">
              Issuer
            </div>
            <p className="mt-6 text-gray-600 max-w-xs">
              A document or asset is registered.
            </p>
          </motion.div>

          {/* CONNECTOR */}
          <div className="hidden lg:block w-24 h-px bg-gray-200" />

          {/* STEP 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-2xl border border-gray-200 flex items-center justify-center text-sm text-gray-500">
              Blockchain
            </div>
            <p className="mt-6 text-gray-600 max-w-xs">
              A unique cryptographic fingerprint is permanently anchored.
            </p>
          </motion.div>

          {/* CONNECTOR */}
          <div className="hidden lg:block w-24 h-px bg-gray-200" />

          {/* STEP 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-2xl border border-gray-200 flex items-center justify-center text-sm text-gray-500">
              Verification
            </div>
            <p className="mt-6 text-gray-600 max-w-xs">
              Anyone can independently verify authenticity.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
