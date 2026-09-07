"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Smartphone, 
  Cpu, 
  CheckCircle2
} from "lucide-react";
import TextReveal from "./TextReveal";

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "mobile", label: "Mobile Core" },
  { id: "arch", label: "Architecture & State" },
  { id: "devops", label: "Testing & CI/CD" },
  { id: "apis", label: "APIs & Services" },
  { id: "payments", label: "Payments & SDKs" },
];

const skillsData = [
  { name: "Flutter", category: "mobile", icon: "📱", level: "Expert" },
  { name: "Dart", category: "mobile", icon: "🎯", level: "Expert" },
  { name: "Kotlin", category: "mobile", icon: "🤖", level: "Advanced" },
  { name: "Java", category: "mobile", icon: "☕", level: "Proficient" },
  { name: "MethodChannel (Native)", category: "mobile", icon: "🌉", level: "Advanced" },
  { name: "Android SDK", category: "mobile", icon: "⚙️", level: "Advanced" },
  { name: "iOS (Swift basics)", category: "mobile", icon: "🍎", level: "Familiar" },
  
  { name: "Clean Architecture", category: "arch", icon: "🏛️", level: "Specialist" },
  { name: "MVVM", category: "arch", icon: "📐", level: "Specialist" },
  { name: "BLoC", category: "arch", icon: "⚡", level: "Advanced" },
  { name: "GetX", category: "arch", icon: "🚀", level: "Expert" },
  { name: "Provider", category: "arch", icon: "🔄", level: "Advanced" },
  { name: "Hilt / Dagger", category: "arch", icon: "💉", level: "Advanced" },
  { name: "Performance & Profiling", category: "arch", icon: "⏱️", level: "Specialist" },

  { name: "Unit & Widget Testing", category: "devops", icon: "🧪", level: "Production" },
  { name: "Mockito & MockK", category: "devops", icon: "🎭", level: "Advanced" },
  { name: "CI/CD & Fastlane", category: "devops", icon: "🚀", level: "Production" },
  { name: "GitHub Actions", category: "devops", icon: "⚙️", level: "Production" },
  { name: "Store Release (Google & Apple)", category: "devops", icon: "📦", level: "Expert" },
  
  { name: "RESTful APIs", category: "apis", icon: "🌐", level: "Expert" },
  { name: "WebSockets", category: "apis", icon: "🔌", level: "Advanced" },
  { name: "Google Maps & GPS", category: "apis", icon: "🗺️", level: "Advanced" },
  { name: "Firebase Suite", category: "apis", icon: "🔥", level: "Advanced" },
  { name: "OneSignal Push", category: "apis", icon: "🔔", level: "Advanced" },
  { name: "IoT / BLE", category: "apis", icon: "📡", level: "Proficient" },
  
  { name: "bKash Gateway", category: "payments", icon: "💳", level: "Production" },
  { name: "MyFatoorah", category: "payments", icon: "💰", level: "Production" },
  { name: "Stripe", category: "payments", icon: "💎", level: "Production" },
  { name: "In-App Purchases", category: "payments", icon: "🛒", level: "Production" },
  { name: "ABA Pay", category: "payments", icon: "🏦", level: "Production" },
  { name: "RevenueCat", category: "payments", icon: "📊", level: "Production" },
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-number">01</span>
          <TextReveal text="About & Expertise" delay={150} />
        </motion.h2>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1: Core Bio & Philosophy */}
          <motion.div 
            className="bento-card bento-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="bento-badge badge-cyan">
              <Smartphone size={13} /> Senior Mobile Engineer — Flutter &amp; Kotlin
            </span>
            <h3 className="bento-main-title">
              Building apps that reach millions — across education, energy, health, mobility &amp; beyond.
            </h3>
            <p className="bento-main-text">
              I am a Senior Mobile Engineer with <strong>5+ years</strong> of production experience crafting
              high-impact applications in <strong>Flutter</strong> and <strong>Native Android (Kotlin)</strong>.
              From national-scale government platforms to IoT smart devices and global social tools,
              my work spans industries and millions of real users.
            </p>
            <p className="bento-main-text">
              Whether it&apos;s a UNICEF youth engagement platform deployed across West Africa, an IoT-connected
              smart energy monitor, a national teacher resource app for Bangladesh&apos;s ICT Division,
              or an enterprise ride-hailing ecosystem for the Middle East — I deliver production-grade,
              zero-crash mobile experiences with uncompromising architectural discipline.
            </p>

            <div className="bento-pillars">
              <div className="bento-pillar-item">
                <CheckCircle2 size={16} className="icon-cyan" />
                <span>Multi-Domain Impact</span>
              </div>
              <div className="bento-pillar-item">
                <CheckCircle2 size={16} className="icon-purple" />
                <span>Clean Architecture Expert</span>
              </div>
              <div className="bento-pillar-item">
                <CheckCircle2 size={16} className="icon-emerald" />
                <span>0.2% Crash Rate</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Award Spotlight */}
          <motion.div 
            className="bento-card bento-award"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="bento-badge badge-gold">
              <Award size={13} /> Engineering Excellence
            </span>
            <div className="award-trophy-icon">🏆</div>
            <h3 className="award-card-title">
              Best Software Developer
            </h3>
            <p className="award-card-period">
              Riseup Labs • Awarded Q2 & Q3 2024
            </p>
            <p className="award-card-desc">
              Recognized for consistently delivering mission-critical mobile solutions ahead of schedule, optimizing app stability, and mentoring teammates in clean architectural standards.
            </p>
            <div className="award-card-highlight">
              ★ Exceptional performance across cross-platform delivery & native profiling.
            </div>
          </motion.div>

          {/* Card 3: Interactive Skills Matrix */}
          <motion.div 
            className="bento-card bento-skills"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="skills-header-row">
              <div>
                <span className="bento-badge badge-cyan">
                  <Cpu size={13} /> Technical Arsenal
                </span>
                <h3 className="skills-section-heading">Skills & Competencies</h3>
              </div>

              {/* Filter Tabs */}
              <div className="skills-filter-tabs">
                {skillCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`skill-tab-pill ${activeCategory === cat.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Grid - No layout prop to eliminate hover blinking */}
            <div className="skills-grid-container">
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="skill-chip">
                  <span className="skill-chip-icon">{skill.icon}</span>
                  <div className="skill-chip-content">
                    <span className="skill-chip-name">{skill.name}</span>
                    <span className="skill-chip-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
