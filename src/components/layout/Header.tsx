"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (pathname === "/") {
        const sections = ["about", "contact"];
        let current = "";
        
        // Also check if we are at the top (hero section)
        if (window.scrollY < 200) {
           current = ""; // neither about nor contact
        }

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // A bit more forgiving intersection detection
            if (rect.top <= 300 && rect.bottom >= 300) {
              current = section;
              break;
            }
          }
        }
        setActiveHash(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname !== "/") return false;
      const hash = href.substring(2);
      // If we are at the very top of the page, we could make nothing active,
      // but to match previous behavior, let's see if the hash matches what's on screen.
      return activeHash === hash;
    }
    // Strict path matching for expertise, experience, education
    return pathname === href;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          aria-label="Home"
        >
          {portfolioData.profile.name}
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-brand-sky text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky rounded-md"
            >
              {isActive(link.href) && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-brand-blue/10 rounded-md border border-brand-blue/20"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={cn("relative z-10", isActive(link.href) ? "text-white" : "")}>
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        <a 
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-surface text-white text-sm font-medium hover:text-brand-sky hover:border-brand-sky/30 border border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

