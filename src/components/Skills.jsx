'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: 'Next.js', primary: true },
    { name: 'React.js', primary: true },
    { name: 'JavaScript (ES6+)', primary: true },
    { name: 'Tailwind CSS', primary: true },
    { name: 'HTML5 & CSS3', primary: false },
    { name: 'REST APIs', primary: false },
  ];

  const backendSkills = [
    { name: 'Node.js', primary: true },
    { name: 'Express.js', primary: true },
    { name: 'MongoDB', primary: true },
    { name: 'Better-Auth', primary: true },
    { name: 'PHP & MySQL', primary: false },
    { name: 'Apache Server', primary: false },
    { name: 'Linux (Ubuntu)', primary: false },
  ];

  // Prisma বাদ দিয়ে শুধুমাত্র আপনার ব্যবহৃত টুলসগুলো যুক্ত করা হয়েছে
  const toolSkills = [
    { name: 'Git & GitHub', primary: true },
    { name: 'VS Code', primary: true },
    { name: 'MongoDB Compass', primary: true },
    { name: 'Vercel', primary: true },
    { name: 'Render / Netlify', primary: false },
    { name: 'Postman', primary: false },
    { name: 'Figma (UI/UX)', primary: false },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-[#030303] text-[#ededed] relative overflow-hidden">
      {/* Background Glowing Spheres */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-orange-500/5 blur-[90px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-amber-600/5 blur-[90px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-1 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span className="animate-ping text-[8px]">●</span> Architecture
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Technical Focus</span>
          </h2>
          <p className="text-neutral-500 text-sm">Tech stack, backend systems, and developer tools I use daily</p>
        </motion.div>

        {/* 3 Skill Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          
          {/* 01 // Frontend Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-orange-500/50 hover:bg-white/[0.04] group overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="mb-4 flex justify-between items-center relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-200">
                  Frontend Dev
                </h3>
                <span className="text-[10px] font-mono bg-white/5 text-neutral-400 px-2 py-1 rounded-md border border-white/5">
                  01 // UI
                </span>
              </div>
              
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 relative z-10">
                Crafting responsive, high-performance web interfaces with modern React ecosystems and Next.js.
              </p>
            </div>

            <motion.div className="flex flex-wrap gap-2 relative z-10">
              {frontendSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono tracking-wide cursor-default border transition-colors duration-200 ${
                    skill.primary
                      ? 'bg-orange-500/10 border-orange-500/30 text-orange-300 font-semibold hover:bg-orange-500 hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                      : 'bg-white/[0.04] border-white/[0.08] text-neutral-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* 02 // Backend Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-orange-500/50 hover:bg-white/[0.04] group overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-orange-500/0 via-amber-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="mb-4 flex justify-between items-center relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-200">
                  Backend & Systems
                </h3>
                <span className="text-[10px] font-mono bg-white/5 text-neutral-400 px-2 py-1 rounded-md border border-white/5">
                  02 // SYS
                </span>
              </div>
              
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 relative z-10">
                Building RESTful APIs, handling database architectures, and secure auth systems.
              </p>
            </div>

            <motion.div className="flex flex-wrap gap-2 relative z-10">
              {backendSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono tracking-wide cursor-default border transition-colors duration-200 ${
                    skill.primary
                      ? 'bg-orange-500/10 border-orange-500/30 text-orange-300 font-semibold hover:bg-orange-500 hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                      : 'bg-white/[0.04] border-white/[0.08] text-neutral-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* 03 // Tools & Workflow Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-orange-500/50 hover:bg-white/[0.04] group overflow-hidden flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="mb-4 flex justify-between items-center relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-200">
                  Tools & Workflow
                </h3>
                <span className="text-[10px] font-mono bg-white/5 text-neutral-400 px-2 py-1 rounded-md border border-white/5">
                  03 // DEV
                </span>
              </div>
              
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 relative z-10">
                Leveraging industry-standard tools for version control, database management, deployment, and testing.
              </p>
            </div>

            <motion.div className="flex flex-wrap gap-2 relative z-10">
              {toolSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono tracking-wide cursor-default border transition-colors duration-200 ${
                    skill.primary
                      ? 'bg-orange-500/10 border-orange-500/30 text-orange-300 font-semibold hover:bg-orange-500 hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                      : 'bg-white/[0.04] border-white/[0.08] text-neutral-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
