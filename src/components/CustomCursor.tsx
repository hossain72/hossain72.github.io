"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const clickable = target.closest('a, button, .project-card, .skill-chip, input, textarea, [role="button"]');
      setIsHovering(!!clickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - (isHovering ? 22 : 10),
          y: mousePosition.y - (isHovering ? 22 : 10),
          width: isHovering ? 44 : 20,
          height: isHovering ? 44 : 20,
          opacity: isHovering ? 0.35 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99999,
          borderRadius: '50%',
          border: '2px solid var(--color-accent-primary)',
          backgroundColor: isHovering ? 'var(--color-accent-primary)' : 'transparent',
        }}
      />
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 35, mass: 0.1 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          pointerEvents: 'none',
          zIndex: 100000,
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent-primary)',
        }}
      />
    </>
  );
}
