export const pricingCategories = [
  {
    id: "editing",
    labelEn: "1. Visual & Post-Production (Video Editing)",
    labelId: "1. Visual & Post-Production (Video Editing)",
    descEn:
      "Raw footage provided by client. Focused on dynamic rhythm, high retention, and visual sharpness. Monthly retainers include volume discounts.",
    descId:
      "Materi rekaman mentah (raw footage) disediakan oleh klien. Fokus pada ritme dinamis, retensi tinggi, dan ketajaman visual. Paket bulanan lebih hemat dibanding satuan.",
    dotColor: "#FA9F1B",
    packages: [
      {
        id: "edit-short-basic",
        subGroupEn: "Short-Form (9:16 Reels / TikTok / Shorts)",
        subGroupId: "Short-Form (9:16 Reels / TikTok / Shorts)",
        tierEn: "Basic Cut / UGC Standard",
        tierId: "Cut Dasar / UGC Standard",
        priceEn: "Rp150.000 - Rp250.000",
        priceId: "Rp150.000 - Rp250.000",
        unitEn: "per video",
        unitId: "per video",
        retainerEn: "Monthly (10 vids): Rp1.200.000 - Rp1.800.000 (Save Rp300K-Rp700K)",
        retainerId: "Bulanan (10 vid): Rp1.200.000 - Rp1.800.000 (Hemat Rp300rb-Rp700rb)",
        summaryEn:
          "Clean cut-to-cut editing, standard auto-subtitles, and basic transitions for daily UGC.",
        summaryId:
          "Cut-to-cut sederhana, subtitle otomatis standar, dan transisi dasar untuk konten harian.",
        featuresEn: [
          "9:16 vertical format",
          "Clean cut-to-cut pacing",
          "Standard readable subtitles",
          "Basic transitions & audio leveling",
        ],
        featuresId: [
          "Format vertikal 9:16",
          "Potongan cut-to-cut rapi",
          "Subtitle otomatis standar",
          "Transisi dasar & perataan suara",
        ],
        isPopular: false,
      },
      {
        id: "edit-short-retention",
        subGroupEn: "Short-Form (9:16 Reels / TikTok / Shorts)",
        subGroupId: "Short-Form (9:16 Reels / TikTok / Shorts)",
        tierEn: "High-Retention (hanvisuals Level)",
        tierId: "High-Retention (Level hanvisuals)",
        priceEn: "Rp350.000 - Rp750.000",
        priceId: "Rp350.000 - Rp750.000",
        unitEn: "per video",
        unitId: "per video",
        retainerEn: "Monthly (10 vids): Rp2.800.000 - Rp5.500.000 (Save Rp700K-Rp2M)",
        retainerId: "Bulanan (10 vid): Rp2.800.000 - Rp5.500.000 (Hemat Rp700rb-Rp2jt)",
        summaryEn:
          "Signature hanvisuals edit with 3-second hook engineering, kinetic text, weighted SFX, B-roll, and warm color grading.",
        summaryId:
          "3-second hook engineering, kinetic text dinamis, sound design (SFX) berbobot, stock B-roll presisi, dan grading warna matang.",
        featuresEn: [
          "3-second visual hook engineering",
          "Dynamic kinetic typography",
          "Weighted sound design (SFX) & speed-ramping",
          "Precision B-roll inserts & warm color grade",
        ],
        featuresId: [
          "Penyusunan 3-second hook",
          "Kinetic text dinamis",
          "Sound design (SFX) berbobot & speed-ramping",
          "Stock B-roll presisi & color grading matang",
        ],
        isPopular: true,
      },
      {
        id: "edit-short-commercial",
        subGroupEn: "Short-Form (9:16 Reels / TikTok / Shorts)",
        subGroupId: "Short-Form (9:16 Reels / TikTok / Shorts)",
        tierEn: "Commercial Motion / Hybrid Ads",
        tierId: "Commercial Motion / Hybrid Ads",
        priceEn: "Rp800.000 - Rp1.500.000",
        priceId: "Rp800.000 - Rp1.500.000",
        unitEn: "per video",
        unitId: "per video",
        retainerEn: "Monthly Retainer: Custom Deal by Scope",
        retainerId: "Retainer Bulanan: Custom Deal by Scope",
        summaryEn:
          "Commercial kinetic graphics, 3D/AI masking transitions, and integrated audio mixing for paid ad campaigns.",
        summaryId:
          "Grafis kinetik komersial, transisi masking 3D/AI, dan audio mixing terintegrasi untuk kampanye iklan berbayar.",
        featuresEn: [
          "Commercial kinetic motion graphics",
          "Advanced masking & AI visual transitions",
          "Integrated audio mixing for paid ads",
          "High-bitrate master export",
        ],
        featuresId: [
          "Grafis kinetik komersial",
          "Transisi masking 3D / AI",
          "Audio mixing terintegrasi untuk iklan",
          "File master bitrate tinggi",
        ],
        isPopular: false,
      },
      {
        id: "edit-long-talking",
        subGroupEn: "Long-Form (16:9 YouTube, Podcast, Vlog, Documentary)",
        subGroupId: "Long-Form (16:9 YouTube, Podcast, Vlog, Dokumenter)",
        tierEn: "Talking Head / Education / Tutorial",
        tierId: "Talking Head / Edukasi / Tutorial",
        priceEn: "Rp450.000 - Rp1.200.000",
        priceId: "Rp450.000 - Rp1.200.000",
        unitEn: "per video (8 - 15 mins final)",
        unitId: "per video (durasi jadi 8 - 15 menit)",
        summaryEn:
          "Dead-air removal, dynamic jump-cuts, punch zooms, lower thirds, and explanatory callout text.",
        summaryId:
          "Eliminasi dead-air, jump-cut dinamis, punch zoom, lower thirds, dan teks penjelas.",
        featuresEn: [
          "8 - 15 minutes finished duration",
          "Dead-air removal & dynamic jump-cuts",
          "Punch zooms & lower thirds",
          "Explanatory text callouts",
        ],
        featuresId: [
          "Durasi video jadi 8 - 15 menit",
          "Eliminasi dead-air & jump-cut dinamis",
          "Punch zoom & lower thirds",
          "Teks penjelas visual",
        ],
        isPopular: false,
      },
      {
        id: "edit-long-podcast",
        subGroupEn: "Long-Form (16:9 YouTube, Podcast, Vlog, Documentary)",
        subGroupId: "Long-Form (16:9 YouTube, Podcast, Vlog, Dokumenter)",
        tierEn: "Multi-Cam Podcast / Interview",
        tierId: "Podcast / Interview Multi-Kamera",
        priceEn: "Rp800.000 - Rp2.000.000",
        priceId: "Rp800.000 - Rp2.000.000",
        unitEn: "per video (30 - 60 mins final)",
        unitId: "per video (durasi jadi 30 - 60 menit)",
        summaryEn:
          "Multi-camera and multi-audio synchronization, color matching across cameras, noise reduction, and B-roll inserts.",
        summaryId:
          "Sinkronisasi multi-cam & multi-audio, color matching antar kamera, noise reduction, dan B-roll insert.",
        featuresEn: [
          "30 - 60 minutes finished duration",
          "Multi-cam & multi-track audio sync",
          "Camera color matching & audio cleanup",
          "Contextual B-roll insertions",
        ],
        featuresId: [
          "Durasi video jadi 30 - 60 menit",
          "Sinkronisasi multi-kamera & multi-audio",
          "Color matching & pembersihan noise suara",
          "Penyisipan B-roll pendukung",
        ],
        isPopular: false,
      },
      {
        id: "edit-long-doc",
        subGroupEn: "Long-Form (16:9 YouTube, Podcast, Vlog, Documentary)",
        subGroupId: "Long-Form (16:9 YouTube, Podcast, Vlog, Dokumenter)",
        tierEn: "Cinematic Vlog / Event Aftermovie / Mini-Doc",
        tierId: "Vlog Sinematik / Aftermovie / Mini-Dokumenter",
        priceEn: "Rp1.200.000 - Rp3.500.000",
        priceId: "Rp1.200.000 - Rp3.500.000",
        unitEn: "per video (5 - 12 mins final)",
        unitId: "per video (durasi jadi 5 - 12 menit)",
        summaryEn:
          "Narrative storytelling, deep film color grading, cinematic pacing, and emotional sound design.",
        summaryId:
          "Storytelling naratif, color grading mendalam, pacing sinematik, dan sound design atmosferik.",
        featuresEn: [
          "5 - 12 minutes finished duration",
          "Narrative storyline structuring",
          "Deep film color grading (Lightroom/CapCut)",
          "Emotional sound design & speed-ramping",
        ],
        featuresId: [
          "Durasi video jadi 5 - 12 menit",
          "Penyusunan storytelling naratif",
          "Color grading mendalam bergaya film",
          "Sound design emosional & speed-ramping",
        ],
        isPopular: true,
      },
    ],
  },
  {
    id: "videographer",
    labelEn: "2. On-Location Videographer & Full Production Bundles",
    labelId: "2. Jasa Videografer On-Location & Paket Komplit",
    descEn:
      "Book a dedicated videographer on location (4K 10-bit Mirrorless, Handheld Rig, Wireless Mic, Portable LED Key Light) as shooting-only or complete shoot + editing.",
    descId:
      "Sewa jasa videografer di lokasi (Kamera Mirrorless 4K 10-bit, Handheld Rig, Mic Wireless, Lighting LED Portabel) baik shooting saja maupun paket komplit dengan editing.",
    dotColor: "#EA4C56",
    packages: [
      {
        id: "shoot-halfday",
        subGroupEn: "Shooting Only (Raw 4K 10-Bit Footage Delivery)",
        subGroupId: "Shooting Only (Serah Terima Raw Footage 4K 10-Bit)",
        tierEn: "Half-Day Videographer (Max 4 Hours)",
        tierId: "Half-Day Videografer (Maks 4 Jam)",
        priceEn: "Rp1.500.000 - Rp2.250.000",
        priceId: "Rp1.500.000 - Rp2.250.000",
        unitEn: "Overtime: Rp250.000 / hour",
        unitId: "Overtime: Rp250.000 / jam",
        summaryEn:
          "Product/menu shoots, batching short-form footage, or interview sessions. Raw 4K 10-bit files handed over directly.",
        summaryId:
          "Pengambilan gambar produk/menu, batching footage konten pendek, atau sesi wawancara (output raw footage 4K 10-bit).",
        featuresEn: [
          "Up to 4 hours on-location shooting",
          "Mirrorless 4K 10-bit + Handheld Cage Rig",
          "Wireless Lavalier Mic + Portable Key Light",
          "Direct raw footage delivery",
        ],
        featuresId: [
          "Maksimal 4 jam di lokasi shoot",
          "Kamera Mirrorless 4K 10-bit + Handheld Rig",
          "Mic Wireless + Lighting Portabel LED",
          "Penyerahan langsung file raw footage",
        ],
        isPopular: false,
      },
      {
        id: "shoot-fullday",
        subGroupEn: "Shooting Only (Raw 4K 10-Bit Footage Delivery)",
        subGroupId: "Shooting Only (Serah Terima Raw Footage 4K 10-Bit)",
        tierEn: "Full-Day Videographer (Max 8 Hours)",
        tierId: "Full-Day Videografer (Maks 8 Jam)",
        priceEn: "Rp2.600.000 - Rp4.100.000",
        priceId: "Rp2.600.000 - Rp4.100.000",
        unitEn: "Overtime: Rp350.000 / hour",
        unitId: "Overtime: Rp350.000 / jam",
        summaryEn:
          "Event documentation, campus/factory/office visits, or planned commercial ad shoots.",
        summaryId:
          "Dokumentasi event, kunjungan kampus/pabrik/kantor, atau produksi iklan terencana.",
        featuresEn: [
          "Up to 8 hours on-location shooting",
          "Full Mirrorless 4K 10-bit rig, audio & lighting",
          "Multi-scene event or site coverage",
          "Direct raw footage delivery",
        ],
        featuresId: [
          "Maksimal 8 jam di lokasi shoot",
          "Gear lengkap Mirrorless 4K 10-bit, audio & lampu",
          "Liputan event atau kunjungan lapangan penuh",
          "Penyerahan langsung file raw footage",
        ],
        isPopular: false,
      },
      {
        id: "bundle-single-visit",
        subGroupEn: "Complete Package: Videographer + Editing",
        subGroupId: "Paket Komplit: Videografer + Editing",
        tierEn: "Single Visit Package (1 Production Day)",
        tierId: "Paket Single Visit (1 Hari Produksi)",
        priceEn: "Rp1.850.000 - Rp3.350.000",
        priceId: "Rp1.850.000 - Rp3.350.000",
        unitEn: "per visit bundle",
        unitId: "per paket kunjungan",
        summaryEn:
          "Half-day shoot (4 hours) plus 2 to 3 finished short-form videos with editing, color grading, and sound design.",
        summaryId:
          "Sesi shoot half-day (4 jam) + output 2-3 video short-form siap tayang (editing, color grading, sound design, revisi maks 2x).",
        featuresEn: [
          "Half-day on-location shoot (4 hours)",
          "Output: 2 - 3 finished short-form videos",
          "Includes editing, color grading & sound design",
          "Up to 2x revisions included",
        ],
        featuresId: [
          "Sesi shoot half-day (4 jam)",
          "Output: 2 - 3 video short-form siap tayang",
          "Termasuk editing, color grading & sound design",
          "Termasuk revisi maksimal 2x",
        ],
        isPopular: true,
      },
      {
        id: "bundle-compro",
        subGroupEn: "Complete Package: Videographer + Editing",
        subGroupId: "Paket Komplit: Videografer + Editing",
        tierEn: "Company Profile / Commercial Ads",
        tierId: "Paket Company Profile / Commercial Ads",
        priceEn: "Rp3.750.000 - Rp9.000.000+",
        priceId: "Rp3.750.000 - Rp9.000.000+",
        unitEn: "per campaign / profile",
        unitId: "per kampanye / profil",
        summaryEn:
          "Visual concepting, full-day shoot (8 hours), 1 master video (1-3 mins) plus 2 vertical short-form teasers.",
        summaryId:
          "Konsep visual, full-day shoot (8 jam), output 1 video master 1-3 menit + 2 teaser short-form vertikal.",
        featuresEn: [
          "Visual concept & pre-production planning",
          "Full-day on-location shoot (8 hours)",
          "1 Master Video (1 - 3 mins) + 2 Vertical Teasers",
          "Full color grading & audio mastering",
        ],
        featuresId: [
          "Konsep visual & perencanaan produksi",
          "Full-day shoot di lokasi (8 jam)",
          "1 Video Master (1 - 3 menit) + 2 Teaser Vertikal",
          "Color grading & audio mastering penuh",
        ],
        isPopular: false,
      },
      {
        id: "bundle-retainer",
        subGroupEn: "Complete Package: Videographer + Editing",
        subGroupId: "Paket Komplit: Videografer + Editing",
        tierEn: "Business Content Retainer (Monthly)",
        tierId: "Paket Retainer Konten Bisnis (Bulanan)",
        priceEn: "Rp4.850.000 - Rp9.350.000",
        priceId: "Rp4.850.000 - Rp9.350.000",
        unitEn: "per month",
        unitId: "per bulan",
        summaryEn:
          "1-2x shoot sessions per month plus editing for 10-12 vertical Reels throughout the month.",
        summaryId:
          "1-2x sesi shoot per bulan + editing 10-12 video reels vertikal sepanjang bulan berjalan (jauh lebih hemat dari satuan).",
        featuresEn: [
          "1 - 2x on-location shoot sessions / month",
          "10 - 12 finished vertical Reels / month",
          "Consistent brand visual look & sound",
          "Significant savings vs single orders",
        ],
        featuresId: [
          "1 - 2x sesi shoot lokasi per bulan",
          "10 - 12 video Reels vertikal siap tayang",
          "Identitas visual & tone warna konsisten",
          "Jauh lebih hemat dibanding order satuan",
        ],
        isPopular: false,
      },
    ],
  },
  {
    id: "direction",
    labelEn: "3. End-to-End Content Creating (Creative Direction)",
    labelId: "3. Content Creating dari Videografer (Creative Direction)",
    descEn:
      "Full Creative Director role: topic research, hook-story-CTA scriptwriting, talent/owner directing on set, shooting, and final high-retention editing.",
    descId:
      "Peran Creative Director menyeluruh: riset topik, perumusan skrip (hook-story-CTA), pengarahan talent/owner di lokasi, shooting, dan editing siap posting.",
    dotColor: "#FFDC56",
    packages: [
      {
        id: "dir-single",
        subGroupEn: "End-to-End Content Creation",
        subGroupId: "Produksi Konten End-to-End",
        tierEn: "Single End-to-End Video",
        tierId: "Per Video (End-to-End Satuan)",
        priceEn: "Rp400.000 - Rp1.000.000",
        priceId: "Rp400.000 - Rp1.000.000",
        unitEn: "per video",
        unitId: "per video",
        summaryEn:
          "Trend research, structured script, on-location shooting & talent directing, high-retention edit, and caption/sound recommendations.",
        summaryId:
          "Riset tren, naskah skrip terstruktur, direct on-location shooting, editing high-retention, dan rekomendasi caption/sound.",
        featuresEn: [
          "Trend research & structured scriptwriting",
          "On-location shooting & talent directing",
          "High-retention editing & color grading",
          "Caption & trending audio recommendations",
        ],
        featuresId: [
          "Riset tren & penulisan naskah terstruktur",
          "Shooting di lokasi & pengarahan talent",
          "Editing high-retention & color grading",
          "Rekomendasi caption & pemilihan audio",
        ],
        isPopular: false,
      },
      {
        id: "dir-starter",
        subGroupEn: "End-to-End Content Creation",
        subGroupId: "Produksi Konten End-to-End",
        tierEn: "Starter Monthly Package (SME / Personal)",
        tierId: "Paket Starter Monthly (UMKM / Personal)",
        priceEn: "Rp3.200.000 - Rp5.800.000",
        priceId: "Rp3.200.000 - Rp5.800.000",
        unitEn: "per month (8 videos, save ~25%)",
        unitId: "per bulan (8 video, hemat ~25%)",
        summaryEn:
          "1x batch shoot session, content calendar, scriptwriting, visual direction, and 8 ready-to-post Reels/TikToks.",
        summaryId:
          "1x sesi shoot (batch 8 video), riset topik & kalender konten, scriptwriting, pengarahan visual, dan 8 video siap tayang.",
        featuresEn: [
          "1x shoot session (batch 8 videos)",
          "Topic research & monthly content calendar",
          "Scriptwriting & on-set visual direction",
          "8 finished Reels/TikTok videos",
        ],
        featuresId: [
          "1x sesi shoot (batch 8 video)",
          "Riset topik & kalender konten bulanan",
          "Scriptwriting & visual direction di lokasi",
          "Editing 8 video Reels/TikTok siap tayang",
        ],
        isPopular: true,
      },
      {
        id: "dir-pro",
        subGroupEn: "End-to-End Content Creation",
        subGroupId: "Produksi Konten End-to-End",
        tierEn: "Pro Growth Monthly (Brand / Business)",
        tierId: "Paket Pro Growth Monthly (Brand / Bisnis)",
        priceEn: "Rp6.800.000 - Rp12.000.000",
        priceId: "Rp6.800.000 - Rp12.000.000",
        unitEn: "per month (16 videos, save ~25%)",
        unitId: "per bulan (16 video, hemat ~25%)",
        summaryEn:
          "2x shoot sessions per month, 16-video content calendar, A/B hook variations, and kinetic motion accents.",
        summaryId:
          "2x sesi shoot per bulan, kalender konten 16 video, variasi A/B testing hook, dan editing 16 video dengan aksen motion kinetik.",
        featuresEn: [
          "2x shoot sessions per month",
          "Comprehensive 16-video content calendar",
          "Hook A/B testing variations & deep scripts",
          "16 finished videos + kinetic motion accents",
        ],
        featuresId: [
          "2x sesi shoot per bulan",
          "Kalender konten komprehensif (16 video)",
          "Variasi A/B testing hook & naskah mendalam",
          "Editing 16 video + motion accent kinetik",
        ],
        isPopular: false,
      },
    ],
  },
  {
    id: "web",
    labelEn: "4. Web Design & Custom Digital Engineering",
    labelId: "4. Web Design & Custom Digital Engineering",
    descEn:
      "Built with a modern custom stack (Next.js, React, Tailwind CSS) without rigid no-code templates.",
    descId:
      "Dibangun dengan stack modern (Next.js, React, Tailwind CSS) tanpa template no-code kaku.",
    dotColor: "#51B8B9",
    packages: [
      {
        id: "web-uiux",
        subGroupEn: "Web Design & Frontend",
        subGroupId: "Web Design & Frontend",
        tierEn: "UI/UX Design Only (Figma)",
        tierId: "UI/UX Design Only (Figma)",
        priceEn: "Rp2.500.000 - Rp6.000.000",
        priceId: "Rp2.500.000 - Rp6.000.000",
        unitEn: "per project",
        unitId: "per proyek",
        summaryEn:
          "Wireframes, responsive visual mockups, UI kit, and interactive clickable Figma prototype.",
        summaryId:
          "Wireframe, visual mockup responsif, UI kit, dan prototipe klik interaktif di Figma.",
        featuresEn: [
          "Information architecture & wireframes",
          "Responsive desktop & mobile mockups",
          "Reusable design system & UI kit",
          "Interactive clickable Figma prototype",
        ],
        featuresId: [
          "Penyusunan wireframe & alur halaman",
          "Visual mockup responsif (Desktop & HP)",
          "UI kit & komponen sistem desain",
          "Prototipe klik interaktif",
        ],
        isPopular: false,
      },
      {
        id: "web-landing",
        subGroupEn: "Web Design & Frontend",
        subGroupId: "Web Design & Frontend",
        tierEn: "High-Impact Landing Page (One-Pager)",
        tierId: "High-Impact Landing Page (One-Pager)",
        priceEn: "Rp3.500.000 - Rp7.500.000",
        priceId: "Rp3.500.000 - Rp7.500.000",
        unitEn: "per site",
        unitId: "per website",
        summaryEn:
          "High-conversion interactive single-page website, smooth motion, sub-second load speed, and SEO ready.",
        summaryId:
          "1 halaman interaktif konversi tinggi, animasi halus, waktu muat cepat (<1 detik), dan SEO ready.",
        featuresEn: [
          "Interactive single-page architecture",
          "Smooth cursor & scroll micro-interactions",
          "Fast load performance & SEO metadata",
          "Direct WhatsApp & social integration",
        ],
        featuresId: [
          "1 halaman interaktif konversi tinggi",
          "Animasi halus & responsif di semua layar",
          "Performa cepat & struktur SEO ready",
          "Integrasi tombol WhatsApp & media sosial",
        ],
        isPopular: true,
      },
      {
        id: "web-compro",
        subGroupEn: "Web Design & Frontend",
        subGroupId: "Web Design & Frontend",
        tierEn: "Modern Company Profile (Multi-Page)",
        tierId: "Company Profile Modern (Multi-Page)",
        priceEn: "Rp7.000.000 - Rp18.000.000",
        priceId: "Rp7.000.000 - Rp18.000.000",
        unitEn: "4 - 6 structured pages",
        unitId: "4 - 6 halaman terstruktur",
        summaryEn:
          "Multi-page corporate or studio website with bilingual (ID/EN) switcher, inquiry forms, and custom domain setup.",
        summaryId:
          "4-6 halaman terstruktur, sistem dua bahasa (ID/EN), form inquiry, dan integrasi domain kustom.",
        featuresEn: [
          "4 - 6 structured custom pages",
          "Bilingual (ID/EN) instant language system",
          "Custom inquiry composer & domain setup",
          "Full responsive & accessibility optimization",
        ],
        featuresId: [
          "4 - 6 halaman terstruktur",
          "Sistem bilingual (ID/EN) instan",
          "Form inquiry & integrasi domain kustom",
          "Optimasi penuh desktop & mobile",
        ],
        isPopular: false,
      },
      {
        id: "app-tier1",
        subGroupEn: "Business Apps & Custom Tools",
        subGroupId: "Business Apps & Custom Tools",
        tierEn: "Tier 1: Simple Web App / MVP / Dashboard",
        tierId: "Tier 1: Simple Web App / MVP / Dashboard",
        priceEn: "Rp15.000.000 - Rp30.000.000",
        priceId: "Rp15.000.000 - Rp30.000.000",
        unitEn: "Est. 3 - 5 Weeks",
        unitId: "Estimasi 3 - 5 Minggu",
        summaryEn:
          "Multi-role login authentication, operational CRUD data management, Excel/PDF export, and visual dashboard.",
        summaryId:
          "Login auth multi-role, CRUD data operasional, export Excel/PDF, dan dashboard visual.",
        featuresEn: [
          "Multi-role authentication system",
          "Operational CRUD data management",
          "Excel / PDF report export",
          "Interactive visual analytics dashboard",
        ],
        featuresId: [
          "Sistem login autentikasi multi-role",
          "Manajemen CRUD data operasional",
          "Fitur export laporan Excel / PDF",
          "Dashboard visual interaktif",
        ],
        isPopular: false,
      },
      {
        id: "app-tier2",
        subGroupEn: "Business Apps & Custom Tools",
        subGroupId: "Business Apps & Custom Tools",
        tierEn: "Tier 2: Custom Business System (Mid-Tier)",
        tierId: "Tier 2: Custom Business System (Mid-Tier)",
        priceEn: "Rp35.000.000 - Rp75.000.000",
        priceId: "Rp35.000.000 - Rp75.000.000",
        unitEn: "Est. 1.5 - 3 Months",
        unitId: "Estimasi 1,5 - 3 Bulan",
        summaryEn:
          "Automated approval workflows, WhatsApp API or payment gateway integration, and real-time inventory tracking.",
        summaryId:
          "Otomasi workflow approval, integrasi WhatsApp API / payment gateway, dan pelacakan inventaris real-time.",
        featuresEn: [
          "Automated multi-step approval workflows",
          "WhatsApp API & payment gateway integration",
          "Real-time inventory / operational tracking",
          "Staging testing & team onboarding",
        ],
        featuresId: [
          "Otomasi workflow approval bertingkat",
          "Integrasi WhatsApp API / payment gateway",
          "Pelacakan inventaris & data real-time",
          "Pengujian staging & panduan penggunaan",
        ],
        isPopular: false,
      },
      {
        id: "app-tier3",
        subGroupEn: "Business Apps & Custom Tools",
        subGroupId: "Business Apps & Custom Tools",
        tierEn: "Tier 3: Scalable Platform / Enterprise SaaS",
        tierId: "Tier 3: Scalable Platform / Enterprise SaaS",
        priceEn: "Rp80.000.000 - Rp180.000.000+",
        priceId: "Rp80.000.000 - Rp180.000.000+",
        unitEn: "Est. 3 - 6 Months",
        unitId: "Estimasi 3 - 6 Bulan",
        summaryEn:
          "Multi-tenant architecture, high-security performance optimization, audit logs, and dedicated SLA maintenance.",
        summaryId:
          "Arsitektur multi-tenant, optimasi performa keamanan tinggi, audit log, dan SLA maintenance terdedikasi.",
        featuresEn: [
          "Multi-tenant scalable architecture",
          "High-security optimization & audit logs",
          "Custom API integrations at scale",
          "Dedicated SLA maintenance support",
        ],
        featuresId: [
          "Arsitektur multi-tenant berskala besar",
          "Keamanan tinggi & pencatatan audit log",
          "Integrasi ekosistem API kustom",
          "Dukungan SLA maintenance terdedikasi",
        ],
        isPopular: false,
      },
    ],
  },
];

export const complexityFactors = [
  {
    num: "01",
    titleEn: "Motion & Post-Production Complexity",
    titleId: "Kompleksitas Motion & Pascaproduksi",
    tiersEn: [
      "Low (1.0x): Clean cut-to-cut, standard subtitles, simple B-roll.",
      "Medium (1.2x - 1.4x): Dynamic kinetic text, weighted sound design, 2D motion.",
      "High (1.5x - 2.0x): Complex 3D/AI masking, custom VFX, multi-layer compositing.",
    ],
    tiersId: [
      "Rendah (1.0x): Cut-to-cut rapi, subtitle standar, B-roll sederhana.",
      "Sedang (1.2x - 1.4x): Dynamic kinetic text, sound design berbobot, motion 2D.",
      "Tinggi (1.5x - 2.0x): Masking 3D/AI rumit, visual effect kustom, compositing multi-layer.",
    ],
  },
  {
    num: "02",
    titleEn: "Shooting Conditions & Requirements",
    titleId: "Kondisi & Kebutuhan Shooting",
    tiersEn: [
      "Standard (1.0x): 1 indoor/studio location, controlled lighting, ready talent.",
      "High (1.3x - 1.6x): Multi-location outdoor, dynamic lighting & movement.",
    ],
    tiersId: [
      "Standar (1.0x): 1 titik lokasi indoor/studio, pencahayaan terkontrol, talent siap.",
      "Tinggi (1.3x - 1.6x): Multi-lokasi outdoor, pencahayaan dinamis, banyak pergerakan.",
    ],
  },
  {
    num: "03",
    titleEn: "System Logic & Integrations (Web/Apps)",
    titleId: "Logika Sistem & Integrasi (Web/Apps)",
    tiersEn: [
      "Standard (1.0x): Static pages, interactive UI components, basic inquiry forms.",
      "High (1.5x - 2.5x): Dynamic database, multi-tier auth, 3rd-party APIs (Payment/WA).",
    ],
    tiersId: [
      "Standar (1.0x): Halaman statis, komponen UI interaktif, form dasar.",
      "Tinggi (1.5x - 2.5x): Database dinamis, autentikasi multi-tier, API pihak ketiga.",
    ],
  },
  {
    num: "04",
    titleEn: "Turnaround Time (Urgency)",
    titleId: "Tenggat Waktu (Urgency / Turnaround)",
    tiersEn: [
      "Regular (1.0x): Standard scheduled production timeline.",
      "Rush / Express (1.3x - 1.8x): Under 48 hours (video) or under 1 week (web).",
    ],
    tiersId: [
      "Reguler (1.0x): Sesuai estimasi waktu pengerjaan standar.",
      "Kilat / Rush Project (1.3x - 1.8x): Di bawah 48 jam (video) atau di bawah 1 minggu (web).",
    ],
  },
];

export const paymentTerms = {
  video: {
    titleEn: "Video Services (Editing / Shooting / Content Creation)",
    titleId: "Jasa Video (Editing / Shooting / Content Creation)",
    stepsEn: [
      "50% Down Payment (DP) upfront before shooting or editing begins.",
      "50% Final Settlement after revisions are approved (prior to delivering clean unwatermarked master files).",
    ],
    stepsId: [
      "50% Down Payment (DP) di muka sebelum produksi atau editing dimulai.",
      "50% Pelunasan setelah revisi disetujui (sebelum file master bersih tanpa watermark diserahkan).",
    ],
  },
  web: {
    titleEn: "Web Design & Custom Applications",
    titleId: "Jasa Web & Custom Apps",
    stepsEn: [
      "50% Down Payment (DP) at project kickoff.",
      "30% Second Milestone after UI design and staging flow are tested.",
      "20% Final Settlement prior to code handover and primary domain migration.",
    ],
    stepsId: [
      "50% Down Payment (DP) di awal proyek.",
      "30% Milestone Kedua setelah desain antarmuka dan alur staging selesai diuji coba.",
      "20% Final Settlement sebelum serah terima kode dan migrasi ke domain utama.",
    ],
  },
};
