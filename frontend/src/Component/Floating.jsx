import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Phone, X, ArrowUp } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const whatsappNumber = "919830590929";
  const email = "electronticeducaresales@yarrowtech.co.in";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello, I want to know more about RMS."
  )}`;

  const mailLink = `mailto:${email}?subject=${encodeURIComponent(
    "RMS Inquiry"
  )}&body=${encodeURIComponent("Hello, I want to know more about RMS.")}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col-reverse items-center gap-3">
      
      {/* 1. Main Contact Toggle Button (Bottom) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 sm:w-16 sm:h-16 min-[1700px]:w-12 min-[1700px]:h-12 rounded-full 
                   flex items-center justify-center shadow-2xl transition-all duration-500 z-50
                   ${isOpen ? "bg-gray-900 text-white rotate-90" : "bg-[#FF764D] text-white hover:scale-105"}`}
      >
        {isOpen ? <X size={28} className="min-[1700px]:w-5" /> : <Phone size={28} className="min-[1700px]:w-5" />}
      </button>

      {/* 2. Flexible Action Buttons Container (Pushes the Arrow up) */}
      <div 
        className={`flex flex-col-reverse items-center gap-3 transition-all duration-500 ease-in-out origin-bottom
                   ${isOpen ? "opacity-100 max-h-[300px] mb-0" : "opacity-0 max-h-0 mb-[-12px] pointer-events-none"}`}
      >
        
        {/* Gmail */}
        <a
          href={mailLink}
          className="w-12 h-12 sm:w-14 sm:h-14 min-[1700px]:w-10 min-[1700px]:h-10 rounded-full
                     bg-white flex items-center justify-center
                     shadow-xl hover:scale-110 transition-all duration-300 group relative border border-gray-100"
          aria-label="Send Email"
        >
          <SiGmail className="text-[#EA4335] text-2xl sm:text-3xl min-[1700px]:text-lg" />
          <span className="absolute right-full mr-4 px-3 py-1 bg-white text-[#1A1A1A] text-sm font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Email Us
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 min-[1700px]:w-10 min-[1700px]:h-10 rounded-full
                     bg-[#25D366] flex items-center justify-center
                     shadow-xl hover:scale-110 transition-all duration-300 group relative"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-2xl sm:text-3xl min-[1700px]:text-lg" />
          <span className="absolute right-full mr-4 px-3 py-1 bg-white text-[#1A1A1A] text-sm font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp
          </span>
        </a>

      </div>

      {/* 3. Scroll to Top (Tir Icon) - Smoothly moves up/down */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 sm:w-14 sm:h-14 min-[1700px]:w-11 min-[1700px]:h-11 rounded-full 
                   bg-white border border-gray-100 text-[#1A1A1A] flex items-center justify-center 
                   shadow-2xl transition-all duration-500 hover:-translate-y-1 transform z-40
                   ${showScroll ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={28} strokeWidth={3} className="min-[1700px]:w-5" />
      </button>
    </div>
  );
};

export default FloatingContact;
