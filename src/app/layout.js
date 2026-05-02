import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sheikh Muzammil | Professional Frontend Developer Portfolio",
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
  description: "Sheikh Muzammil is a dedicated Frontend Developer from Bangladesh specializing in Next.js, React, and MongoDB. Explore my web development projects and technical skills.",
  keywords: [
    "Sheikh Muzammil",
    "Sheikh Muzammil Developer",
    "Frontend Developer in Bangladesh",
    "Next.js Developer Bangladesh",
    "React Developer Portfolio",
    "Sheikh Muzammil Web Developer",
    "Best Web Developer in Bangladesh"
  ],
  authors: [{ name: "Sheikh Muzammil" }],
  creator: "Sheikh Muzammil",
  publisher: "Sheikh Muzammil",
  robots: "index, follow", 
  openGraph: {
    title: "Sheikh Muzammil | Frontend Developer Portfolio",
    description: "Building modern, responsive, and high-performance web applications with Next.js.",
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
  twitter: {
    card: "summary_large_image",
    title: "Sheikh Muzammil | Frontend Developer",
    description: "Specializing in building scalable web applications.",
    images: ["https://i.ibb.co.com/2Y5p4Qhv/1777688598569.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col  bg-black text-white ">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
