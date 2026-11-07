import React, { useState } from "react";
import { PERSONAL_CONFIG, getWhatsAppUrl } from "../data/config";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_CONFIG.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <section className="py-24" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-margin">
        <div className="p-8 md:p-16 rounded-lg bg-surface-container-lowest border border-outline-variant/50 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary text-label-sm font-label-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{PERSONAL_CONFIG.statusInquiries}</span>
              </div>

              <h2 className="font-display text-headline-lg md:text-display text-primary leading-tight">
                Let’s build something thoughtful together.
              </h2>

              <p className="font-body-lg text-body-lg text-secondary max-w-xl">
                Whether you are planning an enterprise Odoo ERP migration, launching a cross-platform Flutter application, or building a scalable modern web product, I am available to consult or lead engineering.
              </p>

              {/* Direct Email Copy & Call CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-primary-container text-surface hover:bg-neutral-800 transition-colors duration-200 font-mono text-body-sm cursor-pointer"
                  onClick={handleCopyEmail}
                  title="Klik untuk menyalin email"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>{copied ? "Copied to clipboard!" : PERSONAL_CONFIG.email}</span>
                  <span className="material-symbols-outlined text-[16px] text-outline-variant">
                    {copied ? "check" : "content_copy"}
                  </span>
                </button>

                <a
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-outline-variant hover:border-primary text-primary transition-colors duration-200 font-label-md text-label-md"
                  href={getWhatsAppUrl("Halo Mas Fany, saya melihat portofolio Anda dan tertarik untuk diskusi proyek software / ERP / mobile.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp: {PERSONAL_CONFIG.whatsappDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Col: Social Links & Presence */}
            <div className="lg:col-span-4 lg:border-l lg:border-outline-variant/30 lg:pl-12 space-y-6">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block">
                Digital Channels &amp; Kontak
              </span>

              <div className="space-y-3 font-body-sm text-body-sm">
                <a
                  className="flex items-center justify-between text-secondary hover:text-primary transition-colors py-1 group"
                  href={`tel:${PERSONAL_CONFIG.phone}`}
                >
                  <span>Telepon / {PERSONAL_CONFIG.phone}</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                    call
                  </span>
                </a>

                <a
                  className="flex items-center justify-between text-secondary hover:text-primary transition-colors py-1 group"
                  href={PERSONAL_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn / in/fany-achmad-mustofah</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                    north_east
                  </span>
                </a>

                <a
                  className="flex items-center justify-between text-secondary hover:text-primary transition-colors py-1 group"
                  href={PERSONAL_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub / @fanyachmad06-create</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                    north_east
                  </span>
                </a>

                <a
                  className="flex items-center justify-between text-secondary hover:text-primary transition-colors py-1 group"
                  href={PERSONAL_CONFIG.gitlabUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitLab / @fanyachmad</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                    north_east
                  </span>
                </a>
              </div>

              <div className="pt-4 border-t border-outline-variant/30 text-secondary text-body-sm">
                <p className="font-body-sm text-body-sm">
                  {PERSONAL_CONFIG.address}. Terbuka untuk kontrak remote, hybrid, maupun konsultasi implementasi ERP korporat di seluruh Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
