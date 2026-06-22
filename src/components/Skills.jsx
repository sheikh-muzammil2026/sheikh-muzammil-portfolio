const Skills = () => {
  const frontendSkills = [
    'Next.js',
    'React',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'HTML5 & Modern CSS',
  ];

  const backendSkills = [
    'Node.js',
    'Express.js',
    'PHP',
    'MongoDB',
    'MySQL / MariaDB',
    'Better-Auth',
    'Apache HTTP Server',
    'Linux (Ubuntu)',
    'Bash Scripting',
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#030303] text-[#ededed] relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-orange-500/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-amber-600/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-12 space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> Architecture
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Expertise</span>
          </h2>
          <p className="text-neutral-500 text-sm">Categorized skill sets built on premium architecture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          <div className="relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-200 hover:border-orange-500/50 hover:-translate-y-1 hover:bg-white/[0.04] group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl pointer-events-none" />
            
            <div className="mb-4 flex justify-between items-center relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-200">
                Frontend Architecture
              </h3>
              <span className="text-[10px] font-mono bg-white/5 text-neutral-400 px-2 py-1 rounded-md border border-white/5">
                01 // UI
              </span>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 relative z-10">
              Crafting immersive, high-performance web interfaces with pixel-perfect layouts and dynamic client-side logic.
            </p>

            <div className="flex flex-wrap gap-2 relative z-10">
              {frontendSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white/[0.04] border border-white/[0.08] text-neutral-100 px-3 py-1.5 rounded-xl text-xs font-mono tracking-wide shadow-sm transition-all duration-150 hover:bg-orange-500 hover:border-orange-500 hover:text-white cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-200 hover:border-orange-500/50 hover:-translate-y-1 hover:bg-white/[0.04] group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl pointer-events-none" />
            
            <div className="mb-4 flex justify-between items-center relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-200">
                Backend & Systems
              </h3>
              <span className="text-[10px] font-mono bg-white/5 text-neutral-400 px-2 py-1 rounded-md border border-white/5">
                02 // SYS
              </span>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 relative z-10">
              Engineering secure APIs, optimizing data pipeline performance, and managing robust deployment environments.
            </p>

            <div className="flex flex-wrap gap-2 relative z-10">
              {backendSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white/[0.04] border border-white/[0.08] text-neutral-100 px-3 py-1.5 rounded-xl text-xs font-mono tracking-wide shadow-sm transition-all duration-150 hover:bg-orange-500 hover:border-orange-500 hover:text-white cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
