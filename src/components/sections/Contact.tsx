"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-white/50 mb-8">
            What&apos;s Next
          </span>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-10 max-w-4xl leading-[1.1]">
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">meaningful.</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mb-16 leading-relaxed">
            Whether you have a specific project in mind or just want to connect, my inbox is always open. I&apos;ll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Mail className="mr-3 w-6 h-6 opacity-80" />
                Say Hello
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
            </a>

            <div className="flex items-center gap-4">
              <a 
                href={`tel:${portfolioData.profile.phone}`}
                className="inline-flex items-center justify-center h-16 px-8 rounded-full bg-surface text-white font-medium hover:bg-surface-hover border border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Call Me
              </a>
              <a 
                href={portfolioData.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-16 px-8 rounded-full bg-surface text-white font-medium hover:bg-surface-hover border border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
