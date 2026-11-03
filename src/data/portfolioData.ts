import { ProfileData, ServiceItem, ProjectItem, TimelineItem, CertificationItem, SkillCategory } from '../types';

export const initialProfileData: ProfileData = {
  name: "RESI RUSANDI",
  nickname: "Eci",
  roleId: "Mahasiswa Sistem Informasi",
  roleEn: "Information Systems Student",
  subRole: "Software & Web Developer",
  university: "Universitas Komputama Cilacap (UNIKMA)",
  faculty: "Fakultas Teknologi Informasi",
  major: "Sistem Informasi (S1)",
  gpa: "3.85 / 4.00",
  semester: "Mahasiswa Aktif",
  phone: "085747231971",
  email: "rusandiresi@gmail.com",
  location: "Jl. Bangka Raya Gg. Amal IV/14 RT.006 RW.011, Pela Mampang, Mampang Prapatan, Jakarta Selatan",
  bioId: "Perkenalkan, nama saya Resi Rusandi, biasa dipanggil Eci. Saya adalah mahasiswa program studi Sistem Informasi di Universitas Komputama Cilacap (UNIKMA). Saya memiliki ketertarikan pada dunia teknologi, khususnya pengembangan aplikasi dan website (software development). Saya senang mempelajari hal-hal baru, mengembangkan kemampuan pemrograman, serta mencari solusi digital untuk berbagai permasalahan. Saya berkomitmen untuk terus belajar, berinovasi, dan berkembang menjadi seorang developer yang profesional, kreatif, dan mampu memberikan manfaat bagi banyak orang.",
  bioEn: "Hello, my name is Resi Rusandi, also known as Eci. I am an Information Systems student at Universitas Komputama Cilacap (UNIKMA). I have a deep passion for technology, particularly application and website development (software development). I enjoy learning new concepts, strengthening my programming abilities, and architecting digital solutions to solve diverse challenges. I am dedicated to continuous learning, innovation, and growing into a creative, professional developer who delivers meaningful impact to many people.",
  avatarUrl: "/assets/aistudio/almamater_ab6385c0.jpeg",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/6285747231971"
  }
};

export const serviceItems: ServiceItem[] = [
  {
    id: "computer-it-operations",
    titleId: "Pengoperasian Komputer & TI",
    titleEn: "Computer & IT Operations",
    descId: "Mampu menggunakan komputer dan aplikasi digital untuk mendukung kegiatan akademik serta pekerjaan sehari-hari.",
    descEn: "Proficient in operating computer systems, operating environments, and digital applications to support academic and daily work.",
    iconName: "Monitor",
    deliverablesId: [
      "Pengoperasian Sistem Operasi (Windows, macOS)",
      "Instalasi & Konfigurasi Perangkat Lunak Produktivitas",
      "Troubleshooting Dasar Komputer & Jaringan",
      "Manajemen Berkas & Penerapan Keamanan Digital Dasar"
    ],
    deliverablesEn: [
      "Operating System Administration (Windows, macOS)",
      "Productivity Software Setup & Configuration",
      "Basic Hardware & Network Troubleshooting",
      "File System Organization & Digital Hygiene"
    ],
    tools: ["Windows OS", "macOS", "Google Workspace", "Hardware Basics", "File Management"]
  },
  {
    id: "data-processing",
    titleId: "Pengolahan Data",
    titleEn: "Data Processing & Structuring",
    descId: "Mampu mengumpulkan, mengelola, menyusun, dan menyajikan data secara terstruktur agar mudah dipahami.",
    descEn: "Capable of collecting, organizing, compiling, and systematically presenting structured data for actionable clarity.",
    iconName: "Database",
    deliverablesId: [
      "Pengumpulan & Validasi Data Lapangan/Akademik",
      "Penyusunan Struktur Data & Tabel Terorganisir",
      "Pembersihan Data (Data Cleaning) & Normalisasi Dasar",
      "Penyajian Laporan Data Terstruktur & Visualisasi Informatif"
    ],
    deliverablesEn: [
      "Academic & Operational Data Collection",
      "Structured Table & Dataset Architecture",
      "Data Cleaning & Anomaly Reduction",
      "Structured Data Reporting & Visual Dashboards"
    ],
    tools: ["Spreadsheet", "Data Cleaning", "Data Tables", "Normalization", "Visual Reporting"]
  },
  {
    id: "microsoft-office",
    titleId: "Penggunaan Microsoft Office",
    titleEn: "Microsoft Office Suite",
    descId: "Mampu menggunakan Microsoft Word, Excel, dan PowerPoint untuk menyusun dokumen, mengolah data, dan membuat presentasi.",
    descEn: "Skilled in using Microsoft Word, Excel, and PowerPoint for drafting professional documents, analyzing data, and designing presentation decks.",
    iconName: "FileSpreadsheet",
    deliverablesId: [
      "Penyusunan Dokumen Formal, Laporan, & Proposal (MS Word)",
      "Pengolahan Formula, Tabel Dinamis, & Grafik (MS Excel)",
      "Desain Slide Presentasi Visual & Komunikatif (MS PowerPoint)",
      "Standardisasi Format Dokumen Akademik & Perkantoran"
    ],
    deliverablesEn: [
      "Formal Reports, Proposals & Documentation (MS Word)",
      "Formulas, Dynamic Tables & Charts (MS Excel)",
      "Impactful Presentation Slides (MS PowerPoint)",
      "Office Document Standardization & Templates"
    ],
    tools: ["MS Word", "MS Excel", "MS PowerPoint", "Formulas & Pivot", "Office 365"]
  },
  {
    id: "problem-solving",
    titleId: "Pemecahan Masalah (Problem Solving)",
    titleEn: "Problem Solving & Analysis",
    descId: "Mampu mengidentifikasi permasalahan, menganalisis penyebab, dan mencari solusi yang logis serta efektif.",
    descEn: "Adept at pinpointing core problems, diagnosing root causes, and formulating logical, high-impact solutions.",
    iconName: "Lightbulb",
    deliverablesId: [
      "Identifikasi Masalah & Analisis Akar Masalah (Root Cause)",
      "Perumusan Alternatif Solusi Berbasis Logika",
      "Evaluasi Efektivitas Pendekatan yang Diterapkan",
      "Penyusunan Rencana Tindakan Perbaikan (Action Plan)"
    ],
    deliverablesEn: [
      "Root Cause & Bottleneck Identification",
      "Logical Alternative Formulation",
      "Evaluation of Solution Efficacy",
      "Structured Remediation Action Plans"
    ],
    tools: ["Root Cause Analysis", "Logical Reasoning", "Decision Matrix", "Critical Thinking", "Action Planning"]
  },
  {
    id: "business-process-analysis",
    titleId: "Analisis Proses Bisnis",
    titleEn: "Business Process Analysis",
    descId: "Memahami alur kerja suatu kegiatan dan mengidentifikasi peluang pemanfaatan teknologi untuk meningkatkan efisiensi.",
    descEn: "Understanding organizational workflows and systematically identifying digital opportunities to enhance operational efficiency.",
    iconName: "GitBranch",
    deliverablesId: [
      "Pemetaan Alur Kerja Operasional & Flowchart Kegiatan",
      "Analisis Inefisiensi & Kendala Alur Kerja",
      "Identifikasi Kebutuhan Otomasi & Sistem Informasi",
      "Rekomendasi Peningkatan Proses Menuju Alur To-Be"
    ],
    deliverablesEn: [
      "Operational Workflow & Flowchart Mapping",
      "Process Bottleneck & Waste Identification",
      "Information System Needs Elicitation",
      "To-Be Workflow Improvement Strategies"
    ],
    tools: ["BPMN 2.0", "Flowchart", "Bizagi", "Lucidchart", "System Analysis"]
  },
  {
    id: "communication-teamwork",
    titleId: "Komunikasi & Kerja Sama Tim",
    titleEn: "Communication & Teamwork",
    descId: "Mampu menyampaikan informasi dengan jelas, berdiskusi, dan bekerja sama untuk mencapai tujuan bersama.",
    descEn: "Communicating ideas clearly, engaging in constructive dialogue, and collaborating actively toward shared milestones.",
    iconName: "Users",
    deliverablesId: [
      "Penyampaian Informasi & Ide Teknis Secara Jelas",
      "Kolaborasi Positif dalam Proyek Kelompok",
      "Partisipasi Aktif dalam Diskusi & Problem Solving",
      "Koordinasi Tim yang Harmonis & Saling Mendukung"
    ],
    deliverablesEn: [
      "Clear Communication of Technical Concepts",
      "Constructive Group Project Collaboration",
      "Active Participation in Problem Solving Sessions",
      "Cohesive Team Coordination & Mutual Support"
    ],
    tools: ["Cross-functional Teamwork", "Active Listening", "Presentation", "Slack/Discord", "Group Facilitation"]
  },
  {
    id: "time-management",
    titleId: "Manajemen Waktu & Tanggung Jawab",
    titleEn: "Time Management & Reliability",
    descId: "Mampu mengatur prioritas, menyelesaikan tugas sesuai tenggat waktu, dan menjalankan tanggung jawab secara konsisten.",
    descEn: "Organizing task priorities, delivering work strictly on deadline, and executing responsibilities with high consistency.",
    iconName: "Clock",
    deliverablesId: [
      "Penentuan Skala Prioritas Tugas Berdasarkan Urgensi",
      "Penyelesaian Tugas Tepat Waktu Menghormati Tenggat",
      "Konsistensi dalam Menjalankan Komitmen & Tanggung Jawab",
      "Manajemen Waktu Efektif antara Akademik & Organisasi"
    ],
    deliverablesEn: [
      "Urgency & Importance Task Prioritization",
      "Reliable On-Time Delivery against Deadlines",
      "Consistent Execution of Duties & Commitments",
      "Balanced Scheduling across Academics & Projects"
    ],
    tools: ["Trello", "Notion", "Calendar Scheduling", "Priority Matrix", "Deadline Tracking"]
  },
  {
    id: "learning-new-tech",
    titleId: "Belajar Teknologi Baru",
    titleEn: "Fast Tech Adaptability",
    descId: "Memiliki kemampuan untuk mempelajari aplikasi, perangkat lunak, dan perkembangan teknologi yang relevan dengan sistem informasi.",
    descEn: "Self-driven agility to explore, learn, and master emerging applications, frameworks, and modern information systems tech.",
    iconName: "Rocket",
    deliverablesId: [
      "Eksplorasi Mandiri Aplikasi & Perangkat Lunak Terkini",
      "Kemampuan Belajar Mandiri (Otodidak) yang Cepat",
      "Adaptasi Terhadap Perkembangan Tren Sistem Informasi",
      "Kesiapan Menerapkan Tools Baru untuk Solusi Digital"
    ],
    deliverablesEn: [
      "Self-Directed Research into Modern Software",
      "Rapid Self-Taught Technical Skill Acquisition",
      "Adaptability to Emerging Information System Trends",
      "Readiness to Apply Novel Tools to Digital Challenges"
    ],
    tools: ["Continuous Learning", "Self-Taught Tech", "Documentation", "Modern Tools", "Growth Mindset"]
  }
];

export const projectItems: ProjectItem[] = [
  {
    id: "kas-organisasi",
    title: "SISTEM INFORMASI KAS ORGANISASI",
    category: "database",
    categoryLabelId: "Data Management & Information Systems",
    categoryLabelEn: "Data Management & Information Systems",
    statusId: "Selesai (Siap Digunakan)",
    statusEn: "Completed (Production Ready)",
    summaryId: "Merancang sistem pencatatan keuangan sederhana untuk membantu organisasi mengelola pemasukan, pengeluaran, dan saldo kas secara terstruktur.",
    summaryEn: "Designed a structured financial recording system to assist organizations in managing cash income, expenses, and automated balances.",
    problemId: "Pencatatan kas organisasi sering kali masih manual di buku catatan fisik atau spreadsheet acak, memicu selisih perhitungan, kwitansi hilang, dan keterlambatan pembuatan laporan pertanggungjawaban kas.",
    problemEn: "Organizational cash recording previously relied on physical note-taking or fragmented spreadsheets, leading to calculation discrepancies, missing receipts, and delayed financial reporting.",
    solutionId: "Merancang arsitektur sistem informasi kas berbasis spreadsheet terstruktur dengan formula otomatis, validasi input, dashboard rekapitulasi periodik, dan template cetak laporan kas standar akuntansi sederhana.",
    solutionEn: "Engineered a structured spreadsheet-based financial information system featuring automated balance formulas, strict data validation, periodic transaction summaries, and standard reporting templates.",
    impactId: "Mempermudah pencatatan transaksi, memangkas kesalahan hitung saldo hingga 100%, serta meningkatkan transparansi laporan keuangan kas organisasi.",
    impactEn: "Streamlined transaction logging, eliminated manual calculation errors by 100%, and significantly elevated financial transparency and accountability.",
    featuresId: [
      "Pencatatan pemasukan dan pengeluaran secara sistematis",
      "Perhitungan saldo kas secara otomatis dan real-time",
      "Rekapitulasi transaksi berdasarkan rentang tanggal dan kategori",
      "Laporan keuangan berkala yang mudah dibaca dan diunduh"
    ],
    featuresEn: [
      "Systematic recording of financial cash inflows and outflows",
      "Automated real-time running balance calculation formulas",
      "Transaction recap & filtering by date intervals and expense categories",
      "Clean, printable periodic financial statement templates"
    ],
    competenciesId: [
      "Pengolahan dan pemodelan data terstruktur",
      "Analisis kebutuhan pengguna (User Requirements)",
      "Perancangan sistem informasi keuangan organisasi",
      "Penyajian dan visualisasi laporan keuangan akuntabel"
    ],
    competenciesEn: [
      "Structured data modeling & processing",
      "User requirements analysis & workflow mapping",
      "Financial information systems architecture",
      "Executive report presentation & visualization"
    ],
    toolsUsed: ["Microsoft Excel", "Google Sheets", "Spreadsheet Formulas (SUMIF, VLOOKUP)", "Data Validation Rules", "Pivot Tables & Charts"],
    tags: ["Microsoft Excel", "Google Sheets", "Financial IS", "Data Management", "Automated Formulas", "Reporting"],
    image: "/src/assets/images/project_analytics_dashboard_1792492308792.jpg",
    demoUrl: "https://docs.google.com/spreadsheets",
    githubUrl: "https://github.com",
    architectureDetails: {
      database: "Relational Ledger Schema (Tabel Buku Kas Umum, Master Kategori Akun, Rekapitulasi Kas)",
      modeling: "Data Flow Diagram (DFD) Level 0 & 1 Alur Kas, Flowchart Validasi Input Transaksi",
      deliverables: "Workbook Sistem Kas (.xlsx / Google Sheets), SOP Pencatatan Kas, Template Laporan Pertanggungjawaban"
    }
  },
  {
    id: "stok-barang-umkm",
    title: "SISTEM INFORMASI STOK BARANG UMKM",
    category: "analysis",
    categoryLabelId: "Proses Bisnis & Persediaan UMKM",
    categoryLabelEn: "Business Process & Inventory Systems",
    statusId: "Dalam Pengembangan & Validasi",
    statusEn: "In Development & Validation",
    summaryId: "Sistem manajemen inventaris terstruktur untuk UMKM yang menunjukan pemahaman mendalam tentang alur proses bisnis dan pengelolaan persediaan barang.",
    summaryEn: "Structured inventory management system for MSMEs demonstrating comprehensive business process analysis and stock flow governance.",
    problemId: "Pelaku UMKM sering mengalami stockout (kehabisan stok barang saat ada pesanan) atau overstock (penumpukan barang rusak/kedaluwarsa) akibat pencatatan persediaan yang belum terintegrasi.",
    problemEn: "MSME owners frequently suffered from unexpected stockouts during demand spikes or overstocking dead inventory due to lacking integrated in-out stock tracking.",
    solutionId: "Merancang model proses bisnis persediaan (As-Is & To-Be), sistem pencatatan mutasi barang masuk dan keluar, indikator batas minimum stok (safety stock), serta pelacakan histori pemasok.",
    solutionEn: "Engineered business process workflows (As-Is to To-Be), transaction-based inventory movement tracking, automated safety stock threshold alerts, and supplier procurement history.",
    impactId: "Mencegah risiko kehabisan barang dagangan, mempercepat audit stok fisik (stock opname) hingga 70%, dan menyajikan visibilitas stok barang siap jual secara akurat.",
    impactEn: "Prevented stockout risks, reduced physical stock audit time by 70%, and delivered clear real-time visibility into available-to-sell inventory.",
    featuresId: [
      "Pencatatan mutasi barang masuk (restock) dan barang keluar (penjualan)",
      "Peringatan otomatis saat persediaan mencapai batas minimum (Safety Stock Alert)",
      "Rekapitulasi pergerakan barang & riwayat transaksi dengan supplier",
      "Dashboard ringkasan nilai aset persediaan dan identifikasi produk terlaris"
    ],
    featuresEn: [
      "Inbound stock receiving and outbound sales movement tracking",
      "Automated visual warnings when inventory reaches safety stock threshold",
      "Integrated stock turnover recap and supplier transaction histories",
      "Executive summary of total inventory value and top-moving products"
    ],
    competenciesId: [
      "Analisis dan pemodelan proses bisnis UMKM (BPMN & Flowchart)",
      "Manajemen rantai pasok dan kontrol persediaan barang",
      "Perancangan struktur basis data inventaris terpadu",
      "Penyusunan Standard Operating Procedure (SOP) pergudangan"
    ],
    competenciesEn: [
      "MSME business process analysis (BPMN & Flowcharts)",
      "Supply chain & inventory control methodology",
      "Inventory relational database schema design",
      "Warehousing standard operating procedure (SOP) documentation"
    ],
    toolsUsed: ["Google Sheets / AppSheet", "BPMN 2.0 (Bizagi / draw.io)", "Microsoft Excel", "Database Modeling (ERD)", "SOP & Inventory Flow"],
    tags: ["Business Process", "BPMN 2.0", "Inventory System", "Safety Stock", "UMKM Solutions", "Data Modeling"],
    image: "/src/assets/images/project_bpmn_supplychain_1792492310254.jpg",
    demoUrl: "https://example.com/demo-stok",
    githubUrl: "https://github.com",
    architectureDetails: {
      database: "Struktur Entitas Inventaris (Master Barang, Mutasi Masuk, Mutasi Keluar, Log Pemasok)",
      modeling: "BPMN 2.0 Swimlane Diagram Siklus Pengadaan hingga Pengeluaran, Flowchart Stock Opname",
      deliverables: "Model Proses Bisnis Persediaan, Prototype Lembar Kerja Stok, Kamus Data Persediaan"
    }
  },
  {
    id: "katalog-produk-umkm",
    title: "WEBSITE KATALOG PRODUK UMKM",
    category: "web",
    categoryLabelId: "Web Development & Desain Antarmuka",
    categoryLabelEn: "Web Development & UI/UX Design",
    statusId: "Selesai (Siap Digunakan)",
    statusEn: "Completed (Production Ready)",
    summaryId: "Platform web etalase produk interaktif yang memperlihatkan kemampuan digital, arsitektur modern, dan desain antarmuka responsif ramah pengguna untuk memperluas jangkauan pasar UMKM.",
    summaryEn: "Interactive digital product showcase web application demonstrating modern frontend architecture, intuitive UI/UX design, and direct customer ordering channels for MSMEs.",
    problemId: "Banyak pelaku UMKM hanya mengandalkan promosi via media sosial tanpa etalase digital terstruktur, sehingga calon pembeli kesulitan melihat rincian katalog, harga terkini, dan cara order langsung.",
    problemEn: "Many local MSMEs rely solely on sporadic social media chats without a dedicated digital storefront, leaving potential customers struggling to browse product variants, transparent pricing, and item availability.",
    solutionId: "Membangun website katalog interaktif berkecepatan tinggi dengan antarmuka modern yang responsif di smartphone maupun desktop, dilengkapi pencarian produk instan, filter kategori, galeri foto detail, dan tombol pemesanan langsung terhubung ke WhatsApp.",
    solutionEn: "Built a high-performance interactive catalog website featuring mobile-first responsive UI, instant product search, category filtering, detailed modal showcases, and one-click direct WhatsApp order routing.",
    impactId: "Meningkatkan konversi pesanan online UMKM, memberikan citra bisnis profesional dan terpercaya, serta mempermudah pelanggan melakukan transaksi langsung dalam satu klik.",
    impactEn: "Boosted MSME customer conversion, elevated brand credibility with a clean professional image, and streamlined frictionless 1-click ordering via WhatsApp.",
    featuresId: [
      "Desain antarmuka responsif (Mobile-first) yang cepat, intuitif, dan bersih",
      "Pencarian kata kunci instan dan filter kategori produk interaktif",
      "Modal detail produk dengan galeri foto, spesifikasi, dan harga transparan",
      "Integrasi pemesanan langsung via WhatsApp dengan pesan pesanan terformat otomatis"
    ],
    featuresEn: [
      "Mobile-first responsive interface optimized for speed and clarity",
      "Instant keyword search and multi-category product filtering",
      "Product detail view with image gallery, specs, and clear pricing",
      "Direct WhatsApp ordering integration with pre-filled order drafts"
    ],
    competenciesId: [
      "Pengembangan Web Frontend Modern (React, TypeScript, Tailwind)",
      "Desain Antarmuka UI/UX Berpusat pada Pengguna (User-Centered Design)",
      "Optimasi Kinerja dan Responsivitas Lintas Perangkat (Cross-Device)",
      "Integrasi Kanal Penjualan Digital & Komunikasi Pelanggan"
    ],
    competenciesEn: [
      "Modern frontend web development (React, TypeScript, Tailwind)",
      "User-Centered UI/UX interface architecture & wireframing",
      "Cross-device responsiveness and web performance optimization",
      "Digital sales channel integration & customer touchpoint strategy"
    ],
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Figma", "Lucide Icons", "Vite"],
    tags: ["Web Development", "UI/UX Design", "React", "TypeScript", "Tailwind CSS", "WhatsApp Integration", "UMKM"],
    image: "/src/assets/images/project_katalog_umkm_1792801600976.jpg",
    demoUrl: "https://example.com/demo-katalog",
    githubUrl: "https://github.com",
    architectureDetails: {
      frontend: "React 19, TypeScript, Tailwind CSS, Lucide Icons, Responsive Grid & Flexbox",
      backend: "Client-side state management & WhatsApp API URI generator",
      database: "Struktur Dataset Katalog Produk (SKU, Nama, Kategori, Harga, Foto, Deskripsi)",
      modeling: "User Flow Pemesanan Produk, Wireframe Mobile & Desktop di Figma, Komponen Desain Sistem"
    }
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: "edu-1",
    period: "2023 - Sekarang",
    titleId: "Sarjana Sistem Informasi (S.Kom)",
    titleEn: "Bachelor of Information Systems (S.Kom)",
    institutionId: "Universitas Komputama Cilacap (UNIKMA)",
    institutionEn: "Universitas Komputama Cilacap (UNIKMA)",
    location: "Cilacap, Jawa Tengah",
    descId: "Fokus studi pada Pengembangan Aplikasi & Website (Software Development), Rekayasa Basis Data, Analisis Sistem Informasi, dan Solusi Digital.",
    descEn: "Specializing in Application & Web Development (Software Development), Database Engineering, Information Systems Analysis, and Digital Solutions.",
    highlightsId: [
      "Mahasiswa Aktif Program Studi Sistem Informasi",
      "Fokus pada Pemrograman Web, Frontend, Backend, dan Solusi Digital",
      "Aktif mengeksplorasi teknologi modern dan pengembangan aplikasi inovatif"
    ],
    highlightsEn: [
      "Active Student in Information Systems Degree Program",
      "Focused on Web Programming, Frontend, Backend, and Digital Solutions",
      "Passionate about exploring modern stacks and innovative application development"
    ],
    type: "education"
  },
  {
    id: "exp-1",
    period: "Feb 2025 - Sekarang",
    titleId: "Asisten Dosen Laboratorium Basis Data",
    titleEn: "Laboratory Teaching Assistant - Database Systems",
    institutionId: "Fakultas Ilmu Komputer",
    institutionEn: "Faculty of Computer Science",
    location: "Depok, Indonesia",
    descId: "Membimbing 80+ mahasiswa dalam praktikum PostgreSQL, normalisasi basis data, query DDL/DML tingkat lanjut, indexing, dan perancangan ERD.",
    descEn: "Mentoring 80+ students across PostgreSQL laboratory sessions, data normalization, advanced SQL DDL/DML, query optimization, and ERD modeling.",
    highlightsId: [
      "Menyusun modul praktikum SQL & Stored Procedure terbaru",
      "Membimbing evaluasi 16 proyek akhir basis data mahasiswa",
      "Mendapat evaluasi kepuasan mahasiswa 4.9/5.0"
    ],
    highlightsEn: [
      "Authoring revised SQL lab modules and Stored Procedure tutorials",
      "Mentored and reviewed 16 student final database capstones",
      "Received student satisfaction rating of 4.9 out of 5.0"
    ],
    type: "experience"
  },
  {
    id: "exp-2",
    period: "Jul 2024 - Des 2024",
    titleId: "IT System Analyst Intern",
    titleEn: "IT Business & System Analyst Intern",
    institutionId: "PT Digital Solusindo Nusantara",
    institutionEn: "PT Digital Solusindo Nusantara",
    location: "Jakarta Selatan, Indonesia",
    descId: "Bertanggung jawab menyusun dokumen Software Requirements Specification (SRS), memetakan alur bisnis klien dalam BPMN, dan memvalidasi sprint backlog bersama tim pengembang.",
    descEn: "Authored formal Software Requirements Specifications (SRS), mapped operational client flows using BPMN, and validated sprint backlogs alongside developers.",
    highlightsId: [
      "Menyelesaikan 4 modul sistem portal inventaris enterprise",
      "Mengurangi revisi ruang lingkup (scope creep) sebesar 30% melalui perumusan acceptance criteria yang presisi",
      "Berkoordinasi aktif dalam daily standup dan sprint demo"
    ],
    highlightsEn: [
      "Delivered 4 functional modules for enterprise inventory portal",
      "Mitigated scope creep by 30% through precise acceptance criteria definitions",
      "Facilitated daily standups and weekly sprint demos with stakeholders"
    ],
    type: "experience"
  },
  {
    id: "org-1",
    period: "2024 - 2025",
    titleId: "Ketua Divisi Teknologi & Sistem Informasi",
    titleEn: "Head of Technology & Information Systems Division",
    institutionId: "Himpunan Mahasiswa Sistem Informasi (HMSI)",
    institutionEn: "Information Systems Student Association",
    location: "Depok, Indonesia",
    descId: "Memimpin tim beranggotakan 12 orang dalam pengembangan portal website acara nasional, sistem pemungutan suara online mahasiswa, dan workshop IT.",
    descEn: "Led a 12-person division delivering national IT symposium web platforms, student voting systems, and campus tech enablement workshops.",
    highlightsId: [
      "Mengembangkan website event nasional dengan 2,500+ pendaftar aktif",
      "Menginisiasi bootcamp coding dasar untuk mahasiswa baru angkatan 2024"
    ],
    highlightsEn: [
      "Developed symposium web portal hosting 2,500+ active participants",
      "Launched peer coding bootcamps for incoming freshmen cohorts"
    ],
    type: "organization"
  }
];

export const certificationItems: CertificationItem[] = [
  {
    id: "cert-1",
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    issueDate: "Desember 2024",
    credentialId: "GDA-99482-ID",
    verificationUrl: "https://coursera.org",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming", "Data Cleaning"],
    featured: true
  },
  {
    id: "cert-2",
    name: "Oracle Database SQL Certified Associate",
    issuer: "Oracle University",
    issueDate: "Oktober 2024",
    credentialId: "ORA-SQL-77210",
    verificationUrl: "https://oracle.com",
    skills: ["SQL Tuning", "Relational Modeling", "DDL/DML", "Subqueries", "Views & Indexes"],
    featured: true
  },
  {
    id: "cert-3",
    name: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Agustus 2024",
    credentialId: "AWS-ACAD-883201",
    verificationUrl: "https://aws.amazon.com",
    skills: ["Cloud Architecture", "EC2", "S3", "RDS", "VPC Networking"],
    featured: true
  },
  {
    id: "cert-4",
    name: "Scrum Fundamentals Certified (SFC™)",
    issuer: "SCRUMstudy",
    issueDate: "Maret 2024",
    credentialId: "SFC-661203",
    verificationUrl: "https://scrumstudy.com",
    skills: ["Agile Methodology", "Sprint Planning", "Product Backlog", "Scrum Roles"],
    featured: false
  },
  {
    id: "cert-5",
    name: "Enterprise Architecture & BPMN Specialist",
    issuer: "BNSP / Lembaga Sertifikasi Profesi Informatika",
    issueDate: "Januari 2025",
    credentialId: "BNSP-INF-55109",
    verificationUrl: "https://bnsp.go.id",
    skills: ["BPMN 2.0", "Enterprise Architecture", "TOGAF Fundamentals", "System Modeling"],
    featured: true
  }
];

export const skillCategories: SkillCategory[] = [
  {
    categoryNameId: "Pengoperasian Komputer & Aplikasi Kantor",
    categoryNameEn: "Computer & Office Applications",
    skills: [
      { name: "Pengoperasian Komputer & TI", level: 95, category: "operations" },
      { name: "Microsoft Word (Dokumen & Laporan)", level: 94, category: "operations" },
      { name: "Microsoft Excel (Data & Formula)", level: 90, category: "operations" },
      { name: "Microsoft PowerPoint (Presentasi)", level: 92, category: "operations" },
      { name: "Kemampuan Belajar Teknologi Baru", level: 96, category: "operations" }
    ]
  },
  {
    categoryNameId: "Pengolahan Data & Analisis Sistem",
    categoryNameEn: "Data Processing & Systems Analysis",
    skills: [
      { name: "Pengolahan & Penyajian Data Terstruktur", level: 92, category: "data" },
      { name: "Analisis Proses Bisnis & Alur Kerja", level: 90, category: "data" },
      { name: "Pemecahan Masalah (Problem Solving)", level: 92, category: "data" },
      { name: "Pengembangan Solusi Berbasis Digital", level: 88, category: "data" },
      { name: "Pemodelan Flowchart & Kebutuhan TI", level: 88, category: "data" }
    ]
  },
  {
    categoryNameId: "Komunikasi & Manajemen Kerja",
    categoryNameEn: "Communication & Work Management",
    skills: [
      { name: "Komunikasi Informasi & Ide", level: 92, category: "softskills" },
      { name: "Kerja Sama Tim (Teamwork)", level: 94, category: "softskills" },
      { name: "Manajemen Waktu & Skala Prioritas", level: 93, category: "softskills" },
      { name: "Tanggung Jawab & Ketepatan Deadline", level: 95, category: "softskills" },
      { name: "Diskusi & Problem Solving Bersama", level: 90, category: "softskills" }
    ]
  }
];

export const translations = {
  id: {
    nav: {
      brand: "RESI RUSANDI",
      home: "Beranda",
      about: "Tentang",
      services: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      certificates: "Sertifikasi",
      contact: "Hubungi",
      downloadCv: "Unduh CV"
    },
    hero: {
      greeting: "Halo, Saya",
      role: "Mahasiswa Sistem Informasi",
      desc: "Menghubungkan dunia proses bisnis strategis dan kecanggihan teknologi perangkat lunak. Berkomitmen menghadirkan sistem informasi yang efisien, terstruktur, dan berdampak nyata bagi organisasi.",
      phone: "Telepon",
      email: "Email",
      address: "Alamat",
      ctaProjects: "Jelajahi Proyek",
      ctaCv: "Lihat & Unduh CV",
      statusBadge: "Terbuka untuk Magang & Proyek",
      stats: {
        projects: "Proyek Selesai",
        gpa: "IPK Kumulatif",
        certs: "Sertifikasi Industri",
        stack: "Teknologi Dikuasai"
      }
    },
    about: {
      badge: "Tentang Saya",
      title: "Menjembatani Kebutuhan Bisnis dengan Solusi Rekayasa Perangkat Lunak",
      lead: "Sebagai mahasiswa Sistem Informasi, saya dididik untuk tidak hanya menulis kode, melainkan memahami bagaimana sistem informasi mentransformasi efisiensi operasional dan pertumbuhan bisnis.",
      academicTitle: "Informasi Akademik",
      pillarsTitle: "4 Pilar Utama Sistem Informasi",
      pillars: [
        {
          title: "Proses Bisnis & Analisis Sistem",
          desc: "Mampu membedah alur kerja organisasi yang rumit menjadi diagram BPMN dan spesifikasi fungsional yang siap dieksekusi."
        },
        {
          title: "Arsitektur Basis Data Relasional",
          desc: "Menjamin integritas data, normalisasi hingga 3NF, serta optimasi query agar sistem tetap responsif pada volume data besar."
        },
        {
          title: "Pengembangan Perangkat Lunak Modern",
          desc: "Membangun aplikasi web full-stack modular dengan teknologi modern seperti React, TypeScript, Node.js, dan Tailwind CSS."
        },
        {
          title: "Analitik Data & Wawasan Keputusan",
          desc: "Mengolah data transaksional menjadi visualisasi dashboard BI yang intuitif untuk mendukung keputusan manajerial."
        }
      ]
    },
    services: {
      badge: "Layanan & Keahlian",
      title: "Solusi Komprehensif Sistem Informasi",
      subtitle: "Keahlian terintegrasi mulai dari perumusan kebutuhan, arsitektur basis data, hingga implementasi aplikasi.",
      deliverablesHeader: "Output & Deliverables:",
      toolsHeader: "Alat & Teknologi:"
    },
    projects: {
      badge: "Portofolio Proyek Unggulan",
      title: "Karya & Studi Kasus Sistem Informasi",
      subtitle: "Implementasi sistem nyata, pencatatan data terstruktur, analisis proses bisnis, dan website interaktif yang saya rancang.",
      all: "Semua Proyek",
      database: "Data & Kas Organisasi",
      analysis: "Proses Bisnis & Stok",
      web: "Web & Katalog UMKM",
      uiux: "UI/UX & Desain",
      viewDetails: "Lihat Detail Studi Kasus",
      liveDemo: "Buka Demo",
      viewCode: "Kode Sumber",
      statusLabel: "Status Proyek",
      featuresLabel: "Fitur Utama Sistem",
      competenciesLabel: "Kompetensi yang Dikembangkan",
      toolsLabel: "Tools & Alat Digunakan",
      objectiveLabel: "Tujuan Proyek"
    },
    experience: {
      badge: "Rekam Jejak",
      title: "Pendidikan & Pengalaman Profesional",
      subtitle: "Perjalanan akademik, kepemimpinan organisasi, serta pengalaman mengajar dan magang.",
      tabEducation: "Riwayat Pendidikan",
      tabExperience: "Pengalaman Kerja & Magang",
      tabOrganization: "Organisasi Kampus",
      highlightsHeader: "Pencapaian Kunci:"
    },
    certificates: {
      badge: "Kualifikasi & Kredensial",
      title: "Sertifikasi Profesi & Lisensi Keahlian",
      subtitle: "Komitmen terus belajar yang divalidasi oleh lembaga industri terkemuka.",
      viewCert: "Verifikasi Kredensial",
      credentialIdLabel: "No. Kredensial"
    },
    skills: {
      badge: "Matriks Keahlian",
      title: "Kemampuan Teknis & Penguasaan Alat",
      subtitle: "Distribusi kompetensi dalam rekayasa sistem, basis data, dan pengembangan perangkat lunak."
    },
    contact: {
      badge: "Hubungi Saya",
      title: "Mari Berkolaborasi atau Diskusikan Proyek",
      subtitle: "Terbuka untuk peluang magang, proyek freelance, atau diskusi seputar sistem informasi.",
      formName: "Nama Lengkap",
      formEmail: "Alamat Email",
      formSubject: "Subjek Pesan",
      formMessage: "Pesan Anda",
      formSubmit: "Kirim Pesan Sekarang",
      formSending: "Mengirimkan Pesan...",
      formSuccess: "Pesan Anda berhasil dikirim! Terima kasih telah menghubungi saya.",
      whatsappBtn: "Hubungi via WhatsApp",
      copyEmail: "Salin Alamat Email",
      copiedEmailToast: "Alamat email berhasil disalin ke clipboard!",
      directContact: "Kontak Langsung",
      officeLocation: "Lokasi Kampus / Domisili"
    },
    resumeModal: {
      title: "Curriculum Vitae (CV) Terstandar",
      downloadPdf: "Cetak / Simpan PDF",
      close: "Tutup",
      summary: "Ringkasan Profil",
      education: "Pendidikan",
      experience: "Pengalaman",
      skills: "Keahlian Inti",
      certifications: "Sertifikasi"
    },
    footer: {
      rights: "Hak Cipta Dilindungi Undang-Undang.",
      designedFor: "Dirancang untuk Mahasiswa Sistem Informasi.",
      backToTop: "Kembali ke Atas"
    }
  },
  en: {
    nav: {
      brand: "RESI RUSANDI",
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      experience: "Experience",
      certificates: "Certificates",
      contact: "Contact",
      downloadCv: "Download CV"
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Information Systems Student",
      desc: "Bridging the strategic gap between business requirements and modern software architecture. Dedicated to building reliable, well-structured, and impactful information systems for forward-thinking organizations.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      ctaProjects: "Explore Projects",
      ctaCv: "View & Download CV",
      statusBadge: "Open for Internships & Projects",
      stats: {
        projects: "Projects Completed",
        gpa: "Cumulative GPA",
        certs: "Industry Certifications",
        stack: "Core Technologies"
      }
    },
    about: {
      badge: "About Me",
      title: "Connecting Business Objectives with Robust Software Solutions",
      lead: "As an Information Systems scholar, I am trained not just to write code, but to understand how information architectures drive operational efficiency and measurable business outcomes.",
      academicTitle: "Academic Information",
      pillarsTitle: "4 Pillars of Information Systems",
      pillars: [
        {
          title: "Business Process & System Analysis",
          desc: "Dissecting intricate organizational flows into standard BPMN blueprints and actionable functional software requirements."
        },
        {
          title: "Relational Database Engineering",
          desc: "Enforcing strict 3NF normalization, relational data integrity, and index tuning for high-throughput enterprise systems."
        },
        {
          title: "Modern Full-Stack Web Architecture",
          desc: "Developing modular, responsive web applications using React, TypeScript, Node.js, and clean component systems."
        },
        {
          title: "Data Analytics & Strategic BI",
          desc: "Transforming raw transactional records into intuitive executive dashboards that empower data-backed management decisions."
        }
      ]
    },
    services: {
      badge: "Services & Competencies",
      title: "Comprehensive Information Systems Capabilities",
      subtitle: "Integrated capabilities spanning requirement elicitation, database architecture, and full application implementation.",
      deliverablesHeader: "Outputs & Deliverables:",
      toolsHeader: "Tools & Technologies:"
    },
    projects: {
      badge: "Featured Portfolio",
      title: "Flagship Projects & Information Systems Case Studies",
      subtitle: "Structured data systems, business process workflows, and responsive web applications designed to solve real operational challenges.",
      all: "All Projects",
      database: "Data & Organization Cash IS",
      analysis: "Business Process & Inventory",
      web: "Web & MSME Catalog",
      uiux: "UI/UX & Design",
      viewDetails: "View Case Study Details",
      liveDemo: "Live Demo",
      viewCode: "Source Code",
      statusLabel: "Project Status",
      featuresLabel: "Key System Features",
      competenciesLabel: "Competencies Developed",
      toolsLabel: "Tools & Technologies Used",
      objectiveLabel: "Project Objective"
    },
    experience: {
      badge: "Career Track",
      title: "Education & Professional Journey",
      subtitle: "Academic excellence, organizational leadership, university teaching, and industry analyst internships.",
      tabEducation: "Education History",
      tabExperience: "Work & Internships",
      tabOrganization: "Campus Leadership",
      highlightsHeader: "Key Achievements:"
    },
    certificates: {
      badge: "Credentials & Honors",
      title: "Professional Certifications & Licenses",
      subtitle: "A sustained commitment to continuous learning validated by leading global technology organizations.",
      viewCert: "Verify Credential",
      credentialIdLabel: "Credential ID"
    },
    skills: {
      badge: "Skill Matrix",
      title: "Technical Proficiencies & Toolchain",
      subtitle: "Competency breakdown across enterprise system modeling, data platforms, and software engineering."
    },
    contact: {
      badge: "Get in Touch",
      title: "Let's Collaborate or Discuss a System Project",
      subtitle: "Open for internship opportunities, freelance software development, or strategic systems consultation.",
      formName: "Full Name",
      formEmail: "Email Address",
      formSubject: "Subject",
      formMessage: "Your Message",
      formSubmit: "Send Message Now",
      formSending: "Sending Message...",
      formSuccess: "Your message has been received! Thank you for reaching out.",
      whatsappBtn: "Chat on WhatsApp",
      copyEmail: "Copy Email Address",
      copiedEmailToast: "Email address copied to clipboard!",
      directContact: "Direct Coordinates",
      officeLocation: "Campus / Resident Location"
    },
    resumeModal: {
      title: "Standardized Curriculum Vitae (CV)",
      downloadPdf: "Print / Save PDF",
      close: "Close",
      summary: "Executive Summary",
      education: "Education",
      experience: "Experience",
      skills: "Core Competencies",
      certifications: "Certifications"
    },
    footer: {
      rights: "All rights reserved.",
      designedFor: "Crafted for Information Systems Scholars.",
      backToTop: "Back to Top"
    }
  }
};
