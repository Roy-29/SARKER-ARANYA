"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 border-t border-white/5 bg-background">
      <div className="max-w-4xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-10"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none text-gray-400"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-white font-medium mb-12">
            {portfolioData.profile.bio}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
            {portfolioData.stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="flex flex-col"
              >
                <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
                <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 p-6 md:p-8 rounded-[24px] bg-surface border border-white/5"
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Professional Summary</h3>
            <p className="text-base leading-relaxed m-0 text-gray-300">
              {portfolioData.profile.summary}
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
