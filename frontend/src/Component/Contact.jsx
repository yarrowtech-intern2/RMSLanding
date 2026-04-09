import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MapPin, Mail, Phone, Send, User, ArrowRight } from "lucide-react";

const Contact = () => {
  const CONTACT_INFO = {
    address: "3A, Bertram St, Esplanade, Dharmatala, Kolkata — 700087",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=3A%2C%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087",
    email: "info@yourcompany.com",
    phone: "+91 9830590929",
    tel: "+919830590929",
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // ✅ Toast style (Light premium theme)
  const toastStyle = {
    background: "#ffffff",
    border: "1px solid #f0f0f0",
    borderRadius: "1.5rem",
    fontSize: "14px",
    color: "#1A1A1A",
    boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
    fontWeight: "600",
  };

  const fireError = (msg) =>
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3200,
      style: toastStyle,
    });

  const fireSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 3800,
      style: toastStyle,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    const n = form.name.trim();
    const em = form.email.trim();
    const ph = form.phone.trim().replace(/\s|-/g, "");

    if (!n) return fireError("Full name is required.");
    if (!em) return fireError("Email address is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em))
      return fireError("Please enter a valid email.");
    if (!ph) return fireError("Mobile number is required.");
    if (!/^(\+91)?[6-9]\d{9}$/.test(ph))
      return fireError("Enter a valid Indian mobile number.");

    const payload = new URLSearchParams({
      project: "RMS",
      name: n,
      email: em,
      mobile: ph,
      message: (form.message || "").trim(),
    });

    try {
      setSending(true);
      const res = await fetch(import.meta.env.VITE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      const out = await res.json().catch(() => null);

      if (!res.ok || !out?.ok) {
        return fireError(out?.error || "Failed to submit. Please try again.");
      }

      fireSuccess("Message sent! Our team will reach out soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      fireError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-blue-100 py-24 overflow-hidden"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] left-[1/2] -translate-x-1/2 w-[60%] h-[50%] bg-blue-400/5 blur-[150px] rounded-full" />
        <div className="absolute -top-[10%] right-[0] w-[30%] h-[40%] bg-orange-200/10 blur-[100px] rounded-full animate-float" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl min-[1700px]:max-w-5xl px-4 sm:px-6 lg:px-8">
        
     {/* Header */}
<div className="text-center max-w-3xl mx-auto mb-16 px-4" data-aos="fade-up">
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-white shadow-sm mb-6 animate-fade-in">
    <span className="flex h-2 w-2 rounded-full bg-[#FF764D] animate-pulse" />
    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1A1A1A]">
      CONTACT US
    </span>
  </div>

  <h2 className="text-3xl sm:text-5xl min-[1700px]:text-[2.2rem] font-extrabold text-[#1A1A1A] tracking-tight mb-6 min-[1700px]:mb-3">
    Let's start a <br className="hidden lg:block" />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF764D] to-orange-400">
      conversation
    </span>
  </h2>

  <p className="text-gray-500 text-lg sm:text-xl min-[1700px]:text-[12px] leading-relaxed font-medium">
    Have questions about RMS System or want to schedule a demo?
    Drop us a message and our team will get back to you shortly.
  </p>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 items-start">
          
          {/* Left Info */}
          <div data-aos="fade-right">
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gray-50/50 border border-gray-100">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white border border-gray-100 text-sm font-bold text-[#1A1A1A] shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[#FF764D] animate-pulse" />
                Available Monday – Saturday
              </div>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group flex gap-5 items-center p-6 rounded-[2rem] bg-white border border-transparent shadow-sm hover:shadow-xl hover:border-orange-100 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-500 transition-transform group-hover:scale-110">
                    <Mail size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                    <p className="text-lg font-bold text-[#1A1A1A]">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.tel}`}
                  className="group flex gap-5 items-center p-6 rounded-[2rem] bg-white border border-transparent shadow-sm hover:shadow-xl hover:border-orange-100 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-500 transition-transform group-hover:scale-110">
                    <Phone size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                    <p className="text-lg font-bold text-[#1A1A1A]">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={CONTACT_INFO.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-5 items-start p-6 rounded-[2rem] bg-white border border-transparent shadow-sm hover:shadow-xl hover:border-orange-100 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-orange-50 text-[#FF764D] shrink-0 transition-transform group-hover:scale-110">
                    <MapPin size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Visit Us</p>
                    <p className="text-lg font-bold text-[#1A1A1A] leading-tight">
                      3A, Bertram St, Esplanade, Kolkata — 700087
                    </p>
                    <p className="mt-2 text-sm text-[#FF764D] font-bold flex items-center gap-1">
                      Open in Maps <ArrowRight size={14} />
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div data-aos="fade-left">
            <div className="p-8 sm:p-12 rounded-[3rem] bg-white border border-gray-100 shadow-2xl shadow-gray-100">
               <h3 className="text-2xl sm:text-3xl min-[1700px]:text-[18px] font-bold text-[#1A1A1A] tracking-tight mb-8 min-[1700px]:mb-4">
                We'd love to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF764D] to-orange-400">hear from you</span>
              </h3>

              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A1A] ml-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder="Your name"
                        className="w-full bg-gray-50 border border-transparent rounded-[1.25rem] px-14 py-4 text-[#1A1A1A] font-medium outline-none focus:bg-white focus:border-[#FF764D] focus:ring-4 focus:ring-orange-50 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A1A] ml-1">
                      Email ID <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="mail@example.com"
                        className="w-full bg-gray-50 border border-transparent rounded-[1.25rem] px-14 py-4 text-[#1A1A1A] font-medium outline-none focus:bg-white focus:border-[#FF764D] focus:ring-4 focus:ring-orange-50 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A1A] ml-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="Enter mobile number"
                      className="w-full bg-gray-50 border border-transparent rounded-[1.25rem] px-14 py-4 text-[#1A1A1A] font-medium outline-none focus:bg-white focus:border-[#FF764D] focus:ring-4 focus:ring-orange-50 transition-all placeholder:text-gray-400"
                      type="tel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A1A] ml-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-gray-50 border border-transparent rounded-[1.25rem] px-6 py-4 text-[#1A1A1A] font-medium outline-none focus:bg-white focus:border-[#FF764D] focus:ring-4 focus:ring-orange-50 transition-all placeholder:text-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#FF764D] text-white font-black py-5 rounded-[1.25rem] shadow-lg shadow-orange-100 flex items-center justify-center gap-3 hover:bg-[#e66a45] transition-all transform hover:-translate-y-1 disabled:opacity-70"
                >
                  {sending ? (
                     <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} strokeWidth={3} />
                      <span className="text-lg">Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        limit={3}
      />
    </section>
  );
};

export default Contact;

