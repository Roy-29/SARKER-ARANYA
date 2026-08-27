import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-white mb-2">
            {portfolioData.profile.name}
          </h3>
          <p className="text-sm text-gray-400">
            {portfolioData.profile.role} based in {portfolioData.profile.location}.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">Menu</span>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-sky transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">Socials</span>
            <ul className="flex flex-col gap-2">
              {portfolioData.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-brand-sky transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit"
                  >
                    {social.name}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">Contact</span>
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit"
            >
              {portfolioData.profile.email}
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>&copy; {currentYear} {portfolioData.profile.name}. All rights reserved. Designed & Built by Swapnil Roy.</p>
        <a 
          href="#" 
          className="hover:text-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm p-1"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

