"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DesktopApplications({ dict }: { dict: any }) {
  const apps = dict.applications.items;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % apps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [apps.length]);

  return (
    <div className="grid grid-cols-2 gap-16 items-start">
      
      {/* Índice */}
      <div className="border-l border-gray-200 pl-6 space-y-6">
        {apps.map((app: any, index: number) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            className={`cursor-pointer transition-all ${
              active === index
                ? "text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            {app.title}
          </div>
        ))}
      </div>

      {/* Panel dinámico */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden"
          >
            <img
              src={apps[active].image}
              alt={apps[active].title}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-semibold">
                {apps[active].title}
              </h3>
              <p className="mt-4 text-gray-600">
                {apps[active].description}
              </p>

              <ul className="mt-6 space-y-3">
                {apps[active].bullets.map(
                  (bullet: string, i: number) => (
                    <li key={i}>• {bullet}</li>
                  )
                )}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
