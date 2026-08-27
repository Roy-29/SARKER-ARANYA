import { PageHero } from "@/components/layout/PageHero";
import { Skills } from "@/components/sections/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise | Aranya Sarker",
  description: "Technical depth across analog IC design, layout, and physical verification.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero 
        title="Expertise" 
        description="Technical depth across analog IC design, layout, and physical verification." 
      />
      <Skills />
    </>
  );
}

