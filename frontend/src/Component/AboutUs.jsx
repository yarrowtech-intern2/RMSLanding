import React from "react";
import {
  Target,
  Eye,
  Building2,
  BarChart3,
  Workflow,
  ShieldCheck,
} from "lucide-react";

const AboutUs = () => {
  const whyChoose = [
    {
      icon: Building2,
      text: "Centralized control of all retail departments.",
      color: "bg-blue-50 text-blue-500",
    },
    {
      icon: BarChart3,
      text: "Real-time stock, sales, and vendor insights.",
      color: "bg-orange-50 text-orange-500",
    },
    {
      icon: Workflow,
      text: "Automated workflows and barcode integration.",
      color: "bg-blue-50 text-blue-500",
    },
    {
      icon: ShieldCheck,
      text: "Scalable, secure, and easy to use.",
      color: "bg-orange-50 text-orange-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-blue-100 py-24 overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[25%] h-[30%] bg-orange-200/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[5%] w-[25%] h-[30%] bg-blue-400/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl min-[1700px]:max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#FF764D] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
              ABOUT US
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl min-[1700px]:text-[2.2rem] font-extrabold text-gray-900 mb-6 leading-tight">
            Digitizing the <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF764D] to-orange-400">
              Retail World
            </span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl min-[1700px]:text-[12px] leading-relaxed">
            <span className="font-semibold text-gray-900">
              RMS (Retail Management System)
            </span>{" "}
            is a powerful enterprise platform designed to streamline retail
            operations, automate workflows, and provide real-time insights to
            businesses for smarter decision making.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Mission */}
          <div
            data-aos="fade-right"
            className="rounded-[2rem] bg-white p-8 lg:p-10 border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#FF764D] shadow-inner group-hover:scale-110 transition">
                <Target size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower retail businesses through technology,
              automation, and data-driven insights. RMS helps organizations
              simplify operations, reduce errors, and enhance productivity
              across every department.
            </p>
          </div>

          {/* Vision */}
          <div
            data-aos="fade-left"
            className="rounded-[2rem] bg-white p-8 lg:p-10 border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF764D] shadow-inner group-hover:scale-110 transition">
                <Eye size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our vision is to become the most trusted and intelligent retail
              management platform globally, enabling retailers to adopt digital
              transformation and achieve sustainable growth.
            </p>
          </div>
        </div>

        {/* Why Choose RMS */}
        <div data-aos="fade-up" className="text-center">
          <h3 className="text-4xl sm:text-5xl min-[1700px]:text-[2.2rem] font-bold text-gray-900 mb-12 min-[1700px]:mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF764D] to-orange-400">
              RMS System
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                  >
                    <Icon size={20} strokeWidth={2.5} />
                  </div>

                  <p className="text-gray-900 text-sm font-semibold leading-relaxed">
                    {item.text}
                  </p>
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