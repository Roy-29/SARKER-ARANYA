import { PageHero } from "@/components/layout/PageHero";
import { Projects } from "@/components/sections/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience | Aranya Sarker",
  description: "Nine documented projects spanning advanced semiconductor process nodes.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero 
        title="Professional Experience" 
        description="Nine documented projects spanning advanced semiconductor process nodes." 
      />
      
      <section className="pt-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-surface border border-white/5 rounded-[32px] p-8 lg:p-12">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-2">9+</span>
              <span className="text-sm text-brand-sky uppercase tracking-wider font-medium">Tapeout Experiences</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-2">9</span>
              <span className="text-sm text-brand-sky uppercase tracking-wider font-medium">Professional Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-2">5nm–130nm</span>
              <span className="text-sm text-brand-sky uppercase tracking-wider font-medium">Technology Exposure</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-2">Sch &rarr; GDS</span>
              <span className="text-sm text-brand-sky uppercase tracking-wider font-medium">Design Experience</span>
            </div>
          </div>
        </div>
      </section>

      <Projects />
    </>
  );
}

