import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aranya Sarker | Analog IC & Layout Engineer",
  description: "Analog IC and layout design professional with experience across analog/RF circuits, custom IC design, physical verification, and 5nm–130nm semiconductor technologies.",
  openGraph: {
    title: `${portfolioData.profile.name} | Portfolio`,
    description: portfolioData.profile.tagline,
    url: "https://portfolio.com",
    siteName: portfolioData.profile.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white flex flex-col">
        <Header />
        <main className="flex-1 w-full relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
