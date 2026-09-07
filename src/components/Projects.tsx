"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal, { ProjectData } from "./ProjectModal";
import TextReveal from "./TextReveal";

const allProjects: ProjectData[] = [
  {
    title: "Jameel (Rider & Captain)",
    category: "Native Android (Kotlin)",
    description: "Enterprise ride-hailing mobile applications for passengers (Rider) and drivers (Captain), enabling real-time booking, live tracking, and route navigation. Supports trip management, fare estimation, driver earnings, and digital payments.",
    fullOverview: "Jameel is a full-featured on-demand ride hailing ecosystem built for the Middle East market. The project encompasses two dedicated applications: Rider (for passenger bookings) and Captain (for driver navigation, earnings, and dispatch management). Engineered with clean architecture to support high concurrent WebSocket updates and live GPS tracking.",
    architecture: "Native Android MVVM with Clean Architecture, Hilt for Dependency Injection, Kotlin Coroutines & Flow for asynchronous data streams, and Room for offline route caching.",
    tech: ["Kotlin", "Clean Architecture", "Google Maps SDK", "MyFatoorah Gateway", "OneSignal", "Retrofit"],
    metrics: ["99.8% Crash-Free Sessions", "Sub-second GPS Tracking", "Dual-App Fleet Ecosystem"],
    links: [
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.jameel.rider.prod", label: "Rider App" },
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.jameel.captain.prod", label: "Captain App" }
    ]
  },
  {
    title: "শিক্ষক সহায়িকা (Teacher's Guide)",
    category: "Flutter Cross-Platform",
    description: "National educational resource application for school teachers featuring NCTB curriculum guides, offline PDF viewer, video tutorials, and interactive web modules.",
    fullOverview: "Built for the Aspire to Innovate (a2i) program under the ICT Division of Bangladesh. The application empowers hundreds of thousands of educators across the country to access official educational frameworks, curriculum guidelines, video pedagogy, and teaching aids seamlessly even in rural connectivity zones.",
    architecture: "Flutter with GetX for reactive state management, background download manager for large PDF files, and custom video player caching.",
    tech: ["Flutter", "Dart", "GetX", "RESTful API", "PDF Viewer", "YouTube Player"],
    metrics: ["100K+ Active Educators", "National ICT Division Rollout", "100% Offline PDF Caching"],
    links: [
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.a2i.teachersguide", label: "Google Play" }
    ]
  },
  {
    title: "eCook Energy Monitor",
    category: "Flutter Cross-Platform",
    description: "Smart energy monitoring and IoT-connected stove management app. Displays daily consumption, cost comparisons, fault diagnostics, and secure utility payment gateways.",
    fullOverview: "An IoT-enabled utility management mobile application enabling consumers to pair with smart electric cookstoves. Visualizes hourly electricity consumption versus traditional gas costs, features automated top-ups via bKash & ABA Pay, and includes multi-language localization.",
    architecture: "Flutter Clean Architecture with GetX, secure payment tokenization, deep-link transaction confirmations, and real-time energy telemetry graphing.",
    tech: ["Flutter", "GetX", "bKash Gateway", "ABA Pay", "Deep Linking", "REST APIs"],
    metrics: ["IoT BLE Telemetry", "bKash & ABA Pay Tokenization", "Cross-Platform iOS & Android"],
    links: [
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.ecook", label: "Google Play" },
      { type: "ios", url: "https://apps.apple.com/us/app/ecook/id6450396013", label: "App Store" }
    ]
  },
  {
    title: "Islamic Quotes & Motivation",
    category: "Flutter Cross-Platform",
    description: "Daily inspirational Islamic quotes from Quran and Hadith. Features A/B testing UI optimization, quote designer, bookmarking, social share cards, and scheduled notifications.",
    fullOverview: "A beautifully crafted lifestyle application with over 100K+ installs. Implemented A/B test experiments for onboarding and monetization, yielding higher retention and ad engagement while maintaining an ad-friendly, spiritual user experience.",
    architecture: "Flutter with GetX, Firebase Remote Config for dynamic A/B test experiments, and localized daily cron notification service.",
    tech: ["Flutter", "GetX", "A/B Testing", "Firebase Cloud Messaging", "AdMob"],
    metrics: ["100K+ Installs on Google Play", "Firebase A/B Retention Testing", "4.8★ User Rating"],
    links: [
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.islamicquote", label: "Google Play" },
      { type: "ios", url: "https://apps.apple.com/us/app/islamic-quotes-motivation/id6448677012", label: "App Store" }
    ]
  },
  {
    title: "BMI Calculator & Weight Monitor",
    category: "Flutter Cross-Platform",
    description: "Cross-platform health utility enabling profile management, BMI calculation, and visual weight history progress monitoring. Features in-app purchases for premium analytics.",
    fullOverview: "A sleek health tracker supporting imperial and metric metrics, ideal weight range calculations, historical graphing, and RevenueCat in-app purchase subscriptions for detailed body composition reports.",
    architecture: "Flutter with Provider state management, SQLite local persistence, and in-app purchase integration with sandbox validation.",
    tech: ["Flutter", "Provider", "In-App Purchases", "SQLite", "Push Notifications"],
    metrics: ["RevenueCat In-App Purchases", "Zero-Latency SQLite Storage", "Dual-Store Global Launch"],
    links: [
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.bmicalculator&hl=en_US&pli=1", label: "Google Play" },
      { type: "ios", url: "https://apps.apple.com/us/app/bmi-calculator-weight-monitor/id6475051596", label: "App Store" }
    ]
  },
  {
    title: "Easy Salah Steps & Prayer Guide",
    category: "Flutter Cross-Platform",
    description: "Visual and audio guidance app for Salah (prayer). Includes GPS prayer times, Kalimas, Duas, Qibla compass, and premium content subscriptions.",
    fullOverview: "A global prayer companion app calculating accurate solar prayer times based on user coordinates. Features audio recitations for step-by-step prayer learning, offline compass integration with device magnetometer, and multi-language support.",
    architecture: "Flutter, GetX state management, CoreLocation GPS calculation algorithms, and audio player caching.",
    tech: ["Flutter", "GetX", "GPS & Compass", "Audio Player", "In-App Purchases"],
    metrics: ["Solar GPS Time Algorithm", "Audio Streaming Engine", "Magnetometer Hardware Compass"],
    links: [
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.easysalahsteps&hl=en_US", label: "Google Play" },
      { type: "ios", url: "https://apps.apple.com/us/app/easy-salah-steps-prayer-guide/id6469583494", label: "App Store" }
    ]
  },
  {
    title: "Masnun Dua & Tasbeeh Counter",
    category: "Flutter Cross-Platform",
    description: "Comprehensive supplication app featuring authentic Masnun Duas, translations, audio recitation, and customizable digital Tasbeeh counter with tactile haptics.",
    fullOverview: "Built with BLoC architecture for strict predictable state management. Includes customizable counter targets, haptic feedback on each count, audio stream synchronization, and theme personalization.",
    architecture: "Flutter with BLoC pattern, Hive key-value storage for lightning-fast state restoration, and background audio service.",
    tech: ["Flutter", "BLoC", "Audio Streamer", "Haptic Feedback", "Hive DB"],
    metrics: ["BLoC Reactive State", "Instant Hive Key-Value Cache", "Tactile Haptic Feedback"],
    links: [
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.riseuplabs.masnoondua", label: "Google Play" },
      { type: "ios", url: "https://apps.apple.com/us/app/masnoon-dua-tasbeeh-counter/id6468927415", label: "App Store" }
    ]
  },
  {
    title: "U-Report BD (UNICEF Initiative)",
    category: "Native Android (Kotlin)",
    description: "Social engagement native Android app enabling youth to voice opinions, participate in dynamic surveys from ONA, watch video stories, and review polling results.",
    fullOverview: "Developed in partnership with UNICEF Bangladesh. Bridges communities with real-time polling data, dynamic schema-driven survey generation, and low-bandwidth media streaming.",
    architecture: "Native Android with Kotlin, MVVM architecture, Retrofit for REST APIs, and Coroutines for high-throughput poll submissions.",
    tech: ["Kotlin", "Java", "MVVM", "Retrofit", "Coroutines", "ONA Dynamic Forms"],
    metrics: ["UNICEF Official Partner", "Dynamic ONA Form Engine", "Nationwide Youth Engagement"],
    links: [
      { type: "web", url: "https://riseuplabs.com/portfolio/u-report-bangladesh/", label: "Case Study" }
    ]
  },
  {
    title: "U-Youth Burkina Faso",
    category: "Native Android (Kotlin)",
    description: "Youth empowerment platform featuring Community Chat, RapidPro opinion flows, dynamic surveys, and rule-based task management assignments.",
    fullOverview: "An international deployment in West Africa supporting multi-dialect French localization, RapidPro webhook flows, community peer-to-peer engagement, and offline survey queueing.",
    architecture: "Native Kotlin, MVVM, Room DB for offline survey drafts, and modular component architecture.",
    tech: ["Kotlin", "MVVM", "RapidPro Flows", "Retrofit", "Coroutines"],
    metrics: ["West Africa Multi-Country Deployment", "RapidPro Webhook Automation", "Offline Survey Queueing"],
    links: [
      { type: "web", url: "https://riseuplabs.com/u-report-burkina-faso/", label: "Case Study" }
    ]
  },
  {
    title: "Tickets For Travel",
    category: "Flutter Cross-Platform",
    description: "Comprehensive travel booking application for domestic & international flights, launch trips, and bus routes with instant seat maps and payment checkout.",
    fullOverview: "All-in-one travel commerce app integrating airline GDS systems, local bus reservation APIs, and vessel schedules. Features live seat selection, instant refunds, and multi-gateway checkout.",
    architecture: "Flutter, RESTful APIs, WebSockets for seat lock concurrency, and localized payment processing.",
    tech: ["Flutter", "Payment Gateway", "WebSockets", "Seat Lock Engine"],
    metrics: ["Multi-Gateway Travel Checkout", "Interactive Seat Selection", "Concurrent WebSocket Lock"],
    links: [
      { type: "android", url: "https://play.google.com/store/apps/details?id=com.tickets4travel.tickets4travel", label: "Google Play" }
    ]
  },
  {
    title: "Fleet & Ride Sharing Platform",
    category: "Flutter Cross-Platform",
    description: "Real-time fleet ride-sharing mobile application connecting drivers and passengers with live GPS telemetry, distance estimations, and in-app chat.",
    fullOverview: "Cross-platform mobile solution for taxi and carpool coordination. Integrates Google Maps direction polylines, driver availability states, and trip fare calculations.",
    architecture: "Flutter, Firebase Realtime Database for driver live telemetry, and Google Maps Navigation SDK.",
    tech: ["Flutter", "Google Maps", "Real-time Telemetry", "Firebase"],
    metrics: ["Real-time Driver Polylines", "Firebase Live Telemetry", "Clean Architecture Pattern"],
    links: [
      { type: "gitlab", url: "https://gitlab.com/anowar72", label: "GitLab Code" }
    ]
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "flutter" | "kotlin" | "live">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleSelectProject = useCallback((proj: ProjectData) => {
    setSelectedProject(proj);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const filteredProjects = allProjects.filter((project) => {
    // Tab filter
    if (activeFilter === "flutter" && !project.category?.toLowerCase().includes("flutter")) return false;
    if (activeFilter === "kotlin" && !project.category?.toLowerCase().includes("kotlin")) return false;
    if (activeFilter === "live" && !project.links.some(l => l.type === "android" || l.type === "ios")) return false;

    // Search query filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchDesc = project.description.toLowerCase().includes(q);
      const matchTech = project.tech.some(t => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchTech;
    }

    return true;
  });

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
          <TextReveal text="Featured Projects" delay={150} />
        </motion.h2>

        {/* Controls: Filter Tabs & Search */}
        <div className="projects-controls">
          <div className="project-tabs">
            <button 
              type="button"
              className={`project-tab-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Projects ({allProjects.length})
            </button>
            <button 
              type="button"
              className={`project-tab-btn ${activeFilter === "flutter" ? "active" : ""}`}
              onClick={() => setActiveFilter("flutter")}
            >
              📱 Flutter Apps
            </button>
            <button 
              type="button"
              className={`project-tab-btn ${activeFilter === "kotlin" ? "active" : ""}`}
              onClick={() => setActiveFilter("kotlin")}
            >
              🤖 Kotlin Native
            </button>
            <button 
              type="button"
              className={`project-tab-btn ${activeFilter === "live" ? "active" : ""}`}
              onClick={() => setActiveFilter("live")}
            >
              ⭐ Live on Stores
            </button>
          </div>

          {/* Search Bar */}
          <div className="project-search-wrapper">
            <Search size={16} className="project-search-icon" />
            <input 
              type="text"
              placeholder="Search apps, Flutter, Kotlin..."
              className="project-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid without layout prop to prevent flickering */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              onSelect={handleSelectProject}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty-state">
            <p>No matching projects found for &quot;{searchQuery}&quot;.</p>
            <button 
              type="button"
              onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
              className="btn btn-secondary"
              style={{ marginTop: '1rem', padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Case Study Details Modal */}
        <ProjectModal 
          project={selectedProject}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
