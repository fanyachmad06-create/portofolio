import React from "react";
import { WORKFLOW_STEPS } from "../data/workflow";
import { CheckCircle2 } from "lucide-react";

export function Workflow() {
  return (
    <section className="workflow-section section-padding" id="workflow">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Metode Kerja</span>
          <h2 className="section-title">Alur Pengerjaan Transparan & Terarah</h2>
          <p className="section-desc">
            Setiap proyek dikelola dengan metodologi terstruktur untuk memastikan hasil selesai tepat waktu, sesuai ekspektasi, dan bebas dari kendala miskomunikasi.
          </p>
        </div>

        <div className="workflow-grid">
          {WORKFLOW_STEPS.map((w, idx) => (
            <div className="workflow-card glass-panel" key={idx}>
              <div className="step-badge-circle">{w.step}</div>
              <h3 className="workflow-title">{w.title}</h3>
              <p className="workflow-desc">{w.desc}</p>
              <div className="workflow-deliverable">
                <CheckCircle2 className="icon-xs text-emerald" />
                <span><strong>Output:</strong> {w.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
