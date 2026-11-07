/**
 * Estimator Pricing & Timeline Rules
 */
export const PRICING_CONFIG = {
  types: {
    mobile: {
      name: "Aplikasi Mobile (Flutter iOS & Android)",
      baseMin: 12000000,
      baseMax: 20000000,
      weeks: 5,
    },
    web: {
      name: "Website Korporat & Katalog Produk",
      baseMin: 5000000,
      baseMax: 10000000,
      weeks: 3,
    },
    fullstack: {
      name: "Web Application Kompleks / SaaS / LMS",
      baseMin: 15000000,
      baseMax: 25000000,
      weeks: 6,
    },
    odoo: {
      name: "Kustomisasi Odoo ERP & Otomasi Modul",
      baseMin: 10000000,
      baseMax: 18000000,
      weeks: 4,
    }
  },

  features: [
    {
      id: "auth",
      label: "Autentikasi Multi-Role & Profil User",
      desc: "Login Google / OTP WhatsApp / JWT Token aman",
      price: 1500000,
      weeks: 0.5,
      icon: "shield"
    },
    {
      id: "payment",
      label: "Payment Gateway (Midtrans / Xendit / QRIS)",
      desc: "Notifikasi checkout otomatis & validasi pembayaran",
      price: 2500000,
      weeks: 1,
      icon: "credit-card"
    },
    {
      id: "whatsapp",
      label: "Otomasi Notifikasi WhatsApp Bot",
      desc: "Kirim pesan reminder, OTP & invoice via WA resmi",
      price: 2000000,
      weeks: 0.5,
      icon: "message-square"
    },
    {
      id: "export",
      label: "Export Laporan PDF & Excel Kustom",
      desc: "Format resmi slip gaji / invoice siap cetak",
      price: 1500000,
      weeks: 0.5,
      icon: "file-text"
    },
    {
      id: "qr",
      label: "QR Code Generator & Camera Scanner",
      desc: "Check-in tiket event, scan presensi atau inventory",
      price: 1800000,
      weeks: 0.5,
      icon: "qr-code"
    },
    {
      id: "deploy",
      label: "Setup Cloud VPS, Docker, SSL & Domain",
      desc: "Server production-ready dengan automated backup",
      price: 1500000,
      weeks: 0.5,
      icon: "cloud"
    }
  ],

  urgencyMultiplier: {
    standard: 1.0,
    fast: 1.25
  }
};

export const formatRupiah = (num) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(num);
};
