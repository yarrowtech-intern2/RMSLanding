import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

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

  const headerOffset = 80;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMobileOpen(false);
  };

  // Header blur on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Scroll Spy (100% stable)
  useEffect(() => {
    const handleSpy = () => {
      const scrollPos = window.scrollY + headerOffset + 120;

      let current = "home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          current = item.id;
          break;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleSpy, { passive: true });
    handleSpy();

    return () => window.removeEventListener("scroll", handleSpy);
  }, [navItems]);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition ${
        isScrolled
          ? "border-gray-800 bg-black/70 backdrop-blur-xl"
          : "border-transparent bg-black"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* ✅ Logo (Only RMS with border) */}
        <button
          type="button"
          onClick={() => scrollToId("home")}
          className="inline-flex items-center justify-center
                     px-5 py-2 rounded-full
                     border border-gray-800 bg-gray-900/60
                     text-white font-bold tracking-widest
                     hover:bg-gray-900 transition"
        >
          RMS
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className={`relative px-3 py-2 rounded-full text-sm font-medium transition ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}

                {/* Active Pointer */}
                <span
                  className={`absolute left-1/2 -bottom-1 h-[3px] w-7 -translate-x-1/2 rounded-full transition ${
                    isActive ? "bg-white" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center
                     rounded-xl border border-gray-800 bg-gray-900/60
                     w-11 h-11
                     text-gray-200 hover:bg-gray-900 transition"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-4">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToId(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-black"
                        : "text-gray-300 hover:bg-gray-800/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



