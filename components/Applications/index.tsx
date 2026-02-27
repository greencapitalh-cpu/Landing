import DesktopApplications from "./DesktopApplications";
import MobileApplications from "./MobileApplications";

export default function Applications({ dict }: { dict: any }) {
  return (
    <section id="applications" className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">
            {dict.applications.title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {dict.applications.subtitle}
          </p>
        </div>

        <div className="hidden lg:block">
          <DesktopApplications dict={dict} />
        </div>

        <div className="block lg:hidden">
          <MobileApplications dict={dict} />
        </div>
      </div>
    </section>
  );
}
