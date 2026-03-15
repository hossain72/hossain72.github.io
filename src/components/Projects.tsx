"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const projects = [
    {
      title: "শিক্ষক সহায়িকা",
      description: "Educational tool for teachers featuring NCTB guides, PDF viewer, video tutorials, and embedded web content. Streamlines educational resource access for teachers.",
      tech: ["Flutter", "GetX", "RESTful API", "YouTube Player", "PDF Viewer"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.a2i.teachersguide" }
      ]
    },
    {
      title: "eCook",
      description: "Smart energy tracking app integrated with electric stove devices. Displays daily usage, cost comparisons, and allows secure payment. Includes deep linking, tutorials, FAQs, and multi-language support.",
      tech: ["Flutter", "GetX", "RESTful API", "bKash & ABA Payments", "Deep Linking"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.ecook" },
        { type: "ios", url: "https://apps.apple.com/us/app/ecook/id6450396013" }
      ]
    },
    {
      title: "Islamic Quotes",
      description: "Islamic quotes application providing daily inspirational quotes from Quran and Hadith. Features A/B testing for UI optimization, quote sharing, favorites, and notifications. Built with Flutter and GetX state management.",
      tech: ["Flutter", "GetX", "A/B Testing", "Notification", "Ads Integration"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.islamicquote" },
        { type: "ios", url: "https://apps.apple.com/us/app/islamic-quotes-motivation/id6448677012" }
      ]
    },
    {
      title: "BMI Calculator - Weight Monitor",
      description: "Cross-platform BMI Calculator app enabling users to create profiles, calculate BMI, and track history for progress monitoring. Features clean UI, lightweight performance, and in-app purchases for premium features.",
      tech: ["Flutter", "Provider", "Notification", "Ads Integration", "In-app Purchase"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.bmicalculator&hl=en_US&pli=1" },
        { type: "ios", url: "https://apps.apple.com/us/app/bmi-calculator-weight-monitor/id6475051596" }
      ]
    },
    {
      title: "Easy Salah Steps: Prayer Guide",
      description: "Educational Islamic app with step-by-step visual and audio guidance for Salah. Features daily prayer times based on location, notifications, Kalimas, essential Duas, and Qibla compass. Includes in-app purchases for premium content.",
      tech: ["Flutter", "GetX", "Ads Integration", "In-app Purchase", "Notification"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.easysalahsteps&hl=en_US" },
        { type: "ios", url: "https://apps.apple.com/us/app/easy-salah-steps-prayer-guide/id6469583494" }
      ]
    },
    {
      title: "Masnun Dua & Tasbeeh Counter",
      description: "Comprehensive Islamic app featuring Masnun Duas (supplications) and digital Tasbeeh counter. Includes audio recitations, translations, and customizable counter with vibration feedback. Built with Flutter and BLoC state management.",
      tech: ["Flutter", "BLoC", "Audio Player", "Notification", "Ads Integration"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.masnoondua" },
        { type: "ios", url: "https://apps.apple.com/us/app/masnoon-dua-tasbeeh-counter/id6468927415" }
      ]
    },
    {
      title: "U-Report BD",
      description: "Native Android app with Stories, Videos, Opinion (dynamic questions from ONA with user submissions), and Results modules. Integrates dynamic question forms enabling user interaction and data submission for insightful analysis.",
      tech: ["Kotlin", "Java", "MVVM", "Retrofit", "Coroutines", "REST APIs"],
      links: [
        { type: "web", url: "#" }
      ]
    },
    {
      title: "U-Youth Burkina",
      description: "Native Android app with Stories (CRUD operations), Community chat, Opinion (RapidPro flows), Results display, and U-Programa (rule management and task assignments). Interactive platform for engagement and structured task management.",
      tech: ["Kotlin", "XML", "MVVM", "Retrofit", "Coroutines", "REST APIs"],
      links: [
        { type: "web", url: "https://riseuplabs.com/u-report-burkina-faso/" }
      ]
    },
    {
      title: "Tickets For Travel",
      description: "A comprehensive travel & ticket booking app providing best hotel deals and best-priced tickets for bus, launch, and flight. Features online payment methods and refund processing for customers.",
      tech: ["Flutter", "Payment Gateway", "REST APIs", "Booking System"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.tickets4travel.tickets4travel" }
      ]
    },
    {
      title: "Ride Sharing App",
      description: "Mobile ride-sharing application connecting drivers and passengers. Built with Flutter for cross-platform compatibility and real-time location tracking.",
      tech: ["Flutter", "Google Maps", "Real-time Tracking", "Firebase"],
      links: [
        { type: "web", url: "#" }
      ]
    },
    {
      title: "Food Delivery App",
      description: "Online food delivery application enabling customers to order food online. Features restaurant browsing, cart management, and order tracking functionality.",
      tech: ["Flutter", "Android", "REST APIs", "Order Management"],
      links: [
        { type: "gitlab", url: "https://gitlab.com/Hossain72/tourmate" }
      ]
    },
    {
      title: "E-Commerce App",
      description: "Full-featured e-commerce application for online shopping. Includes product catalog, shopping cart, checkout process, and order management system.",
      tech: ["Flutter", "Android", "Shopping Cart", "Payment Integration"],
      links: [
        { type: "gitlab", url: "https://gitlab.com/Hossain72/e-commerce" }
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="section-number">03</span>
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10, 
                rotateX: 2, 
                rotateY: -2,
                boxShadow: "var(--shadow-xl)"
              }}
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.links.map((link, lIdx) => (
                    <a key={lIdx} href={link.url} target={link.url === '#' ? '_self' : '_blank'} rel="noreferrer" className="project-link" title={link.type}>
                      {link.type === 'android' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                        </svg>
                      )}
                      {link.type === 'ios' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                      )}
                      {link.type === 'web' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      )}
                      {link.type === 'gitlab' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
