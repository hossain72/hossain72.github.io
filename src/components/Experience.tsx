"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const experiences = [
    {
      period: "October 2022 - Present",
      title: "Software Engineer",
      company: "Riseup Labs",
      achievements: [
        "Developed high-performance apps in Flutter and Android (Kotlin) with clean architecture",
        "Implemented state management using Provider, GetX, and BLoC",
        "Integrated RESTful APIs, payment gateways (bKash, ABA), and deep linking",
        "Collaborated with designers and backend teams to deliver seamless UI/UX",
        "Resolved performance issues and enhanced app stability through effective debugging"
      ],
      award: "🏆 Best Software Developer – Q2 & Q3 2024"
    },
    {
      period: "January 2021 - September 2022",
      title: "Flutter Developer",
      company: "Tickets For Travel",
      achievements: [
        "Built cross-platform mobile apps with Flutter focusing on performance and scalability",
        "Integrated RESTful APIs, WebSockets, Google Maps, and Places API",
        "Collaborated on UI/UX implementation and worked closely with backend teams",
        "Improved app stability and user experience by resolving bugs and optimizing performance"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="section-number">02</span>
          Experience
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="timeline-marker"></div>
              <motion.div 
                className="timeline-content"
                whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
              >
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li key={aIdx}>{achievement}</li>
                  ))}
                </ul>
                {exp.award && (
                  <div className="timeline-award">
                    {exp.award}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
