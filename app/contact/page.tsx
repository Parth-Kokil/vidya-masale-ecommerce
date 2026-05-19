"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <div className="brand-container py-12">
        <h1 className="text-4xl font-playfair font-bold mb-12 text-brand-maroon text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-6 text-brand-maroon">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-maroon"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-maroon"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-maroon"
              />
              <button
                type="submit"
                className="w-full bg-brand-maroon text-white py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-maroon transition"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 font-semibold">
                  ✓ Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-6 text-brand-maroon">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-brand-maroon mb-2">
                  📍 Address
                </h3>
                <p className="text-gray-700">
                  Rajbhawan, Sangam-Mahuli, Satara, Maharashtra
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-maroon mb-2">
                  📞 Phone
                </h3>
                <p className="text-gray-700">9923396090</p>
                <p className="text-gray-700">9370030956</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-maroon mb-2">
                  📧 Email
                </h3>
                <p className="text-gray-700">vidyasanskrutimasale@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-maroon mb-2">
                  📱 WhatsApp
                </h3>
                <a
                  href="https://wa.me/919923396090"
                  className="text-brand-gold hover:text-brand-maroon font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
