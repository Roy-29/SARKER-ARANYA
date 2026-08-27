"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export function Awards() {
  if (!portfolioData.awards || portfolioData.awards.length === 0) return null;

  return (
    <section id="awards" className="pb-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6"
            >
              Awards & Recognition
            </motion.h2>
          </div>
          
          <div className="md:col-span-8 flex flex-col gap-6">
            {portfolioData.awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-6 rounded-[24px] bg-surface border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-6 shrink-0" />
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{award.title}</h3>
                </div>
                {award.details && (
                  <div className="mt-6 ml-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {award.details.map((detail, idx) => (
                      <span key={idx} className="text-sm text-gray-400">
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
