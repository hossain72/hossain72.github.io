"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: string;
  label: string;
}

export default function AnimatedCounter({ target, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  // Parse the numeric part and suffix (e.g., "5+" => 5 and "+")
  const numericPart = parseInt(target.replace(/[^0-9]/g, ''), 10);
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000; // ms
    const increment = numericPart / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <motion.div 
      ref={ref}
      className="stat"
      whileHover={{ scale: 1.08, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <div className="stat-number">
        {isInView ? count : 0}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
}
