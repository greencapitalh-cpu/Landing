/*"use client";

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

      {/* OVERLAY SUAVE PARA LEGIBILIDAD /}
      <div className="absolute inset-0 bg-white/70 lg:bg-white/0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">

          {/* TEXT /}
          <div className="text-center lg:text-right">

            <h1 className="text-4xl lg:text-6xl font-semibold text-black leading-tight">
              {content.title}
            </h1>

            <p className="text-gray-700 text-lg mt-4">
              {content.description}
            </p>

            {/* BUTTONS /}
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
*/

/*
"use client";

export default function Hero({ content, locale }: { content: any; locale: string }) {

  const bgImage = `/images/bg-${locale}.png`;

  return (
    <>

      {/* ================= MOBILE ================= /}
<section className="block lg:hidden w-full bg-white">

  {/* IMAGEN /}
  <div className="relative w-full h-[50vh]">

    <img
      src={bgImage}
      alt="UDoChain"
      className="w-full h-full object-cover object-[65%_center]"
    />

    {/* TITULO SOBRE IMAGEN /}
    <div className="absolute bottom-4 left-0 w-full px-6 text-center">
      <h1 className="text-[30px] font-bold text-black leading-tight">
  {content.title}
</h1>
    </div>

  </div>

  {/* TEXTO DEBAJO /}
  <div className="px-6 pt-4 pb-8 text-center bg-white">

    <p className="text-gray-600 text-[15px] leading-relaxed">
      {content.description}
    </p>

    {/* BOTONES /}
    <div className="mt-6 flex flex-col gap-4">

      <a
        href="https://app.udochain.com/login"
        className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-800 bg-white"
      >
        Login
      </a>

      <a
        href="https://app.udochain.com/register"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Register
      </a>

    </div>

  </div>

</section>

      {/* ================= DESKTOP ================= /}
      <section
        className="hidden lg:flex min-h-screen w-full items-center relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* OVERLAY SUAVE /}
        <div className="absolute inset-0 bg-white/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

          <div className="grid grid-cols-2 items-center gap-10">

            {/* TEXTO /}
            <div className="text-left max-w-[520px] ml-[80px]">

              <h1 className="text-6xl font-bold text-black leading-tight">
                {content.title}
              </h1>

              <p className="text-gray-600 text-lg mt-5 max-w-[480px]">
                {content.description}
              </p>

              {/* BOTONES /}
              <div className="mt-8 flex gap-4">

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

            {/* ESPACIO DERECHO (IMAGEN YA VIENE EN BACKGROUND) /}
            <div />

          </div>

        </div>

      </section>

    </>
  );
              }
*/



"use client";

import { useEffect } from "react";

export default function Hero({ content, locale }: { content: any; locale: string }) {

  const bgImage = `/images/bg-${locale}.png`;
  const fallbackImage = `/images/bg-en.png`;

  useEffect(() => {
    const imgs = ["es", "en", "pt", "fr", "it", "de", "ja", "zh", "ar", "ko"];

    imgs.forEach((l) => {
      const img = new Image();
      img.src = `/images/bg-${l}.png`;
    });
  }, []);

  return (
    <>

      {/* ================= MOBILE ================= */}
      <section className="block lg:hidden w-full bg-white">

        {/* IMAGEN */}
        <div className="relative w-full h-[50vh]">

          <img
            src={bgImage}
            alt="UDoChain"
            className="w-full h-full object-cover object-[65%_center]"
          />

          {/* TITULO SOBRE IMAGEN */}
          <div className="absolute bottom-4 left-0 w-full px-6 text-center">
            <h1 className="text-[30px] font-bold text-black leading-tight">
              {content.title}
            </h1>
          </div>

        </div>

        {/* TEXTO DEBAJO */}
        <div className="px-6 pt-4 pb-8 text-center bg-white">

          <p className="text-gray-600 text-[15px] leading-relaxed">
            {content.description}
          </p>

          {/* BOTONES */}
          <div className="mt-6 flex flex-col gap-4">

            <a
              href={`https://app.udochain.com/${locale}/login`}
              className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-800 bg-white"
            >
              Login
            </a>

            <a
              href={`https://app.udochain.com/${locale}/register`}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              Register
            </a>

          </div>

        </div>

      </section>

      {/* ================= DESKTOP ================= */}
      <section
        className="hidden lg:flex min-h-screen w-full items-center relative"
        style={{
          backgroundImage: `url(${bgImage}), url(${fallbackImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* OVERLAY SUAVE */}
        <div className="absolute inset-0 bg-white/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

          <div className="grid grid-cols-2 items-center gap-10">

            {/* TEXTO */}
            <div className="text-left max-w-[520px] ml-[80px]">

              <h1 className="text-6xl font-bold text-black leading-tight">
                {content.title}
              </h1>

              <p className="text-gray-600 text-lg mt-5 max-w-[480px]">
                {content.description}
              </p>

              {/* BOTONES */}
              <div className="mt-8 flex gap-4">

                <a
                  href={`https://app.udochain.com/${locale}/login`}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition"
                >
                  Login
                </a>

                <a
                  href={`https://app.udochain.com/${locale}/register`}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Register
                </a>

              </div>

            </div>

            {/* ESPACIO DERECHO */}
            <div />

          </div>

        </div>

      </section>

    </>
  );
        }
