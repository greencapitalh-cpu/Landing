"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-semibold tracking-tight">
          How It Works
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          A simple infrastructure layer that connects real-world processes
          with blockchain-based verification.
        </p>

        {/* Diagram */}
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-16">
          
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-2xl border border-gray-200 flex items-center justify-center text-sm text-gray-500">
              Issuer
            </div>
            <p className="mt-6 text-gray-600 max-w-xs">
              A document, certification or asset is registered.
            </p>
          </motion.div>

          {/* Line */}
          <div className="hidden lg:block w-24 h-px bg-gray-200"></div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-2xl border border-gray-200 flex items-center justify-center text-sm text-gray-500">
              Blockchain
            </div>
            <p className="mt-6 text-gray-600 max-w-xs">
              Cryptographic hash and timestamp are recorded immutably.
            </p>
          </motion.div>

          {/* Line */}
          <div className="hidden lg:block w-24 h-px bg-gray-200"></div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-2xl border border-gray-200 flex items-center justify-center text-sm text-gray-500">
              Verification
            </div>
