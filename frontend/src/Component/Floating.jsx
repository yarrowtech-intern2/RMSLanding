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
                   flex items-center justify-center shadow-2xl transition-all duration-300 z-50
                   ${isOpen ? "bg-gray-900 text-white rotate-90" : "bg-[#FF764D] text-white hover:scale-105"}`}
      >
        {isOpen ? <X size={28} className="min-[1700px]:w-5" /> : <Phone size={28} className="min-[1700px]:w-5" />}
      </button>

      {/* 2. Scroll to Top (Tir Icon) - Stays directly above the Phone button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 sm:w-14 sm:h-14 min-[1700px]:w-11 min-[1700px]:h-11 rounded-full 
                   bg-white border border-gray-100 text-[#1A1A1A] flex items-center justify-center 
                   shadow-2xl transition-all duration-500 hover:-translate-y-1 transform z-40
                   ${showScroll ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={28} strokeWidth={3} className="min-[1700px]:w-5" />
      </button>

      {/* 3. Action Buttons (Slide out ABOVE the arrow) */}
      <div className="flex flex-col-reverse items-center gap-3">
        
        {/* Gmail */}
        <a
          href={mailLink}
          className={`w-12 h-12 sm:w-14 sm:h-14 min-[1700px]:w-10 min-[1700px]:h-10 rounded-full
                     bg-white flex items-center justify-center
                     shadow-xl hover:scale-110 transition-all duration-500 group relative border border-gray-100
                     ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"}`}
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
          className={`w-12 h-12 sm:w-14 sm:h-14 min-[1700px]:w-10 min-[1700px]:h-10 rounded-full
                     bg-[#25D366] flex items-center justify-center
                     shadow-xl hover:scale-110 transition-all duration-500 group relative
                     ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"}`}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-2xl sm:text-3xl min-[1700px]:text-lg" />
          <span className="absolute right-full mr-4 px-3 py-1 bg-white text-[#1A1A1A] text-sm font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp
          </span>
        </a>

      </div>
    </div>
  );
};

export default FloatingContact;
