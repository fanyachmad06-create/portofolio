/**
 * Production Projects Case Studies Data
 * Based on user's real enterprise & startup repositories
 */
export const PROJECTS_DATA = [
  {
    id: "bigfair",
    category: "mobile",
    badge: "Flutter & Mobile",
    badgeClass: "badge-mobile",
    title: "BigFair — Mobile Event & Ticketing Platform",
    subtitle: "Aplikasi Mobile Event, Booking Tiket & Notifikasi Cerdas Berbasis Wilayah",
    image: "/assets/images/bigfair-cover.jpg",
    client: "Platform Startup Event & Festival",
    role: "Mobile Developer & Backend API Engineer",
    duration: "2 Bulan (Development & Revamp)",
    techStack: ["Flutter", "Dart", "Bloc / Cubit", "Laravel", "MySQL", "Firebase FCM", "QR Scanner"],
    overview: "BigFair adalah platform terpadu untuk discovery event konser, pameran seni, dan kelas online. Pengguna dapat memilih kategori tiket, melakukan checkout instan, dan menerima e-ticket dengan QR code dinamis yang siap dipindai di pintu masuk venue (scan at entry).",
    challenge: "Tantangan utama adalah mengelola load notifikasi massal yang relevan bagi pengguna di kota tertentu tanpa membuat server overload, serta memastikan scanner QR tiket offline tetap berfungsi saat sinyal di lokasi konser terganggu.",
    solution: "• Membangun sistem segmentasi notifikasi fleksibel berbasis Kota dan Event (database relasi app_notification_events) di backend Laravel.\n• Mengimplementasikan arsitektur Flutter Bloc/Cubit untuk manajemen state UI yang ringan dan modular di halaman notifikasi dan detail event.\n• Menyediakan sistem validasi tiket responsif dengan caching data offline pada scanner camera.",
    metrics: [
      { label: "Peningkatan Kecepatan Load", val: "40%" },
      { label: "Targeting Notifikasi", val: "100% Akurat" },
      { label: "Platform", val: "Android & iOS" }
    ],
    features: [
      "Katalog Event & Filter Interaktif (Kota, Kategori, Tanggal)",
      "Pemesanan Multi-Tiket & Checkout Integrasi API",
      "E-Ticket dengan Dynamic QR Code untuk Scan Masuk",
      "Modul Online Class & Live Schedule Timeline",
      "Push Notification Terfilter Spesifik per Event & Kota"
    ]
  },
  {
    id: "cms-bigfair",
    category: "web",
    badge: "Laravel & CMS Portal",
    badgeClass: "badge-web",
    title: "BigFair CMS — Event & Ticketing Backoffice Portal",
    subtitle: "Dashboard Backoffice Terpusat untuk Manajemen Event, Approval Transaksi & Tiketing Nasional",
    image: "/assets/images/cms-bigfair/01.jpg",
    client: "Platform Startup Event & Festival",
    role: "Fullstack Web Engineer & Database Architect",
    duration: "2 Bulan",
    techStack: ["Laravel", "Blade", "MySQL", "Tailwind CSS", "Chart.js", "Redis", "Export Excel / PDF"],
    overview: "BigFair CMS adalah portal backoffice terpusat yang digunakan tim operasional dan finance untuk mengelola seluruh ekosistem event BigFair di berbagai kota di Indonesia. Dilengkapi dashboard analitik performa penjualan tiket real-time, manajemen master data pembicara, modul approval transaksi lunas dan DP, serta mekanisme pemindahan kota peserta.",
    challenge: "Menghadapi ribuan lonjakan transaksi tiket konser dan event offline serentak, tim finance membutuhkan sistem verifikasi pembayaran (lunas vs DP) yang cepat dengan audit trail jelas, serta fleksibilitas jika peserta mengajukan perubahan jadwal atau perpindahan kota.",
    solution: "• Merancang dashboard metrik real-time yang menampilkan statistik penjualan tiket harian, total omset bulanan, dan rasio konversi per event.\n• Mengembangkan modul audit transaksi lunas & DP dengan filter dinamis dan fitur ekspor data laporan keuangan ke Excel/PDF.\n• Membangun workflow approval perubahan data booking dan perpindahan kota secara aman tanpa konflik database tiket.",
    metrics: [
      { label: "Otomasi Approval", val: "Instant" },
      { label: "Kapasitas Transaksi", val: "10.000+ Tiket" },
      { label: "Fitur Backoffice", val: "8 Modul Utama" }
    ],
    features: [
      "Dashboard Statistik Penjualan Tiket & Grafik Omset Bulanan",
      "Manajemen Katalog Event, Jadwal & Multi-Kota",
      "Master Data Pembicara, Sponsor & Banner Promosi",
      "Verifikasi & Approval Transaksi Lunas serta DP",
      "Antrean Permintaan Perubahan Booking & Pindah Kota Peserta",
      "Penjadwalan & Pengiriman Notifikasi Tersegmentasi"
    ]
  },
  {
    id: "gbu",
    category: "web",
    badge: "React & TypeScript",
    badgeClass: "badge-web",
    title: "PT Gema Berdikari Ultima — Geospatial Catalog & Portal",
    subtitle: "Website Korporat & Katalog Produk Presisi Tinggi untuk Industri Tambang",
    image: "/assets/images/gbu/01.jpg",
    client: "PT Gema Berdikari Ultima (Balikpapan)",
    role: "Frontend Engineer & UI Implementation",
    duration: "4 Minggu",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Lucide Icons"],
    overview: "PT Gema Berdikari Ultima adalah penyedia jasa survei dan distributor resmi Leica Geosystems & RIEGL di Indonesia. Website ini didesain khusus untuk menampilkan profil perusahaan kredibel dengan katalog alat ukur canggih (Terrestrial Laser Scanner, Total Station, Drone UAV, dan Mobile Mapping System).",
    challenge: "Website sebelumnya kurang mencerminkan reputasi enterprise perusahaan dalam menangani klien besar tambang (PT ANTAM, PT Vale, PT Saptaindra Sejati). Klien membutuhkan tampilan mewah dengan navigasi katalog yang terstruktur rapi.",
    solution: "• Membangun hero slider interaktif resolusi tinggi dengan transisi halus Framer Motion.\n• Menata arsitektur komponen React modular dengan TypeScript type-safety untuk katalog produk dan spesifikasi teknis alat.\n• Menyusun tampilan portofolio klien dan galeri proyek lapangan (Mining Service, On-Site Training, Product Demo) yang responsif di smartphone maupun desktop.",
    metrics: [
      { label: "Performa Skor Lighthouse", val: "95+" },
      { label: "Responsif", val: "Mobile, Tablet & Desktop" },
      { label: "Desain", val: "Modern Dark Glassmorphism" }
    ],
    features: [
      "Hero Header Slider Interaktif dengan High-Res Imagery",
      "Katalog Produk Geospasial Lengkap (Leica & RIEGL Specs)",
      "Showcase Layanan Survei Tambang, Rental & Kalibrasi",
      "Grid Logo Klien Enterprise (ANTAM, Vale, SIS, dll)",
      "Halaman Berita, Karir & Formulir Permintaan Penawaran Cepat"
    ]
  },
  {
    id: "lms",
    category: "web",
    badge: "Laravel & LMS",
    badgeClass: "badge-web",
    title: "YSMO — Islamic LMS & Online CBT Exam Platform",
    subtitle: "Platform Pembelajaran & Ujian Berbasis Komputer Adaptif untuk Santri & Guru",
    image: "/assets/images/lms/03.jpg",
    client: "Yayasan Pendidikan / Pesantren YSMO",
    role: "Fullstack Developer (Laravel & Blade)",
    duration: "6 Minggu",
    techStack: ["Laravel", "Blade Template Engine", "Tailwind CSS", "MySQL", "JavaScript ES6"],
    overview: "Sistem Learning Management System (LMS) dan Computer-Based Test (CBT) yang dirancang khusus untuk santri pondok pesantren dan sekolah Islam. Menangani puluhan ribu soal ujian, materi kelas interaktif, rekapan kehadiran, hingga rapor digital santri.",
    challenge: "Ujian online sering diakses oleh ratusan santri secara serentak melalui smartphone dengan layar sempit, menyebabkan tombol opsi jawaban dan timer terpotong bila desain tidak optimal.",
    solution: "• Merombak layout halaman ujian (exam view) dengan rasio proporsional dan sticky timer yang tetap terlihat saat santri melakukan scroll soal panjang.\n• Menambahkan auto-save jawaban instan via asynchronous AJAX request agar tidak ada jawaban hilang ketika koneksi terputus.\n• Membangun panel manajemen bank soal yang mendukung format teks Arab, audio tilawah, dan rumus matematika.",
    metrics: [
      { label: "Konkurensi Pengguna", val: "1.000+ Siswa" },
      { label: "Zero Loss", val: "Auto-Save Jawaban" },
      { label: "Optimasi Layar", val: "Mobile Sticky Timer" }
    ],
    features: [
      "Engine Ujian Online CBT dengan Anti-Cheat & Sticky Timer",
      "Manajemen Kelas, Materi PDF, Video & Audio Tilawah",
      "Sistem Penilaian Otomatis & Analisis Butir Soal",
      "Rekapitulasi Nilai & Cetak Raport Digital Santri",
      "Dashboard Guru, Santri, dan Orang Tua Siswa"
    ]
  },
  {
    id: "hris",
    category: "backend",
    badge: "Odoo ERP & Backend",
    badgeClass: "badge-backend",
    title: "Enterprise HRIS & Automated Payroll System",
    subtitle: "Kustomisasi Modul Slip Gaji Resmi, Presensi & Otomasi HR Berbasis ERP Odoo",
    image: "/assets/images/hris/02.jpg",
    client: "Perusahaan Kontraktor & Manufaktur",
    role: "Odoo Developer & Python Backend Specialist",
    duration: "5 Minggu",
    techStack: ["Odoo ERP", "Python", "PostgreSQL", "Docker", "WhatsApp Business API", "XML QWeb"],
    overview: "Kustomisasi sistem Human Resource Information System (HRIS) dan Payroll terintegrasi pada ekosistem Odoo ERP. Mengotomasi alur perhitungan gaji bulanan ratusan karyawan dari data absensi biometrik hingga cetak slip gaji berstandar regulasi ketenagakerjaan.",
    challenge: "Format slip gaji bawaan Odoo tidak sesuai dengan format regulasi perpajakan Indonesia (PPh 21, BPJS Ketenagakerjaan, BPJS Kesehatan, serta hitungan lembur proporsional), dan pengiriman slip via kertas manual memakan waktu tim finance hingga berhari-hari.",
    solution: "• Mengembangkan modul kustom Python untuk struktur tabel slip gaji detail (Tunjangan, Komponen Potongan, Rincian Lembur, dan Total Bersih).\n• Mendesain template PDF slip gaji resmi menggunakan XML QWeb report yang rapi dan terenkripsi password NIK karyawan.\n• Mengintegrasikan notifikasi pengiriman slip gaji langsung ke WhatsApp nomor karyawan otomatis begitu payroll disetujui.",
    metrics: [
      { label: "Efisiensi Payroll", val: "85% Lebih Cepat" },
      { label: "Distribusi Slip", val: "100% Otomatis WA" },
      { label: "Akurasi PPh21", val: "100% Sesuai Regulasi" }
    ],
    features: [
      "Struktur Perhitungan Slip Gaji Kustom (BPJS, PPh 21, Lembur)",
      "Template Cetak PDF Resmi Berstandar Korporat dengan Enkripsi",
      "Integrasi Mesin Absensi Fingerprint & GPS Mobile Check-in",
      "Otomasi Notifikasi Slip & Pengingat Presensi via WhatsApp",
      "Containerized Deployment Menggunakan Docker & PostgreSQL"
    ]
  },
  {
    id: "smacademy",
    category: "web",
    badge: "E-Learning Platform",
    badgeClass: "badge-web",
    title: "SM Academy — Platform E-Learning Islami",
    subtitle: "Kursus Online Terstruktur dengan Sertifikat Otomatis, Poin Reward & Pembayaran Terintegrasi",
    image: "/assets/images/smacademy/01.jpg",
    client: "Surabaya Mengaji Academy",
    role: "Fullstack Developer",
    duration: "—",
    techStack: ["Next.js / React", "Tailwind CSS", "PostgreSQL", "Payment Gateway"],
    overview: "SM Academy adalah platform e-learning Islami yang menyediakan kursus terstruktur dalam format video, audio, dan dokumen. Siswa dapat mendaftar, belajar bertahap, memperoleh sertifikat otomatis, dan membayar melalui berbagai metode pembayaran. Tersedia dashboard siswa dengan progres belajar dan poin reward.",
    challenge: "Menghadirkan pengalaman belajar online yang rapi untuk berbagai format materi, sekaligus mengelola alur pendaftaran, pembayaran, dan penerbitan sertifikat secara otomatis.",
    solution: "• Membangun katalog e-course dengan filter kategori dan pencarian.\n• Menyusun kurikulum bertingkat berisi materi video, audio, teks/transkrip, dan kuis.\n• Mengintegrasikan pembayaran (Virtual Account, e-wallet, QRIS) dan sertifikat otomatis.",
    metrics: [
      { label: "Format Materi", val: "Video, Audio & Teks" },
      { label: "Sertifikat", val: "Otomatis" },
      { label: "Pembayaran", val: "VA, E-Wallet & QRIS" }
    ],
    features: [
      "Katalog e-course dengan filter kategori dan pencarian",
      "Kurikulum bertingkat dengan materi video, audio, teks/transkrip, dan kuis",
      "Dashboard siswa dengan progres belajar dan sertifikat otomatis",
      "Sistem poin reward dan voucher",
      "Pembayaran terintegrasi (Virtual Account, e-wallet, QRIS)"
    ]
  }
];

export const CATEGORIES = [
  { id: "all", label: "Semua Proyek" },
  { id: "mobile", label: "Mobile Apps (Flutter)" },
  { id: "web", label: "Web Apps (React/Laravel)" },
  { id: "backend", label: "Backend & ERP (Odoo)" },
];
