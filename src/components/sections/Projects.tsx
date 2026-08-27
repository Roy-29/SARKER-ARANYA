"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="experience" className="pb-24 pt-12 md:pb-32 md:pt-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Professional Project Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive track record of 9 tapeout projects across 5nm to 130nm process nodes, encompassing block-level to top-level layout, parasitic extraction, and physical verification.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-16">
          {portfolioData.projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col md:flex-row gap-8 lg:gap-12 p-8 lg:p-12 rounded-[32px] bg-surface border border-white/5 hover:border-brand-sky/40 hover:bg-surface-hover/50 transition-all duration-500"
            >
              <div className="w-full md:w-1/3 flex flex-col items-start shrink-0">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-white/40 font-mono text-sm">{project.id}</span>
                  <span className="h-px w-8 bg-white/20 group-hover:bg-brand-sky/50 transition-colors" />
                  <span className="text-brand-sky text-sm tracking-wider uppercase font-medium">
                    {project.process}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <span className="inline-block px-3 py-1 mb-6 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10">
                  {project.category}
                </span>

                {project.specs && project.specs.length > 0 && (
                  <div className="w-full grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                    {project.specs.map(spec => (
                      <div key={spec.label} className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">{spec.label}</span>
                        <span className="text-sm text-gray-300 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-full md:w-2/3 flex flex-col">
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  {project.description}
                </p>

                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Key Responsibilities</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400 leading-relaxed group/item">
                      <span className="mr-2 text-white/30 group-hover/item:text-brand-mint transition-colors">•</span>
                      <span className="group-hover/item:text-gray-300 transition-colors">{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 flex flex-wrap gap-2 border-t border-white/5 group-hover:border-brand-sky/10 transition-colors">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-sm bg-black/40 text-gray-400 text-xs border border-white/5 hover:border-brand-sky/30 hover:text-brand-sky transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
