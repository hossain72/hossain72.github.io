"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
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
      <div className="nav-logo">AH</div>
      <div className="nav-links">
        <Link href="#about" className="nav-link">About</Link>
        <Link href="#experience" className="nav-link">Experience</Link>
        <Link href="#projects" className="nav-link">Projects</Link>
        <Link href="#contact" className="nav-link nav-link-highlight">Contact</Link>
        {mounted && (
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle light/dark mode" 
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        )}
      </div>
    </motion.nav>
  );
}
