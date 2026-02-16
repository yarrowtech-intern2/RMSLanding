import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const FloatingContact = () => {
  const whatsappNumber = "919830590929";
  const email = "electronticeducaresales@yarrowtech.co.in";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello, I want to know more about RMS."
  )}`;

  const mailLink = `mailto:${email}?subject=${encodeURIComponent(
    "RMS Inquiry"
  )}&body=${encodeURIComponent("Hello, I want to know more about RMS.")}`;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full
                   bg-[#25D366] flex items-center justify-center
                   shadow-lg hover:scale-105 transition"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
      </a>

      {/* Gmail */}
      <a
        href={mailLink}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full
                   bg-white flex items-center justify-center
                   shadow-lg hover:scale-105 transition"
        aria-label="Send Email"
        title="Email"
      >
        <SiGmail className="text-red-600 text-2xl sm:text-3xl" />
      </a>
    </div>
  );
};

export default FloatingContact;
