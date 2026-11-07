import React from "react";

export function Services() {
  return (
    <section className="py-24 border-b border-outline-variant/30 bg-surface-container-low/50" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-margin">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Core Capabilities
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Engineered for scalability, uptime, and business clarity.
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            From enterprise ERP backends to responsive web platforms and fluid mobile clients, I engineer full-stack systems with maintainable codebases and automated pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-8 bg-surface-container-lowest border border-outline-variant/40 rounded-lg space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded border border-outline-variant/40 flex items-center justify-center bg-surface">
                <span className="material-symbols-outlined text-primary text-[22px]">terminal</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Web Development &amp; Architecture
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                Engineering resilient, modern web applications with focus on maintainable full-stack architecture, clean API contracts, and high Core Web Vitals performance.
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-outline-variant/30 font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Full-Stack Next.js, React &amp; TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>RESTful &amp; GraphQL API Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Node.js / Python Backend Services</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>CI/CD Pipelines &amp; Containerization (Docker)</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="p-8 bg-surface-container-lowest border border-outline-variant/40 rounded-lg space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded border border-outline-variant/40 flex items-center justify-center bg-surface">
                <span className="material-symbols-outlined text-primary text-[22px]">grid_view</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Odoo ERP Implementation &amp; Customization
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                Architecting custom business workflows, database schemas, and tailored modules to automate operations across manufacturing, retail, and accounting.
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-outline-variant/30 font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Custom Module &amp; Workflow Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Odoo 15/16/17 Migration &amp; Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Third-Party API &amp; Payment Gateway Integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Automated BI Reporting &amp; PostgreSQL Tuning</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="p-8 bg-surface-container-lowest border border-outline-variant/40 rounded-lg space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded border border-outline-variant/40 flex items-center justify-center bg-surface">
                <span className="material-symbols-outlined text-primary text-[22px]">devices</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Flutter Mobile Development
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                Delivering native-grade iOS &amp; Android cross-platform mobile apps with fluid animations, reliable offline-first caching, and deep hardware sensor integration.
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-outline-variant/30 font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Single Codebase for iOS &amp; Android</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Reactive State Management (Riverpod / Bloc)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Offline-Sync, SQLite &amp; Local Encryption</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                <span>Hardware Barcode Scanner &amp; Biometric Auth</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
