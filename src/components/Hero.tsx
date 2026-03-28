"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import AnimatedCounter from './AnimatedCounter';

const roles = ["Mobile App Developer", "Flutter Expert", "Kotlin Specialist", "Clean Architecture Advocate"];

function TypewriterLabel() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === role) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === "") {
      // Move to next role
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="hero-label">
      {displayText}
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
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
          ? (opacity: number) => `rgba(236, 72, 153, ${opacity * 0.5})`
          : (opacity: number) => `rgba(244, 114, 182, ${opacity})`,
        line: isLight
          ? (alpha: number) => `rgba(8, 145, 178, ${0.1 * alpha})`
          : (alpha: number) => `rgba(34, 211, 238, ${0.15 * alpha})`,
      };
    };

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

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseSize = Math.random() * 3 + 1;
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Pulse size
        this.size = this.baseSize + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.8;

        // Mouse interaction — particles attract slightly near mouse, repel very close
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 50) {
          // Strong repel
          this.x -= dx / 20;
          this.y -= dy / 20;
        } else if (distance < 200) {
          // Gentle attract
          this.x += dx / 500;
          this.y += dy / 500;
        }

        // Wrap around edges
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        const colors = getColors();
        
        // Glow effect
        const gradient = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, colors.particle(this.opacity));
        gradient.addColorStop(1, colors.particle(0));
        
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx!.fill();

        // Core dot
        ctx!.fillStyle = colors.particle(this.opacity);
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    let time = 0;
    const animateParticles = () => {
      time++;
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const colors = getColors();

      particles.forEach(particle => {
        particle.update(time);
        particle.draw();
      });

      // Draw connections with gradient
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            const alpha = 1 - distance / 130;
            ctx!.strokeStyle = colors.line(alpha);
            ctx!.lineWidth = alpha * 1.5;
            ctx!.beginPath();
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.stroke();
          }
        });
      });

      // Draw lines to mouse cursor
      particles.forEach(p => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 180) {
          const alpha = (1 - distance / 180) * 0.4;
          ctx!.strokeStyle = colors.line(alpha * 3);
          ctx!.lineWidth = alpha * 2;
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(mouseX, mouseY);
          ctx!.stroke();
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
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-content"
      >
        <TypewriterLabel />
        <h1 className="hero-title">
          <div style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span 
              className="hero-title-line"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Md. Anowar
            </motion.span>
          </div>
          <br />
          <div style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span 
              className="hero-title-line hero-title-accent"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Hossain
            </motion.span>
          </div>
        </h1>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Crafting scalable mobile experiences with Flutter & Kotlin. 
          5 years of turning complex requirements into elegant, performant applications.
        </motion.p>
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <AnimatedCounter target="5+" label="Years Experience" />
          <AnimatedCounter target="10+" label="Apps Shipped" />
          <AnimatedCounter target="2" label="Best Dev Awards" />
        </motion.div>
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Magnetic>
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
          </Magnetic>
          <Magnetic>
            <a href="#projects" className="btn btn-secondary">View Work</a>
          </Magnetic>
          <Magnetic>
            <a href="/Anowar Hossain.pdf" download className="btn btn-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hero-visual"
      >
        <div className="code-window">
          <div className="code-header">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="code-title">main.dart</div>
          </div>
          <div className="code-content" dangerouslySetInnerHTML={{
            __html: `<pre><code><span class="code-keyword">class</span> <span class="code-class">Developer</span> {
  <span class="code-keyword">final</span> <span class="code-type">String</span> name = <span class="code-string">'Anowar Hossain'</span>;
  <span class="code-keyword">final</span> <span class="code-type">List</span>&lt;<span class="code-type">String</span>&gt; skills = [
    <span class="code-string">'Flutter'</span>,
    <span class="code-string">'Kotlin'</span>,
    <span class="code-string">'Clean Architecture'</span>,
    <span class="code-string">'MVVM'</span>,
    <span class="code-string">'State Management'</span>,
  ];
  
  <span class="code-keyword">void</span> <span class="code-function">buildAmazingApps</span>() {
    <span class="code-comment">// Magic happens here ✨</span>
  }
}</code></pre>`
          }}>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
