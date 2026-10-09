"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Info, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Aimhabiganj",
    subtitle: "Web Infrastructure & Management Platform",
    category: "Management",
    description: "A comprehensive enterprise solution built to manage students, enrollment, and administrative workflows for educational institutions.",
    tags: ["Next.js", "React", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://aimhabiganj.vercel.app",
    githubLink: "https://github.com/sheikh-muzammil2026/aimhabiganj",
    image: "/aimhome.jpg",
    challenges: "Managing complex role-based authorization rules and optimizing database queries for multi-tier administrative controls.",
    futurePlans: "Integrating automated SMS alerts for attendance and an online fee payment gateway."
  },
  {
    id: 2,
    title: "StayNest",
    subtitle: "Real Estate & Property Management Platform",
    category: "Full Stack",
    description: "A full-stack property management platform featuring role-based authentication, interactive booking, and Stripe integration.",
    tags: ["Next.js", "React", "MongoDB", "Stripe", "Tailwind CSS"],
    liveLink: "https://staynest-client.vercel.app",
    githubLink: "https://github.com/sheikh-muzammil2026/staynest-client",
    serverLink: "https://github.com/sheikh-muzammil2026/staynest-server",
    image: "/StayNest.jpg",
    challenges: "Handling real-time availability sync during double-booking edge cases and Stripe webhook response delays.",
    futurePlans: "Adding dynamic map exploration using Mapbox API and AI-driven price estimation."
  },
  {
    id: 3,
    title: "SunCart",
    subtitle: "Full-Stack eCommerce Platform",
    category: "E-Commerce",
    description: "A modern eCommerce platform optimized for speed, featuring secure authentication, dynamic product filtering, and smooth cart flow.",
    tags: ["Next.js", "React", "MongoDB", "Better Auth", "Tailwind CSS"],
    liveLink: "https://b13-a8-suncart.vercel.app",
    githubLink: "https://github.com/sheikh-muzammil2026/B13-A8-suncart",
    image: "/suncart.jpg",
    challenges: "Synchronizing local cart state smoothly with server-side database records without blocking UI rendering.",
    futurePlans: "Adding multi-currency payment options and automated order tracking with email alerts."
  },
  {
    id: 4,
    title: "MediQueue",
    subtitle: "Tutor Booking Platform",
    category: "Full Stack",
    description: "A structured booking application designed for managing tutoring sessions with search, filter, and full CRUD functionality.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveLink: "https://mediqueue-client-ochre.vercel.app",
    githubLink: "https://github.com/sheikh-muzammil2026/mediqueue-client",
    serverLink: "https://github.com/sheikh-muzammil2026/mediqueue-server",
    image: "/mediqeue.jpg",
    challenges: "Ensuring accurate session slot reservation and JWT token refresh mechanisms on critical user routes.",
    futurePlans: "Implementing video call integration for remote tutoring sessions."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          A showcase of my recent full-stack applications, enterprise platforms, and digital solutions.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {["All", "Full Stack", "Management", "E-Commerce"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                filter === cat
                  ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative p-[2px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          >
            {/* Pulsing Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>

            {/* Main Card Content */}
            <div className="relative bg-slate-950 rounded-[22px] overflow-hidden flex flex-col justify-between h-full p-3">
              <div>
                {/* Thumbnail Image */}
                <div className="h-60 bg-slate-900 rounded-2xl relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                  <span className="absolute top-3 right-3 z-20 text-[10px] font-bold px-3 py-1 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-700 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Text and Description */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium transition-colors"
                      title="View Architecture Details"
                    >
                      <Info size={14} /> Details
                    </button>
                  </div>

                  <p className="text-xs font-mono text-slate-400">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-900 mt-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FaGithub size={14} /> Source Code
                </a>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-purple-400 transition-all"
                  >
                    Details
                  </button>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-4 py-1.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1"
                  >
                    <span>Live Demo</span> <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture & Details Modal */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative text-slate-300 space-y-6 my-auto shadow-2xl"
            style={{
              boxShadow: "0 0 50px rgba(6, 182, 212, 0.15)"
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full w-9 h-9 flex items-center justify-center transition-all"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Project Architecture
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 pr-8">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">{selectedProject.subtitle}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase mb-2">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase mb-1">Overview</h4>
              <p className="text-sm leading-relaxed text-slate-300">{selectedProject.description}</p>
            </div>

            {/* Challenges Faced */}
            <div>
              <h4 className="text-xs font-mono text-purple-400 uppercase mb-1">Key Challenges & Solutions</h4>
              <p className="text-sm leading-relaxed text-slate-400">{selectedProject.challenges}</p>
            </div>

            {/* Future Plans */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase mb-1">Future Enhancements</h4>
              <p className="text-sm leading-relaxed text-slate-400">{selectedProject.futurePlans}</p>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
              >
                <span>Live Project</span> <ExternalLink size={14} />
              </a>

              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all flex items-center gap-1.5"
              >
                <FaGithub size={14} /> GitHub Repo
              </a>

              {selectedProject.serverLink && (
                <a
                  href={selectedProject.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <FaGithub size={14} /> Server Repo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
