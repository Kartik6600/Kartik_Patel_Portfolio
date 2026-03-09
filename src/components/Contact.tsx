import { motion } from "motion/react";
import React, { useState } from "react";
import { Send, CheckCircle, MessageSquare, Mail, MapPin, Phone } from "lucide-react";
import resumeData from "../data/resume.json";
import { cn } from "../lib/utils";

export default function Contact() {
  const { email, phone, location } = resumeData.basics;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7524c4eb-59c6-4664-8b04-e876d14021c1",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact from ${formData.name} on Portfolio`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Error submitting form", result);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 px-6 text-zinc-50 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-4 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-semibold text-zinc-100">Let's talk.</h3>
              <p className="text-zinc-400 leading-relaxed">
                I'm currently open to work Have a oppurtunity to discuss with me.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Email</span>
                  <a href={`mailto:${email}`} className="text-zinc-200 hover:text-indigo-400 transition-colors text-lg">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Phone</span>
                  <a href={`tel:${phone}`} className="text-zinc-200 hover:text-indigo-400 transition-colors text-lg">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Location</span>
                  <span className="text-zinc-200 text-lg">{location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-400 mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">Message Sent!</h3>
                <p className="text-zinc-400 max-w-sm">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex items-center justify-center gap-2 w-full py-4 mt-2 font-semibold text-zinc-950 bg-zinc-100 rounded-xl hover:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10 flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-violet-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
