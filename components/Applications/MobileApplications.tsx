"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileApplications({ dict }: { dict: any }) {
  const apps = dict?.applications?.items || [];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!apps.length) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % apps.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [apps.length]);

  if (!apps.length) return null;

  return (
    <div className="relative">

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden"
        >
          <img
            src={apps[active].image}
            alt={apps[active].title}
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold">
              {apps[active].title}
            </h3>

            <p className="mt-3 text-gray-600">
              {apps[active].description}
            </p>

            <ul className="mt-4 space-y-2 text-gray-600">
              {apps[active].bullets.map(
                (bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{bullet}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {apps.map((_: any, index: number) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              active === index
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
