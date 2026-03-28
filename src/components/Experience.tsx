"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

export default function Experience() {
  const experiences = [
    {
      period: "Dec 2025 - Present (Part - Time)",
      title: "Senior Android Developer",
      company: "Jameel",
      achievements: [
        "Developed and maintained high-performance Android applications using Kotlin following Clean Architecture (MVVM) principles",
        "Designed scalable and maintainable codebases with proper separation of concerns and modularization",
        "Integrated RESTful APIs, Myfatoorah payment gateway, Google Maps, and OneSignal push notifications",
        "Led feature development from requirement analysis to deployment, ensuring high-quality deliverables",
        "Collaborated closely with UI/UX designers, backend engineers, and product stakeholders to build seamless and user-friendly applications",
        "Optimized app performance, reduced memory leaks, and improved responsiveness using advanced debugging and profiling tools",
        "Implemented dependency injection (Hilt/Dagger) for better code management and testability",
        "Ensured code quality through code reviews, best practices, and adherence to Android development standards",
        "Worked with Git-based version control and followed Agile/Scrum methodologies for efficient project delivery",
        "Published and maintained apps on the Google Play Store, including monitoring crashes via tools like Firebase Crashlytics"
      ]
    },
    {
      period: "October 2022 - Present",
      title: "Software Engineer",
      company: "Riseup Labs",
      achievements: [
        "Developed and maintained high-performance mobile applications using Flutter and Android (Kotlin) following Clean Architecture (MVVM) principles",
        "Implemented scalable state management solutions using Provider, GetX, and BLoC, ensuring maintainable and testable code",
        "Integrated RESTful APIs, payment gateways (bKash, ABA), and deep linking for seamless user experience and secure transactions",
        "Designed modular and reusable components to improve development efficiency and code quality",
        "Collaborated closely with UI/UX designers, backend engineers, and product teams to deliver intuitive and user-friendly applications",
        "Optimized app performance by identifying bottlenecks, reducing load times, and improving memory management",
        "Diagnosed and resolved complex issues, enhancing overall app stability and reliability",
        "Followed Agile/Scrum methodologies, participating in sprint planning, code reviews, and continuous improvement processes"
      ],
      award: "🏆 Best Software Developer – Q2 & Q3 2024"
    },
    {
      period: "January 2021 - September 2022",
      title: "Flutter Developer",
      company: "Tickets For Travel",
      achievements: [
        "Developed cross-platform mobile applications using Flutter, focusing on performance, scalability, and responsive UI design",
        "Integrated RESTful APIs, WebSockets, Google Maps, and Places API to deliver real-time and location-based features",
        "Worked closely with backend developers to ensure smooth data flow and API efficiency",
        "Improved application stability by identifying and fixing bugs, and optimizing performance across multiple devices"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-number">02</span>
          <TextReveal text="Experience" delay={200} />
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="timeline-marker"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: "spring", stiffness: 400 }}
                viewport={{ once: true }}
              />
              <motion.div 
                className="timeline-content"
                whileHover={{ 
                  y: -5, 
                  x: 6,
                  boxShadow: "0 8px 40px rgba(244, 114, 182, 0.1), 0 0 20px rgba(34, 211, 238, 0.05)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, aIdx) => (
                    <motion.li 
                      key={aIdx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: aIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
                {exp.award && (
                  <motion.div 
                    className="timeline-award"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    {exp.award}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
