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
      
      {/* আইফোনের গ্লাস ইফেক্ট ফুটিয়ে তোলার জন্য ব্যাকগ্রাউন্ডের ভেতরের নিয়ন লাইট (কাঁচের নিচ থেকে আলো জ্বলবে) */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* হেডিং */}
        <div className="mb-16 space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> Architecture
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Expertise</span>
          </h2>
          <p className="text-neutral-500 text-sm">Categorized skill sets built on premium architecture</p>
        </div>

        {/* আইফোন স্টাইল গ্লাস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* ১. ফ্রন্টএন্ড গ্লাস কার্ড */}
          <div className="relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-orange-500/40 hover:-translate-y-1.5 hover:bg-white/[0.04] group">
            {/* আইফোন স্টাইল ইনার গ্লেয়ার (হালকা গ্লসি টপ লাইট) */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl pointer-events-none" />
            
            <div className="mb-6 flex justify-between items-center relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                Frontend Architecture
              </h3>
              <span className="text-[10px] font-mono bg-white/5 text-neutral-400 px-2 py-1 rounded-md border border-white/5">
                01 // UI
              </span>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 relative z-10">
              Crafting immersive, high-performance web interfaces with pixel-perfect layouts and dynamic client-side logic.
            </p>

            {/* গ্লাস ট্যাগসমূহ */}
            <div className="flex flex-wrap gap-2.5 relative z-10">
              {frontendSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white/[0.03] border border-white/[0.05] backdrop-blur-md text-neutral-200 px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wide shadow-sm transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ২. ব্যাকএন্ড ও সার্ভার গ্লাস কার্ড */}
          <div className="relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-orange-500/40 hover:-translate-y-1.5 hover:bg-white/[0.04] group">
            {/* আইফোন স্টাইল ইনার গ্লেয়ার */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl pointer-events-none" />
            
            <div className="mb-6 flex justify-between items-center relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                Backend & Systems
              </h3>
              <span className="text-[10px] font-mono bg-white/5 text-neutral-400 px-2 py-1 rounded-md border border-white/5">
                02 // SYS
              </span>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 relative z-10">
              Engineering secure APIs, optimizing data pipeline performance, and managing robust deployment environments.
            </p>

            {/* গ্লাস ট্যাগসমূহ */}
            <div className="flex flex-wrap gap-2.5 relative z-10">
              {backendSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white/[0.03] border border-white/[0.05] backdrop-blur-md text-neutral-200 px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wide shadow-sm transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* শেষ হলো ২য় কার্ড */}
        </div>
      </div>
    </section>
  );
};

export default Skills;