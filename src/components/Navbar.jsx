'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-5 transition-all duration-300">
        <nav 
          className={`w-full max-w-6xl flex items-center justify-between px-6 py-3.5 rounded-2xl md:rounded-3xl transition-all duration-500 ${
            scrolled 
              ? 'bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.7)]' 
              : 'bg-white/[0.01] border border-white/[0.03] backdrop-blur-md'
          }`}
        >
          <div className="flex-1">
            <Link href="/" className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
              <span className="text-orange-500 animate-[pulse_1.5s_infinite]">●</span>
              Sheikh Muzammil
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href}
                className="text-neutral-400 hover:text-orange-400 transition-colors duration-300 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col justify-center items-center w-8 h-8 relative z-50 focus:outline-none bg-white/5 border border-white/10 rounded-xl p-1.5"
            aria-label="Toggle Menu"
          >
            <span className={`h-[2px] w-5 bg-neutral-200 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`h-[2px] w-5 bg-neutral-200 rounded-full my-[3px] transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-5 bg-neutral-200 rounded-full transition-transform duration-300 ${isOpen ? '-rotate-45 translate-y-[-5px]' : ''}`} />
          </button>
        </nav>
      </header>

      <div 
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 font-mono text-lg tracking-widest uppercase">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-300 hover:text-orange-400 transition-colors duration-300 font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
