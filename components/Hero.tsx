"use client";

export default function Hero({ content, locale }: { content: any; locale: string }) {

  const bgImage = `/images/bg-${locale}.png`;

  return (
    <section
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* OVERLAY SUAVE PARA LEGIBILIDAD */}
      <div className="absolute inset-0 bg-white/70 lg:bg-white/0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="text-center lg:text-right">

            <h1 className="text-4xl lg:text-6xl font-semibold text-black leading-tight">
              {content.title}
            </h1>

            <p className="text-gray-700 text-lg mt-4">
              {content.description}
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">

              <a
                href="https://app.udochain.com/login"
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition"
              >
                Login
              </a>

              <a
                href="https://app.udochain.com/register"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
