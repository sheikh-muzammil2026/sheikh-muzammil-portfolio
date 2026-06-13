import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full min-h-screen mx-auto overflow-x-hidden relative bg-slate-50 dark:bg-[#030014] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      
      {/* 🔮 ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো ইফেক্ট (iOS স্টাইল ভিজ্যুয়াল ডেপথ) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-500/10 dark:bg-orange-500/[0.03] blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/10 dark:bg-purple-500/[0.02] blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-orange-500/10 dark:bg-amber-500/[0.02] blur-[130px] pointer-events-none z-0" />

      {/* 🚀 মেইন কন্টেন্ট সেকশনস */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
      </div>
  
    </main>
  );
}