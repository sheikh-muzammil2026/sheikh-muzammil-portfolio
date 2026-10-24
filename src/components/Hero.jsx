"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  User,
  Briefcase,
  Code,
  Layers,
  Mail,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Cpu,
  Globe,
  Server,
  MessageCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

// Auto-counter hook
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

const roles = [
  "Full-Stack Developer",
  "Next.js & React Specialist",
  "MERN Stack Developer",
  "Backend & Systems Engineer",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const expCount = useCounter(2);
  const projectCount = useCounter(10);
  const clientCount = useCounter(5);
  const techCount = useCounter(15);

  return (
    <div
      id="dashboard"
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col pt-24 px-4 md:px-10"
    >
      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto w-full my-6">
        {/* Left Dashboard Sidebar (Desktop only) */}
        <div
          className="hidden lg:flex w-64 p-6 rounded-3xl backdrop-blur-xl flex-col justify-between shrink-0 h-fit"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7, #ec4899)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            boxShadow:
              "0 0 35px rgba(6, 182, 212, 0.12), inset 0 0 20px rgba(168, 85, 247, 0.08)",
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold border border-cyan-500/30">
                SM
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Sheikh Muzammil
                </h3>
                <span className="text-[10px] text-cyan-400 font-medium">
                  Full-Stack Engineer
                </span>
              </div>
            </div>

            <nav className="space-y-2">
              <a
                href="#dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20"
              >
                <LayoutDashboard size={18} /> Dashboard
              </a>
              <a
                href="#about"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium"
              >
                <User size={18} /> About Me
              </a>
              <a
                href="#skills"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium"
              >
                <Code size={18} /> Skills
              </a>

              {/* Skills Dropdown Menu */}
              <div>
                <button
                  onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium"
                >
                  <span className="flex items-center gap-3">
                    <Layers size={18} /> Focus Areas
                  </span>
                  {isSkillsOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {isSkillsOpen && (
                  <div className="pl-9 pr-2 py-2 space-y-1 mt-1 border-l-2 border-cyan-500/40 ml-4">
                    <a
                      href="#skills"
                      className="flex items-center gap-2 py-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Server size={14} /> MERN Dev
                    </a>
                    <a
                      href="#skills"
                      className="flex items-center gap-2 py-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Globe size={14} /> Next.js
                    </a>
                    <a
                      href="#skills"
                      className="flex items-center gap-2 py-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Cpu size={14} /> Auth & APIs
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#experience"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium"
              >
                <Briefcase size={18} /> Experience
              </a>
              <a
                href="#projects"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium"
              >
                <Layers size={18} /> Projects
              </a>
              <a
                href="#services"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium"
              >
                <Server size={18} /> Services
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/65 transition-all text-sm font-medium"
              >
                <Mail size={18} /> Contact
              </a>
            </nav>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
            © 2026 Sheikh Muzammil
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          <div
            className="p-8 md:p-10 rounded-3xl backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7, #ec4899)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow:
                "0 0 35px rgba(6, 182, 212, 0.12), inset 0 0 20px rgba(168, 85, 247, 0.08)",
            }}
          >
            {/* Background Glow Accent */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-4 text-center md:text-left flex-1 relative z-10">
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide shadow-sm">
                ✨ AVAILABLE FOR FREELANCE & FULL-TIME ROLES
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                SHEIKH MUZAMMIL
              </h1>
              <div className="text-lg md:text-2xl font-bold text-cyan-400 h-8 flex items-center justify-center md:justify-start gap-1">
                <span>{currentText}</span>
                <span className="w-0.5 h-6 bg-cyan-400 animate-pulse"></span>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
                I build responsive, fast, and scalable web applications focused
                on the MERN Stack and Next.js. Passionate about crafting modern
                UI with Tailwind CSS, building clean APIs, and implementing
                secure web authentication.
              </p>

              {/* Action Buttons & Social Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
                >
                  View My Work <ArrowRight size={16} />
                </a>

                {/* Download Resume Button */}
                <a
                  href="/SHEIKH_MUZAMMIL_RESUME.pdf"
                  download="Sheikh_Muzammil_Resume.pdf"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold text-sm border border-cyan-500/30 transition-all flex items-center gap-2 shadow-md hover:border-cyan-500"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
                >
                  Get In Touch
                </a>

                {/* Social Icon Links */}
                <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                  <a
                    href="https://github.com/sheikh-muzammil2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md flex items-center justify-center"
                    title="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sheikh-muzammil-dev?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md flex items-center justify-center"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="https://wa.me/8801836376174"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md flex items-center justify-center"
                    title="WhatsApp"
                  >
                    <MessageCircle size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1Cg4ewRwb1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md flex items-center justify-center"
                    title="Facebook"
                  >
                    <FaFacebook size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative group shrink-0 z-10">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-cyan-500/40 bg-slate-950 shadow-2xl">
                <Image
                  src="https://i.ibb.co.com/2Y5p4Qhv/1777688598569.png"
                  alt="Sheikh Muzammil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Auto-Counting Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className="p-6 rounded-2xl text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.1)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1">
                {expCount}+
              </h2>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Years Experience
              </p>
            </div>
            <div
              className="p-6 rounded-2xl text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.1)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1">
                {projectCount}+
              </h2>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Projects Completed
              </p>
            </div>
            <div
              className="p-6 rounded-2xl text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.1)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1">
                {clientCount}+
              </h2>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Clients & Institutions
              </p>
            </div>
            <div
              className="p-6 rounded-2xl text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), linear-gradient(to right, #06b6d4, #a855f7)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.1)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1">
                {techCount}+
              </h2>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
