"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
