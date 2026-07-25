'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // গাইডলাইন অনুযায়ী আপডেট করা প্রজেক্ট ডাটা
  const projectData = [
    {
      id: 1,
      title: "Aimhabiganj",
      subtitle: "Web Infrastructure & Management Platform",
      image: "/aimhome.jpg", // আপনার প্রজেক্টের স্ক্রিনশট লিঙ্ক বসাবেন
      description: "A comprehensive enterprise solution built to manage students, enrollment, and administrative workflows for educational institutions.",
      tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB"],
      live: "https://aimhabiganj.vercel.app",
      repository: "https://github.com/sheikh-muzammil2026/aimhabiganj",
      challenges: "Managing complex role-based authorization rules and optimizing database queries for multi-tier administrative controls.",
      futurePlans: "Integrating automated SMS alerts for attendance and an online fee payment gateway."
    },
    {
      id: 2,
      title: "StayNest",
      subtitle: "Real Estate & Property Management Platform",
      image: "StayNest.jpg", // আপনার প্রজেক্টের স্ক্রিনশট লিঙ্ক বসাবেন
      description: "A full-stack property management platform featuring role-based authentication, interactive booking, and Stripe integration.",
      tech: ["Next.js", "React", "MongoDB", "Stripe", "Tailwind CSS"],
      live: "https://staynest-client.vercel.app",
      client: "https://github.com/sheikh-muzammil2026/staynest-client",
      server: "https://github.com/sheikh-muzammil2026/staynest-server",
      challenges: "Handling real-time availability sync during double-booking edge cases and Stripe webhook response delays.",
      futurePlans: "Adding dynamic map exploration using Mapbox API and AI-driven price estimation."
    },
    {
      id: 3,
      title: "SunCart",
      subtitle: "Full-Stack eCommerce Platform",
      image: "suncart.jpg", // আপনার প্রজেক্টের স্ক্রিনশট লিঙ্ক বসাবেন
      description: "A modern eCommerce platform optimized for speed, featuring secure authentication, dynamic product filtering, and smooth cart flow.",
      tech: ["Next.js", "React", "MongoDB", "Better Auth", "Tailwind CSS"],
      live: "https://b13-a8-suncart.vercel.app",
      repository: "https://github.com/sheikh-muzammil2026/B13-A8-suncart",
      challenges: "Synchronizing local cart state smoothly with server-side database records without blocking UI rendering.",
      futurePlans: "Adding multi-currency payment options and automated order tracking with email alerts."
    },
    {
      id: 4,
      title: "MediQueue",
      subtitle: "Tutor Booking Platform",
      image: "mediqeue.jpg", // আপনার প্রজেক্টের স্ক্রিনশট লিঙ্ক বসাবেন
      description: "A structured booking application designed for managing tutoring sessions with search, filter, and full CRUD functionality.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      live: "https://mediqueue-client-ochre.vercel.app",
      client: "https://github.com/sheikh-muzammil2026/mediqueue-client",
      server: "https://github.com/sheikh-muzammil2026/mediqueue-server",
      challenges: "Ensuring accurate session slot reservation and JWT token refresh mechanisms on critical user routes.",
      futurePlans: "Implementing video call integration for remote tutoring sessions."
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#030303] text-[#ededed] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> Portfolio
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Projects</span>
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Project Image */}
              <div className="relative w-full h-52 bg-neutral-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Main Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mt-1 mb-3">
                    {project.subtitle}
                  </p>
                </div>

                {/* View Details Button (Requirement as per image) */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 w-full bg-white/[0.05] border border-white/[0.1] hover:bg-orange-500 hover:border-orange-500 hover:text-white text-neutral-200 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all duration-300"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Details Modal (Shows on 'View Details' click) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
  initial={{ opacity: 0, scale: 0.9, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.9, y: 20 }}
  className="bg-[#0e0e0e] border border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative text-neutral-300 space-y-6 my-auto shadow-2xl"
>
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white text-xl font-bold"
              >
                ✕
              </button>

              <div>
                <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                  Project Details
                </span>
                <h3 className="text-3xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Main Tech Stack */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase mb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Brief Description */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase mb-1">Description</h4>
                <p className="text-sm leading-relaxed text-neutral-300">{selectedProject.description}</p>
              </div>

              {/* Challenges Faced */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase mb-1">Challenges Faced</h4>
                <p className="text-sm leading-relaxed text-neutral-400">{selectedProject.challenges}</p>
              </div>

              {/* Potential Improvements & Future Plans */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase mb-1">Future Plans</h4>
                <p className="text-sm leading-relaxed text-neutral-400">{selectedProject.futurePlans}</p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-mono text-xs font-semibold"
                >
                  Live Project ↗
                </a>

                {selectedProject.repository ? (
                  <a
                    href={selectedProject.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-200 px-5 py-2 rounded-xl font-mono text-xs font-semibold"
                  >
                    GitHub Repository
                  </a>
                ) : (
                  <>
                    <a
                      href={selectedProject.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-200 px-5 py-2 rounded-xl font-mono text-xs font-semibold"
                    >
                      Client Repo
                    </a>
                    <a
                      href={selectedProject.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-200 px-5 py-2 rounded-xl font-mono text-xs font-semibold"
                    >
                      Server Repo
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
