"use client";

import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleCopy = (text: string, type: 'email' | 'phone', e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="section-number">04</span> Let's Connect
          </motion.h2>
          
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="contact-intro">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="contact-methods">
                <a href="mailto:hossainanowar72@gmail.com" className="contact-method" onClick={(e) => handleCopy("hossainanowar72@gmail.com", "email", e)}>
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="contact-label">Email</div>
                    <div className="contact-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {copiedEmail ? 'Copied!' : 'hossainanowar72@gmail.com'} 
                      {copiedEmail ? <Check size={14} className="text-green-500" /> : <Copy size={14} opacity={0.5} />}
                    </div>
                  </div>
                </a>

                <a href="tel:+8801752867007" className="contact-method" onClick={(e) => handleCopy("+8801752867007", "phone", e)}>
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {copiedPhone ? 'Copied!' : '+880 1752 867007'}
                      {copiedPhone ? <Check size={14} className="text-green-500" /> : <Copy size={14} opacity={0.5} />}
                    </div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/hossain72/" target="_blank" rel="noreferrer" className="contact-method">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-label">LinkedIn</div>
                    <div className="contact-value">linkedin.com/in/hossain72</div>
                  </div>
                </a>

                <a href="https://github.com/hossain72" target="_blank" rel="noreferrer" className="contact-method">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-label">GitHub</div>
                    <div className="contact-value">github.com/hossain72</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="contact-education"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3>Education</h3>
              <div className="education-item">
                <div className="education-degree">Bachelor of Science in Computer Science and Engineering</div>
                <div className="education-school">Model Institute of Science and Technology (MIST)</div>
                <div className="education-location">Gazipur, Bangladesh</div>
                <div className="education-year">2019</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              © 2026 Md. Anowar Hossain. Built with passion for great mobile experiences.
            </div>
            <div className="footer-links">
              <a href="https://github.com/hossain72" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://gitlab.com/anowar72" target="_blank" rel="noreferrer">GitLab</a>
              <a href="https://www.linkedin.com/in/hossain72/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
