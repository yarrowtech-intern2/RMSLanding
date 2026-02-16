import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setStatus({ type: "", msg: "" });
  };

  // ✅ demo submit (later connect backend / emailjs)
  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: "Please fill all required fields." });
      return;
    }

    try {
      setSending(true);

      // ✅ Here you will call backend / EmailJS later
      // For now we simulate real sending
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatus({
        type: "success",
        msg: "Message sent successfully! We will contact you soon.",
      });

      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=3A%2C%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087";

  return (
    <section
      id="contact"
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] -translate-x-1/2 rounded-full bg-gray-800 blur-[120px]" />
        <div className="absolute -bottom-48 right-[-140px] h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full bg-gray-900 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div
            className="inline-flex items-center justify-center
                       px-6 sm:px-8 lg:px-10
                       py-2.5 sm:py-3
                       bg-gray-800/80 border border-gray-600
                       rounded-full
                       text-base sm:text-xl lg:text-2xl
                       font-semibold tracking-wide
                       text-white"
          >
            CONTACT US
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="120">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Office
              </h3>

              <div className="mt-5 sm:mt-6 space-y-5 text-sm sm:text-base lg:text-lg text-gray-300">
                {/* Address */}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 hover:text-white transition"
                >
                  <span className="mt-0.5 rounded-xl bg-gray-800/70 border border-gray-700 p-2 sm:p-2.5">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200" />
                  </span>

                  <span className="leading-relaxed">
                    3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West
                    Bengal 700087
                    <span className="block text-xs sm:text-sm text-gray-500 mt-1">
                      Open in Google Maps →
                    </span>
                  </span>
                </a>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-gray-800/70 border border-gray-700 p-2 sm:p-2.5">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200" />
                  </span>
                  <span className="text-gray-400 break-all">
                    support@rms.com
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-gray-800/70 border border-gray-700 p-2 sm:p-2.5">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200" />
                  </span>
                  <span className="text-gray-400">+91 00000 00000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl border border-gray-800 bg-gray-900/60 
                       p-5 sm:p-8 lg:p-10"
            data-aos="fade-up"
            data-aos-delay="220"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Send a message
            </h3>

            {/* ✅ Status Message (No alert) */}
            {status.msg && (
              <div
                className={`mt-5 rounded-xl border px-4 py-3 text-sm sm:text-base ${
                  status.type === "success"
                    ? "border-green-700 bg-green-900/20 text-green-200"
                    : "border-red-700 bg-red-900/20 text-red-200"
                }`}
              >
                {status.msg}
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-5 sm:mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Full Name"
                  className="w-full rounded-xl bg-black/40 border border-gray-700 px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-gray-500/60"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="Email"
                  className="w-full rounded-xl bg-black/40 border border-gray-700 px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-gray-500/60"
                />
              </div>

              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="Phone (optional)"
                className="w-full rounded-xl bg-black/40 border border-gray-700 px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-gray-500/60"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                placeholder="Your message..."
                className="w-full rounded-xl bg-black/40 border border-gray-700 px-4 py-3 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-gray-500/60 resize-none"
              />

              <button
                type="submit"
                disabled={sending}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl
                           bg-white text-black font-semibold
                           px-5 py-3 sm:py-3.5
                           text-sm sm:text-base
                           transition ${
                             sending
                               ? "opacity-60 cursor-not-allowed"
                               : "hover:bg-gray-200"
                           }`}
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                {sending ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
