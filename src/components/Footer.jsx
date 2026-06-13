const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[#050505] text-[#ededed] py-16 px-6 text-center overflow-hidden border-t border-white/[0.03]"
    >
      {/* গ্লাস ফুটারে রিচনেস আনার জন্য ব্যাকগ্রাউন্ড নিয়ন গ্লো */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-orange-500/[0.04] blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        
        {/* মিনিমালিস্ট হেডিং স্টাইল */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> Get In Touch
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">Together</span>
          </h2>
        </div>

        {/* আইফোন গ্লাস কন্টাক্ট বক্স */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl px-8 py-5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] mx-auto">
          
          {/* ইমেইল লিংক */}
          <div className="group flex items-center gap-2">
            <span className="text-orange-500/60 group-hover:text-orange-400 font-mono text-xs transition-colors duration-300">@</span>
            <a 
              href="mailto:discordsstudent@gmail.com" 
              className="text-sm font-mono tracking-wide text-neutral-400 hover:text-orange-400 transition-colors duration-300"
            >
              discordsstudent@gmail.com
            </a>
          </div>

          {/* ডিভাইডার লাইন (শুধুমাত্র বড় স্ক্রিনে দেখাবে) */}
          <span className="hidden sm:inline text-white/10">|</span>

          {/* মোবাইল নম্বর লিংক */}
          <div className="group flex items-center gap-2">
            <span className="text-orange-500/60 group-hover:text-orange-400 font-mono text-xs transition-colors duration-300">#</span>
            <a 
              href="tel:+8801836376174" 
              className="text-sm font-mono tracking-wide text-neutral-400 hover:text-orange-400 transition-colors duration-300"
            >
              +880 1836-376174
            </a>
          </div>

        </div>

        {/* কপিরাইট নোটিশ (মিনিমালিস্ট অ্যাপেল স্টাইল) */}
        <div className="pt-8 border-t border-white/[0.03] max-w-xs mx-auto">
          <p className="text-[10px] font-mono text-neutral-600 tracking-wider uppercase">
            © 2026 Sheikh Muzammil. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;