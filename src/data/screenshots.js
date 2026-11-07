/**
 * Screenshot galleries per project (sensitive data already blurred).
 * Files live in public/assets/images/<folder>/
 */
export const SCREENSHOTS = {
  "bigfair": [
    {
      "group": "Aplikasi Mobile",
      "src": "/assets/images/bigfair-mobile/01.jpg",
      "title": "Beranda & Pop-up Promo Event Roadshow",
      "caption": "Layar pembuka aplikasi mobile BigFair dengan dialog modal promo interaktif yang menampilkan penawaran spesial webinar dan konser terkini. Mengimplementasikan caching banner lokal sehingga pop-up dapat muncul seketika tanpa jeda saat koneksi internet lambat. Dari layar ini, pengguna disuguhkan banner carousel festival musik, jadwal terdekat, dan filter pencarian cepat."
    },
    {
      "group": "Aplikasi Mobile",
      "src": "/assets/images/bigfair-mobile/02.jpg",
      "title": "Katalog & Discovery Event Multi-Kota",
      "caption": "Antarmuka penjelajahan event dengan navigasi tab segmented: 'Berikutnya' untuk event aktif dan 'Selesai' untuk rekap histori. Menggunakan arsitektur Flutter Bloc untuk me-render kartu event lengkap dengan label badge kota, countdown jadwal, kuota tiket tersisa, dan navigasi langsung ke halaman booking tiket dalam satu sentuhan."
    },
    {
      "group": "Aplikasi Mobile",
      "src": "/assets/images/bigfair-mobile/03.jpg",
      "title": "Pusat Notifikasi Cerdas & Pengingat Jadwal",
      "caption": "Modul notifikasi terfilter yang mengelompokkan pengumuman berdasarkan kota tempat tinggal pengguna dan event yang diikuti. Mengintegrasikan Firebase Cloud Messaging (FCM) dengan backend Laravel yang cerdas membagi pengingat H-1 konser, tata tertib venue, hingga panduan link streaming kelas online secara terotomasi."
    },
    {
      "group": "Aplikasi Mobile",
      "src": "/assets/images/bigfair-mobile/04.jpg",
      "title": "Profil Pengguna, Riwayat & Bantuan Terpadu",
      "caption": "Panel profil komprehensif yang memusatkan pengaturan keamanan akun, riwayat transaksi, ganti kata sandi, hingga menu bantuan FAQ interaktif. Dilengkapi tombol direct channel Customer Service WhatsApp resmi untuk menangani kendala teknis tiket secara instan, memberikan rasa aman bagi pembeli tiket konser."
    },
    {
      "group": "Aplikasi Mobile",
      "src": "/assets/images/bigfair-mobile/05.jpg",
      "title": "Detail Event, E-Ticket & Dynamic QR Code",
      "caption": "Halaman inti tiket yang menampilkan barcode dan Dynamic QR Code terenkripsi untuk dipindai di pintu masuk venue (scan at entry). Halaman ini juga merangkum unduhan E-Receipt resmi, E-Certificate digital, alamat Google Maps venue, serta susunan narasumber dan voucher potongan harga sponsor."
    },
    {
      "group": "Aplikasi Mobile",
      "src": "/assets/images/bigfair-mobile/06.jpg",
      "title": "Katalog Webinar & Online Learning Schedule",
      "caption": "Tampilan kartu grid dua kolom yang responsif untuk pameran kelas online dan workshop kreatif. Menampilkan jadwal jam siaran, nama instruktur terverifikasi, harga tiket, dan tombol aksi 'Ikuti' cepat yang langsung terhubung ke alur pendaftaran dan payment gateway."
    },
    {
      "group": "Aplikasi Mobile",
      "src": "/assets/images/bigfair-mobile/07.jpg",
      "title": "Poster Showcase & Penyelenggaraan Event Offline",
      "caption": "Bagian bawah beranda yang menampilkan showcase poster festival offline berskala besar beserta video recap dokumentasi acara sebelumnya. Dirancang khusus untuk mendorong minat pengguna menghadiri roadshow festival di berbagai kota di Indonesia."
    }
  ],
  "cms-bigfair": [
    {
      "group": "CMS Admin",
      "src": "/assets/images/cms-bigfair/01.jpg",
      "title": "Dashboard Analitik Eksekutif & Real-time KPI",
      "caption": "Pusat kendali utama bagi manajemen BigFair yang menampilkan ringkasan performa penjualan tiket secara real-time: total event aktif, volume tiket terjual, omset kotor bulanan, dan rasio status booking. Dilengkapi visualisasi grafik tren pembelian harian yang ditenagai agregasi query database MySQL yang telah dioptimasi."
    },
    {
      "group": "CMS Admin",
      "src": "/assets/images/cms-bigfair/02.jpg",
      "title": "Manajemen Master Event & Monitoring Kuota",
      "caption": "Modul pengelolaan seluruh agenda festival dan konser lintas kota di Indonesia. Administrator dapat memantau kapasitas kuota tiket, mengonfigurasi tim pelaksana lapangan, mengaktifkan akun scanner gate, mengunggah template sertifikat, hingga mengelola voucher diskon dan galeri foto dalam antarmuka tabel interaktif."
    },
    {
      "group": "CMS Admin",
      "src": "/assets/images/cms-bigfair/03.jpg",
      "title": "Master Data Pembicara, Musisi & Artis",
      "caption": "Pusat pendataan narasumber, artis musik, dan pembicara seminar. Mendukung unggah foto avatar resolusi tinggi, bio profil singkat, akun media sosial, serta penugasan otomatis ke jadwal panggung event terkait guna sinkronisasi instan ke aplikasi mobile pengguna."
    },
    {
      "group": "CMS Admin",
      "src": "/assets/images/cms-bigfair/04.jpg",
      "title": "Audit & Verifikasi Transaksi Tiket Lunas",
      "caption": "Tabel audit transaksi pembayaran lunas yang menangani ribuan mutasi pesanan tiket. Dilengkapi filter multi-parameter berdasarkan kota event, metode pembayaran, tim verifikator, dan rentang tanggal, serta fitur ekspor laporan keuangan ke format Excel/CSV untuk rekonsiliasi perbankan."
    },
    {
      "group": "CMS Admin",
      "src": "/assets/images/cms-bigfair/05.jpg",
      "title": "Monitoring Transaksi Uang Muka (DP) & Approval",
      "caption": "Modul khusus untuk mengawasi skema pembayaran tiket dengan sistem uang muka (DP). Tim admin finance dapat memverifikasi bukti transfer pelunasan, menyetujui transaksi bersyarat, dan mengirimkan pengingat batas waktu pelunasan secara otomatis ke WhatsApp pembeli."
    },
    {
      "group": "CMS Admin",
      "src": "/assets/images/cms-bigfair/06.jpg",
      "title": "Workflow Permintaan Perubahan Booking Peserta",
      "caption": "Antrean verifikasi pengajuan perubahan data pembeli tiket (seperti ralat nama atau nomor identitas) dengan komparasi visual side-by-side sebelum dan sesudah data diubah. Membantu supervisor menyetujui atau menolak permohonan secara individual maupun massal demi mencegah kecurangan tiket calo."
    },
    {
      "group": "CMS Admin",
      "src": "/assets/images/cms-bigfair/07.jpg",
      "title": "Modul Manajemen Perpindahan Kota Tiket",
      "caption": "Fitur fleksibilitas tiket yang memungkinkan admin memindahkan registrasi tiket peserta ke kota penyelenggaraan lain apabila jadwal berbenturan. Sistem secara otomatis memperbarui kuota venue kota asal dan kota tujuan tanpa menyebabkan duplikasi kode QR e-ticket."
    },
    {
      "group": "CMS Admin",
      "src": "/assets/images/cms-bigfair/08.jpg",
      "title": "Mesin Penjadwalan Push Notification Massal",
      "caption": "Antarmuka penyusunan notifikasi massal tersegmentasi. Admin dapat merancang pesan pengumuman darurat, perubahan rundown panggung, atau promo khusus dengan menargetkan filter kota tertentu atau status tiket tertentu, yang dikirimkan secara paralel melalui antrean background queue Laravel."
    }
  ],
  "gbu": [
    {
      "group": "Website",
      "src": "/assets/images/gbu/01.jpg",
      "title": "Hero Portal & Kredensial Distribusi Leica Geosystems",
      "caption": "Tampilan beranda utama PT Gema Berdikari Ultima dengan estetika dark glassmorphism premium. Menonjolkan status perusahaan sebagai distributor resmi instrumen Leica Geosystems di Indonesia, rekam jejak 25+ tahun, 1.500+ unit alat terdistribusi, serta tombol Call-to-Action langsung untuk permintaan penawaran harga (Request Quote) bagi korporasi tambang."
    },
    {
      "group": "Website",
      "src": "/assets/images/gbu/02.jpg",
      "title": "Matriks Solusi Industri Tambang & Pemetaan",
      "caption": "Komponen kartu interaktif yang mengklasifikasikan solusi geospasial berdasarkan sektor: Survey & Mapping, Mining Exploration, dan Geotechnical Monitoring. Setiap kartu dilengkapi dokumentasi fotografi proyek lapangan nyata, ringkasan instrumen yang digunakan, dan tautan eksplorasi kapabilitas teknis."
    },
    {
      "group": "Website",
      "src": "/assets/images/gbu/03.jpg",
      "title": "Showcase Layanan Survei Lapangan & Kalibrasi",
      "caption": "Halaman portofolio layanan survei komprehensif yang mencakup UAV Drone Photogrammetry, 3D Terrestrial Laser Scanning, kalibrasi bersertifikasi laboratorium, hingga survei batimetri perairan. Disusun dengan grid modular Tailwind CSS yang responsif di perangkat mobile maupun monitor ultra-wide."
    },
    {
      "group": "Website",
      "src": "/assets/images/gbu/04.jpg",
      "title": "Direktori Klien Korporat & Mitra Strategis",
      "caption": "Pusat kredibilitas perusahaan yang menampilkan deretan logo konglomerat pertambangan dan kontraktor nasional terkemuka (seperti PT ANTAM, PT Vale Indonesia, PT Saptaindra Sejati, dan Berau Coal). Menegaskan reputasi PT GBU sebagai mitra terpercaya dalam pengadaan alat presisi bernilai miliaran rupiah."
    },
    {
      "group": "Website",
      "src": "/assets/images/gbu/05.jpg",
      "title": "Gerbang Katalog Instrumen & Pusat Unduhan Brosur",
      "caption": "Halaman katalog produk terintegrasi dengan latar belakang visual operasional tambang beresolusi tinggi. Calon pembeli dapat mengunduh dokumen spesifikasi teknis (Datasheet) dan katalog lengkap dalam format PDF secara langsung tanpa hambatan registrasi yang berbelit."
    },
    {
      "group": "Website",
      "src": "/assets/images/gbu/06.jpg",
      "title": "Landing Page Produk Unggulan Leica TS20",
      "caption": "Halaman sorotan produk flagship Total Station Leica TS20 yang mengedepankan akurasi sudut sub-detik, jangkauan pengukuran laser jauh, dan ketahanan cuaca ekstrem bersertifikasi IP66. Dilengkapi tombol formulir pemesanan cepat dan integrasi tombol WhatsApp sales engineer lapangan."
    },
    {
      "group": "Website",
      "src": "/assets/images/gbu/07.jpg",
      "title": "Katalog Seri Total Station & Spesifikasi Komparatif",
      "caption": "Tampilan etalase seri instrumen pengukuran Leica FlexLine (TS03, TS07, TS10, TS13, dsb.). Menyajikan tabel komparasi akurasi milimeter, kapasitas baterai, sistem operasi onboard, dan link unduhan brosur per unit untuk mempermudah konsultan survei menentukan alat yang tepat."
    }
  ],
  "lms": [
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/01.jpg",
      "title": "Autentikasi Multi-Peran & Keamanan Akses LMS",
      "caption": "Antarmuka otentikasi aman yang membedakan hak akses secara ketat antara Santri/Siswa, Ustadz/Pengajar, dan Administrator Yayasan. Dilengkapi proteksi throttling CSRF, enkripsi sesi berbasis cookie aman, serta fitur pemulihan kata sandi otomatis melalui verifikasi email."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/02.jpg",
      "title": "Halaman Masuk Responsif & Desain Visual Bersih",
      "caption": "Tampilan layar penuh antarmuka login yang dioptimasi untuk beragam ukuran viewport, mulai dari layar smartphone santri hingga desktop staf administrasi. Menggunakan tipografi yang jelas dan palet warna ramah mata untuk kenyamanan akses belajar harian."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/03.jpg",
      "title": "Dashboard Eksekutif Administrator Yayasan",
      "caption": "Pusat monitoring menyeluruh yang merangkum metrik operasional lembaga: total santri terdaftar, rasio pengajar aktif, jumlah mata pelajaran berjalan, serta rekapitulasi infaq pendidikan bulanan. Menyediakan widget ringkasan agenda ujian CBT terdekat dan statistik absensi santri hari ini."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/04.jpg",
      "title": "Manajemen Basis Data & Direktori Santri Terpadu",
      "caption": "Tabel data induk santri dengan fitur pencarian cepat, penyaringan per angkatan/kelas, serta fungsi ekspor instan ke format CSV dan PDF resmi yayasan. Memudahkan staf tata usaha memverifikasi kelengkapan berkas santri, nomor induk, dan status keaktifan belajar."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/05.jpg",
      "title": "Manajemen Tenaga Pendidik & Penugasan Mata Pelajaran",
      "caption": "Modul pengelolaan profil dewan asatidz dan pengajar, mencakup penugasan mata pelajaran, jadwal pertemuan tatap muka maupun daring, serta histori keaktifan kelas. Dilengkapi aksi cepat untuk mereset kredensial akun dan memperbarui bidang keahlian pengajar."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/06.jpg",
      "title": "Katalog Kurikulum & Pengelolaan Silabus Belajar",
      "caption": "Pusat konfigurasi mata pelajaran yang memetakan kurikulum pendidikan Islam dan umum. Administrator dapat menduplikasi struktur silabus antartahun ajaran, menentukan target capaian pembelajaran, serta menugaskan pengajar penanggung jawab dengan beberapa klik."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/07.jpg",
      "title": "Taksonomi & Pengelompokan Kategori Program",
      "caption": "Sistem pengelompokan program belajar berjenjang (seperti Tahsin Al-Qur'an, Fiqih Ibadah, Bahasa Arab, dan Sains Terpadu). Memastikan repositori materi dan arsip bank soal tersusun secara terstruktur dan mudah diakses oleh seluruh tingkatan kelas."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/08.jpg",
      "title": "Buku Nilai Digital & Evaluasi Akademik Berkala",
      "caption": "Lembar penilaian digital yang mencatat nilai tugas, kuis, dan ujian santri per pertemuan. Menggunakan algoritma kalkulasi bobot otomatis dan penandaan warna (color-coding) untuk mengidentifikasi santri yang memerlukan sesi bimbingan remedial."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/09.jpg",
      "title": "Analisis Performa Siswa & Rapor Hasil Belajar",
      "caption": "Kartu rekapitulasi performa individual santri yang menggabungkan statistik kehadiran fisik, rata-rata skor evaluasi berkala, dan catatan perkembangan akhlak. Laporan ini siap dicetak sebagai lembar rapor digital resmi untuk orang tua murid."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/10.jpg",
      "title": "Portal Pengisian Presensi Harian Santri",
      "caption": "Antarmuka kartu presensi visual yang memudahkan pengajar menandai kehadiran santri (Hadir, Sakit, Izin, Alpha) pada tiap sesi tatap muka. Terhubung langsung ke modul kalkulasi disiplin dan sistem notifikasi keterlambatan."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/11.jpg",
      "title": "Rekapitulasi Kehadiran & Audit Disiplin Santri",
      "caption": "Laporan persentase kehadiran bulanan santri per kelas. Data ini disajikan dalam format matriks komparatif yang memudahkan wali kelas mendeteksi tren absensi serta memicu surat peringatan kehadiran secara otomatis."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/12.jpg",
      "title": "Engine Ujian CBT (Computer-Based Test) & Bank Soal",
      "caption": "Mesin ujian online yang mendukung ribuan butir bank soal dengan tipe pilihan ganda dan esai. Dilengkapi timer ujian adaptif, pengacakan urutan soal dan opsi jawaban (anti-cheat), auto-save jawaban instan saat koneksi drop, serta koreksi nilai otomatis."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/13.jpg",
      "title": "Pelacakan Invoice & Mutasi Transaksi Pendidikan",
      "caption": "Pusat rekonsiliasi pembayaran biaya pendidikan, infaq buku, dan pendaftaran kursus. Menyediakan filter status verifikasi (Pending, Paid, Expired) dan pencarian nomor invoice untuk memudahkan audit keuangan kas yayasan."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/14.jpg",
      "title": "Etalase Kelas & Program Pembelajaran Terbuka",
      "caption": "Antarmuka katalog bergaya kartu modern yang menampilkan program kursus yang dapat diikuti santri. Menampilkan rating santri, estimasi durasi belajar, serta rincian biaya infaq pendaftaran dengan visual yang bersih dan menarik."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/15.jpg",
      "title": "Detail Silabus, Materi Modul & Profil Instruktur",
      "caption": "Halaman deskripsi menyeluruh mengenai kursus yang dipilih, mencakup silabus kurikulum per pertemuan, materi pendukung (PDF dan audio tilawah), serta biografi kompetensi pengajar yang mengampu materi."
    },
    {
      "group": "Platform LMS",
      "src": "/assets/images/lms/16.jpg",
      "title": "Gateway Pembayaran Terpadu & Checkout Otomatis",
      "caption": "Halaman konfirmasi pendaftaran dengan integrasi saluran pembayaran digital (Virtual Account bank syariah dan QRIS nasional). Sistem secara otomatis memverifikasi mutasi dana dan menerbitkan invoice lunas tanpa verifikasi manual staf."
    }
  ],
  "hris": [
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/01.jpg",
      "title": "Portal Masuk SSO & Autentikasi ERP Terproteksi",
      "caption": "Gerbang autentikasi enterprise berbasis Odoo ERP dengan protokol otentikasi ketat dan penanganan sesi terenkripsi. Dilengkapi mekanisme pembatasan percobaan login (brute-force protection) serta pemulihan kata sandi mandiri untuk menjamin privasi data penggajian seluruh karyawan."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/02.jpg",
      "title": "Dasbor Utama Navigasi Modul & Tombol Quick Check-in",
      "caption": "Antarmuka sentral terintegrasi yang menghimpun seluruh modul operasional HR: Manajemen Karyawan, Presensi, Kalender Cuti, Pengajuan Izin/Sakit, Alokasi Lembur, hingga Engine Penggajian Otomatis. Menyediakan tombol pintas 'Check In / Check Out' di bilah atas untuk absensi cepat karyawan."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/03.jpg",
      "title": "Kanal Notifikasi Otomatis & Log Permohonan Izin",
      "caption": "Sistem pengumuman real-time internal yang secara otomatis menyiarkan status pengajuan izin kerja, dinas luar kantor, dan WFH kepada para kepala divisi dan manajer HR. Memastikan setiap ketidakhadiran terdata tanpa penundaan komunikasi manual."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/04.jpg",
      "title": "Buku Besar Penggajian & Rekapitulasi Slip Gaji Massal",
      "caption": "Pusat komputasi penggajian bulanan HRD yang mengelompokkan ratusan payslip per periode kerja. Mengintegrasikan formula otomatis potongan BPJS Ketenagakerjaan & Kesehatan, kalkulasi progresif PPh21 terstandarisasi, serta ekspor file batch transfer bank."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/05.jpg",
      "title": "Direktori Induk Karyawan & Bagan Struktur Organisasi",
      "caption": "Database master profil staf dengan penyaringan dinamis berdasarkan departemen, divisi kerja, dan tingkatan jabatan. Mendukung visualisasi kanban kartu, tabel detail, maupun diagram hierarki hierarki struktural untuk mempermudah audit sumber daya manusia."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/06.jpg",
      "title": "Kalkulator Jam Kerja, Keterlambatan & Akumulasi Lembur",
      "caption": "Tabel audit presensi harian yang secara presisi mengkalkulasi rerata jam kedatangan, durasi waktu kerja efektif, akumulasi jam lembur, serta total penalti menit keterlambatan. Terkoneksi langsung dengan mesin fingerprint dan sistem presensi mobile geofencing."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/07.jpg",
      "title": "Portal Self-Service Rekap Kehadiran Karyawan",
      "caption": "Halaman kontrol transparansi kehadiran personal bagi tiap karyawan. Menampilkan target jam kerja bulanan, total jam yang berhasil dicapai, rekapitulasi menit selisih kerja, serta histori izin sakit agar karyawan dapat memantau kedisiplinannya secara mandiri."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/08.jpg",
      "title": "Matriks Kalender Cuti Bersama & Kuota Libur Tahunan",
      "caption": "Visualisasi kalender interaktif yang memetakan jadwal cuti tahunan, cuti melahirkan, dan libur bersama antaranggota divisi. Membantu pimpinan unit kerja menghindari kekosongan operasional (staff shortage) dengan meninjau jadwal cuti secara berdampingan."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/09.jpg",
      "title": "Leaderboard Kedisiplinan Divisi & Laporan Performa PDF",
      "caption": "Papan klasemen kedisiplinan departemen yang mengevaluasi performa kehadiran kerja dan ketepatan waktu staf. Dilengkapi fitur cetak dokumen laporan resmi berformat PDF untuk mendukung evaluasi KPI tahunan dan pemberian reward karyawan teladan."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/10.jpg",
      "title": "Workflow Permohonan Izin Bertingkat & Multi-Approval",
      "caption": "Alur kerja pengajuan izin kerja formal yang memerlukan persetujuan berjenjang dari Supervisor, Manajer Departemen, hingga HRD. Dilengkapi riwayat persetujuan terperinci dan catatan alasan ketidakhadiran yang terdokumentasi rapi."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/11.jpg",
      "title": "Modul Analitik & Distribusi Alasan Absensi Tahunan",
      "caption": "Dasbor analitik bisnis yang menampilkan grafik dan tabel pivot sebaran alasan ketidakhadiran (seperti sakit, dinas luar, keterlambatan lalu lintas, atau urusan keluarga). Membantu direksi menganalisis pola absensi dan merumuskan kebijakan operasional yang lebih efektif."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/12.jpg",
      "title": "Slip Gaji Digital Mandiri & Unduhan Dokumen Resmi PDF",
      "caption": "Antarmuka self-service bagi karyawan untuk memeriksa rincian pendapatan: gaji pokok, tunjangan jabatan, insentif lembur, serta potongan pajak dan jaminan pensiun. Karyawan dapat langsung mengunduh slip gaji berformat PDF resmi ber-watermark perusahaan."
    },
    {
      "group": "Sistem HRIS",
      "src": "/assets/images/hris/13.jpg",
      "title": "Sistem Pengajuan & Verifikasi Kompensasi Jam Lembur",
      "caption": "Tabel registrasi surat perintah kerja lembur (SPKL) lengkap dengan nomor dokumen referensi, jam pelaksanaan, estimasi durasi, uraian tugas darurat, dan status approval. Kompensasi jam lembur yang telah disetujui akan langsung dihitung otomatis ke dalam payroll bulanan."
    }
  ],
  "smacademy": [
    {
      "group": "Platform E-Learning",
      "src": "/assets/images/smacademy/01.jpg",
      "title": "Landing Page Platform Pendidikan & Hero Interaktif",
      "caption": "Halaman utama SM Academy yang menyambut calon santri dengan hero banner modern dan ringkasan ekosistem belajar digital. Menyoroti fitur unggulan seperti kurikulum bertingkat berstandar pesantren modern, penerbitan sertifikat kelulusan terverifikasi otomatis, serta repositori materi multimedia (video HD, audio tilawah, dan ebook PDF)."
    },
    {
      "group": "Platform E-Learning",
      "src": "/assets/images/smacademy/02.jpg",
      "title": "Katalog E-Course & Taksonomi Bidang Keilmuan",
      "caption": "Etalase modul belajar interaktif yang dikelompokkan berdasarkan bidang studi Islam: Ulumul Qur'an, Fiqih Muamalah, Aqidah Akhlak, dan Bahasa Arab Terapan. Setiap kartu kursus menyajikan estimasi jam belajar, penilaian bintang peserta, jumlah santri aktif, dan tombol pratinjau silabus."
    },
    {
      "group": "Platform E-Learning",
      "src": "/assets/images/smacademy/03.jpg",
      "title": "Dashboard Pelajar, Gamifikasi Poin & Progress Bar",
      "caption": "Panel kontrol personal bagi santri yang menampilkan status ketercapaian belajar: jumlah kursus yang sedang berlangsung, materi yang telah dituntaskan, dan akumulasi poin reward belajar. Poin reward dapat ditukarkan santri untuk mendapatkan beasiswa potongan biaya kelas lanjutan."
    },
    {
      "group": "Platform E-Learning",
      "src": "/assets/images/smacademy/04.jpg",
      "title": "Ruang Belajar Saya & Penjadwalan Materi Mandiri",
      "caption": "Halaman manajemen kelas yang sedang ditempuh santri, dilengkapi bilah pencarian materi spesifik, filter status kelulusan (Aktif / Selesai), tanggal registrasi, serta tombol aksi 'Lanjutkan Belajar' yang mengingat posisi menit video terakhir yang ditonton."
    },
    {
      "group": "Platform E-Learning",
      "src": "/assets/images/smacademy/05.jpg",
      "title": "Ruang Kelas Virtual, Pemutar Video & Kuis Evaluasi",
      "caption": "Antarmuka pembelajaran interaktif tempat santri menyimak video materi beresolusi adaptif, membaca transkrip teks kajian, dan mengerjakan kuis evaluasi pemahaman di akhir bab. Santri dapat mengajukan pertanyaan langsung ke forum tanya-jawab pengajar dan mengunduh sertifikat kelulusan digital ber-QR code."
    },
    {
      "group": "Platform E-Learning",
      "src": "/assets/images/smacademy/06.jpg",
      "title": "Etalase Kelas Terpopuler & Rekomendasi Algoritmik",
      "caption": "Tampilan katalog kurikulum bagi pengguna yang telah login, dengan algoritma rekomendasi kelas yang menyesuaikan minat dan riwayat belajar sebelumnya. Didesain dengan tata letak kartu responsif yang ringan dimuat meski diakses lewat jaringan seluler terbatas."
    },
    {
      "group": "Platform E-Learning",
      "src": "/assets/images/smacademy/07.jpg",
      "title": "Checkout Pembayaran Digital & Verifikasi Beasiswa",
      "caption": "Alur pembayaran pendaftaran kelas terintegrasi payment gateway nasional. Menyediakan metode Virtual Account seluruh bank besar, dompet digital (GoPay, OVO, ShopeePay), dan QRIS instan, serta kolom penukaran kupon beasiswa dan pemotongan poin reward secara real-time."
    }
  ]
};
