import DesktopApplications from "./DesktopApplications";
import MobileApplications from "./MobileApplications";

export default function Applications({ dict }: { dict: any }) {
  return (
    <section
      id="applications"
      className="relative py-24 bg-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight">
            {dict.applications.title}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {dict.applications.subtitle}
          </p>
        </div>

        {/* DESKTOP VERSION */}
        <div className="hidden lg:block">
          <DesktopApplications dict={dict} />
        </div>

        {/* MOBILE VERSION */}
        <div className="block lg:hidden">
          <MobileApplications dict={dict} />
        </div>

      </div>
    </section>
  );
}
