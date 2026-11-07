import React from "react";
import { PERSONAL_CONFIG } from "../data/config";

export function TopAppBar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/40 transition-all duration-200 ease-out">
      <div className="max-w-7xl mx-auto px-6 md:px-margin flex items-center justify-between h-20">
        {/* Brand Monogram */}
        <a className="flex items-center gap-3 group" href="#hero">
          <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-primary">
            {PERSONAL_CONFIG.brandName}
          </span>
          <span className="text-outline-variant hidden sm:inline">/</span>
          <span className="font-body-sm text-body-sm text-secondary group-hover:text-primary transition-colors duration-200 hidden sm:inline">
            Fullstack, Odoo ERP &amp; Mobile Engineer
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            className="text-primary font-title-md text-title-md border-b border-primary pb-1"
            href="#work"
          >
            Work
          </a>
          <a
            className="text-secondary hover:text-primary font-body-sm text-body-sm transition-colors duration-200"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-secondary hover:text-primary font-body-sm text-body-sm transition-colors duration-200"
            href="#recognition"
          >
            Journey
          </a>
          <a
            className="text-secondary hover:text-primary font-body-sm text-body-sm transition-colors duration-200"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Trailing Action: Availability Beacon Status */}
        <div className="flex items-center gap-4">
          <a
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-outline-variant/50 bg-surface-container-lowest hover:border-primary transition-colors duration-200"
            href="#contact"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-label-sm text-label-sm text-secondary">
              {PERSONAL_CONFIG.availability}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

