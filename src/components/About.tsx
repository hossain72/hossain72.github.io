"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    }
  }
};

const tagVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }
  }
};

export default function About() {
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
          <TextReveal text="About Me" delay={200} />
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
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
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, x: 10, boxShadow: "0 0 20px rgba(244, 114, 182, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="highlight-icon"
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
                  >
                    {highlight.icon}
                  </motion.div>
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
            variants={containerVariants}
          >
            {[
              { category: "Languages", skills: ["Dart", "Kotlin", "Java"] },
              { category: "Frameworks", skills: ["Flutter", "Android SDK"] },
              { category: "State Management", skills: ["Provider", "GetX", "BLoC"] },
              { category: "Architecture", skills: ["MVVM", "Clean Architecture"] },
              { category: "Tools & APIs", skills: ["Git", "RESTful APIs", "WebSockets", "Google Maps", "Figma"] },
              { category: "Payment Integration", skills: ["bKash", "Stripe", "ABA Pay", "MyFatoorah"] }
            ].map((group, index) => (
              <motion.div key={index} className="skill-category" variants={tagVariants}>
                <h3>{group.category}</h3>
                <motion.div 
                  className="skill-tags"
                  variants={containerVariants}
                >
                  {group.skills.map((skill, sIdx) => (
                    <motion.span 
                      key={sIdx} 
                      className="skill-tag"
                      variants={tagVariants}
                      whileHover={{ 
                        scale: 1.12, 
                        y: -4,
                        boxShadow: "0 6px 20px rgba(244, 114, 182, 0.2)",
                        transition: { type: "spring", stiffness: 500, damping: 15 }
                      }}
                      whileTap={{ scale: 0.92 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
