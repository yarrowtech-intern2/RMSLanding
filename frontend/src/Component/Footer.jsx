import React from "react";
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About Us", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Contact Us", id: "contact" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 88;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=3A%2C%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087";

  return (
    <footer className="relative w-full bg-blue-100 border-t border-gray-50 pt-24 pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-black tracking-tight flex items-center gap-1 mb-6">
              <span className="text-[#1A1A1A]">RMS</span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Connecting all retail departments into one unified digital ecosystem for seamless automated operations.
            </p>
            <div className="flex items-center gap-4">
               {[Instagram, Twitter, Facebook].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-orange-50 hover:text-[#FF764D] transition-all">
                    <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-8">Quick Navigation</h4>
            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className="text-left text-gray-500 hover:text-[#FF764D] font-bold transition-all flex items-center gap-2 group"
                >
                  <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-8">Get in Touch</h4>
            <div className="space-y-6">
                 <a 
                   href={mapUrl} 
                   target="_blank" 
                   rel="noreferrer" 
                   className="flex items-start gap-4 group cursor-pointer"
                 >
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-[#FF764D] shrink-0 transition-transform group-hover:scale-110">
                      <MapPin size={18} strokeWidth={2.5} />
                    </div>
                    <p className="text-gray-500 font-bold leading-snug group-hover:text-[#FF764D] transition-colors">
                      3A, Bertram St, Esplanade, Dharmatala, Kolkata — 700087
                    </p>
                 </a>

                 <a href="mailto:info@rmssystem.com" className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 transition-transform group-hover:scale-110">
                      <Mail size={18} strokeWidth={2.5} />
                    </div>
                    <p className="text-gray-500 font-bold group-hover:text-blue-500 transition-colors">info@rmssystem.com</p>
                 </a>

                 <a href="tel:+919830590929" className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 transition-transform group-hover:scale-110">
                      <Phone size={18} strokeWidth={2.5} />
                    </div>
                    <p className="text-gray-500 font-bold group-hover:text-blue-500 transition-colors">+91 98305 90929</p>
                 </a>
               </div>
          </div>

          {/* Map Section */}
          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-8">Our Location</h4>
            <div className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm relative group">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=3A,Bertram,St,Esplanade,Dharmatala,Taltala,Kolkata,West,Bengal,700087&output=embed"
                loading="lazy"
                className="w-full h-[180px] grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all"
              >
                <div className="bg-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  View Full Map
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 font-bold order-2 md:order-1">
            © {new Date().getFullYear()} RMS System. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 order-1 md:order-2">
             <a href="#" className="text-gray-400 hover:text-[#1A1A1A] font-bold text-sm">Privacy Policy</a>
             <a href="#" className="text-gray-400 hover:text-[#1A1A1A] font-bold text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

