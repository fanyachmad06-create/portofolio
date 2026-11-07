import React from "react";

export function Journey() {
  const experiences = [
    {
      period: "Feb 2026 — Present",
      role: "Fullstack Developer & Mobile Dev",
      company: "Signal 99 Teknologi",
      desc: "Flutter Mobile Development, Fullstack (Laravel, Vue.js, React.js, Tailwind CSS), Backend Dashboard, Mobile Commerce, REST API & Odoo Module Customization.",
    },
    {
      period: "Feb 2025 — Jan 2026",
      role: "Odoo Engineer",
      company: "Maxxi Tani Teknologi",
      desc: "Development Module kustom, support fungsional, dan integrasi sistem Odoo untuk operasional bisnis internal.",
    },
    {
      period: "Nov 2024 — Feb 2025",
      role: "Odoo Developer",
      company: "PT EDI Indonesia",
      desc: "Pembuatan dan kustomisasi arsitektur Odoo ERP untuk berbagai klien korporat dan BUMN.",
    },
    {
      period: "2022 — 2024",
      role: "Software Developer Mobile Flutter ERP & PHP",
      company: "PT Wonokoyo Jaya Corporindo",
      desc: "Maintenance dan pengembangan fitur baru aplikasi mobile ERP perusahaan berbasis Flutter dan PHP backend.",
    },
    {
      period: "2021 — Present",
      role: "Independent Odoo Developer & Mobile Flutter Specialist",
      company: "Freelance & Enterprise Consulting",
      desc: "Mengembangkan sistem Odoo ERP kustom, aplikasi mobile Android & iOS, dan integrasi API untuk berbagai klien bisnis.",
    },
    {
      period: "2019 — 2022",
      role: "Odoo Developer Python & System Administrator",
      company: "PT Alugara Inovasi Utama (AIU)",
      desc: "Create, custom, maintenance framework Odoo ERP berbasis Python dan konfigurasi deployment Linux Server (Debian).",
    },
  ];

  const education = [
    {
      period: "2014 — 2020",
      degree: "Sarjana Teknik Informatika",
      institution: "Institut Teknologi Adhi Tama Surabaya (ITATS)",
      detail: "Fokus rekayasa perangkat lunak, sistem basis data, dan arsitektur komputasi.",
    },
    {
      period: "2011 — 2014",
      degree: "Teknik Komputer & Jaringan",
      institution: "SMKN 1 Lumajang",
      detail: "Dasar pemrograman, perakitan perangkat keras, jaringan & administrasi server Linux.",
    },
  ];

  const coreSkills = [
    { label: "ERP Ecosystem", value: "Odoo ERP (v14-v17), Python, QWeb, XML, PostgreSQL, Linux Debian Server" },
    { label: "Mobile Apps", value: "Flutter, Dart, Bloc / Cubit, Riverpod, Offline-first (SQLite/Hive), Biometrics & QR Scanner" },
    { label: "Web Fullstack", value: "Laravel, PHP, React.js, Vue.js, TypeScript, Tailwind CSS, CodeIgniter" },
    { label: "Database & Cloud", value: "PostgreSQL, MySQL, Oracle, RESTful APIs, Docker, Git" },
  ];

  return (
    <section className="py-24 border-b border-outline-variant/30" id="recognition">
      <div className="max-w-7xl mx-auto px-6 md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Label */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  Curriculum Vitae
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Rekam Jejak Karir &amp; Pendidikan
              </h2>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                Pengalaman profesional membangun ekosistem Odoo ERP, aplikasi mobile Flutter, dan sistem web enterprise di berbagai perusahaan teknologi dan korporasi Indonesia.
              </p>
            </div>

            {/* Core Competences Quick Summary */}
            <div className="p-5 bg-surface-container-lowest rounded-lg border border-outline-variant/40 space-y-4">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block">
                Ringkasan Kompetensi
              </span>
              <div className="space-y-3">
                {coreSkills.map((s, idx) => (
                  <div key={idx} className="text-body-sm">
                    <div className="font-semibold text-primary">{s.label}</div>
                    <div className="text-secondary text-[13px] leading-relaxed">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Tabular List */}
          <div className="lg:col-span-8 space-y-12">
            {/* Work Experiences */}
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-6 pb-2 border-b border-outline-variant/40">
                Pengalaman Kerja (Work Experiences)
              </h3>
              <div className="divide-y divide-outline-variant/30">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="py-5 space-y-1.5 group">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="font-headline-sm text-headline-sm text-primary font-medium group-hover:translate-x-0.5 transition-transform">
                          {exp.role}
                        </span>
                        <span className="text-outline-variant hidden md:inline">·</span>
                        <span className="font-body-md text-body-md text-secondary font-medium">
                          {exp.company}
                        </span>
                      </div>
                      <span className="font-mono text-body-sm text-secondary shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-secondary leading-relaxed pt-1">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-6 pb-2 border-b border-outline-variant/40">
                Riwayat Pendidikan Resmi (Education)
              </h3>
              <div className="divide-y divide-outline-variant/30">
                {education.map((edu, idx) => (
                  <div key={idx} className="py-4 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                    <div>
                      <div className="text-primary font-medium text-body-md">
                        {edu.degree}
                      </div>
                      <div className="text-secondary text-body-sm">
                        {edu.institution}
                      </div>
                      <div className="text-outline text-body-sm text-[12px] pt-0.5">
                        {edu.detail}
                      </div>
                    </div>
                    <span className="text-secondary font-mono text-[12px] shrink-0">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
