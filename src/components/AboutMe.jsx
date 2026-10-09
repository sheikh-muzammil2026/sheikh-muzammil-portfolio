"use client";
import React from "react";
import { Code, Rocket, ShieldCheck, Database, Zap } from "lucide-react";

const aboutCards = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web apps with Next.js, React, Node.js, Express, and modern MERN architecture.",
  },
  {
    icon: Rocket,
    title: "Performance & Modern UI",
    description: "Focusing on blazing fast page loads, clean code structure, and intuitive user experiences with Tailwind CSS.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description: "Implementing production-grade authentication with Better-Auth, NextAuth, and JWT with security-first mindset.",
  },
  {
    icon: Database,
    title: "Data & Systems Engineering",
    description: "Managing databases with MongoDB Aggregation, RESTful APIs, and traditional LAMP stack integrations.",
  }
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 md:px-10 max-w-6xl mx-auto overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Who <span className="text-purple-400">I Am</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A dedicated Full Stack Developer specializing in MERN Stack and Next.js, crafting modern digital solutions with high security and exceptional performance.
        </p>
      </div>

      {/* Grid Layout - 4 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {aboutCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.2)] overflow-hidden"
            >
              {/* Icon Container */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all duration-500 shadow-inner">
                  <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 space-y-3 mb-12">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Sliding Border & Rising Ping Particle */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800">
                <div className="absolute bottom-0 left-0 w-full h-full bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
                <div className="absolute -bottom-1 left-0 w-2.5 h-2.5 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all"></div>
                <div className="absolute -top-1 left-0 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc] transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-700 ease-out"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Story & Fast Facts Detailed Card */}
      <div 
        className="p-8 md:p-10 rounded-3xl backdrop-blur-2xl relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
          border: "2px solid transparent",
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7, #ec4899)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          boxShadow: "0 0 35px rgba(6, 182, 212, 0.12), inset 0 0 20px rgba(168, 85, 247, 0.08)"
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="text-cyan-400" size={24} /> My Journey & Technical Philosophy
            </h3>
            <p>
              My programming journey started with pure curiosity about how web applications operate under the hood. What began as experimenting with code has evolved into a dedicated focus on building full-stack applications with modern web technologies.
            </p>
            <p>
              I specialize in engineering responsive, fast, and scalable web solutions using the <strong className="text-white">MERN Stack (MongoDB, Express, React, Node.js)</strong> and <strong className="text-white">Next.js</strong>. I place strong emphasis on clean code architecture, intuitive UI/UX with Tailwind CSS, and implementing secure workflows using authentication tools like <strong className="text-cyan-400">Better-Auth</strong> and JWT.
            </p>
            <p>
              Alongside modern JavaScript frameworks, I also have foundational experience working with backend databases and traditional technologies like the <span className="text-purple-300">LAMP Stack (PHP/MySQL)</span>. I am continuously expanding my knowledge in cybersecurity best practices to ensure every application is resilient and production-ready.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <span>⚡</span> Fast Facts & Quick Details
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                <span className="text-slate-400">Primary Focus</span>
                <span className="text-white font-semibold">MERN & Next.js</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                <span className="text-slate-400">Authentication</span>
                <span className="text-cyan-400 font-semibold">Better-Auth / NextAuth</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                <span className="text-slate-400">Secondary Tech</span>
                <span className="text-purple-300 font-semibold">LAMP Stack (PHP/MySQL)</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                <span className="text-slate-400">Core Mindset</span>
                <span className="text-white font-semibold">Security & Performance</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Location</span>
                <span className="text-white font-semibold">Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
