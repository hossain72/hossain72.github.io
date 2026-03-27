"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun } from "lucide-react";
import Magnetic from "./Magnetic";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      setTheme('dark');
    }
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
            {theme === 'dark' ? (
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
