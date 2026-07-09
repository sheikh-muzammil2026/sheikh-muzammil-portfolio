"use client";

import React from 'react';

export default function Testimonials(){
  // Professional tech-focused dummy client reviews matching your real portfolio metrics
  const reviews = [
    {
      name: "Dr. Fazlul Karim",
      role: "Director, Educational Infrastructure Guild",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Sheikh Muzammil transformed our manual institutional workflows into a seamless Next.js ecosystem. His expertise in building robust, production-grade MERN architectures and maintaining high uptime is commendable."
    },
    {
      name: "Sarah Jenkins",
      role: "Founder, StayNest Ventures",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Exceeded all expectations with our full-stack property management application. The implementation of role-based authorization and smooth dashboard tracking workflows greatly accelerated our scaling."
    },
    {
      name: "Ahmed Tariq",
      role: "Chief Administrator, As-Salam Institute",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Muzammil doesn't just write code; he engineers long-term web solutions. His outstanding management of our custom platform ensures zero downtime and top-tier database integrity."
    },
    {
      name: "Marcus Vance",
      role: "Product Owner, SunCart Systems",
      rating: "⭐⭐⭐⭐⭐",
      comment: "A highly reliable full-stack developer. Delivered an incredibly responsive e-commerce experience using modern state management practices. His integration of secure checkout logic was flawless."
    }
  ];

  // Duplicating array elements to sustain an uninterrupted scrolling loop sequence
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section 
      id="testimonials" 
      className="py-24 px-6 bg-[#030303] text-[#ededed] relative overflow-hidden"
    >
      {/* Ambient decorative blur background aligned with your core layout */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-orange-500/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 mb-14">
        {/* Section Header Definition */}
        <div className="mb-14 space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> Endorsements
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              Testimonials
            </span>
          </h2>
        </div>
      </div>

      {/* Marquee Animation Workspace Zone */}
      <div className="relative w-full flex overflow-x-hidden pt-4 pb-8 group">
        
        {/* Isolated CSS Animation Injection */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes marqueeLeft {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-custom-marquee {
              display: flex;
              gap: 2rem;
              animation: marqueeLeft 30s linear infinite;
            }
            .group:hover .animate-custom-marquee {
              animation-play-state: paused;
            }
          `
        }} />

        <div className="animate-custom-marquee flex whitespace-nowrap">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="w-[300px] sm:w-[420px] relative bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] hover:border-orange-500/30 transition-all duration-500 whitespace-normal flex-shrink-0"
            >
              {/* Premium glassmorphism top sheen effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl pointer-events-none" />

              {/* Decorative quotation mark asset */}
              <div className="absolute right-6 top-4 text-6xl text-orange-500/[0.05] pointer-events-none select-none font-serif">
                “
              </div>

              <div>
                <div className="text-xs mb-3 select-none tracking-wider">
                  {review.rating}
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-medium">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Secure Profile Panel Meta Section */}
              <div className="flex items-center gap-4 border-t border-white/[0.04] pt-4 mt-auto relative z-10">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-400 font-mono font-bold flex items-center justify-center text-sm border border-orange-500/20 flex-shrink-0">
                  {review.name[0]}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                    {review.name}
                  </h4>
                  <p className="text-[11px] font-mono text-neutral-500 mt-0.5 truncate">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Interactive dynamic hover border indicator line */}
              <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/30 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
