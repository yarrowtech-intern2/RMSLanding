import React, { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Boxes,
  BarChart3,
  ShieldCheck,
  Users,
  Barcode,
  Workflow,
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const services = useMemo(
    () => [
      {
        icon: Workflow,
        title: "Workflow Automation",
        desc: "Approvals, logs, and structured processes that reduce manual work and improve accountability.",
      },
      {
        icon: Boxes,
        title: "Inventory & Stock Control",
        desc: "Real-time stock visibility, inward/outward movement tracking, and transfer monitoring across teams.",
      },
      {
        icon: Barcode,
        title: "Barcode & SKU Management",
        desc: "Barcode generation, SKU workflows, and item-level tracking for fast operations and accuracy.",
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        desc: "Sales insights, stock health, fast/slow movers, and performance dashboards for quick decisions.",
      },
      {
        icon: Users,
        title: "Role-Based Operations",
        desc: "Admin, Merchandiser, HR, Finance, Inventory, Stock, Barcode, Logistics — controlled access per role.",
      },
      {
        icon: ShieldCheck,
        title: "Security & Audit Logs",
        desc: "Permission-based workflows and clear logs for traceability, compliance, and secure operations.",
      },
    ],
    []
  );

  return (
    <section
      id="services"
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] -translate-x-1/2 rounded-full bg-gray-800 blur-[140px]" />
        <div className="absolute -bottom-52 left-[-180px] h-[380px] w-[380px] sm:h-[520px] sm:w-[520px] rounded-full bg-gray-900 blur-[140px]" />
        <div className="absolute top-1/3 right-[-200px] h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] rounded-full bg-gray-900 blur-[140px]" />
      </div>

      {/* Grid Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900/70 border border-gray-700/70 rounded-full text-sm sm:text-xl lg:text-2xl font-semibold tracking-[0.18em] text-white/90">
            SERVICES
          </div>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Core services that power RMS
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-lg lg:text-xl leading-relaxed px-1 sm:px-2">
            Everything you need to run retail operations smoothly — from
            inventory accuracy to analytics, automation, and secure role-based
            workflows.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {services.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-gray-800/80 
                           bg-gradient-to-b from-gray-900/70 to-gray-950/60
                           p-6 sm:p-7 transition-all duration-300
                           hover:-translate-y-1 hover:border-gray-600/90
                           hover:shadow-[0_20px_80px_-35px_rgba(255,255,255,0.20)]"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                {/* Glow Border */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>

                {/* ✅ TOP ROW (Like Mission Card) */}
                <div className="relative flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className="shrink-0 rounded-2xl bg-gray-800/70 border border-gray-700/70 
                               p-2.5 sm:p-3
                               shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]
                               transition group-hover:bg-gray-800/90 group-hover:border-gray-600"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-200" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                {/* ✅ FULL WIDTH TEXT (Exactly Mission Style) */}
                <p className="relative mt-4 text-gray-300/90 leading-[1.85] tracking-[0.01em] text-[13px] sm:text-sm lg:text-base">
                  {item.desc}
                </p>

                {/* Divider */}
                <div className="relative mt-6 h-[2px] w-12 bg-gradient-to-r from-gray-500/60 to-transparent rounded-full" />

                {/* Corner Dot Accent */}
                <div className="absolute top-5 right-5 h-2 w-2 rounded-full bg-gray-500/40 group-hover:bg-gray-200/60 transition" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
