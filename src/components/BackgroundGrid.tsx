"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundGrid() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -300]);

  return (
    <motion.div 
      style={{ 
        y, 
        position: "fixed", 
        top: "-10%", 
        left: "-10%", 
        width: "120%", 
        height: "120%", 
        zIndex: -1,
        pointerEvents: "none"
      }}
    >
      <div className="grid-background" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}></div>
    </motion.div>
  );
}
