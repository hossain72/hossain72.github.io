"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  Code2, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Zap,
  ChevronRight,
  Wifi,
  Battery,
  BarChart2,
  BookOpen,
  Globe,
  Navigation,
  Flame
} from "lucide-react";

// Multi-domain app demos — cycles every 4 seconds
const appDemos = [
  {
    id: "energy",
    label: "IoT Energy",
    icon: <Zap size={13} />,
    accentColor: "#10b981", // emerald
    badge: "eCook Energy Monitor",
    screen: "iot",
  },
  {
    id: "edtech",
    label: "EdTech",
    icon: <BookOpen size={13} />,
    accentColor: "#8b5cf6", // purple
    badge: "শিক্ষক সহায়িকা (a2i × ICT)",
    screen: "edtech",
  },
  {
    id: "unicef",
    label: "UNICEF",
    icon: <Globe size={13} />,
    accentColor: "#06b6d4", // cyan
    badge: "U-Report (UNICEF)",
    screen: "unicef",
  },
  {
    id: "mobility",
    label: "Mobility",
    icon: <Navigation size={13} />,
    accentColor: "#f59e0b", // amber
    badge: "On-Demand Ride Hailing",
    screen: "mobility",
  },
];

export default function InteractivePhone() {
  const [activeTab, setActiveTab] = useState<"app" | "arch" | "code">("app");
  const [demoIndex, setDemoIndex] = useState(0);
  const [interacted, setInteracted] = useState(false);

  // Auto-cycle demo every 4s unless user has manually picked one
  useEffect(() => {
    if (interacted) return;
    const timer = setInterval(() => {
      setDemoIndex((prev) => (prev + 1) % appDemos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [interacted]);

  const activeDemo = appDemos[demoIndex];

  return (
    <div className="phone-showcase-container">
      {/* Ambient background glow */}
      <div className="phone-ambient-glow" />

      {/* Floating Badge 1: Flutter */}
      <div className="floating-tech-badge badge-flutter">
        <span className="tech-badge-dot bg-cyan" />
        <span className="tech-badge-title">Flutter</span>
        <span className="tech-badge-sub">3.27+</span>
      </div>

      {/* Floating Badge 2: Kotlin */}
      <div className="floating-tech-badge badge-kotlin">
        <span className="tech-badge-dot bg-purple" />
        <span className="tech-badge-title">Kotlin</span>
        <span className="tech-badge-sub">Coroutines</span>
      </div>

      {/* Floating Badge 3: Clean Architecture */}
      <div className="floating-tech-badge badge-arch">
        <ShieldCheck size={15} className="icon-emerald" />
        <span className="tech-badge-title">Clean Architecture</span>
      </div>

      {/* Floating Badge 4: Award */}
      <div className="floating-tech-badge badge-award">
        <span>🏆</span>
        <span className="tech-badge-title badge-title-gold">Best Dev 2024</span>
      </div>

      {/* The Smartphone Frame */}
      <motion.div 
        className="phone-mockup-frame"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Device Buttons */}
        <div className="phone-button phone-button-vol-up" />
        <div className="phone-button phone-button-vol-down" />
        <div className="phone-button phone-button-power" />

        {/* Screen Area */}
        <div className="phone-screen">
          {/* Status Bar */}
          <div className="phone-status-bar">
            <span className="phone-time">9:41</span>
            <div className="dynamic-island">
              <span className="island-camera" />
              <span className="island-speaker" />
            </div>
            <div className="phone-indicators">
              <Wifi size={12} />
              <span className="indicator-5g">5G</span>
              <Battery size={13} />
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="phone-screen-tabs">
            <button 
              type="button"
              className={`screen-tab-btn ${activeTab === "app" ? "active" : ""}`}
              onClick={() => setActiveTab("app")}
            >
              <Sparkles size={13} />
              <span>Portfolio</span>
            </button>
            <button 
              type="button"
              className={`screen-tab-btn ${activeTab === "arch" ? "active" : ""}`}
              onClick={() => setActiveTab("arch")}
            >
              <Layers size={13} />
              <span>Clean Arch</span>
            </button>
            <button 
              type="button"
              className={`screen-tab-btn ${activeTab === "code" ? "active" : ""}`}
              onClick={() => setActiveTab("code")}
            >
              <Code2 size={13} />
              <span>Code</span>
            </button>
          </div>

          {/* Screen Content */}
          <div className="phone-content-body">
            <AnimatePresence mode="wait">

              {/* ── APP TAB: Multi-Domain Rotating Showcase ── */}
              {activeTab === "app" && (
                <motion.div
                  key="app-view"
                  className="app-screen-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Domain selector pills */}
                  <div className="domain-pills-row">
                    {appDemos.map((demo, idx) => (
                      <button
                        key={demo.id}
                        type="button"
                        className={`domain-pill ${demoIndex === idx ? "active" : ""}`}
                        style={demoIndex === idx ? { borderColor: demo.accentColor, color: demo.accentColor } : {}}
                        onClick={() => { setDemoIndex(idx); setInteracted(true); }}
                      >
                        {demo.icon}
                        <span>{demo.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Domain-specific content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDemo.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="domain-content-area"
                    >
                      {/* IoT Energy Monitor */}
                      {activeDemo.screen === "iot" && (
                        <>
                          <div className="domain-header" style={{ borderColor: "rgba(16,185,129,0.25)", background: "rgba(16,185,129,0.07)" }}>
                            <span className="live-dot" style={{ background: "#10b981" }} />
                            <span className="domain-app-name">eCook Energy Monitor</span>
                            <span className="domain-tech-pill">Flutter • IoT</span>
                          </div>
                          <div className="energy-chart-area">
                            {[65, 82, 47, 91, 58, 74, 88].map((h, i) => (
                              <div key={i} className="energy-bar-wrap">
                                <div
                                  className="energy-bar"
                                  style={{ height: `${h}%`, background: `linear-gradient(to top, #10b981, #34d399)` }}
                                />
                                <span className="energy-bar-label">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                              </div>
                            ))}
                          </div>
                          <div className="domain-stats-row">
                            <div className="domain-stat"><span className="domain-stat-value" style={{ color: "#10b981" }}>৳ 42</span><span className="domain-stat-label">Saved Today</span></div>
                            <div className="domain-stat"><span className="domain-stat-value" style={{ color: "#10b981" }}>4.2 kWh</span><span className="domain-stat-label">Consumed</span></div>
                            <div className="domain-stat"><span className="domain-stat-value" style={{ color: "#10b981" }}>✓</span><span className="domain-stat-label">bKash Paid</span></div>
                          </div>
                        </>
                      )}

                      {/* National EdTech */}
                      {activeDemo.screen === "edtech" && (
                        <>
                          <div className="domain-header" style={{ borderColor: "rgba(139,92,246,0.25)", background: "rgba(139,92,246,0.07)" }}>
                            <span className="live-dot" style={{ background: "#8b5cf6" }} />
                            <span className="domain-app-name">শিক্ষক সহায়িকা</span>
                            <span className="domain-tech-pill">Flutter • a2i Gov</span>
                          </div>
                          <div className="edtech-lesson-list">
                            {["বাংলা — অধ্যায় ১: রচনা", "গণিত — অধ্যায় ৩: বীজগণিত", "বিজ্ঞান — অধ্যায় ২: পদার্থ"].map((title, i) => (
                              <div key={i} className="lesson-row">
                                <div className="lesson-icon" style={{ background: "rgba(139,92,246,0.15)" }}>
                                  <BookOpen size={12} style={{ color: "#8b5cf6" }} />
                                </div>
                                <div className="lesson-info">
                                  <span className="lesson-title">{title}</span>
                                  <span className="lesson-sub">PDF + Video • Offline ✓</span>
                                </div>
                                <ChevronRight size={12} style={{ color: "#8b5cf6", opacity: 0.6 }} />
                              </div>
                            ))}
                          </div>
                          <div className="domain-stats-row">
                            <div className="domain-stat"><span className="domain-stat-value" style={{ color: "#8b5cf6" }}>500K+</span><span className="domain-stat-label">Teachers</span></div>
                            <div className="domain-stat"><span className="domain-stat-value" style={{ color: "#8b5cf6" }}>Offline</span><span className="domain-stat-label">PDF Ready</span></div>
                          </div>
                        </>
                      )}

                      {/* UNICEF Platform */}
                      {activeDemo.screen === "unicef" && (
                        <>
                          <div className="domain-header" style={{ borderColor: "rgba(6,182,212,0.25)", background: "rgba(6,182,212,0.07)" }}>
                            <span className="live-dot" style={{ background: "#06b6d4" }} />
                            <span className="domain-app-name">U-Report (UNICEF)</span>
                            <span className="domain-tech-pill">Kotlin • Youth</span>
                          </div>
                          <div className="poll-card">
                            <div className="poll-question">🌍 Should free internet access be a basic right?</div>
                            <div className="poll-options">
                              <div className="poll-option">
                                <span>Yes, absolutely</span>
                                <div className="poll-bar-wrap"><div className="poll-bar" style={{ width: "72%", background: "#06b6d4" }} /></div>
                                <span className="poll-pct">72%</span>
                              </div>
                              <div className="poll-option">
                                <span>No</span>
                                <div className="poll-bar-wrap"><div className="poll-bar" style={{ width: "28%", background: "#475569" }} /></div>
                                <span className="poll-pct">28%</span>
                              </div>
                            </div>
                          </div>
                          <div className="domain-stats-row">
                            <div className="domain-stat"><span className="domain-stat-value" style={{ color: "#06b6d4" }}>2</span><span className="domain-stat-label">Countries</span></div>
                            <div className="domain-stat"><span className="domain-stat-value" style={{ color: "#06b6d4" }}>ONA</span><span className="domain-stat-label">Dynamic Forms</span></div>
                          </div>
                        </>
                      )}

                      {/* On-Demand Mobility */}
                      {activeDemo.screen === "mobility" && (
                        <>
                          <div className="domain-header" style={{ borderColor: "rgba(245,158,11,0.25)", background: "rgba(245,158,11,0.07)" }}>
                            <span className="live-dot" style={{ background: "#f59e0b" }} />
                            <span className="domain-app-name">Ride Hailing (Jameel)</span>
                            <span className="domain-tech-pill">Kotlin • Maps SDK</span>
                          </div>
                          {/* Mini map mockup */}
                          <div className="simulated-map" style={{ height: 80, marginBottom: "0.5rem" }}>
                            <div className="map-grid-lines" />
                            <svg className="route-svg" viewBox="0 0 200 80">
                              <defs>
                                <linearGradient id="amberRoute" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#f59e0b" />
                                  <stop offset="100%" stopColor="#ef4444" />
                                </linearGradient>
                              </defs>
                              <path d="M 30 60 Q 70 20 110 50 T 170 20" fill="none" stroke="url(#amberRoute)" strokeWidth="3" strokeDasharray="5,4" />
                            </svg>
                            <motion.div
                              className="car-marker"
                              animate={{ x: [20, 55, 95, 150, 20], y: [50, 30, 40, 15, 50], rotate: [0, -20, 10, -10, 0] }}
                              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <div className="car-body"><Navigation size={10} className="car-nav-icon" /></div>
                            </motion.div>
                          </div>
                          <div className="domain-stats-row">
                            <div className="domain-stat"><span className="domain-stat-value" style={{ color: "#f59e0b" }}>Real-time</span><span className="domain-stat-label">WebSocket GPS</span></div>
                            <div className="domain-stat"><span className="domain-stat-value" style={{ color: "#f59e0b" }}>2 Apps</span><span className="domain-stat-label">Rider + Captain</span></div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}

              {/* ── ARCH TAB: Clean Architecture Diagram ── */}
              {activeTab === "arch" && (
                <motion.div 
                  key="arch-view"
                  className="arch-screen-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="arch-header">
                    <span className="arch-tag">Clean Architecture</span>
                    <h4>Enterprise Mobile Core</h4>
                  </div>

                  <div className="arch-layers">
                    {/* Presentation Layer */}
                    <div className="arch-layer layer-presentation">
                      <div className="layer-header">
                        <span className="layer-dot bg-cyan" />
                        <span className="layer-title">Presentation Layer</span>
                      </div>
                      <div className="layer-chips">
                        <span>Flutter UI</span>
                        <span>BLoC / GetX</span>
                        <span>ViewModel</span>
                      </div>
                    </div>

                    <div className="layer-connector">
                      <span className="flow-arrow">↓ Uses UseCases</span>
                    </div>

                    {/* Domain Layer */}
                    <div className="arch-layer layer-domain">
                      <div className="layer-header">
                        <span className="layer-dot bg-purple" />
                        <span className="layer-title">Domain (Pure Logic)</span>
                      </div>
                      <div className="layer-chips">
                        <span>Entities</span>
                        <span>UseCases</span>
                        <span>Repo Contracts</span>
                      </div>
                    </div>

                    <div className="layer-connector">
                      <span className="flow-arrow">↓ Implemented By</span>
                    </div>

                    {/* Data Layer */}
                    <div className="arch-layer layer-data">
                      <div className="layer-header">
                        <span className="layer-dot bg-emerald" />
                        <span className="layer-title">Data &amp; Infrastructure</span>
                      </div>
                      <div className="layer-chips">
                        <span>REST / WebSockets</span>
                        <span>Room / Hive</span>
                        <span>Payment SDKs</span>
                      </div>
                    </div>
                  </div>

                  <div className="arch-footer">
                    <span className="arch-metric"><Star size={12} className="icon-amber" /> 99.8% Crash-Free</span>
                    <span className="arch-metric">Modular &amp; Testable</span>
                  </div>
                </motion.div>
              )}

              {/* ── CODE TAB: Generic DI setup ── */}
              {activeTab === "code" && (
                <motion.div 
                  key="code-view"
                  className="code-screen-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="code-screen-header">
                    <span className="file-name">AppModule.kt</span>
                    <span className="code-lang-pill">Kotlin / Hilt DI</span>
                  </div>

                  <pre className="code-snippet">
                    <code>
                      <span className="token-keyword">@Module</span>
                      {"\n"}
                      <span className="token-keyword">@InstallIn</span>(SingletonComponent::<span className="token-type">class</span>)
                      {"\n"}
                      <span className="token-type">object</span> <span className="token-func">AppModule</span> {"{\n"}
                      {"  "}<span className="token-keyword">@Provides</span>
                      {"\n"}
                      {"  "}<span className="token-keyword">@Singleton</span>
                      {"\n"}
                      {"  "}<span className="token-type">fun</span> <span className="token-func">provideRepository</span>(
                      {"\n    "}api: <span className="token-type">ApiService</span>,
                      {"\n    "}cache: <span className="token-type">LocalStore</span>
                      {"\n  "}): <span className="token-type">AppRepository</span> =
                      {"\n    "}<span className="token-func">AppRepositoryImpl</span>(api, cache)
                      {"\n    "}
                      {"\n  "}<span className="token-keyword">@Provides</span>
                      {"\n  "}<span className="token-type">fun</span> <span className="token-func">provideUseCase</span>(
                      {"\n    "}repo: <span className="token-type">AppRepository</span>
                      {"\n  "}): <span className="token-type">FetchDataUseCase</span> =
                      {"\n    "}<span className="token-func">FetchDataUseCase</span>(repo)
                      {"\n}"}
                    </code>
                  </pre>

                  <div className="code-stat-bar">
                    <span className="code-stat"><Flame size={11} /> Dependency Injection</span>
                    <span className="code-stat"><BarChart2 size={11} /> Testable Mocking</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Home indicator */}
          <div className="home-indicator" />
        </div>
      </motion.div>
    </div>
  );
}
