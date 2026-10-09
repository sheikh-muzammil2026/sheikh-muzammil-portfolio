import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

  title: "Sheikh Muzammil — Full-Stack & Next.js Developer", 
  description: "Sheikh Muzammil is a full-stack web developer from Bangladesh specializing in Next.js, React, Node.js, Express, and MongoDB. Showcasing modern full-stack architectures and enterprise platforms.",
  
  keywords: [
    "Sheikh Muzammil",
    "Sheikh Muzammil Developer",
    "Full Stack Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "React Developer Portfolio",
    "MERN Stack Developer",
    "Software Engineer Bangladesh"
  ],
  
  authors: [{ name: "Sheikh Muzammil", url: "https://sheikh-muzammil-portfolio.vercel.app" }],
  creator: "Sheikh Muzammil",
  publisher: "Sheikh Muzammil",

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  manifest: '/site.webmanifest',

  openGraph: {
    title: "Sheikh Muzammil | Full-Stack & Next.js Developer",
    description: "Building modern, secure, and high-performance full-stack web applications using Next.js and the MERN Stack.",
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
    title: "Sheikh Muzammil | Full-Stack Web Developer",
    description: "Specializing in Next.js, robust architectures, and scalable full-stack web applications.",
    images: ["https://i.ibb.co.com/2Y5p4Qhv/1777688598569.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="bg-slate-950 text-slate-100 min-h-screen w-full overflow-x-hidden antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
