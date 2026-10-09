import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Sheikh Muzammil</h3>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Full-Stack Developer & Next.js Specialist. Engineering scalable digital platforms, modern web apps, and secure backend architectures.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <p className="flex items-center gap-2 text-sm mb-2 text-slate-300">
            <Mail size={16} className="text-purple-400 shrink-0" />
            <a href="mailto:discordsstudent@gmail.com" className="hover:text-cyan-400 transition-colors">
              discordsstudent@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 text-sm mb-2 text-slate-300">
            <Phone size={16} className="text-purple-400 shrink-0" />
            <a href="tel:+8801836376174" className="hover:text-cyan-400 transition-colors">
              +880 1836-376174
            </a>
          </p>
          <p className="flex items-center gap-2 text-sm text-slate-300">
            <MapPin size={16} className="text-purple-400 shrink-0" /> Bangladesh
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Social Profiles</h4>
          <div className="flex gap-4 items-center">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/8801836376174" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-slate-800 rounded-full hover:bg-emerald-500 hover:text-slate-950 text-slate-300 transition-all"
              title="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/sheikh-muzammil2026" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-slate-800 rounded-full hover:bg-purple-500 hover:text-slate-950 text-slate-300 transition-all"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/sheikh-muzammil-dev?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-slate-800 rounded-full hover:bg-purple-500 hover:text-slate-950 text-slate-300 transition-all"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/share/1Cg4ewRwb1/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white text-slate-300 transition-all"
              title="Facebook"
            >
              <FaFacebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© 2026 Sheikh Muzammil. All Rights Reserved. Engineered with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
