"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Gitlab, 
  Copy, 
  Check, 
  Send, 
  GraduationCap, 
  MapPin, 
  Clock,
  ExternalLink
} from "lucide-react";
import TextReveal from "./TextReveal";
import { WhatsAppIcon } from "./PlatformIcons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [timeString, setTimeString] = useState("");

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeString(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Generate mailto link
    const mailtoSubject = encodeURIComponent(subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] from ${name}`);
    const mailtoBody = encodeURIComponent(`Hi Anowar,\n\n${message}\n\nFrom: ${name} (${email})`);
    
    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:hossainanowar72@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 400);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="section-number">04</span>
            <TextReveal text="Get in Touch" delay={150} />
          </motion.h2>

          <div className="contact-grid">
            {/* Left Column: Direct Info & Quick Copy */}
            <motion.div 
              className="contact-info-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="contact-intro">
                Have an ambitious mobile application to build or want to scale an existing codebase? I&apos;m available for senior mobile roles, architectural consultations, and impactful projects.
              </p>

              {/* Timezone Status Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={15} className="text-cyan-400" />
                  <span>Dhaka, Bangladesh (GMT+6)</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-cyan-300">
                  <Clock size={13} />
                  <span>{timeString || "12:00 PM"}</span>
                </div>
              </div>

              {/* Quick Copy Contact Items */}
              <div className="contact-quick-items">
                {/* Email Item */}
                <div 
                  className="contact-quick-btn group"
                  onClick={() => handleCopy("hossainanowar72@gmail.com", "email")}
                  title="Click to copy email address"
                >
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      hossainanowar72@gmail.com
                    </div>
                  </div>
                  <button className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div 
                  className="contact-quick-btn group"
                  onClick={() => handleCopy("+8801752867007", "phone")}
                  title="Click to copy phone number"
                >
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 font-medium">Direct Phone</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      +880 1752 867007
                    </div>
                  </div>
                  <button className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* WhatsApp Instant Chat Item */}
                <a 
                  href="https://wa.me/8801752867007?text=Hi%20Anowar,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20mobile%20engineering%20opportunity."
                  target="_blank"
                  rel="noreferrer"
                  className="contact-quick-btn contact-whatsapp-btn group"
                  title="Chat directly on WhatsApp"
                >
                  <div className="contact-icon-box contact-icon-whatsapp">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Instant Chat</div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                      <span>Chat on WhatsApp</span>
                      <ExternalLink size={12} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                  <span className="contact-whatsapp-badge">
                    Quick Reply
                  </span>
                </a>
              </div>

              {/* Education Card */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <GraduationCap size={16} />
                  <span>Academic Background</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  B.Sc. in Computer Science and Engineering
                </h4>
                <div className="text-xs text-slate-400">
                  Model Institute of Science and Technology (MIST) • Class of 2019
                </div>
              </div>
            </motion.div>

            {/* Right Column: Modern Interactive Form */}
            <motion.div 
              className="contact-form-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="contact-form-title">Send a Direct Message</h3>
              <p className="contact-form-desc">
                Drop your thoughts or project specs below. I typically respond within 12-24 hours.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="form-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text"
                    placeholder="New Mobile Project / Role Discussion"
                    className="form-input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea 
                    required
                    placeholder="Describe your project, app requirements, or timeline..."
                    className="form-textarea"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formSubmitted}
                >
                  {formSubmitted ? (
                    <>
                      <Check size={18} className="text-emerald-400" />
                      <span>Opening Email Client...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {formSubmitted && (
                  <p className="text-xs text-emerald-400 text-center mt-2.5">
                    ✓ Direct email draft opened in your mail application.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              © 2026 <strong>Md. Anowar Hossain</strong>. Designed with modern web aesthetics & clean architecture.
            </div>

            <div className="footer-social-links">
              <a 
                href="https://github.com/hossain72" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://gitlab.com/anowar72" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
              >
                <Gitlab size={15} />
                <span>GitLab</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/hossain72/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
