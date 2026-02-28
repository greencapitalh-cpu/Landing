"use client";

export default function HowItWorks({ dict }: { dict: any }) {
  return (
    <section className="relative bg-white text-gray-900 min-h-[80vh] flex items-center py-20">

      <div className="max-w-6xl mx-auto px-6 w-full text-center relative">

        {/* TITLE */}
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          {dict.howItWorks.titleLine1}
          <br />
          {dict.howItWorks.titleLine2}{" "}
          <span className="text-blue-600">
            {dict.howItWorks.titleHighlight}
          </span>
        </h2>

        {/* CONTENEDOR IMAGEN + COMPARACIÓN */}
        <div className="relative mt-10 flex justify-center">

          {/* IMAGEN CENTRADA */}
          <img
            src="/images/comparation.png"
            alt="Comparison"
            className="w-[85%] max-w-5xl object-contain"
          />

          {/* COMPARACIÓN SUPERPUESTA */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-20 max-w-4xl w-full px-12 text-left">

              {/* LEFT */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold tracking-wide text-gray-700">
                  {dict.howItWorks.left.title}
                </h3>

                <ul className="space-y-3 text-lg text-gray-700">
                  {dict.howItWorks.left.points.map((point: string, i: number) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

              {/* RIGHT */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold tracking-wide text-blue-700">
                  {dict.howItWorks.right.title}
                </h3>

                <ul className="space-y-3 text-lg text-gray-800">
                  {dict.howItWorks.right.points.map((point: string, i: number) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16">
          <p className="text-xl text-gray-700">
            {dict.howItWorks.cta.line1}
          </p>

          <p className="text-3xl lg:text-4xl font-semibold mt-2">
            <span className="text-blue-700">
              {dict.howItWorks.cta.highlight}
            </span>
          </p>

          <p className="text-xl text-gray-600 mt-2">
            {dict.howItWorks.cta.line2}
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-10 py-4 rounded-full text-white text-lg font-medium shadow-xl shadow-blue-600/30">
            {dict.howItWorks.cta.button}
          </button>
        </div>

      </div>
    </section>
  );
}
