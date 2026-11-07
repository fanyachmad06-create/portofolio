import React, { useState, useMemo } from "react";
import {
  Calculator,
  Shield,
  CreditCard,
  MessageSquare,
  FileText,
  QrCode,
  Cloud,
  Check,
  Send,
  Sparkles
} from "lucide-react";
import { PRICING_CONFIG, formatRupiah } from "../data/pricing";
import { getWhatsAppUrl } from "../data/config";

const FEATURE_ICONS = {
  shield: Shield,
  "credit-card": CreditCard,
  "message-square": MessageSquare,
  "file-text": FileText,
  "qr-code": QrCode,
  cloud: Cloud,
};

export function Estimator() {
  const [projectType, setProjectType] = useState("mobile");
  const [selectedFeatures, setSelectedFeatures] = useState(["auth", "payment"]);
  const [urgency, setUrgency] = useState("standard");

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculation
  const calculation = useMemo(() => {
    const typeConfig = PRICING_CONFIG.types[projectType];
    let minPrice = typeConfig.baseMin;
    let maxPrice = typeConfig.baseMax;
    let durationWeeks = typeConfig.weeks;

    selectedFeatures.forEach((fId) => {
      const feat = PRICING_CONFIG.features.find((f) => f.id === fId);
      if (feat) {
        minPrice += feat.price;
        maxPrice += feat.price * 1.2;
        durationWeeks += feat.weeks;
      }
    });

    const multiplier = PRICING_CONFIG.urgencyMultiplier[urgency] || 1.0;
    minPrice = Math.round(minPrice * multiplier);
    maxPrice = Math.round(maxPrice * multiplier);

    if (urgency === "fast") {
      durationWeeks = Math.max(2, Math.round(durationWeeks * 0.7));
    }

    return {
      typeName: typeConfig.name,
      minPrice,
      maxPrice,
      durationWeeks: Math.ceil(durationWeeks),
    };
  }, [projectType, selectedFeatures, urgency]);

  const handleSendWhatsApp = () => {
    const selectedFeatureLabels = selectedFeatures
      .map((fId) => {
        const feat = PRICING_CONFIG.features.find((f) => f.id === fId);
        return feat ? `• ${feat.label}` : "";
      })
      .filter(Boolean)
      .join("\n");

    const message = `Halo, saya baru saja melakukan simulasi estimasi proyek di website portofolio Anda:

📋 *Tipe Proyek:*
${calculation.typeName}

⚙️ *Fitur yang Dibutuhkan:*
${selectedFeatureLabels || "• Tidak ada fitur tambahan"}

⏱️ *Skala Waktu:*
${urgency === "fast" ? "Fast-Track (Prioritas Cepat)" : "Standar (Sesuai Sprint Normal)"}

💰 *Estimasi Budget:*
${formatRupiah(calculation.minPrice)} - ${formatRupiah(calculation.maxPrice)}

⏳ *Estimasi Waktu:*
± ${calculation.durationWeeks} Minggu

Bisakah kita jadwalkan konsultasi untuk memvalidasi kebutuhan ini lebih detail? Terima kasih!`;

    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <section className="estimator-section section-padding" id="estimator">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Transparansi Budget</span>
          <h2 className="section-title">Kalkulator Estimasi Biaya & Waktu Proyek</h2>
          <p className="section-desc">
            Dapatkan gambaran awal estimasi investasi dan durasi pengerjaan sebelum memulai. Tanpa komitmen, tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="estimator-card glass-panel">
          <div className="estimator-controls">
            {/* Step 1: Project Type */}
            <div className="estimator-group">
              <label className="estimator-label">
                <span className="step-num">1</span> Pilih Jenis Software yang Ingin Dibangun
              </label>
              <div className="type-options-grid">
                {Object.entries(PRICING_CONFIG.types).map(([key, item]) => (
                  <button
                    type="button"
                    key={key}
                    className={`type-select-btn ${projectType === key ? "active" : ""}`}
                    onClick={() => setProjectType(key)}
                  >
                    <span className="type-title">{item.name}</span>
                    <span className="type-duration">Mulai dari ~{item.weeks} minggu</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features */}
            <div className="estimator-group">
              <label className="estimator-label">
                <span className="step-num">2</span> Fitur Tambahan & Integrasi yang Diperlukan
              </label>
              <div className="feature-checkboxes-grid">
                {PRICING_CONFIG.features.map((feat) => {
                  const Icon = FEATURE_ICONS[feat.icon] || Shield;
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      className={`feature-check-item ${isChecked ? "checked" : ""}`}
                      onClick={() => toggleFeature(feat.id)}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleFeature(feat.id);
                        }
                      }}
                    >
                      <div className="check-box-indicator">
                        {isChecked && <Check className="icon-xs" />}
                      </div>
                      <div className="feature-text">
                        <div className="feature-name">
                          <Icon className="icon-xs text-cyan" />
                          <span>{feat.label}</span>
                        </div>
                        <span className="feature-desc-sub">{feat.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div className="estimator-group">
              <label className="estimator-label">
                <span className="step-num">3</span> Prioritas Waktu Pengerjaan
              </label>
              <div className="urgency-grid">
                <button
                  type="button"
                  className={`urgency-btn ${urgency === "standard" ? "active" : ""}`}
                  onClick={() => setUrgency("standard")}
                >
                  <span className="urgency-title">Standar (Normal Sprint)</span>
                  <span className="urgency-sub">Waktu reguler, tarif normal</span>
                </button>
                <button
                  type="button"
                  className={`urgency-btn ${urgency === "fast" ? "active" : ""}`}
                  onClick={() => setUrgency("fast")}
                >
                  <span className="urgency-title">⚡ Fast-Track (Prioritas Cepat)</span>
                  <span className="urgency-sub">Durasi 30% lebih cepat (+25% rate)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="estimator-summary-panel">
            <div className="summary-sticky-content">
              <div className="summary-badge">
                <Sparkles className="icon-xs text-amber" />
                <span>Hasil Kalkulasi Estimasi</span>
              </div>

              <div className="summary-row">
                <span className="summary-label">Perkiraan Investasi:</span>
                <div className="price-display">
                  <span className="price-val">
                    {formatRupiah(calculation.minPrice)} - {formatRupiah(calculation.maxPrice)}
                  </span>
                  <span className="price-note">*Belum termasuk biaya server/domain pihak ketiga</span>
                </div>
              </div>

              <div className="summary-row">
                <span className="summary-label">Estimasi Durasi Kerja:</span>
                <div className="time-display">
                  <span className="time-val">± {calculation.durationWeeks} Minggu</span>
                  <span className="time-note">Termasuk pengujian QA & garansi 30 hari</span>
                </div>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-benefits">
                <div className="benefit-item">
                  <Check className="icon-xs text-emerald" />
                  <span>100% Hak Milik Source Code</span>
                </div>
                <div className="benefit-item">
                  <Check className="icon-xs text-emerald" />
                  <span>Garansi Bug-Free 30 Hari</span>
                </div>
                <div className="benefit-item">
                  <Check className="icon-xs text-emerald" />
                  <span>Skema Pembayaran Termin Bertahap</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-whatsapp w-full btn-lg glow-button"
                id="estimator-wa-btn"
                onClick={handleSendWhatsApp}
              >
                <Send className="icon-sm" />
                <span>Kirim Rincian Estimasi ke WhatsApp</span>
              </button>

              <p className="summary-help-text">
                Rincian estimasi di atas akan otomatis diformat ke pesan WhatsApp untuk kita diskusikan langsung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
