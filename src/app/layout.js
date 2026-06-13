import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  
  metadataBase: new URL("https://sheikh-muzammil-portfolio.vercel.app"),

  title: "Muzammil | Full Stack Web Developer", 
  description: "Sheikh Muzammil is a full-stack web developer from Bangladesh specializing in Next.js, React, Node.js, and MongoDB. View modern projects and full-stack solutions.",
  
  keywords: [
    "Sheikh Muzammil",
    "Sheikh Muzammil Developer",
    "Full Stack Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "React Developer Portfolio",
    "MERN Stack Developer",
    "Vibe Coding Expert",
    "Software Engineer Bangladesh"
  ],
  
  authors: [{ name: "Sheikh Muzammil", url: "https://sheikh-muzammil-portfolio.vercel.app" }],
  creator: "Sheikh Muzammil",
  publisher: "Sheikh Muzammil",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  manifest: '/site.webmanifest',

 
  openGraph: {
    title: "Muzammil | Full Stack Web Developer Portfolio",
    description: "Building modern, secure, and high-performance full-stack web applications using Next.js and MERN Stack.",
    url: "https://sheikh-muzammil-portfolio.vercel.app/", 
    siteName: "Sheikh Muzammil Portfolio",
    images: [
      {
        url: "https://i.ibb.co.com/2Y5p4Qhv/1777688598569.png", 
        width: 1200,
        height: 630,
        alt: "Sheikh Muzammil Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter/X কার্ড অপ্টিমাইজেশন
  twitter: {
    card: "summary_large_image",
    title: "Muzammil | Full Stack Web Developer",
    description: "Specializing in Next.js, robust architectures, and scalable full-stack web applications.",
    images: ["https://i.ibb.co.com/2Y5p4Qhv/1777688598569.png"],
    creator: "@your_twitter_handle", // 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="bg-[#030303] text-white min-h-screen w-full overflow-x-hidden antialiased selection:bg-orange-500/30 selection:text-orange-300">
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothTouch: true }}>
          <div className="flex flex-col min-h-screen w-full overflow-x-hidden relative">
            <Navbar />
           
            <main className="flex-grow w-full relative">
              {children}
            </main>
            <Footer />
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}