import React, { useEffect, useState } from "react";
import { PERSONAL_CONFIG, getWhatsAppUrl } from "../data/config";

export function Hero() {
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hour12: false };
      const timeString = new Intl.DateTimeFormat("en-GB", options).format(now);
      setLiveTime(`${timeString} WIB`);
    };

    updateClock();
    const interval = setInterval(updateClock, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 md:pt-28 pb-20 md:pb-24 border-b border-outline-variant/30" id="hero">
      <div className="max-w-7xl mx-auto px-6 md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">
          {/* Editorial Intro Left Span */}
          <div className="lg:col-span-9 space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wider text-secondary border border-outline-variant/40 bg-surface-container-lowest rounded">
                Software Engineering &amp; Systems Architecture
              </span>
              <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>{PERSONAL_CONFIG.location}</span>
                {liveTime && (
                  <span className="text-primary font-mono text-[11px] ml-1 px-1.5 py-0.5 bg-surface-container-high rounded" id="live-time">
                    {liveTime}
                  </span>
                )}
              </div>
            </div>

            <h1 className="font-display text-display text-primary leading-none tracking-tight">
              {PERSONAL_CONFIG.tagline}
            </h1>

            <p className="font-body-lg text-body-lg text-secondary max-w-3xl leading-relaxed">
              {PERSONAL_CONFIG.bio}
            </p>

            {/* Dual Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-primary-container text-surface hover:bg-neutral-800 transition-all duration-200 font-label-md text-label-md tracking-wider"
                href="#work"
              >
                <span>Lihat Proyek &amp; Sistem</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">arrow_downward</span>
              </a>

              <a
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-outline-variant/80 text-primary hover:border-primary hover:bg-surface-container-low transition-all duration-200 font-label-md text-label-md tracking-wider"
                href={getWhatsAppUrl("Halo Fany, saya ingin berdiskusi mengenai kebutuhan teknis pengembangan sistem/aplikasi.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Diskusi Kebutuhan Teknis</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">north_east</span>
              </a>
            </div>
          </div>

          {/* Minimalist Spec Badge Right Span */}
          <div className="lg:col-span-3 space-y-6 pt-2">
            <div className="p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/40 shadow-sm space-y-5">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block">
                Engineering Metrics
              </span>

              <div className="space-y-4 text-left">
                {PERSONAL_CONFIG.metrics.map((metric, idx) => (
                  <React.Fragment key={idx}>
                    <div>
                      <div className="font-headline-md text-headline-md text-primary font-serif">
                        {metric.number}
                      </div>
                      <div className="font-label-sm text-label-sm text-secondary">
                        {metric.label}
                      </div>
                    </div>
                    {idx < PERSONAL_CONFIG.metrics.length - 1 && (
                      <div className="h-[1px] bg-outline-variant/30"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="pt-2">
                <span className="font-body-sm text-body-sm text-secondary italic">
                  "Simplicity and reliability are prerequisites for software that truly stands the test of scale."
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
