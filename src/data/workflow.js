export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Discovery & Technical Scope",
    desc: "Diskusi mendalam mengenai kebutuhan bisnis, spesifikasi fungsional, dan arsitektur database. Anda akan menerima dokumen Scope of Work (SOW) serta estimasi waktu yang transparan.",
    deliverable: "Dokumen SOW & Wireframe Alur"
  },
  {
    step: "02",
    title: "UI/UX Design & Prototyping",
    desc: "Perancangan antarmuka pengguna yang modern, user-friendly, dan fokus pada conversion rate. Anda dapat meninjau dan memberi feedback sebelum proses koding dimulai.",
    deliverable: "Desain Figma Interaktif"
  },
  {
    step: "03",
    title: "Agile Sprint Development",
    desc: "Proses pengerjaan dibagi ke dalam sprint mingguan. Anda mendapatkan link demo staging yang dapat dicoba secara berkala untuk memantau progres secara transparan.",
    deliverable: "Link Demo Staging & Laporan Sprint"
  },
  {
    step: "04",
    title: "QA, Launch & Garansi 30 Hari",
    desc: "Pengujian menyeluruh (Security, Responsiveness, Bug Free), deployment ke Cloud Server atau rilis ke Play Store/App Store, dilanjutkan dengan pendampingan garansi gratis 30 hari.",
    deliverable: "Source Code 100% Hak Milik + Garansi"
  }
];

export const TECH_STACK = {
  frontend: [
    { name: "React 18", category: "Library" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Vite", category: "Build Tool" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Next.js", category: "Framework" }
  ],
  mobile: [
    { name: "Flutter", category: "Framework" },
    { name: "Dart", category: "Language" },
    { name: "Bloc / Cubit", category: "State Management" },
    { name: "Firebase FCM", category: "Push Notification" },
    { name: "QR / Barcode", category: "Mobile Hardware" },
    { name: "SQLite / Hive", category: "Offline Storage" }
  ],
  backend: [
    { name: "Laravel", category: "Framework" },
    { name: "Python", category: "Language" },
    { name: "Odoo ERP", category: "Enterprise" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "RESTful API", category: "Architecture" }
  ],
  devops: [
    { name: "Docker", category: "Container" },
    { name: "Git / GitHub", category: "Version Control" },
    { name: "Linux VPS", category: "Server" },
    { name: "Nginx", category: "Web Server" },
    { name: "WhatsApp API", category: "Automation" },
    { name: "CI/CD Actions", category: "DevOps" }
  ]
};
