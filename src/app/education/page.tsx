import { PageHero } from "@/components/layout/PageHero";
import { Education } from "@/components/sections/Education";
import { Awards } from "@/components/sections/Awards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Awards | Aranya Sarker",
  description: "Academic foundation and recognition.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero 
        title="Education & Awards" 
        description="Academic foundation and recognition." 
      />
      <Education />
      <Awards />
    </>
  );
}

