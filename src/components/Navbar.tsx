"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText } from "lucide-react";
import Magnetic from "./Magnetic";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const themeTimer = setTimeout(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      setTheme(currentTheme);
    }, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(themeTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const navItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <div className="nav-wrapper">
        <motion.nav 
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`nav ${isScrolled ? 'scrolled' : ''}`}
        >
          {/* Logo */}
          <Magnetic>
            <a href="#" className="nav-logo">
              <span className="nav-logo-badge">AH</span>
              <span className="nav-logo-text">Anowar</span>
            </a>
          </Magnetic>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            {navItems.map((item) => (
              <Magnetic key={item.name}>
                <a 
                  href={item.href} 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.name}
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Actions: Theme Toggle & Resume */}
          <div className="nav-actions">
            <Magnetic>
              <button 
                onClick={toggleTheme} 
                className="theme-toggle-btn"
                aria-label="Toggle light or dark theme"
                title="Toggle Theme"
              >
                {theme === null ? (
                  <span style={{ display: 'inline-block', width: '18px', height: '18px' }} />
                ) : theme === 'dark' ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            </Magnetic>

            <Magnetic>
              <a 
                href="/Anowar Hossain.pdf" 
                download 
                className="nav-cta-btn"
              >
                <FileText size={14} />
                <span>Resume</span>
              </a>
            </Magnetic>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl md:hidden flex flex-col justify-center items-center gap-8 p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6 text-xl font-bold">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-slate-300 hover:text-cyan-400 transition-colors ${activeSection === item.id ? 'text-cyan-400' : ''}`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Anowar Hossain.pdf"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold flex items-center gap-2 shadow-lg"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
