"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="section-number">01</span>
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="lead-text">
              Mobile App Developer with 5 years of experience specializing in Flutter and Native Android (Kotlin).
              I build scalable, maintainable applications with a focus on performance, UI/UX, and clean architecture.
            </p>
            <p>
              My approach combines technical excellence with user-centric design. Whether integrating complex APIs,
              implementing advanced state management, or optimizing performance, I'm driven by creating impactful
              solutions that users love.
            </p>
            <div className="about-highlights">
              {[
                { icon: "🎯", text: "Clean Architecture Advocate" },
                { icon: "⚡", text: "Performance Optimization Expert" },
                { icon: "🚀", text: "Cross-Platform Specialist" }
              ].map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="highlight-item"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div className="highlight-text">{highlight.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            {[
              { category: "Languages", skills: ["Dart", "Kotlin", "Java"] },
              { category: "Frameworks", skills: ["Flutter", "Android SDK"] },
              { category: "State Management", skills: ["Provider", "GetX", "BLoC"] },
              { category: "Architecture", skills: ["MVVM", "Clean Architecture"] },
              { category: "Tools & APIs", skills: ["Git", "RESTful APIs", "WebSockets", "Google Maps", "Figma"] },
              { category: "Payment Integration", skills: ["bKash", "Stripe", "ABA Pay", "MyFatoorah"] }
            ].map((group, index) => (
              <div key={index} className="skill-category">
                <h3>{group.category}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
