import React, { useEffect, useMemo, useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const Header = () => {
  const navItems = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "Services", id: "services" },
      { label: "About", id: "about" },
      { label: "FAQ", id: "faq" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  const [activeId, setActiveId] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerOffset = 88;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Close mobile menu on scroll (Reliable method)
  useEffect(() => {
    if (!mobileOpen) return;

    const handleScrollClose = () => {
      setMobileOpen(false);
    };

    window.addEventListener("scroll", handleScrollClose, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [mobileOpen]);

  useEffect(() => {
    const handleSpy = () => {
      const scrollPos = window.scrollY + headerOffset + 100;
      let current = "home";
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && scrollPos >= section.offsetTop) {
          current = item.id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleSpy);
  }, [navItems]);

  return (
    <header className="fixed top-4 sm:top-6 left-0 z-50 w-full pointer-events-none">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-12 flex items-center justify-between relative">
        
        {/* Logo (Left Corner - Baire) */}
        <div className="pointer-events-auto">
          <button
            onClick={() => scrollToId("home")}
            className="text-3xl min-[1700px]:text-2xl font-black tracking-tighter flex items-center gap-1 group"
          >
            <span className="text-[#1A1A1A] transition-transform group-hover:scale-110">RMS</span>
          </button>
        </div>

        {/* Navigation Pill (Centered Glass Effect) */}
        <div 
          className={`hidden lg:flex pointer-events-auto absolute left-1/2 -translate-x-1/2 items-center px-2 transition-all duration-300 ${
            isScrolled
              ? "bg-white/70 backdrop-blur-xl shadow-2xl py-2"
              : "bg-white/40 backdrop-blur-md py-3"
          } rounded-full border border-white/20`}
        >
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className={`relative px-4 py-2 text-sm min-[1700px]:text-[12px] font-bold transition-all ${
                    isActive ? "text-[#FF764D]" : "text-gray-700 hover:text-[#FF764D]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-0.5 h-[3.5px] w-4 bg-[#FF764D] rounded-full -translate-x-1/2" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Actions / Toggle */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="lg:hidden p-2 text-gray-900 bg-white/40 backdrop-blur-md rounded-xl border border-white/20"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden pointer-events-auto transition-all duration-500 ease-in-out overflow-hidden mx-4 mt-3 rounded-[2.5rem] bg-white/80 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/40 ${
          mobileOpen ? "max-h-[500px] opacity-100 py-8" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-10 flex flex-col gap-6">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={`text-left text-xl font-bold py-1 transition-all duration-300 ${
                activeId === item.id 
                  ? "text-[#FF764D] translate-x-2" 
                  : "text-gray-700 hover:text-[#FF764D] hover:translate-x-1"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={() => scrollToId('contact')}
            className="mt-4 w-full bg-[#FF764D] text-white font-black py-4 rounded-2xl shadow-lg shadow-orange-100 active:scale-95 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;




