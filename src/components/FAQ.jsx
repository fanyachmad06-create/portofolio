import React, { useState } from "react";
import { FAQ_DATA } from "../data/faq";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container faq-container">
        <div className="section-header text-center">
          <span className="section-badge">Pertanyaan Umum</span>
          <h2 className="section-title">Hal yang Sering Ditanyakan Klien</h2>
          <p className="section-desc">
            Transparansi adalah prioritas. Berikut jawaban untuk pertanyaan umum mengenai garansi, sistem pembayaran, dan kepemilikan source code.
          </p>
        </div>

        <div className="faq-accordion">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                className={`faq-item ${isOpen ? "active" : ""}`}
                key={idx}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown className="faq-icon" />
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
