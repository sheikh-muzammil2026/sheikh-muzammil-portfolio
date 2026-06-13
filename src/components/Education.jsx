const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#030303] text-[#ededed] relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ডে নরম গ্লাস লাইট (আইফোন অ্যাম্বিয়েন্ট আভা) */}
      <div className="absolute top-1/3 left-1/3 w-[380px] h-[380px] bg-orange-500/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* হেডিং - পোর্টফোলিওর সিগনেচার স্টাইল */}
        <div className="mb-14 space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> Qualifications
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">Timeline</span>
          </h2>
        </div>

        {/* কার্ড গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* First Education Item: Programming Hero */}
          <div className="relative bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:border-orange-500/30 hover:bg-white/[0.02] transition-all duration-500 group flex flex-col justify-between">
            {/* ইনার গ্লেয়ার রিফ্লেকশন */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <span className="text-orange-500 font-mono text-xs tracking-wider uppercase bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                Tech Training
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300 pt-2">
                Complete Web Development Course
              </h3>
              <p className="text-sm md:text-base text-neutral-400 font-mono">
                Programming Hero (Batch-13)
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/[0.04] font-mono text-xs text-neutral-500 flex justify-between items-center relative z-10">
              <span>Timeline</span>
              <span className="text-orange-400 font-semibold">2026 - Present</span>
            </div>
          </div>

          {/* Second Education Item: MA in Islamic Studies */}
          <div className="relative bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:border-orange-500/30 hover:bg-white/[0.02] transition-all duration-500 group flex flex-col justify-between">
            {/* ইনার গ્લેয়ার রিফ্লেকশন */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <span className="text-amber-500 font-mono text-xs tracking-wider uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Academic Degree
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300 pt-2">
                Master of Arts (MA) in Islamic Studies
              </h3>
              <p className="text-sm md:text-base text-neutral-400 font-mono">
                Al-Haiatul Ulya Lil-Jami'atil Qawmiya, Bangladesh
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/[0.04] font-mono text-xs text-neutral-500 flex justify-between items-center relative z-10">
              <span>Status</span>
              <span className="text-neutral-300 font-semibold">Graduated: 2021</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;