"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // More dramatic tilt — up to 12 degrees
    setRotateX((50 - y) * 0.24);
    setRotateY((x - 50) * 0.24);
    setGlarePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <motion.div 
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 40, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transformStyle: "preserve-3d", 
        perspective: "800px", 
        position: "relative", 
        overflow: "hidden",
        transform: isHovered 
          ? `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)` 
          : "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)",
        transition: isHovered 
          ? "transform 0.1s ease-out" 
          : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }}
    >
      {/* Spotlight Glare */}
      <div 
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(244, 114, 182, 0.12) 0%, rgba(34, 211, 238, 0.04) 30%, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.3s ease",
          zIndex: 10
        }}
      />

      {/* Border glow that follows cursor */}
      <div
        style={{
          position: "absolute",
          top: -1, left: -1, right: -1, bottom: -1,
          borderRadius: "17px",
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(244, 114, 182, 0.6) 0%, rgba(34, 211, 238, 0.3) 30%, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.3s ease",
          zIndex: -1,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1.5px"
        }}
      />
      
      <div className="project-header" style={{ position: "relative", zIndex: 1 }}>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
          {project.links.map((link: any, lIdx: number) => (
            <motion.a 
              key={lIdx} 
              href={link.url} 
              target={link.url === '#' ? '_self' : '_blank'} 
              rel="noreferrer" 
              className="project-link" 
              title={link.type}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.type === 'android' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                </svg>
              )}
              {link.type === 'ios' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              )}
              {link.type === 'web' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              )}
              {link.type === 'gitlab' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                </svg>
              )}
            </motion.a>
          ))}
        </div>
      </div>
      <p className="project-description" style={{ position: "relative", zIndex: 1 }}>{project.description}</p>
      <div className="project-tech" style={{ position: "relative", zIndex: 1 }}>
        {project.tech.map((tech: string, tIdx: number) => (
          <motion.span 
            key={tIdx} 
            className="tech-tag"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
