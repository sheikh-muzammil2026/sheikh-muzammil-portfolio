const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#030303] text-[#ededed] relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/3 w-[350px] h-[350px] bg-orange-500/[0.03] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-[0.2em] text-orange-500 uppercase">
            <span>●</span> Journey & Track
          </div>

          <h2 className="text-4xl font-black text-white tracking-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              Experience
            </span>
          </h2>
        </div>

        <div className="relative bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] hover:border-orange-500/30 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl pointer-events-none" />

          <div className="mb-8 border-b border-white/[0.04] pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                Full-Stack Web Developer (Self-Projects)
              </h3>

              <p className="text-xs font-mono text-neutral-500 mt-1 uppercase tracking-wider">
                Self-Employed / Independent Learning
              </p>
            </div>

            <span className="text-xs font-mono bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)] font-semibold">
              2026 – Present
            </span>
          </div>

          <ul className="space-y-5 relative z-10 text-neutral-400 text-sm md:text-base leading-relaxed">
            <li className="flex items-start gap-3 group/item">
              <span className="text-orange-500 mt-1.5 text-xs shrink-0 transition-transform duration-300 group-hover/item:scale-125">
                ✦
              </span>

              <p>
                <strong className="text-white font-semibold">
                  Advanced Next.js Architecture:
                </strong>{" "}
                Developed 3-4 complex full-stack applications using Next.js,
                implementing smooth user experiences and optimized client-server
                rendering pipelines.
              </p>
            </li>

            <li className="flex items-start gap-3 group/item">
              <span className="text-orange-500 mt-1.5 text-xs shrink-0 transition-transform duration-300 group-hover/item:scale-125">
                ✦
              </span>

              <p>
                <strong className="text-white font-semibold">
                  Secure Authentication & Database:
                </strong>{" "}
                Implemented robust security structures with{" "}
                <strong className="text-orange-400 font-medium">
                  JWT (JSON Web Tokens)
                </strong>{" "}
                and optimized complex data management using high-performance{" "}
                <strong className="text-orange-400 font-medium">
                  MongoDB Aggregation Pipelines
                </strong>
                .
              </p>
            </li>

            <li className="flex items-start gap-3 group/item">
              <span className="text-orange-500 mt-1.5 text-xs shrink-0 transition-transform duration-300 group-hover/item:scale-125">
                ✦
              </span>

              <p>
                <strong className="text-white font-semibold">
                  E-Commerce & Payments:
                </strong>{" "}
                Integrated secure, production-ready, and seamless checkout flows
                utilizing the{" "}
                <strong className="text-orange-400 font-medium">
                  Stripe Payment Gateway
                </strong>
                .
              </p>
            </li>

            <li className="flex items-start gap-3 group/item">
              <span className="text-orange-500 mt-1.5 text-xs shrink-0 transition-transform duration-300 group-hover/item:scale-125">
                ✦
              </span>

              <p>
                <strong className="text-white font-semibold">
                  AI-Assisted Development:
                </strong>{" "}
                Experienced in leveraging modern AI tools to accelerate feature
                development, debugging, code reviews, and refactoring while
                maintaining code quality and scalability.
              </p>
            </li>

            <li className="flex items-start gap-3 group/item">
              <span className="text-orange-500 mt-1.5 text-xs shrink-0 transition-transform duration-300 group-hover/item:scale-125">
                ✦
              </span>

              <p>
                <strong className="text-white font-semibold">
                  Deployment & Workflows:
                </strong>{" "}
                Managed full-stack application lifecycles from UI implementation
                to production deployment using{" "}
                <strong className="text-orange-400 font-medium">
                  Vercel
                </strong>
                .
              </p>
            </li>
          </ul>

          <div className="absolute bottom-0 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent group-hover:via-orange-500/40 transition-all duration-700" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
