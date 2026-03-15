"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          this.x -= dx / 50;
          this.y -= dy / 50;
        }

        // Wrap around edges
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        const color = isLight ? `rgba(124, 58, 237, ${this.opacity * 0.5})` : `rgba(167, 139, 250, ${this.opacity})`;
        ctx!.fillStyle = color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    const animateParticles = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            const lineColor = isLight
                ? `rgba(124, 58, 237, ${0.1 * (1 - distance / 120)})`
                : `rgba(167, 139, 250, ${0.18 * (1 - distance / 120)})`;
            ctx!.strokeStyle = lineColor;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.stroke();
          }
        });
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
        <div className="hero-label">Mobile App Developer</div>
        <h1 className="hero-title">
          <span className="hero-title-line">Md. Anowar</span>
          <span className="hero-title-line hero-title-accent">Hossain</span>
        </h1>
        <p className="hero-description">
          Crafting scalable mobile experiences with Flutter & Kotlin. 
          5 years of turning complex requirements into elegant, performant applications.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">Apps Shipped</div>
          </div>
          <div className="stat">
            <div className="stat-number">2</div>
            <div className="stat-label">Best Dev Awards</div>
          </div>
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#projects" className="btn btn-secondary">View Work</a>
          <a href="/Anowar Hossain.pdf" download className="btn btn-accent">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </a>
        </div>
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
