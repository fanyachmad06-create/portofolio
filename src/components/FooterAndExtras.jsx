import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../data/config";

export function FloatingCTA() {
  return (
    <aside className="floating-cta">
      <a
        href={getWhatsAppUrl("Halo saya melihat portofolio Anda dan tertarik untuk diskusi proyek")}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        id="floating-wa-btn"
        aria-label="Hubungi via WhatsApp"
      >
        <MessageCircle className="floating-wa-icon" />
        <span className="floating-wa-tooltip">Konsultasi Gratis via WhatsApp</span>
      </a>
    </aside>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#hero" className="brand-logo footer-logo">
            <span className="logo-symbol">&lt;/&gt;</span>
            <span className="logo-text">
              Dev<span className="text-gradient">Portfolio</span>
            </span>
          </a>
          <p className="footer-copy">
            Membantu bisnis mewujudkan teknologi digital yang scalable, elegan, dan menghasilkan dampak nyata.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h5>Navigasi</h5>
            <a href="#services">Layanan</a>
            <a href="#portfolio">Studi Kasus</a>
            <a href="#estimator">Kalkulator Biaya</a>
            <a href="#workflow">Alur Kerja</a>
          </div>
          <div className="footer-col">
            <h5>Spesialisasi</h5>
            <a href="#portfolio">Flutter Mobile Apps</a>
            <a href="#portfolio">React & Tailwind</a>
            <a href="#portfolio">Laravel RESTful API</a>
            <a href="#portfolio">Odoo ERP Automation</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Developer Portfolio. All rights reserved. Built with React & modern web standards.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="toast-container" id="toast-container">
      <div className="toast show">
        <span>{message}</span>
      </div>
    </div>
  );
}
