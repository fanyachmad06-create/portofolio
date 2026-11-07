import React, { useEffect } from "react";
import { X, Info, Target, CheckCircle2, TrendingUp, ListChecks, Code, MessageCircle, Images } from "lucide-react";
import { getWhatsAppUrl } from "../data/config";
import { SCREENSHOTS } from "../data/screenshots";
import { ScreenshotGallery } from "./ScreenshotGallery";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const screenshots = SCREENSHOTS[project.id] || [];
  const waConsultMessage = `Halo Mas Fany, saya tertarik dengan studi kasus *${project.title}* di portofolio Anda. Bisakah kita diskusikan estimasi & kebutuhan proyek serupa?`;

  return (
    <div
      className="modal-backdrop open"
      id="project-modal"
      aria-hidden="false"
      onClick={(e) => {
        if (e.target.classList.contains("modal-backdrop")) onClose();
      }}
    >
      <div className="modal-dialog">
        <button
          className="modal-close"
          id="modal-close-btn"
          aria-label="Tutup Detail Proyek"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <div className="modal-body" id="modal-body-content">
          {/* Hero Banner */}
          <div className="modal-project-hero">
            <img src={project.image} alt={project.title} />
          </div>

          {/* Meta & Title */}
          <div className="modal-header-meta">
            <span className="modal-badge">
              {project.badge}
            </span>
            <span className="modal-client">{project.client}</span>
          </div>

          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">
            {project.subtitle}
          </p>

          {/* Summary Box */}
          <div className="modal-summary-box">
            <div className="summary-col">
              <h5>Peran Engineering</h5>
              <p>{project.role}</p>
            </div>
            <div className="summary-col">
              <h5>Durasi Pengerjaan</h5>
              <p>{project.duration}</p>
            </div>
            <div className="summary-col">
              <h5>Kategori Klien</h5>
              <p>{project.client}</p>
            </div>
          </div>

          {/* Overview */}
          <div className="modal-section-block">
            <h4>
              <Info size={18} className="text-primary" /> Ringkasan Proyek
            </h4>
            <p>{project.overview}</p>
          </div>

          {/* Interactive Screenshot Showcase Gallery */}
          {screenshots.length > 0 && (
            <div className="modal-section-block">
              <h4>
                <Images size={18} className="text-primary" /> Galeri Screenshot & Implementasi Fitur
              </h4>
              <ScreenshotGallery key={project.id} items={screenshots} />
            </div>
          )}

          {/* Challenges & Solutions */}
          <div className="modal-section-block">
            <h4>
              <Target size={18} className="text-primary" /> Tantangan & Kebutuhan Klien
            </h4>
            <p>{project.challenge}</p>
          </div>

          <div className="modal-section-block">
            <h4>
              <CheckCircle2 size={18} className="text-primary" /> Solusi yang Diimplementasikan
            </h4>
            <p style={{ whiteSpace: "pre-line" }}>{project.solution}</p>
          </div>

          {/* Key Metrics */}
          <div className="modal-section-block">
            <h4>
              <TrendingUp size={18} className="text-primary" /> Dampak & Hasil Nyata
            </h4>
            <div className="modal-metrics-grid">
              {project.metrics.map((m, idx) => (
                <div className="modal-metric-card" key={idx}>
                  <div className="modal-metric-number">
                    {m.val}
                  </div>
                  <div className="modal-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="modal-section-block">
            <h4>
              <ListChecks size={18} className="text-primary" /> Fitur-Fitur Utama yang Dibangun
            </h4>
            <ul className="modal-feature-list">
              {project.features.map((f, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="text-primary" style={{ flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section-block">
            <h4>
              <Code size={18} className="text-primary" /> Arsitektur & Teknologi
            </h4>
            <div className="modal-tech-chips">
              {project.techStack.map((tech, idx) => (
                <span className="modal-chip" key={idx}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal CTA */}
          <div className="pt-8 mt-10 border-t border-outline-variant/40 text-center">
            <p className="text-body-md text-secondary mb-4">
              Tertarik membangun sistem atau aplikasi serupa untuk bisnis Anda?
            </p>
            <a
              href={getWhatsAppUrl(waConsultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-surface hover:bg-neutral-800 transition-all duration-200 font-label-md text-label-md tracking-wider"
            >
              <MessageCircle size={18} />
              <span>Konsultasikan Proyek Serupa via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
