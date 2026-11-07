import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, MessageCircle } from "lucide-react";
import { PERSONAL_CONFIG, getWhatsAppUrl } from "../data/config";

export function Navbar({ onOpenDrawer }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div class="container navbar-container">
        <a href="#hero" className="brand-logo" id="brand-logo">
          <span className="logo-symbol">&lt;/&gt;</span>
          <span className="logo-text">
            Dev<span className="text-gradient">Portfolio</span>
          </span>
        </a>

        <nav className="nav-links" id="nav-links">
          <a href="#services" className="nav-link">Layanan</a>
          <a href="#portfolio" className="nav-link">Studi Kasus</a>
          <a href="#tech-stack" className="nav-link">Keahlian</a>
          <a href="#estimator" className="nav-link">Hitung Biaya</a>
          <a href="#workflow" className="nav-link">Alur Kerja</a>
          <a href="#contact" className="nav-link">Kontak</a>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm glow-button" id="nav-cta-btn">
            <span>Mulai Konsultasi</span>
            <ArrowRight className="icon-sm" />
          </a>
          <button
            className="mobile-toggle"
            id="mobile-toggle"
            aria-label="Buka Menu Navigasi"
            onClick={onOpenDrawer}
          >
            <Menu id="menu-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function MobileDrawer({ isOpen, onClose }) {
  return (
    <div className={`mobile-drawer ${isOpen ? "open" : ""}`} id="mobile-drawer">
      <div className="drawer-header">
        <span className="drawer-logo">&lt;/&gt; DevPortfolio</span>
        <button className="drawer-close" id="drawer-close" aria-label="Tutup Menu" onClick={onClose}>
          <X />
        </button>
      </div>
      <div className="drawer-links">
        <a href="#services" className="drawer-link" onClick={onClose}>Layanan Freelance</a>
        <a href="#portfolio" className="drawer-link" onClick={onClose}>Portofolio & Studi Kasus</a>
        <a href="#tech-stack" className="drawer-link" onClick={onClose}>Teknologi & Tools</a>
        <a href="#estimator" className="drawer-link" onClick={onClose}>Estimasi Biaya Proyek</a>
        <a href="#workflow" className="drawer-link" onClick={onClose}>Metode & Alur Kerja</a>
        <a href="#faq" className="drawer-link" onClick={onClose}>Tanya Jawab (FAQ)</a>
        <a href="#contact" className="drawer-link" onClick={onClose}>Hubungi Saya</a>
      </div>
      <div className="drawer-footer">
        <a
          href={getWhatsAppUrl("Halo saya tertarik untuk diskusi proyek software")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp w-full"
        >
          <MessageCircle className="icon-sm" />
          <span>Chat WhatsApp Langsung</span>
        </a>
      </div>
    </div>
  );
}
