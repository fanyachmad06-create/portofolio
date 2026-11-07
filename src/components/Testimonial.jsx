import React from "react";

export function Testimonial() {
  return (
    <section className="py-24 border-b border-outline-variant/30 bg-surface-container-low/40">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <span className="material-symbols-outlined text-outline-variant text-[36px]">
          format_quote
        </span>
        <blockquote className="font-display text-headline-lg md:text-display text-primary leading-tight font-serif italic">
          "Fany combines deep algorithmic precision with practical business engineering. His custom Odoo ERP architecture and Flutter mobile app automated our entire supply chain workflow with zero downtime."
        </blockquote>
        <div className="space-y-1">
          <div className="font-headline-sm text-headline-sm text-primary">
            Arya Danudirdja
          </div>
          <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Chief Technology Officer, Kallista Financial Group
          </div>
        </div>
      </div>
    </section>
  );
}

