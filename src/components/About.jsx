const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#030303] text-[#ededed] relative overflow-hidden">
      
      {/* আইফোন গ্লাস থিমের আন্ডার-গ্লো (কাঁচের নিচ থেকে আসা নরম আলো) */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-orange-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-amber-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* হেডিং - আপনার সিগনেচার স্টাইল */}
        <div className="mb-14 space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> Biography
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">Me</span>
          </h2>
        </div>

        {/* মডার্ন ২-কলাম লেআউট */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* বাম কলাম: মূল গল্প ও যোগ্যতা */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base md:text-lg">
            <p>
              My programming journey started with pure curiosity about how the web functions behind the scenes. Over time, that curiosity evolved into a deep passion for architecting clean UIs, highly responsive layouts, and robust full-stack systems.
            </p>
            <p>
              Today, I specialize in building next-generation applications leveraging the power of <strong className="text-white font-semibold">MERN</strong> and <strong className="text-white font-semibold">Next.js</strong> coupled with cutting-edge tools like <strong className="text-orange-400 font-semibold">Better-Auth</strong>. Additionally, I possess strong capabilities in managing traditional backend architectures using the full <strong className="text-white font-semibold">LAMP Stack</strong> ecosystem.
            </p>
            <p>
              Beyond building scalable applications, I actively explore the realms of <span className="text-orange-400 font-medium">Cybersecurity</span> to ensure my code is secure by design. When I am away from my monitor, you can find me reading, exercising, or spending quality time with my family.
            </p>
          </div>

          {/* ডান কলাম: আইফোন গ্লাস উইজেট কার্ড (যা ব্যাকগ্রাউন্ড থেকে ভেসে উঠবে) */}
          <div className="lg:col-span-5 relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:border-orange-500/30 hover:bg-white/[0.03] hover:-translate-y-1 transition-all duration-500 ease-out group">
            {/* ইনার গ্লেয়ার গ্রাডিয়েন্ট */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl pointer-events-none" />
            
            <h3 className="text-xs font-mono tracking-wider text-orange-500 uppercase mb-6 flex items-center gap-2">
              <span>⚡</span> Fast Facts
            </h3>

            <div className="space-y-4 font-mono text-xs text-neutral-400">
              <div className="flex justify-between items-center border-b border-white/[0.03] pb-3">
                <span className="text-neutral-500">Core Architecture</span>
                <span className="text-neutral-200 font-semibold text-right">MERN & Next.js</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.03] pb-3">
                <span className="text-neutral-500">Backend Systems</span>
                <span className="text-neutral-200 font-semibold text-right">LAMP Stack (PHP/MySQL)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.03] pb-3">
                <span className="text-neutral-500">Authentication</span>
                <span className="text-orange-400 font-semibold text-right">Better-Auth</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.03] pb-3">
                <span className="text-neutral-500">Security Focus</span>
                <span className="text-neutral-200 font-semibold text-right">Cybersecurity Aware</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">Current Year</span>
                <span className="text-neutral-200 font-semibold text-right">2026</span>
              </div>
            </div>

            {/* কার্ডের নিচের গ্লোয়িং অ্যাকসেন্ট লাইন */}
            <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent group-hover:via-orange-500/50 transition-all duration-500" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;