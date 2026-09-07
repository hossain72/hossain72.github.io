"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Sparkles,
  Globe,
  Gitlab,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { AndroidIcon, AppleIcon } from "./PlatformIcons";

export interface ProjectData {
  title: string;
  category?: string;
  description: string;
  fullOverview?: string;
  tech: string[];
  features?: string[];
  architecture?: string;
  metrics?: string[];
  links: {
    type: "android" | "ios" | "web" | "gitlab";
    url: string;
    label?: string;
  }[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="modal-overlay">
          {/* Backdrop */}
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content Window */}
          <motion.div 
            className="modal-container"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gradient Stripe */}
            <div className="modal-gradient-top" />

            {/* Header */}
            <div className="modal-header">
              <div>
                <div className="modal-badges-row">
                  <span className="modal-category-badge">
                    {project.category || "Mobile Application"}
                  </span>
                  {project.links.some(l => l.type === 'android' || l.type === 'ios') && (
                    <span className="modal-live-badge">
                      <span className="live-dot" />
                      Live on Stores
                    </span>
                  )}
                </div>
                <h3 className="modal-title">{project.title}</h3>
              </div>

              <button 
                onClick={onClose}
                className="modal-close-btn"
                aria-label="Close project modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="modal-body">
              {/* Project Summary */}
              <div>
                <div className="modal-section-heading">
                  <Sparkles size={14} className="icon-cyan" />
                  <span>Project Overview</span>
                </div>
                <p className="modal-desc-text">
                  {project.fullOverview || project.description}
                </p>
              </div>

              {/* Architecture & Engineering Highlights */}
              <div className="modal-grid-two">
                <div className="modal-info-box">
                  <div className="modal-info-box-title">
                    <Layers size={16} />
                    <span>Architecture Pattern</span>
                  </div>
                  <p className="modal-info-box-text">
                    {project.architecture || "Clean Architecture with MVVM pattern, strictly decoupled presentation and data layers with dependency injection."}
                  </p>
                </div>

                <div className="modal-info-box">
                  <div className="modal-info-box-title icon-purple">
                    <ShieldCheck size={16} />
                    <span>Reliability & Scale</span>
                  </div>
                  <p className="modal-info-box-text">
                    Zero-leak navigation stack, crash profiling, and smooth 60fps animations across diverse Android and iOS devices.
                  </p>
                </div>
              </div>

              {/* Key Impact & Performance Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <div className="modal-section-heading">
                    <TrendingUp size={14} className="icon-emerald" />
                    <span>Measurable Impact &amp; Engineering Highlights</span>
                  </div>
                  <div className="modal-metrics-grid">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="modal-metric-chip">
                        <CheckCircle2 size={14} className="icon-emerald" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Stack */}
              <div>
                <div className="modal-section-heading">
                  <Cpu size={14} className="icon-purple" />
                  <span>Tech Stack & Tools</span>
                </div>
                <div className="modal-tech-pills">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="modal-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links & Stores */}
              <div>
                <div className="modal-section-heading">
                  <ExternalLink size={14} className="icon-rose" />
                  <span>Available Links</span>
                </div>
                <div className="modal-links-row">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target={link.url === '#' ? '_self' : '_blank'}
                      rel="noreferrer"
                      className={`modal-action-link modal-action-${link.type}`}
                    >
                      {link.type === 'android' && (
                        <>
                          <AndroidIcon size={18} className="text-emerald" />
                          <span>Google Play (Android)</span>
                        </>
                      )}
                      {link.type === 'ios' && (
                        <>
                          <AppleIcon size={18} className="text-cyan" />
                          <span>App Store (iOS)</span>
                        </>
                      )}
                      {link.type === 'web' && (
                        <>
                          <Globe size={16} className="text-purple" />
                          <span>View Case Study</span>
                        </>
                      )}
                      {link.type === 'gitlab' && (
                        <>
                          <Gitlab size={16} className="text-amber" />
                          <span>GitLab Repository</span>
                        </>
                      )}
                      <ExternalLink size={12} style={{ opacity: 0.6 }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <span>Mobile Engineering by Md. Anowar Hossain</span>
              <button 
                onClick={onClose}
                className="btn btn-secondary"
                style={{ padding: '0.35rem 0.9rem', fontSize: '0.8rem' }}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
