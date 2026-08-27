"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="pb-24 pt-12 md:pb-32 md:pt-16 px-6 bg-background">
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
              Education & Certifications
            </motion.h2>
          </div>
          
          <div className="md:col-span-8 flex flex-col gap-10">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-white/5 last:border-0 not-last:pb-10"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <span className="text-white/40 font-mono text-sm whitespace-nowrap mb-1">{edu.year}</span>
                  {edu.result && (
                    <span className="text-white font-medium text-sm">{edu.result}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
