import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      let current = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={cn(
              "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
              isScrolled
                ? "bg-zinc-900/80 backdrop-blur-md border border-zinc-800/50 shadow-lg shadow-black/20"
                : "bg-transparent border border-transparent"
            )}
          >
            <a href="#hero" className="text-xl font-bold tracking-tighter text-zinc-100 hover:text-indigo-400 transition-colors">
              KP.
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-zinc-100",
                    activeSection === item.href.substring(1) ? "text-zinc-100" : "text-zinc-400"
                  )}
                >
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-zinc-800/80 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          "fixed inset-0 z-30 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className={cn(
              "text-3xl font-bold tracking-tighter transition-colors",
              activeSection === item.href.substring(1) ? "text-indigo-400" : "text-zinc-400"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
