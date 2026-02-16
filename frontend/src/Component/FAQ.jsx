import React, { useEffect, useMemo, useState, useId } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const uid = useId();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const faqs = useMemo(
    () => [
      {
        q: "What is RMS?",
        a: "RMS (Retail Management System) is an operational platform that manages inventory, transactions, approvals, and analytics in one place, with role-based access for different teams.",
      },
      {
        q: "Which roles are supported in RMS?",
        a: "RMS supports role-based access such as Admin, Merchandiser (Buyer & Seller), HR, Pattern, Finance, Inventory, Stock, Barcode, and Logistics. Each role gets a controlled dashboard and permissions.",
      },
      {
        q: "Does RMS support multi-branch operations?",
        a: "Yes. RMS is designed to handle multiple branches with centralized monitoring, branch-wise reporting, and controlled permissions per location.",
      },
      {
        q: "Can RMS track inventory and stock movement?",
        a: "Yes. RMS provides real-time tracking of inventory levels, stock transfers, inward and outward movements, and transaction-based updates. This ensures accurate stock visibility, reduces manual errors, prevents stock discrepancies, and helps businesses maintain optimal inventory control across all branches.",
      },
      {
        q: "Does RMS include analytics and reports?",
        a: "Yes. RMS includes dashboards and reporting for sales, stock health, performance trends, plan vs actual, and operational visibility.",
      },
      {
        q: "Is RMS secure?",
        a: "RMS uses role-based access control, controlled data visibility, and structured logs to support audit-friendly operations and permission-based workflows.",
      },
    ],
    []
  );

  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <section
      id="faq"
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] -translate-x-1/2 rounded-full bg-gray-800 blur-[140px]" />
        <div className="absolute -bottom-52 left-[-180px] h-[380px] w-[380px] sm:h-[520px] sm:w-[520px] rounded-full bg-gray-900 blur-[140px]" />
        <div className="absolute top-1/3 right-[-220px] h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] rounded-full bg-gray-900 blur-[140px]" />
      </div>

      {/* subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900/70 border border-gray-700/70 rounded-full text-sm sm:text-xl lg:text-2xl font-semibold tracking-[0.18em] text-white/90">
            FAQ
          </div>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-lg lg:text-xl leading-relaxed px-1 sm:px-2">
            Quick answers about RMS, permissions, operations, and capabilities.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-10 sm:mt-12 lg:mt-14 space-y-4 sm:space-y-5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `${uid}-faq-panel-${idx}`;
            const buttonId = `${uid}-faq-btn-${idx}`;

            return (
              <div
                key={item.q}
                className="group relative rounded-2xl border border-gray-800/80 bg-gray-900/55 transition
                           hover:bg-gray-900/75 hover:border-gray-700/90
                           hover:-translate-y-0.5 hover:shadow-[0_18px_60px_-25px_rgba(255,255,255,0.18)]"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                {/* border shine */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>

                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="relative w-full flex items-center justify-between gap-4
                             px-4 sm:px-6 lg:px-7
                             py-4 sm:py-5 lg:py-6
                             text-left outline-none rounded-2xl
                             focus-visible:ring-2 focus-visible:ring-gray-500/60
                             focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-white leading-snug">
                    {item.q}
                  </span>

                  <span
                    className="shrink-0 rounded-xl bg-gray-800/65 border border-gray-700/70
                               p-2 sm:p-2.5
                               transition group-hover:bg-gray-800/80 group-hover:border-gray-600"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-100" />
                    ) : (
                      <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-100" />
                    )}
                  </span>
                </button>

                {/* Animated Answer */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`relative grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-4 sm:px-6 lg:px-7 pb-4 sm:pb-5 lg:pb-6
                                  text-sm sm:text-base lg:text-lg
                                  text-gray-400 leading-relaxed transition-all duration-300 ${
                                    isOpen ? "translate-y-0" : "-translate-y-1"
                                  }`}
                    >
                      {item.a}
                    </div>
                  </div>
                </div>

                {/* divider (not on last) */}
                {idx !== faqs.length - 1 && (
                  <div className="h-px w-full bg-gray-800/60" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
