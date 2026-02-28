"use client";

export default function HowItWorks({ dict }: { dict: any }) {
  return (
    <section className="bg-white text-gray-900 py-16">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          {dict.howItWorks.titleLine1}
          <br />
          {dict.howItWorks.titleLine2}{" "}
          <span className="text-blue-600">
            {dict.howItWorks.titleHighlight}
          </span>
        </h2>

        {/* IMAGEN + COMPARACIÓN */}
        <div className="relative mt-10 flex justify-center">

          {/* Imagen mantiene proporción natural */}
          <img
            src="/images/comparation.png"
            alt="Comparison"
            className="w-full max-w-5xl object-contain"
          />

          {/* Comparación centrada exactamente respecto a la línea */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="w-full max-w-5xl grid grid-cols-2 px-12">

              {/* LEFT */}
              <div className="flex justify-center">
                <div className="max-w-sm text-left space-y-4">
                  <h3 className="text-base font-semibold tracking-wide text-gray-700">
                    {dict.howItWorks.left.title}
                  </h3>

                  <ul className="space-y-3 text-base text-gray-700">
                    {dict.howItWorks.left.points.map((point: string, i: number) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex justify-center">
                <div className="max-w-sm text-left space-y-4">
                  <h3 className="text-base font-semibold tracking-wide text-blue-700">
                    {dict.howItWorks.right.title}
                  </h3>

                  <ul className="space-y-3 text-base text-gray-800">
                    {dict.howItWorks.right.points.map((point: string, i: number) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-14">
          <p className="text-lg text-gray-700">
            {dict.howItWorks.cta.line1}
          </p>

          <p className="text-2xl lg:text-3xl font-semibold mt-2">
            <span className="text-blue-700">
              {dict.howItWorks.cta.highlight}
            </span>
          </p>

          <p className="text-lg text-gray-600 mt-2">
            {dict.howItWorks.cta.line2}
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-full text-white text-base font-medium shadow-lg shadow-blue-600/30">
            {dict.howItWorks.cta.button}
          </button>
        </div>

      </div>
    </section>
  );
}
