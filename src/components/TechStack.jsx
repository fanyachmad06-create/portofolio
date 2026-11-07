import React from "react";
import { Layers, Terminal, Database, Cloud } from "lucide-react";
import { TECH_STACK } from "../data/workflow";

export function TechStack() {
  return (
    <section className="tech-section section-padding" id="tech-stack">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Tech Stack & Tools</span>
          <h2 className="section-title">Teknologi Modern yang Siap Skala</h2>
          <p className="section-desc">
            Saya memilih tools dan framework yang terbukti stabil di tingkat industri, memiliki performa tinggi, dan memudahkan kolaborasi tim jangka panjang.
          </p>
        </div>

        <div className="tech-categories-grid">
          {/* Frontend & Web */}
          <div className="tech-box glass-panel">
            <div className="tech-box-header">
              <Layers className="icon-sm text-cyan" />
              <h4>Frontend & Web</h4>
            </div>
            <div className="tech-pill-list">
              {TECH_STACK.frontend.map((t, i) => (
                <div className="tech-pill" key={i}>
                  <strong>{t.name}</strong> <span>({t.category})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="tech-box glass-panel">
            <div className="tech-box-header">
              <Terminal className="icon-sm text-emerald" />
              <h4>Mobile Development</h4>
            </div>
            <div className="tech-pill-list">
              {TECH_STACK.mobile.map((t, i) => (
                <div className="tech-pill" key={i}>
                  <strong>{t.name}</strong> <span>({t.category})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & DB */}
          <div className="tech-box glass-panel">
            <div className="tech-box-header">
              <Database className="icon-sm text-purple" />
              <h4>Backend & ERP</h4>
            </div>
            <div className="tech-pill-list">
              {TECH_STACK.backend.map((t, i) => (
                <div className="tech-pill" key={i}>
                  <strong>{t.name}</strong> <span>({t.category})</span>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="tech-box glass-panel">
            <div className="tech-box-header">
              <Cloud className="icon-sm text-amber" />
              <h4>DevOps & Cloud</h4>
            </div>
            <div className="tech-pill-list">
              {TECH_STACK.devops.map((t, i) => (
                <div className="tech-pill" key={i}>
                  <strong>{t.name}</strong> <span>({t.category})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
