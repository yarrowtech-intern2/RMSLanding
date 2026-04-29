import React, { useMemo } from "react";
import {
  Boxes,
  BarChart3,
  ShieldCheck,
  Users,
  Barcode,
  Workflow,
  ArrowRight
} from "lucide-react";

const Services = () => {

  const services = useMemo(
    () => [
      {
        icon: Workflow,
        title: "Workflow Automation",
        desc: "Approvals, logs, and structured processes that reduce manual work and improve accountability.",
        color: "blue",
      },
      {
        icon: Boxes,
        title: "Inventory & Stock Control",
        desc: "Real-time stock visibility, inward/outward movement tracking, and transfer monitoring across teams.",
        color: "orange",
      },
      {
        icon: Barcode,
        title: "Barcode & SKU Management",
        desc: "Barcode generation, SKU workflows, and item-level tracking for fast operations and accuracy.",
        color: "blue",
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        desc: "Sales insights, stock health, fast/slow movers, and performance dashboards for quick decisions.",
        color: "orange",
      },
      {
        icon: Users,
        title: "Role-Based Operations",
        desc: "Admin, Merchandiser, HR, Finance, Inventory, Stock, Barcode, Logistics — controlled access per role.",
        color: "blue",
      },
      {
        icon: ShieldCheck,
        title: "Security & Audit Logs",
        desc: "Permission-based workflows and clear logs for traceability, compliance, and secure operations.",
        color: "orange",
      },
    ],
    []
  );

  const getColorClasses = (color) => {
    const map = {
      blue: "bg-blue-50 text-blue-600",
      orange: "bg-orange-50 text-orange-600",
    };
    return map[color] || map.orange;
  };

  return (
    <section
      id="services"
      className="relative w-full bg-blue-100 py-10 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -right-[5%] w-[30%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] -left-[5%] w-[30%] h-[40%] bg-orange-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl min-[1700px]:max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#FF764D] animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A1A1A]">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl min-[1700px]:text-[2.2rem] font-extrabold text-[#1A1A1A] tracking-tight mb-6 min-[1700px]:mb-3">
            Core services that <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF764D] to-orange-400">
              power RMS
            </span>
          </h2>

          <p className="text-gray-500 text-lg sm:text-xl min-[1700px]:text-[12px] leading-relaxed font-medium">
            Everything you need to run retail operations smoothly — from
            inventory accuracy to analytics, automation, and secure workflows.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {services.map((item, idx) => {
            const Icon = item.icon;
            const colorClass = getColorClasses(item.color);

            return (
              <div
                key={item.title}
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={idx * 120}
                className="group relative"
              >
                <div
                  className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-md transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 cursor-pointer h-full"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${colorClass} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                  >
                    <Icon size={30} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-2xl min-[1700px]:text-[14px] font-bold text-[#1A1A1A] mb-4 min-[1700px]:mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed text-lg min-[1700px]:text-[11px]">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#FF764D] font-black text-sm opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
                    <span>EXPLORE MORE</span>
                    <ArrowRight size={16} strokeWidth={3} />
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;