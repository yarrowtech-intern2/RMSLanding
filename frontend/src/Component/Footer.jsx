import React from "react";

const Footer = () => {
  const links = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Contact Us", id: "contact" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // ✅ adjust this based on your fixed header height
    const headerOffset = 88;

    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=3A%2C%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087";

  return (
    <footer className="relative w-full bg-black text-white border-t border-gray-800">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Retail Management System
            </h3>

            <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              A unified digital platform that connects all retail departments
              into one smart, automated system.
            </p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 sm:mt-6 inline-block text-gray-300 text-sm sm:text-base hover:text-white transition leading-relaxed"
            >
              📍 3A, Bertram St, Esplanade, Dharmatala,
              <br />
              Taltala, Kolkata, West Bengal 700087
              <span className="block mt-1 text-xs sm:text-sm text-gray-500">
                Open in Google Maps →
              </span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">
              {links.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="text-left text-gray-400 hover:text-white transition text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-4">
              Our Location
            </h4>

            <div className="rounded-xl overflow-hidden border border-gray-700">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=3A,Bertram,St,Esplanade,Dharmatala,Taltala,Kolkata,West,Bengal,700087&output=embed"
                loading="lazy"
                className="w-full h-[190px] sm:h-[220px] lg:h-[240px]"
              ></iframe>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-900/60 text-sm sm:text-base text-gray-200 hover:bg-gray-900 transition"
            >
              Open Map
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-gray-800 text-center">
          {/* <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} RMS. All rights reserved.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
