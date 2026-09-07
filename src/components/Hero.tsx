"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send } from 'lucide-react';
import Magnetic from './Magnetic';
import AnimatedCounter from './AnimatedCounter';
import InteractivePhone from './InteractivePhone';

const roles = [
  "Senior Mobile App Developer",
  "Flutter Specialist (Cross-Platform)",
  "Native Android & Kotlin Engineer",
  "Clean Architecture & BLoC / GetX Advocate"
];

function TypewriterLabel() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 150);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length - 1));
      }, 35);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + 1));
      }, 65);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="hero-role-typewriter">
      <span>{displayText}</span>
      <span className="typewriter-cursor" />
    </div>
  );
}

class Particle {
  x: number;
  y: number;
  baseSize: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.baseSize = Math.random() * 2.5 + 1;
    this.size = this.baseSize;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
    this.pulseOffset = Math.random() * Math.PI * 2;
  }

  update(time: number, width: number, height: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    this.size = this.baseSize + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.8;
  }

  draw(ctx: CanvasRenderingContext2D, colorFn: (opacity: number) => string) {
    ctx.fillStyle = colorFn(this.opacity);
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.5, this.size), 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const getColors = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      return {
        particle: isLight
          ? (opacity: number) => `rgba(8, 145, 178, ${opacity * 0.45})`
          : (opacity: number) => `rgba(6, 182, 212, ${opacity * 0.85})`,
        line: isLight
          ? (alpha: number) => `rgba(124, 58, 237, ${0.08 * alpha})`
          : (alpha: number) => `rgba(139, 92, 246, ${0.14 * alpha})`,
      };
    };

    const particleCount = Math.min(window.innerWidth > 768 ? 55 : 25, 60);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    let time = 0;
    const animateParticles = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getColors();

      particles.forEach(particle => {
        particle.update(time, canvas.width, canvas.height);
        particle.draw(ctx, colors.particle);
      });

      // Draw subtle connection lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const alpha = 1 - distance / 120;
            ctx.strokeStyle = colors.line(alpha);
            ctx.lineWidth = alpha * 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      // Connect to mouse cursor
      particles.forEach(p => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 160) {
          const alpha = (1 - distance / 160) * 0.4;
          ctx.strokeStyle = colors.line(alpha * 2.5);
          ctx.lineWidth = alpha * 1.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Hero Left Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="hero-content"
      >
        {/* Status Pill */}
        <div className="hero-status-pill">
          <span className="status-dot" />
          <span>Available for High-Impact Mobile Engineering</span>
        </div>

        {/* Dynamic Typewriter Role */}
        <TypewriterLabel />

        {/* Title */}
        <h1 className="hero-title">
          <span>Md. Anowar</span>
          <br />
          <span className="hero-title-accent">Hossain</span>
        </h1>

        {/* Description */}
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Senior Mobile Engineer with <strong>5+ years</strong> of expertise crafting high-performance, scalable applications with <strong>Flutter</strong> and <strong>Native Android (Kotlin)</strong>. Dedicated to Clean Architecture, fluid 60fps UX, and bulletproof reliability.
        </motion.p>

        {/* Stats Strip */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="hero-stat-item">
            <AnimatedCounter target="5+" label="Years Exp." />
          </div>
          <div className="hero-stat-item">
            <AnimatedCounter target="10+" label="Apps Shipped" />
          </div>
          <div className="hero-stat-item">
            <AnimatedCounter target="2" label="Best Dev Awards" />
          </div>
        </motion.div>

        {/* Call to Actions */}
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
        >
          <Magnetic>
            <a href="#projects" className="btn btn-primary">
              <span>Explore Work</span>
              <ArrowRight size={16} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn btn-secondary">
              <Send size={15} />
              <span>Get in Touch</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="/Anowar Hossain.pdf" download className="btn btn-accent">
              <Download size={15} />
              <span>Resume</span>
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Hero Right Visual: Interactive Phone Mockup */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="hero-visual"
      >
        <InteractivePhone />
      </motion.div>
    </section>
  );
}
