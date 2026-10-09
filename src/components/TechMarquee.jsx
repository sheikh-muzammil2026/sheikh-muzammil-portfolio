import React from 'react';

export default function TechMarquee() {
  const technologies = [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Better-Auth",
    "Tailwind CSS",
    "JavaScript",
    "REST APIs",
    "Stripe Gateway",
    "Git & GitHub",
    "Vercel",
    "LAMP Stack",
    "Linux (Ubuntu)"
  ];

  return (
    <div className="py-10 bg-slate-900/30 border-y border-slate-800/60 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee items-center">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center gap-2 text-slate-400 font-semibold text-lg hover:text-purple-400 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
            {tech}
          </div>
        ))}
        {/* Repeated for continuous smooth looping */}
        {technologies.map((tech, index) => (
          <div key={`dup-${index}`} className="flex items-center gap-2 text-slate-400 font-semibold text-lg hover:text-cyan-400 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
