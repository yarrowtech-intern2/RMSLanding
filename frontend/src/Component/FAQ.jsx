import React, { useMemo, useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = useMemo(
    () => [
      {
        q: "What is RMS System?",
        a: "RMS (Retail Management System) is an operational platform that manages inventory, transactions, approvals, and analytics in one place with role-based access for different teams.",
      },
      {
        q: "Which roles are supported in RMS?",
        a: "RMS supports Admin, Merchandiser, HR, Pattern, Finance, Inventory, Stock, Barcode, and Logistics roles. Each role has a controlled dashboard with relevant permissions.",
      },
      {
        q: "Does RMS support multi-branch operations?",
        a: "Yes. RMS is designed to handle multiple branches with centralized monitoring, branch-wise reporting, and controlled permissions per location.",
      },
      {
        q: "Can RMS track inventory and stock movement?",
        a: "Yes. RMS provides real-time tracking of inventory levels, stock transfers, inward and outward movements, and transaction-based updates for accurate stock visibility.",
      },
      {
        q: "Does RMS include analytics and reports?",
        a: "Yes. RMS includes dashboards and reports for sales insights, stock health, operational performance, and business analytics.",
      },
    ],
    []
  );

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-blue-100 py-8 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-orange-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl min-[1700px]:max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-10"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-white shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#FF764D] animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A1A1A]">
              GOT QUESTIONS?
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl min-[1700px]:text-[2.2rem] font-extrabold text-[#1A1A1A] tracking-tight mb-6 min-[1700px]:mb-3">
            Frequently Asked <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF764D] to-orange-400">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={idx * 120}
                className={`group rounded-[2rem] border transition-all duration-300 bg-white ${
                  isOpen
                    ? "border-orange-200 shadow-xl shadow-orange-100/30"
                    : "border-gray-100 hover:border-orange-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 sm:px-10 py-6 sm:py-8 text-left"
                >
                  <span
                    className={`text-lg sm:text-xl min-[1700px]:text-[13px] font-bold transition-colors ${
                      isOpen
                        ? "text-[#FF764D]"
                        : "text-[#1A1A1A] group-hover:text-[#FF764D]"
                    }`}
                  >
                    {item.q}
                  </span>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-[#FF764D] text-white rotate-180"
                        : "bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-[#FF764D]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={20} strokeWidth={3} />
                    ) : (
                      <Plus size={20} strokeWidth={3} />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[500px] pb-6 sm:pb-8 px-6 sm:px-10" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 text-lg min-[1700px]:text-[12px] leading-relaxed border-t border-orange-50 pt-6 min-[1700px]:pt-3">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default FAQ;