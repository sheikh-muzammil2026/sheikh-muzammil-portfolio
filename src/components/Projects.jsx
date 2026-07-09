import React from 'react';

const Projects = () => {
  // Production-grade project data architecture
  const projectData = [
    {
      id: 1,
      title: "As-Salam Ideal Madrasah",
      subtitle: "Web Infrastructure & Management Platform",
      description: "A comprehensive enterprise solution built to manage students, enrollment, and administrative workflows for educational institutions. Optimized for complex database queries, role-based access control, and high server uptime.",
      tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB"],
      live: "https://aimhabiganj.vercel.app",
      repository: "https://github.com/sheikh-muzammil2026/aimhabiganj"
    },
    {
      id: 2,
      title: "StayNest",
      subtitle: "Real Estate & Property Management Platform",
      description: "A full-stack property management platform featuring role-based authentication, interactive property booking, secure Stripe payments integration, user reviews, and a dynamic admin analytics dashboard.",
      tech: ["Next.js", "React", "MongoDB", "Stripe", "Tailwind CSS"],
      live: "https://staynest-client.vercel.app",
      client: "https://github.com/sheikh-muzammil2026/staynest-client",
      server: "https://github.com/sheikh-muzammil2026/staynest-server"
    },
    {
      id: 3,
      title: "SunCart",
      subtitle: "Full-Stack eCommerce Platform",
      description: "A modern eCommerce platform optimized for speed and conversion. Features production-ready secure authentication, dynamic product filtering, seamless cart operations, and a fully responsive user experience.",
      tech: ["Next.js", "React", "MongoDB", "Better Auth", "Tailwind CSS"],
      live: "https://b13-a8-suncart.vercel.app",
      repository: "https://github.com/sheikh-muzammil2026/B13-A8-suncart"
    },
    {
      id: 4,
      title: "MediQueue",
      subtitle: "Tutor Booking Platform",
      description: "A structured booking application designed for managing tutoring sessions. Implements advanced search and filtering functionality, session state management, and full CRUD operations with protected API endpoints.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      live: "https://mediqueue-client-ochre.vercel.app",
      client: "https://github.com/sheikh-muzammil2026/mediqueue-client",
      server: "https://github.com/sheikh-muzammil2026/mediqueue-server"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#030303] text-[#ededed] relative overflow-hidden"
    >
      {/* Ambient background blur for modern dark-theme aesthetics */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header Definition */}
        <div className="mb-14 space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> My Creations
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              Projects
            </span>
          </h2>
        </div>

        {/* Responsive layout configuration for project showcases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl rounded-3xl p-6 flex flex-col justify-between shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] hover:border-orange-500/30 hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Premium glassmorphism overlay line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl pointer-events-none" />

              <div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mt-0.5 tracking-wide">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-white/[0.03] text-neutral-300 px-2.5 py-1 rounded-md border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Secure navigation links wrapper */}
              <div className="flex items-center gap-4 border-t border-white/[0.04] pt-4 mt-auto relative z-10">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-semibold bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.05)]"
                >
                  Live Demo ↗
                </a>

                {/* Conditional repository renderer supporting unified or decoupled architecture */}
                {project.repository ? (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    Codebase
                  </a>
                ) : (
                  <>
                    <a
                      href={project.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                      Client
                    </a>
                    <a
                      href={project.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                      Server
                    </a>
                  </>
                )}
              </div>

              {/* Interactive dynamic hover border transition styling */}
              <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/30 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
