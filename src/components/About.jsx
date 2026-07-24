import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#030303] text-[#ededed] relative overflow-hidden">
      {/* Background Ambient Blurs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-orange-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-amber-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> Biography
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Text */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base md:text-lg">
            <p>
              My programming journey started with pure curiosity about how web applications operate under the hood. What began as experimenting with code has evolved into a dedicated focus on building full-stack applications with modern web technologies.
            </p>
            <p>
              I specialize in engineering responsive, fast, and scalable web solutions using the <strong className="text-white font-semibold">MERN Stack (MongoDB, Express, React, Node.js)</strong> and <strong className="text-white font-semibold">Next.js</strong>. I place strong emphasis on clean code architecture, intuitive UI/UX with Tailwind CSS, and implementing secure workflows using authentication tools like <strong className="text-orange-400 font-semibold">Better-Auth</strong>.
            </p>
            <p>
              Alongside modern JavaScript frameworks, I also have foundational experience working with backend databases and traditional technologies like the <span className="text-neutral-200">LAMP Stack</span>. I am continuously expanding my knowledge in <span className="text-orange-400 font-medium">Cybersecurity best practices</span> to ensure the applications I build are safe and resilient.
            </p>
          </div>

          {/* Fast Facts Sidebar */}
          <div className="lg:col-span-5 relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:border-orange-500/30 hover:bg-white/[0.03] hover:-translate-y-1 transition-all duration-500 ease-out group">
            
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl pointer-events-none" />
            
            <h3 className="text-xs font-mono tracking-wider text-orange-500 uppercase mb-6 flex items-center gap-2">
              <span>⚡</span> Fast Facts
            </h3>

            <div className="space-y-4 font-mono text-xs text-neutral-400">
              <div className="flex justify-between items-center border-b border-white/[0.03] pb-3">
                <span className="text-neutral-500">Primary Focus</span>
                <span className="text-neutral-200 font-semibold text-right">MERN & Next.js</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.03] pb-3">
                <span className="text-neutral-500">Authentication</span>
                <span className="text-orange-400 font-semibold text-right">Better-Auth / NextAuth</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.03] pb-3">
                <span className="text-neutral-500">Secondary Tech</span>
                <span className="text-neutral-200 font-semibold text-right">LAMP Stack (PHP/MySQL)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.03] pb-3">
                <span className="text-neutral-500">Core Mindset</span>
                <span className="text-neutral-200 font-semibold text-right">Security & Performance</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">Location</span>
                <span className="text-neutral-200 font-semibold text-right">Bangladesh</span>
              </div>
            </div>

            {/* Glowing Accent Line */}
            <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent group-hover:via-orange-500/50 transition-all duration-500" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
