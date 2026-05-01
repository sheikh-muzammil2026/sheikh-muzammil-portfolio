'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-50 bg-black/80 backdrop-blur-md px-6">
      <div className="flex-1">
        <a className="text-2xl font-bold text-orange-500">MyPortfolio</a>
      </div>

      <div className="hidden md:flex gap-6 font-medium">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#education">Education</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;