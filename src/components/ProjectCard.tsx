"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  ChevronRight, 
  Sparkles,
  Gitlab
} from "lucide-react";
import { ProjectData } from "./ProjectModal";
import { AndroidIcon, AppleIcon } from "./PlatformIcons";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  onSelect: (project: ProjectData) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const isStoreLive = project.links.some(l => l.type === 'android' || l.type === 'ios');

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      viewport={{ once: true, margin: "-40px" }}
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* Header */}
      <div className="project-header">
        <div>
          <div className="project-badge-wrapper">
            {isStoreLive ? (
              <span className="project-store-badge project-store-badge-live">
                <span className="live-dot" />
                Live on Stores
              </span>
            ) : (
              <span className="project-store-badge project-store-badge-enterprise">
                Enterprise App
              </span>
            )}
          </div>
          <h3 className="project-title">
            {project.title}
          </h3>
        </div>

        {/* Quick Links with clear Android & iOS branding */}
        <div className="project-links" onClick={(e) => e.stopPropagation()}>
          {project.links.map((link, lIdx) => (
            <a 
              key={lIdx} 
              href={link.url} 
              target={link.url === '#' ? '_self' : '_blank'} 
              rel="noreferrer" 
              className={`project-link-icon project-link-${link.type}`}
              title={
                link.type === 'android' 
                  ? 'Get on Google Play (Android)' 
                  : link.type === 'ios' 
                  ? 'Download on Apple App Store (iOS)' 
                  : link.type === 'web'
                  ? 'View Project Website / Case Study'
                  : 'View GitLab Repository'
              }
              aria-label={
                link.type === 'android' 
                  ? 'Android App on Google Play' 
                  : link.type === 'ios' 
                  ? 'iOS App on Apple App Store' 
                  : link.type === 'web'
                  ? 'Website'
                  : 'GitLab'
              }
              onClick={(e) => e.stopPropagation()}
            >
              {link.type === 'android' && <AndroidIcon size={17} />}
              {link.type === 'ios' && <AppleIcon size={17} />}
              {link.type === 'web' && <Globe size={16} />}
              {link.type === 'gitlab' && <Gitlab size={16} />}
            </a>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="project-description">
        {project.description}
      </p>

      {/* Metrics / Impact Highlights */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="project-metrics-strip">
          {project.metrics.slice(0, 2).map((metric, mIdx) => (
            <span key={mIdx} className="project-metric-chip">
              <span className="metric-dot" />
              {metric}
            </span>
          ))}
        </div>
      )}

      {/* Tech Tags */}
      <div className="project-tech">
        {project.tech.map((tech, tIdx) => (
          <span key={tIdx} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Footer / Modal Trigger */}
      <div className="project-card-footer">
        <span className="project-inspect-hint">
          <Sparkles size={13} className="icon-cyan" />
          Click to inspect architecture
        </span>
        <button 
          className="view-modal-btn"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
        >
          <span>Case Study</span>
          <ChevronRight size={15} />
        </button>
      </div>
    </motion.div>
  );
}
