"use client";
import React, { useState, useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

const timelineData = [
  {
    id: 1,
    type: "work",
    period: "2025 - Present",
    title: "Freelance Full-Stack Developer & Web Administrator",
    organization: "Independent Contracting (Educational & Islamic Institutions)",
    location: "Bangladesh",
    description: [
      "Successfully engineered, deployed, and currently managing full-stack web applications for multiple clients, including As-Salam Ideal Madrasah (Next.js/MERN), an Online Madrasah Platform, and After School Maktab (Dhaka).",
      "Actively providing post-launch technical support, administering backend systems, ensuring database integrity, and handling routine server-side maintenance for live client assets.",
      "Digitized administrative operations, student enrollment workflows, and academic tracking, tailoring UI/UX structures to institutional specifications."
    ],
    skills: ["Next.js", "MERN Stack", "MongoDB", "Workflow Automation", "Server Admin", "Full Lifecycle Support"]
  },
  {
    id: 2,
    type: "work",
    period: "2026 - Present",
    title: "Full-Stack Web Developer (Self-Projects)",
    organization: "Self-Employed / Independent Engineering",
    location: "Bangladesh",
    description: [
      "Developed multiple complex full-stack applications using Next.js, implementing smooth user experiences and optimized client-server rendering pipelines.",
      "Implemented robust security structures with JWT and Better-Auth, and optimized complex data management using high-performance MongoDB Aggregation Pipelines.",
      "Integrated secure, production-ready, and seamless checkout flows utilizing the Stripe Payment Gateway."
    ],
    skills: ["Next.js", "Better-Auth", "Stripe API", "MongoDB Aggregation", "RESTful APIs", "Tailwind CSS"]
  },
  {
    id: 3,
    type: "certification",
    period: "2026 - Present",
    title: "Complete Web Development Course",
    organization: "Programming Hero (Batch-13)",
    location: "Online / Remote",
    description: [
      "Intensive training in modern full-stack web development with Next.js, React, Node.js, Express, and MongoDB.",
      "Mastered modern state management, responsive frontend engineering, backend architecture, and production deployments."
    ],
    skills: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Modern JavaScript", "REST APIs"]
  },
  {
    id: 4,
    type: "education",
    period: "Graduated 2021",
    title: "Master of Arts (MA) in Islamic Studies",
    organization: "Al-Haiatul Ulya Lil-Jami'atil Qawmiya",
    location: "Bangladesh",
    description: [
      "Completed Master of Arts degree with rigorous academic excellence, analytical reasoning, and disciplined dedication."
    ],
    skills: ["Higher Education", "Critical Thinking", "Research & Methodology"]
  }
];

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 1.5 && rect.bottom >= window.innerHeight / 3) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20 px-4 md:px-10 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Experience & <span className="text-purple-400">Credentials</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          A complete timeline of my professional career milestones, production client work, and educational qualifications.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
        {timelineData.map((item, index) => {
          const isActive = index <= activeIndex;

          return (
            <div
              key={item.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`relative pl-8 md:pl-12 group transition-all duration-700 transform ${
                isActive ? "opacity-100 translate-y-0" : "opacity-40 translate-y-8"
              }`}
            >
              {/* Dynamic Circle / Dot */}
              <div 
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-500 shadow-xl ${
                  isActive 
                    ? "bg-slate-950 border-cyan-400 text-cyan-400 shadow-cyan-500/50 scale-110 ring-4 ring-purple-500/20" 
                    : "bg-slate-900 border-slate-700 text-slate-500"
                }`}
              >
                {item.type === "education" ? <GraduationCap size={14} /> : item.type === "certification" ? <Award size={14} /> : <Briefcase size={14} />}
              </div>

              {/* Period Tag (Desktop) */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-all duration-300 ${
                  isActive ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 border-cyan-500/40 shadow-md shadow-cyan-500/10" : "bg-slate-900/60 text-slate-400 border-slate-800"
                }`}>
                  {item.period}
                </span>
              </div>

              {/* Card Container with Mixed Border & Multi-layered Box-Shadow */}
              <div 
                className={`p-6 md:p-8 rounded-3xl transition-all duration-500 backdrop-blur-xl relative overflow-hidden ${
                  isActive 
                    ? "bg-slate-900/80 border-2 border-transparent bg-origin-border shadow-[0_0_30px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(168,85,247,0.1)] hover:scale-[1.01]" 
                    : "bg-slate-900/30 border border-slate-800/80 hover:border-slate-700"
                }`}
                style={{
                  borderImage: isActive ? "linear-gradient(to right, #06b6d4, #a855f7, #ec4899) 1" : undefined
                }}
              >
                {/* Period Tag (Mobile) */}
                <div className="md:hidden inline-block mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 border border-cyan-500/40">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800 w-fit shadow-inner">
                    <MapPin size={12} /> {item.location}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></span>
                  {item.organization}
                </h4>

                <ul className="space-y-2 mb-6">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-slate-400 text-xs md:text-sm flex items-start gap-2 leading-relaxed">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {item.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-medium px-3 py-1 rounded-lg bg-slate-950/80 text-slate-300 border border-slate-800/80 hover:border-purple-500/50 transition-colors shadow-inner"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
