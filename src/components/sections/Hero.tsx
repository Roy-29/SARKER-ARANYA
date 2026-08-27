"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-brand-mint/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-8 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-white/30" />
            <span className="text-sm font-medium tracking-widest uppercase text-white/70">
              {portfolioData.profile.role}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-8"
          >
            Analog IC Design & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-sky via-brand-blue to-brand-mint">
              Layout Engineering.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            {portfolioData.profile.tagline} {portfolioData.profile.bio.split(".")[0]}.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#experience"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              View Experience
            </a>
            <a 
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center h-14 px-8 rounded-full bg-surface text-white font-medium hover:text-brand-sky border border-white/5 hover:border-brand-sky/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
            >
              <ArrowUpRight className="mr-2 w-5 h-5 opacity-70 group-hover:text-brand-sky transition-colors" />
              Download CV
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end mt-12 lg:mt-0 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-sm lg:max-w-full aspect-3/4 lg:aspect-3/4 rounded-[32px] overflow-hidden bg-surface border border-white/10 group"
          >
            <Image 
              src="/profile.jpeg" 
              alt="Aranya Sarker" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
