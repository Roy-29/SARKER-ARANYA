"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="expertise" className="pb-24 pt-12 md:pb-32 md:pt-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Core Specialization
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
          {portfolioData.coreSpecialization.map((spec, index) => (
            <motion.div
              key={spec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col p-6 rounded-[24px] border transition-colors duration-300 hover:border-brand-sky/50 ${spec.name === "Analog Layout" ? "bg-brand-blue/10 border-brand-blue/30" : "bg-surface border-white/5"}`}
            >
              <span className="text-white font-semibold mb-2">{spec.name}</span>
              <span className={`text-sm ${spec.name === "Analog Layout" ? "text-brand-sky" : "text-gray-400"}`}>{spec.level}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {portfolioData.expertise.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-white/20" />
                {skillGroup.group}
              </h3>
              
              <ul className="flex flex-col gap-4">
                {skillGroup.items.map((skill) => (
                  <li 
                    key={skill} 
                    className="text-gray-400 hover:text-brand-sky transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Technology Exposure
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8">
          {portfolioData.technologies.map((techGroup, index) => (
            <motion.div
              key={techGroup.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-8 rounded-[24px] bg-surface border border-white/5 hover:border-brand-blue/30 transition-colors duration-500"
            >
              <h3 className="text-white font-semibold text-lg mb-6">
                {techGroup.group}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {techGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 rounded-sm bg-black/40 text-gray-300 text-sm border border-white/5 hover:border-brand-mint/40 hover:text-brand-mint transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-24 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
            Professional Strengths
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {portfolioData.strengths.map((strength, index) => (
            <motion.div
              key={strength}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="px-5 py-3 rounded-full bg-surface border border-white/5 text-gray-400 text-sm hover:bg-brand-blue/10 hover:border-brand-blue/30 hover:text-brand-sky transition-all duration-300 cursor-default"
            >
              {strength}
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
