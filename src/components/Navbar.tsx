"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun } from "lucide-react";
import Magnetic from "./Magnetic";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Read the actual theme from DOM (set by the inline script in layout.tsx)
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    setTheme(currentTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`nav ${isScrolled ? 'scrolled' : ''}`}
    >
      <Magnetic>
        <a href="#" className="nav-logo">AH</a>
      </Magnetic>
      <div className="nav-links">
        {["About", "Experience", "Projects"].map((item) => (
          <Magnetic key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="nav-link"
            >
              {item}
            </a>
          </Magnetic>
        ))}
        <Magnetic>
          <a href="#contact" className="nav-link nav-link-highlight">Contact</a>
        </Magnetic>
        <Magnetic>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {theme === null ? (
              // Render a stable placeholder during SSR and before hydration
              <span style={{ display: 'inline-block', width: '1em', height: '1em' }} />
            ) : theme === 'dark' ? (
              <><Sun className="icon-sun" /> Light</>
            ) : (
              <><Moon className="icon-moon" /> Dark</>
            )}
          </button>
        </Magnetic>
      </div>
    </motion.nav>
  );
}
