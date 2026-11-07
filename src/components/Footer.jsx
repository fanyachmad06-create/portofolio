import React from "react";
import { PERSONAL_CONFIG } from "../data/config";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/40 transition-all duration-200 ease-out">
      <div className="max-w-7xl mx-auto px-6 md:px-margin py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Brand & Copyright */}
        <div className="space-y-2">
          <a
            className="font-headline-md text-headline-md text-primary inline-block font-semibold"
            href="#hero"
          >
            {PERSONAL_CONFIG.brandName}
          </a>
          <p className="font-body-sm text-body-sm text-secondary">
            © 2025 {PERSONAL_CONFIG.name}. Scalable Web, Odoo ERP &amp; Flutter Engineering. Crafted with precision.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors duration-200"
            href="#work"
          >
            Work
          </a>
          <a
            className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors duration-200"
            href="#services"
          >
            Services
          </a>
          <a
            className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors duration-200"
            href="#recognition"
          >
            Journey
          </a>
          <a
            className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors duration-200"
            href="#contact"
          >
            Contact
          </a>
          <a
            className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors duration-200"
            href={PERSONAL_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors duration-200"
            href={PERSONAL_CONFIG.gitlabUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitLab
          </a>
          <a
            className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors duration-200"
            href={PERSONAL_CONFIG.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors duration-200"
            href={`mailto:${PERSONAL_CONFIG.email}`}
          >
            Email
          </a>
        </div>

        {/* Back to Top Micro-trigger */}
        <button
          aria-label="Back to top"
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-label-sm font-label-sm text-secondary hover:text-primary border border-outline-variant/40 rounded bg-surface transition-colors cursor-pointer"
          onClick={scrollToTop}
        >
          <span>Top</span>
          <span className="material-symbols-outlined text-[16px]">
            keyboard_arrow_up
          </span>
        </button>
      </div>
    </footer>
  );
}
