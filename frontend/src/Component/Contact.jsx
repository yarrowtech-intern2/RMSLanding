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
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // ✅ Toast style (black theme)
  const toastStyle = {
    background: "rgba(10,10,11,0.98)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "14px",
    fontSize: "14px",
    color: "rgba(255,255,255,0.88)",
    boxShadow: "0 24px 64px rgba(0,0,0,0.70)",
  };

  const fireError = (msg) =>
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3200,
      theme: "dark",
      style: toastStyle,
    });

  const fireSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 3800,
      theme: "dark",
      style: toastStyle,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    const n = form.name.trim();
    const em = form.email.trim();
    const ph = form.phone.trim().replace(/\s|-/g, ""); // remove spaces & hyphen

    // ✅ Validations
    if (!n) return fireError("Full name is required.");
    if (!em) return fireError("Email address is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em))
      return fireError("Please enter a valid email.");
    if (!ph) return fireError("Mobile number is required.");
    if (!/^(\+91)?[6-9]\d{9}$/.test(ph))
      return fireError("Enter a valid Indian mobile number.");

    // ✅ IMPORTANT: Apps Script Web App works best with URLSearchParams
    const payload = new URLSearchParams({
      project: "RMS", // ✅ routes to Sheet 6 => "RMS"
      name: n,
      email: em,
      mobile: ph, // ✅ Apps Script expects mobile OR phone, we send mobile
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
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] -translate-x-1/2 rounded-full bg-gray-800 blur-[140px]" />
        <div className="absolute -bottom-52 left-[-180px] h-[380px] w-[380px] sm:h-[520px] sm:w-[520px] rounded-full bg-gray-900 blur-[140px]" />
        <div className="absolute top-1/3 right-[-200px] h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] rounded-full bg-gray-900 blur-[140px]" />
      </div>

      {/* Grid Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900/70 border border-gray-700/70 rounded-full text-[11px] sm:text-xs lg:text-sm font-semibold tracking-[0.18em] text-white/90">
            CONTACT
          </div>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Let's start a conversation
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-lg lg:text-xl leading-relaxed px-1 sm:px-2">
            Have questions about our services? Our team is here to help you find
            the right solution.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-5 sm:gap-6 lg:gap-7 items-start">
          {/* Left */}
          <div data-aos="fade-up" data-aos-delay="80">
            <div className="relative rounded-3xl border border-gray-800/80 bg-gradient-to-b from-gray-900/70 to-gray-950/60 p-6 sm:p-7 lg:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gray-900/70 border border-gray-700/70 text-xs font-semibold text-white/80">
                <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                Available Monday – Saturday
              </div>

              <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                Reach us through any of the following channels and we’ll respond
                within 24 hours.
              </p>

              <div className="mt-6 space-y-4">
                {/* Address */}
                <a
                  href={CONTACT_INFO.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-4 items-start p-4 rounded-2xl border border-gray-800/80 bg-gray-950/40 hover:bg-gray-900/40 transition"
                >
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gray-800/70 border border-gray-700/70">
                    <MapPin size={18} className="text-gray-200" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
                      Office Address
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-white/85 leading-relaxed">
                      3A, Bertram St, Esplanade,
                      <br />
                      Dharmatala, Kolkata — 700087
                    </p>

                    <p className="mt-2 text-xs text-white/70 font-semibold inline-flex items-center gap-1">
                      View on Maps <ArrowRight size={12} />
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group flex gap-4 items-start p-4 rounded-2xl border border-gray-800/80 bg-gray-950/40 hover:bg-gray-900/40 transition"
                >
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gray-800/70 border border-gray-700/70">
                    <Mail size={18} className="text-gray-200" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
                      Email
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-white/85 leading-relaxed">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.tel}`}
                  className="group flex gap-4 items-start p-4 rounded-2xl border border-gray-800/80 bg-gray-950/40 hover:bg-gray-900/40 transition"
                >
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gray-800/70 border border-gray-700/70">
                    <Phone size={18} className="text-gray-200" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
                      Phone
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-white/85 leading-relaxed">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div data-aos="fade-up" data-aos-delay="160">
            <div className="relative rounded-3xl border border-gray-800/80 bg-gradient-to-b from-gray-900/70 to-gray-950/60 p-6 sm:p-7 lg:p-10">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60">
                Send a message
              </p>

              <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                We'd love to hear from you
              </h3>

              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
                      Full Name <span className="text-white/70">*</span>
                    </label>
                    <div className="relative mt-2">
                      <User
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                      <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className="w-full rounded-2xl border border-gray-800/80 bg-gray-950/40 px-11 py-3 text-white placeholder:text-white/25 outline-none focus:border-gray-600 focus:ring-4 focus:ring-white/5"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
                      Email <span className="text-white/70">*</span>
                    </label>
                    <div className="relative mt-2">
                      <Mail
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="Enter mail id"
                        className="w-full rounded-2xl border border-gray-800/80 bg-gray-950/40 px-11 py-3 text-white placeholder:text-white/25 outline-none focus:border-gray-600 focus:ring-4 focus:ring-white/5"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
                    Mobile Number <span className="text-white/70">*</span>
                  </label>
                  <div className="relative mt-2">
                    <Phone
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                    />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="Enter Mobile no"
                      className="w-full rounded-2xl border border-gray-800/80 bg-gray-950/40 px-11 py-3 text-white placeholder:text-white/25 outline-none focus:border-gray-600 focus:ring-4 focus:ring-white/5"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={13}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60">
                    Message{" "}
                    <span className="text-white/35 font-normal normal-case tracking-normal text-[11px]">
                      — optional
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className="mt-2 w-full rounded-2xl border border-gray-800/80 bg-gray-950/40 px-4 py-3 text-white placeholder:text-white/25 outline-none focus:border-gray-600 focus:ring-4 focus:ring-white/5 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-2xl bg-white text-black font-semibold py-3.5 flex items-center justify-center gap-2 hover:bg-white/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
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
        theme="dark"
      />
    </section>
  );
};

export default Contact;
