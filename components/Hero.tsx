"use client";

export default function Hero({ dict, locale }: { dict: any; locale: string }) {

  const heroImage = `/images/bg-${locale}.png`;
  const fallbackImage = `/images/bg-en.png`;

  return (
    <section className="min-h-screen w-full flex items-center pt-20">

      <div className="max-w-7xl mx-auto w-full px-6">

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">

          {/* TEXT (TOP MOBILE / LEFT DESKTOP) */}
          <div className="order-1 text-center lg:text-left">

            <h1 className="text-4xl lg:text-6xl font-semibold text-black leading-tight">
              {dict.hero.title}
            </h1>

          </div>

          {/* IMAGE */}
          <div className="order-2 flex justify-center">

            <img
              src={heroImage}
              alt="Hero"
              className="w-full max-w-md lg:max-w-full object-contain"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />

          </div>

          {/* DESCRIPTION + BUTTONS */}
          <div className="order-3 lg:col-span-2 text-center lg:text-left max-w-2xl">

            <p className="text-gray-600 text-lg mt-2">
              {dict.hero.description}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

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
