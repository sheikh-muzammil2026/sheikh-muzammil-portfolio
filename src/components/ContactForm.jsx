"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending message...");
    const formData = new FormData(event.currentTarget);

    // Using Web3Forms public API submission
    formData.append("access_key", "2cf252d2-d17f-4e54-a68e-1498a0068c9e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        setResult(data.message || "Failed to send message. Please email directly.");
      }
    } catch (err) {
      setResult("Network error. Please email directly to discordsstudent@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Have a project in mind, need a full-stack engineer, or want to discuss institutional infrastructure? Send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-3">
            <Mail size={18} />
          </div>
          <span className="text-xs text-slate-400">Email Me</span>
          <a href="mailto:discordsstudent@gmail.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors mt-1">
            discordsstudent@gmail.com
          </a>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3">
            <Phone size={18} />
          </div>
          <span className="text-xs text-slate-400">Call / WhatsApp</span>
          <a href="tel:+8801836376174" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors mt-1">
            +880 1836-376174
          </a>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-3">
            <MapPin size={18} />
          </div>
          <span className="text-xs text-slate-400">Location</span>
          <span className="text-sm font-semibold text-white mt-1">
            Bangladesh
          </span>
        </div>
      </div>

      <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800/80 backdrop-blur-md shadow-2xl">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Sheikh"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project, timelines, or collaboration ideas..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-purple-500 hover:bg-purple-600 text-slate-950 font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Send size={16} /> {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        
        {result && (
          <div className="mt-4 text-center text-sm font-medium text-purple-400">
            {result}
          </div>
        )}
      </div>
    </section>
  );
}
