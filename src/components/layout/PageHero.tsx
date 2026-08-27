"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="pt-32 pb-12 px-6 bg-background border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <span className="h-px w-12 bg-brand-sky/50 mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

