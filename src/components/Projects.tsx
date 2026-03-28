"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import TextReveal from "./TextReveal";

export default function Projects() {
  const projects = [
    {
      title: "Jameel (Rider & Captain)",
      description: "Ride-hailing mobile applications for passengers (Rider) and drivers (Captain), enabling real-time booking, live tracking, and route navigation. Supports trip management, fare estimation, driver earnings tracking, and secure digital payments. Includes deep linking, push notifications, and performance optimizations for a scalable, seamless user experience.",
      tech: ["Kotlin", "RESTful API", "Myfatoorah", "Multi-language", "Google Maps"],
      links: [
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.jameel.rider.prod" },
        { type: "android", url: "https://play.google.com/store/apps/details?id=com.jameel.captain.prod" }
      ]
    },
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-number">03</span>
          <TextReveal text="Featured Projects" delay={200} />
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
