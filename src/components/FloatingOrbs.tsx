"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="floating-orbs-container">
      <div
        className="floating-orb floating-orb-1"
        style={{
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -20}px)`,
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
      <div
        className="floating-orb floating-orb-2"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 30}px)`,
          transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
      <div
        className="floating-orb floating-orb-3"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -25}px)`,
          transition: "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
    </div>
  );
}
