'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Hero = () => {
  // টাইপরাইটার অ্যানিমেশনের জন্য টেক্সট লিস্ট
  const words = ['Full-Stack Developer','MERN Stack Developer', 'LAMP Stack Developer'];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIdx];
      
      if (!isDeleting) {
        // অক্ষর একটি একটি করে টাইপ হবে
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(80); // টাইপিং স্পিড
      } else {
        // অক্ষর একটি একটি করে ডিলিট হবে
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(40); // ডিলিটিং স্পিড
      }

      // পুরো শব্দ টাইপ শেষ হলে কিছুক্ষণ থামবে, তারপর ডিলিট শুরু হবে
      if (!isDeleting && currentText === fullWord) {
        setTypingSpeed(2000); // ২ সেকেন্ড হোল্ড করবে
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIdx((prev) => (prev + 1) % words.length); // পরের শব্দে যাবে
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-[#030303] text-[#ededed] relative overflow-hidden">
      
      {/* আইফোন গ্লাস থিমের ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl relative z-10 w-full">
        
        {/* বাম পাশের টেক্সট এরিয়া */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
              <span>●</span> Welcome to my space
            </div>
            <h2 className="text-orange-500 font-mono text-lg">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              Sheikh Muzammil
            </h1>
            
            {/* টাইপরাইটার অ্যানিমেশন সেকশন */}
            <h3 className="text-2xl font-bold h-10 flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">
                {currentText}
              </span>
              {/* ব্লিঙ্কিং কার্সার (টাইপরাইটার ইফেক্টকে রিয়ালিস্টিক করার জন্য) */}
              <span className="ml-1 w-[3px] h-6 bg-orange-500 animate-[pulse_0.8s_infinite]" />
            </h3>
          </div>

          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg">
            I build highly optimized, secure, and blazing-fast full-stack web applications. Expert in architecting modern UI/UX with Next.js & Tailwind CSS, managing robust APIs via MERN and complete LAMP stacks, and implementing secure infrastructures with Better-Auth.
          </p>

          {/* বাটন্স (আইফোন গ্লাস স্টাইল ও গ্লো) */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/sheikh_muzammil_resume.pdf"
              download="Sheikh_Muzammil_Resume.pdf"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-6 py-3.5 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.2)] hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] active:scale-98"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-neutral-200 px-6 py-3.5 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-300 hover:bg-white/[0.05] hover:border-orange-500/40 hover:text-orange-400 active:scale-98"
            >
              Contact Me
            </a>
          </div>

          {/* সোশ্যাল আইকনস */}
          <div className="flex gap-5 text-2xl pt-4">
            <a href="https://github.com/sheikh-muzammil2026" className="text-neutral-500 hover:text-orange-500 transition-colors duration-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sheikh-muzammil-dev?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-neutral-500 hover:text-orange-500 transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/1Cg4ewRwb1/" className="text-neutral-500 hover:text-orange-500 transition-colors duration-300">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* ডান পাশের ইমেজ এরিয়া (আইফোন গ্লাস ফ্রেম ও গ্লো) */}
        <div className="flex justify-center md:justify-end relative group">
          {/* ইমেজের পেছনে অরেঞ্জ গ্লো রিং */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 max-w-[340px] max-h-[340px] m-auto" />
          
          <div className="relative p-2 bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-orange-500/30 group-hover:scale-[1.02]">
            <Image
              src="https://i.ibb.co.com/2Y5p4Qhv/1777688598569.png"
              width={340}
              height={340}
              alt="Sheikh Muzammil Profile"
              className="rounded-full object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-500"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;