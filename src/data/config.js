/**
 * Personal & Contact Configuration
 * Synchronized with authentic Curriculum Vitae of Fany Achmad Mustofah
 */
export const PERSONAL_CONFIG = {
  name: "Fany Achmad Mustofah",
  brandName: "Fany Achmad",
  roleHeadline: "Fullstack Developer, Odoo ERP Engineer & Mobile Flutter Specialist",
  tagline: "Building robust web platforms, enterprise Odoo ERP solutions & fluid Flutter apps.",
  bio: "Halo. Saya Fany Achmad Mustofah — Fullstack Developer dan Mobile Engineer berbasis di Surabaya dengan spesialisasi Odoo ERP (Python), aplikasi mobile lintas platform (Flutter), serta web enterprise (Laravel, React, Vue, Tailwind CSS). Berpengalaman lebih dari 6 tahun menangani arsitektur sistem korporat, otomasi proses bisnis, dan deployment server Linux.",

  // Contact details directly from CV
  email: "fanyarsas6199@gmail.com",
  phone: "+62 81330320731",
  whatsappNumber: "6281330320731",
  whatsappDisplay: "+62 813-3032-0731",
  address: "Raya Sambikerep No.18, Sambikerep, Surabaya, Jawa Timur",
  location: "Surabaya, Indonesia · GMT+7 (WIB)",
  education: "Teknik Informatika — Institut Teknologi Adhi Tama Surabaya (ITATS)",
  availability: "Available for work",
  statusInquiries: "Accepting inquiries for projects & enterprise contracts",

  // Social & Portfolio Channels
  linkedinUrl: "https://www.linkedin.com/in/fany-achmad-mustofah/",
  githubUrl: "https://github.com/fanyachmad06-create",
  gitlabUrl: "https://gitlab.com/fanyachmad",

  // Engineering Metrics
  metrics: [
    { number: "6+", label: "Tahun Pengalaman Rekayasa Sistem & ERP" },
    { number: "25+", label: "Modul ERP, Aplikasi Mobile & Web Produksi" },
    { number: "100%", label: "Uptime & Komitmen Delivery Kode Handal" },
  ],
};

export const getWhatsAppUrl = (customText = "") => {
  const defaultText = "Halo Mas Fany, saya melihat portofolio Anda dan tertarik berdiskusi mengenai proyek software / Odoo ERP / aplikasi mobile.";
  const text = customText || defaultText;
  return `https://wa.me/${PERSONAL_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
