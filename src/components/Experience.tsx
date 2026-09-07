"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";
import TextReveal from "./TextReveal";

export default function Experience() {
  const experiences = [
    {
      period: "Dec 2025 - Present (Part-Time)",
      title: "Senior Android Developer",
      company: "Jameel",
      location: "Riyadh, Saudi Arabia (Remote)",
      type: "Part-Time",
      description: "Leading Android core development for Jameel's passenger (Rider) and driver (Captain) ride-hailing ecosystem.",
      achievements: [
        "Architected high-performance native Android apps in Kotlin adhering strictly to Clean Architecture & MVVM with Hilt DI.",
        "Integrated real-time GPS tracking, route polylines with Google Maps SDK, and MyFatoorah payment gateway.",
        "Engineered background dispatch sync, OneSignal push notifications, and crash-resilient session management.",
        "Reduced app launch latency and memory footprint via strict memory profiling and leak canary audits."
      ]
    },
    {
      period: "October 2022 - Present",
      title: "Software Engineer",
      company: "Riseup Labs",
      location: "Dhaka, Bangladesh",
      type: "Full-Time",
      description: "Developing cross-platform and native mobile applications across fintech, education, and lifestyle sectors.",
      award: "🏆 Best Software Developer – Q2 & Q3 2024",
      achievements: [
        "Architected and deployed scalable production applications using Flutter, Dart, and Native Kotlin.",
        "Implemented robust state management architectures with Provider, GetX, and BLoC tailored to app complexity.",
        "Integrated payment gateways including bKash, ABA Pay, and Stripe with seamless deep-link return handling.",
        "Reduced crash rates below 0.2% on apps with hundreds of thousands of active users through proactive diagnostics."
      ]
    },
    {
      period: "January 2021 - September 2022",
      title: "Flutter Developer",
      company: "Tickets For Travel",
      location: "Dhaka, Bangladesh",
      type: "Full-Time",
      description: "Crafted cross-platform mobile booking applications for flight, launch, and intercity travel.",
      achievements: [
        "Built responsive ticketing and seat selection interfaces using Flutter with smooth custom transitions.",
        "Connected real-time travel availability through RESTful APIs and WebSockets.",
        "Integrated location-based station finders and map previews via Google Maps API."
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
          <TextReveal text="Work Experience" delay={150} />
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Timeline Marker Dot */}
              <div className="timeline-marker" />

              {/* Timeline Card */}
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="timeline-company">{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="timeline-period">
                    <Calendar size={12} className="inline mr-1" />
                    {exp.period}
                  </div>
                </div>

                {exp.award && (
                  <div className="timeline-award-banner">
                    <Award size={15} />
                    <span>{exp.award}</span>
                  </div>
                )}

                <p className="text-sm text-slate-300 mb-3 mt-2">
                  {exp.description}
                </p>

                <ul className="timeline-achievements">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
