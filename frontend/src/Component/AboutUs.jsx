import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Target,
  Eye,
  Building2,
  BarChart3,
  Workflow,
  ShieldCheck,
} from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const whyChoose = [
    {
      icon: Building2,
      text: "Centralized control of all retail departments.",
    },
    {
      icon: BarChart3,
      text: "Real-time stock, sales, and vendor insights.",
    },
    {
      icon: Workflow,
      text: "Automated workflows and barcode integration.",
    },
    {
      icon: ShieldCheck,
      text: "Scalable, secure, and easy to use.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] -translate-x-1/2 rounded-full bg-gray-800 blur-[120px]" />
        <div className="absolute -bottom-48 right-[-140px] h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full bg-gray-900 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <div className="flex justify-center">
            <div
              className="inline-flex items-center justify-center 
                         px-6 sm:px-8 lg:px-10 
                         py-2.5 sm:py-3
                         bg-gray-800/70 border border-gray-700
                         rounded-full text-lg sm:text-2xl lg:text-3xl
                         font-semibold tracking-widest text-white"
            >
              ABOUT US
            </div>
          </div>

          <p className="mt-4 sm:mt-5 text-gray-400 text-sm sm:text-lg lg:text-xl leading-relaxed px-1 sm:px-4">
            <span className="font-semibold text-white">
              An enterprise platform
            </span>{" "}
            developed to digitize and automate the entire retail workflow.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {/* Mission */}
          <div
            className="rounded-3xl border border-gray-800 bg-gray-900/60 
                       p-5 sm:p-7 lg:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {/* smaller icon */}
              <div className="rounded-2xl bg-gray-800 border border-gray-700 p-2.5 sm:p-3">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-gray-200" />
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                Our Mission
              </h3>
            </div>

            <p className="mt-3 sm:mt-4 text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg">
              To empower retail businesses through automation, accuracy, and
              transparency — enabling seamless collaboration across every
              department and improving overall operational efficiency.
            </p>
          </div>

          {/* Vision */}
          <div
            className="rounded-3xl border border-gray-800 bg-gray-900/60 
                       p-5 sm:p-7 lg:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {/* smaller icon */}
              <div className="rounded-2xl bg-gray-800 border border-gray-700 p-2.5 sm:p-3">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-200" />
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                Our Vision
              </h3>
            </div>

            <p className="mt-3 sm:mt-4 text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg">
              To become the most trusted and intelligent retail management
              solution that drives digital transformation and growth for modern
              retail enterprises.
            </p>
          </div>
        </div>

        {/* Why Choose */}
        <div className="mt-12 sm:mt-14 lg:mt-16" data-aos="fade-up">
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center">
            Why Choose RMS
          </h3>

          <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-800 bg-gray-900/50 
                             p-5 sm:p-6 lg:p-7
                             hover:bg-gray-900/70 transition"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="shrink-0 rounded-2xl bg-gray-800 border border-gray-700 p-2.5 sm:p-3">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-200" />
                    </div>

                    {/* Text */}
                    <p className="text-gray-300 leading-relaxed font-medium text-sm sm:text-base lg:text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
