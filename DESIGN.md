# hanvisuals: Master Design System & UI Specification

**Version**: 1.0.0  
**Project**: hanvisuals Interactive Portfolio  
**Author**: Ihan & Han Visuals Creative Engineering  
**Core Framework**: Next.js (App Router), Tailwind CSS v3/v4, Framer Motion  
**Standard**: Anti-Slop Calibration (Energy 3, Rhythm 2, Motion 3)

---

## 1. Brand Philosophy & Design Principles

### 1.1 Brand Identity & Voice
`hanvisuals` adalah studio kreatif-teknis hibrida independen yang digerakkan oleh **Ihan** (*The Creator / Magician*). Karakter desain mengusung pendekatan **casual minimalist, tech-native, dan berorientasi solusi tanpa birokrasi kaku**.

* **Wordmark Resmi**: `hanvisuals`  
  * Aturan: Wajib ditulis dalam huruf kecil (*all-lowercase*), tanpa spasi, menggunakan font **Plus Jakarta Sans ExtraBold (800)** dengan *negative tracking* `-0.02em`.
* **The Play Prism**:  
  * Simbol segitiga tombol *Play* geometris berimbang yang melambangkan pintu gerbang visual (*creative portal*).  
  * Terdiri atas 5 segmen warna spektrum *Sun-Drenched Bold* dengan *negative-space void* putih bersih di tengahnya.  
  * **Pantangan Mutlak**: Dilarang memasukkan warna Cozy Slate (`#2D3142`) ke dalam simbol *The Play Prism*.

### 1.2 Kalibrasi Anti-Slop (Anti-Slop Calibration)
Web portofolio ini menolak estetika generik berbasis template korporat atau "SaaS boilerplate" yang hambar. Desain dikalibrasi pada metrik:

| Metrik | Level | Penjelasan Implementasi |
| :--- | :---: | :--- |
| **Energy** | **Level 3** | Berani, kontras tinggi, aksen warna menyala di atas kanvas gelap, tidak ragu menggunakan saturasi tinggi pada titik fokus. |
| **Rhythm** | **Level 2** | Terukur dan modular; hierarki visual tidak bertumpuk acak, memberikan jeda napas visual yang jelas antar seksi. |
| **Motion** | **Level 3** | Kinetik, elastis, dan responsif. Menggunakan kurva pegas kustom `cubic-bezier(0.16, 1, 0.3, 1)` dengan umpan balik instan 60 FPS. |

---

## 2. Color System & Token Architecture

Sistem warna menggunakan aturan rasio visual **60-30-10** untuk menjamin kesan profesional, elegan, dan kontras tinggi standar **WCAG AAA**.

```
┌─────────────────────────────────────────────────────────────┐
│ 60% Dark Canvas (#15171E)                                   │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ 30% Cozy Slate (#2D3142) Card Surfaces & Borders      │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │ 10% Sun-Drenched Bold Spectrum Accents & Glow   │  │  │
│  │  │ [Turquoise | Tangerine | Yellow | Coral | Red]  │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 2.1 Color Tokens & Role Mapping

| Token Name | HEX | Tailwind Class | Role & Usage | Kontras thd Canvas |
| :--- | :---: | :--- | :--- | :---: |
| **Dark Canvas** | `#15171E` | `bg-han-dark` | Kanvas latar belakang utama halaman, backdrop modal. | Base |
| **Cozy Slate** | `#2D3142` | `bg-han-slate` | Latar kartu bento, kontainer mockup, garis batas (*border*). | 2.1:1 |
| **Pure Warm Light** | `#FDFCF9` | `text-han-light` | Headings utama, teks kontras tinggi, caret kursor typewriter. | **15.4:1 (AAA)** |
| **Muted Slate** | `#94A3B8` | `text-slate-400` | Teks paragraf, deskripsi sekunder, metadata tidak aktif. | **6.2:1 (AA)** |
| **Vivid Turquoise** | `#51B8B9` | `text-han-turquoise` | Status dot aktif (*Available*), tag Web/Apps, link hover. | **6.8:1 (AA)** |
| **Warm Tangerine** | `#FA9F1B` | `text-han-tangerine` | Tag Video/Motion, hover glow sekunder, aksen interaktif. | **7.5:1 (AAA)** |
| **Sunshine Yellow**| `#FFDC56` | `text-han-yellow` | Lencana AI visual, highlight typewriter, tag deliverable. | **11.2:1 (AAA)**|
| **Flamingo Coral** | `#FA7C83` | `text-han-coral` | Aksen gradasi kreatif, tag Content Creation. | **5.9:1 (AA)** |
| **Coral Crimson**  | `#EA4C56` | `text-han-crimson` | Aksen micro-dot, badge darurat/penutup, alert highlight. | **4.6:1 (AA)** |

### 2.2 Tailwind Config Integration (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        han: {
          dark: "#15171E",
          slate: "#2D3142",
          light: "#FDFCF9",
          turquoise: "#51B8B9",
          tangerine: "#FA9F1B",
          yellow: "#FFDC56",
          coral: "#FA7C83",
          crimson: "#EA4C56",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Inter", "sans-serif"],
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
```

---

## 3. Typography Hierarchy & Rules

* **Font Utama**: **Plus Jakarta Sans** (Google Fonts).  
* **Font Fallback**: Inter, system-ui, sans-serif.

### 3.1 Skala Tipografi Responsif

| Level | Size (Mobile / Desktop) | Weight | Tracking | Leading | Target Elemen |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Display (H1)** | `36px` / `64px` | 800 | `-0.03em` | `1.05` | Hero Headline Text |
| **Section Title (H2)** | `28px` / `44px` | 700 | `-0.02em` | `1.15` | Judul Seksi (*Works, Services, etc.*) |
| **Card Title (H3)** | `20px` / `24px` | 700 | `-0.01em` | `1.25` | Judul Proyek, Modul Bento |
| **Body Lead** | `16px` / `18px` | 500 | `0` | `1.6` | Hero Subtitle, Outro Callout |
| **Body Standard** | `14px` / `15px` | 400 | `0` | `1.5` | Deskripsi proyek, alur workflow |
| **Badge / Caption** | `11px` / `12px` | 600 | `+0.05em` | `1.2` | Tag kategori, tech-stack pill, status |

### 3.2 Aturan Wordmark
```html
<!-- Wordmark Standar -->
<span class="font-sans font-extrabold tracking-[-0.02em] text-han-light text-xl">
  hanvisuals
</span>
```

---

## 4. Spacing System & Grid Layout

Sistem tata letak berlandaskan pada **8pt Base Grid System**. Semua margin, padding, dan jarak antar-elemen wajib merupakan kelipatan dari 4px / 8px (`gap-2`, `gap-4`, `gap-6`, `gap-8`, `gap-12`, `gap-16`).

### 4.1 Layout Container
* **Max Width**: `max-w-6xl` (1152px) terpusat (`mx-auto`).
* **Horizontal Padding**:
  * Mobile: `px-5` (20px).
  * Tablet: `px-8` (32px).
  * Desktop: `px-12` (48px).
* **Vertical Section Spacing**: `py-20 md:py-32` untuk memberikan ritme pernapasan konten yang terukur.

---

## 5. Komponen Inti & Blueprint Interaktivitas

### 5.1 F1: Ambient Canvas & Card Spotlight (Cursor Engine)

Sistem pencahayaan kursor bekerja pada 2 lapisan:

1. **Ambient Canvas Glow**:
   * Lingkaran radial gradient melayang lembut di belakang kanvas dasar `#15171E`.
   * Diameter: ~600px.
   * Warna: Blend Vivid Turquoise (`#51B8B9`, opacity `0.06`) dan Warm Tangerine (`#FA9F1B`, opacity `0.04`).
   * Pelacakan pointer menggunakan CSS Variables `--mouse-x` dan `--mouse-y` yang diperbarui melalui `requestAnimationFrame` untuk menjamin performa 60 FPS tanpa jeda frame.
2. **Reactive Card Border Spotlight**:
   * Seluruh kartu (`Cozy Slate` `#2D3142`) dilapisi pseudo-border transparan.
   * Saat kursor mendekati kartu, garis tepinya (*border*) menyala terang mengikuti posisi kursor secara lokal.
3. **Touchscreen Guard**:
   * Pada perangkat `@media (hover: none) and (pointer: coarse)`, skrip kursor otomatis mati, digantikan dengan ambient glow statis di bagian tengah atas Hero.

```css
/* CSS Variable Setup */
.ambient-glow {
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 30%),
    rgba(81, 184, 185, 0.08),
    rgba(250, 159, 27, 0.05) 40%,
    transparent 80%
  );
}

.spotlight-card {
  position: relative;
  background: rgba(45, 49, 66, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(253, 252, 249, 0.08);
  transition: border-color 0.3s ease;
}

.spotlight-card:hover {
  border-color: rgba(81, 184, 185, 0.3);
}
```

---

### 5.2 F2: Hero Word Cycling / Typewriter Component

* **Struktur Teks**:
  * **EN**: *"Crafting high-impact "* `[Dynamic Word]` *" for forward-thinking brands."*
  * **ID**: *"Menciptakan karya "* `[Dynamic Word]` *" untuk brand masa depan."*
* **Dynamic Word Matrix**:

| Kata Kunci | Aksen Warna | HEX | Hover / Glow Effect |
| :--- | :--- | :---: | :--- |
| `video editing` / `video editing` | Warm Tangerine | `#FA9F1B` | Drop shadow `rgba(250, 159, 27, 0.4)` |
| `web & apps` / `web & aplikasi` | Vivid Turquoise | `#51B8B9` | Drop shadow `rgba(81, 184, 185, 0.4)` |
| `motion graphics` / `motion grafis` | Sunshine Yellow | `#FFDC56` | Drop shadow `rgba(255, 220, 86, 0.4)` |
| `visual content` / `konten visual` | Flamingo Coral | `#FA7C83` | Drop shadow `rgba(250, 124, 131, 0.4)` |

* **Timing Animasi**:
  * Kecepatan ketik: `65ms` per karakter.
  * Jeda baca (*Pause on completion*): `2200ms`.
  * Kecepatan hapus (*Backspace*): `35ms` per karakter.
  * Blinking cursor caret: `opacity` 0 ke 100% berkedip setiap `530ms` berwarna `#FDFCF9`.

---

### 5.3 F3: Services Bento Grid (4 Pilar Disiplin)

Grid asimetris interaktif yang menampilkan 4 kapabilitas utama dengan penekanan visual berbeda:

```
┌───────────────────────────────────────┬───────────────────────────────────────┐
│ Card 1: 9:16 Video Editing & Retensi   │ Card 2: AI Motion & Generative Visual │
│ (Aspect: Square, Tangerine Accent)    │ (Aspect: Square, Yellow Accent)       │
├───────────────────────────────────────┴───────────────────────────────────────┤
│ Card 3: Corporate Web & App Engineering                                       │
│ (Aspect: Wide 2-Column Bento, Turquoise Accent + Mini Terminal Preview)       │
├───────────────────────────────────────────────────────────────────────────────┤
│ Card 4: Short-Form Growth & Content Creation                                  │
│ (Aspect: Full-width Banner, Coral Accent + Deliverables Pill Tags)            │
└───────────────────────────────────────────────────────────────────────────────┘
```

1. **Card 1: High-Retention Video Editing**:
   * *Highlight*: Spesialisasi 9:16 vertical reels/TikTok, pacing dinamis, sound design, color grade.
   * *Tech Badge*: Premiere Pro, After Effects, DaVinci.
2. **Card 2: AI Motion Graphics**:
   * *Highlight*: Kinetic typography, generative visual assets, logo reveal, 3D fluid motion.
   * *Tech Badge*: AI Generative Pipelines, ComfyUI, Motion Engine.
3. **Card 3: Web & Digital Engineering (Featured Wide Card)**:
   * *Highlight*: Website korporat, aplikasi web interaktif, performa tinggi, clean architecture.
   * *Tech Badge*: Next.js, React, Tailwind CSS, TypeScript, Supabase.
   * *Micro-Visual*: Preview mock browser window mini dengan titik navigasi macOS.
4. **Card 4: Short-Form Growth & Content Strategy**:
   * *Highlight*: Visual storytelling dari ide awal hingga format final yang siap meledak di algoritma.

---

### 5.4 F4: Dual-Card Portfolio Showcase Blueprint

Untuk memisahkan konten vertikal (HP) dan tampilan web (Monitor) tanpa merusak aspek rasio:

#### 1. Vertical Device Mockup (9:16): Untuk Video & Motion
* **Aspect Ratio**: `aspect-[9/16]`.
* **Border Radius**: `rounded-[28px]` atau `rounded-3xl` dengan *bezel* tipis semi-transparan `border border-white/10`.
* **Micro-Details**:
  * Speaker ear-piece pill mini di bagian atas tengah (`w-12 h-1 bg-white/20 rounded-full`).
  * Hover Overlay: Tombol Play melayang dengan glassmorphism (`backdrop-blur-md bg-white/15`) dan animasi membal (*spring pop*).
  * Video Player: `muted`, `loop`, `playsInline`. Saat hover kursor, video otomatis berjalan mulus.
  * Tag Rasio: Badge mini `9:16` di sudut kiri atas.

#### 2. Browser Window Mockup (16:10): Untuk Web & Apps
* **Aspect Ratio**: `aspect-[16/10]`.
* **Border Radius**: `rounded-2xl` dengan kontainer bergaya peramban modern.
* **Header Bar**:
  * 3 macOS Window Controls: Red dot (`#EA4C56`), Yellow dot (`#FFDC56`), Green dot (`#51B8B9`) diameter 10px.
  * Minimalist URL pill bar: Background `rgba(255,255,249,0.05)`, teks monospace abu-abu `https://clientbrand.com`.
  * External link action icon di pojok kanan.
* **Konten**: Screenshot viewport web interaktif dengan efek *subtle vertical pan* saat kartu di-hover.

---

### 5.5 F5: Minimalist Creator Strip ("Engineered by Ihan")
Elemen perkenalan personal yang bersih, lugas, dan bebas klaim narsis berlebihan:
* **Komponen**: Satu baris kartu strip horizontal melayang di atas footer.
* **Copy**:
  * **EN**: *"hanvisuals is directed & coded by **Ihan**, combining cinematic vision with tech-native engineering."*
  * **ID**: *"hanvisuals diarahkan & diprogram oleh **Ihan**, memadukan visi sinematik dengan rekayasa digital tech-native."*
* **Action Pill**: Tombol pill minimalis `[@ihanwchy]` dengan ikon Instagram yang langsung membuka `https://www.instagram.com/ihanwchy` di tab baru.

---

### 5.6 F6: Direct Outro Portal & Floating Glass Dock

#### 1. Big Outro Card (Seksi Bawah)
* Kartu penutup berlatar gelap `#15171E` dengan border Cozy Slate tebal `#2D3142`.
* **Headline**: *"Let's build something unforgettable."* / *"Mari bangun karya luar biasa bersama."*
* **Subline**: *"Available for video editing, motion graphics, and corporate web engineering. DM for pricing and project deals."*
* **Dual Action Buttons**:
  1. **Primary Button (Instagram DM)**:
     * Background: Gradient Vivid Turquoise ke Warm Tangerine (`hover:scale-[1.02] active:scale-[0.98] transition-all`).
     * Link: `https://www.instagram.com/hanvisuals._?cplk=MWhkOGE0cGYzajAwOA%3D%3D&utm_source=qr`.
  2. **Secondary Button (Email Direct & Copy Action)**:
     * Background: Cozy Slate Glass (`border border-white/10 hover:border-han-turquoise/40`).
     * Action: Membuka `mailto:muhammadroihannn@gmail.com`.
     * Copy Pill: Tombol terintegrasi untuk menyalin alamat email ke clipboard dengan tooltip feedback *"Copied!"* berwarna hijau Turquoise.

#### 2. Persistent Floating Glass Dock (Pojok Kanan Bawah)
* Posisi: Fixed `bottom-6 right-6 z-50`.
* Bentuk: Glass pill melayang semi-transparan (`bg-[#15171E]/80 backdrop-blur-lg border border-white/10 shadow-2xl`).
* Isi:
  * Tombol DM Instagram (`@hanvisuals._`) dengan ikon chat.
  * Tombol Email 1-Click Copy.
  * Tooltip mini saat kursor mengarah.

---

## 6. Motion Specification & Animation Curves

Seluruh animasi wajib menggunakan kurva pegas kinetik yang lentur, tegas, dan tidak lembek:

```
cubic-bezier(0.16, 1, 0.3, 1)  /* "Spring Precision": Transisi Cepat & Lembut di Akhir */
```

### 6.1 Framer Motion Variants Reference

```javascript
// Kurva Transisi Utama
export const springTransition = {
  type: "spring",
  damping: 26,
  stiffness: 220,
  mass: 0.8,
};

// Container Stagger Reveal
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

// Card Slide Up Fade
export const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

---

## 7. Bilingual Content Dictionary (`dictionaries.js`)

Struktur kamus instan (*zero-reload*) untuk peralihan bahasa Inggris (EN) dan Indonesia (ID):

```javascript
export const dictionaries = {
  en: {
    nav: {
      works: "Works",
      services: "Services",
      workflow: "Process",
      contact: "Contact",
      status: "Available for projects",
    },
    hero: {
      badge: "Creative Studio & Digital Engineering",
      anchorPrefix: "Crafting high-impact",
      anchorSuffix: "for forward-thinking brands.",
      words: ["video editing", "web & apps", "motion graphics", "visual content"],
      sub: "We merge cinematic storytelling, generative AI, and high-performance digital engineering into one unified creative engine.",
      ctaPrimary: "DM on Instagram",
      ctaSecondary: "Copy Email",
    },
    services: {
      tag: "Capabilities",
      title: "Engineered for high attention & conversion",
      vidsTitle: "High-Retention Video",
      vidsDesc: "Vertical 9:16 content engineered for TikTok, Reels & modern ad campaigns with magnetic hook retention.",
      aiTitle: "AI Motion Graphics",
      aiDesc: "Custom generative visuals, kinetic typography, and fluid 3D motion for distinctive branding.",
      webTitle: "Web & App Engineering",
      webDesc: "High-performance enterprise web apps built on Next.js, Tailwind CSS, and scalable modern architectures.",
      contentTitle: "Content Creation & Strategy",
      contentDesc: "Full-cycle visual narrative from concept ideation to viral-ready social distribution.",
    },
    showcase: {
      tag: "Selected Portfolio",
      title: "Featured Works & Experiments",
      filterAll: "All Works",
      filterVideo: "Videos & Motion (9:16)",
      filterWeb: "Web & Apps",
      playPreview: "Preview Reel",
      visitLive: "Visit Project",
    },
    workflow: {
      tag: "The Pipeline",
      title: "How We Deliver Impact",
      s1Title: "1. Strategic Brief",
      s1Desc: "Clarifying goals, creative hooks, target audience, and engineering constraints.",
      s2Title: "2. Visual Direction",
      s2Desc: "Moodboards, style frames, AI visual exploration, and UI wireframes.",
      s3Title: "3. Craft & Code",
      s3Desc: "High-cadence video production, sound design, and clean Next.js programming.",
      s4Title: "4. Polish & Deliver",
      s4Desc: "Micro-adjustments, color grading, multi-platform export, and instant deployment.",
    },
    creator: {
      lead: "hanvisuals is directed & coded by",
      name: "Ihan",
      bio: "combining cinematic vision with tech-native digital engineering.",
      button: "Personal Instagram",
    },
    outro: {
      title: "Let's build something unforgettable.",
      sub: "No bloated agency layers. Direct communication, fast turnaround, and deal-based pricing.",
      dmBtn: "DM for Pricing & Deal",
      emailBtn: "Send Email",
      copied: "Email copied to clipboard!",
    },
  },
  id: {
    nav: {
      works: "Karya",
      services: "Layanan",
      workflow: "Alur Kerja",
      contact: "Kontak",
      status: "Tersedia untuk proyek",
    },
    hero: {
      badge: "Studio Kreatif & Rekayasa Digital",
      anchorPrefix: "Menciptakan karya",
      anchorSuffix: "untuk brand masa depan.",
      words: ["video editing", "web & aplikasi", "motion grafis", "konten visual"],
      sub: "Kami memadukan storytelling sinematik, kecerdasan AI generatif, dan rekayasa web berkecepatan tinggi dalam satu ekosistem terpadu.",
      ctaPrimary: "DM di Instagram",
      ctaSecondary: "Salin Email",
    },
    services: {
      tag: "Kapabilitas",
      title: "Dirancang untuk atensi tinggi & konversi nyata",
      vidsTitle: "Video Retensi Tinggi (9:16)",
      vidsDesc: "Produksi video vertikal berdaya pikat tinggi untuk Reels, TikTok, dan kampanye iklan digital.",
      aiTitle: "Motion Grafis & AI",
      aiDesc: "Eksplorasi visual generatif modern, tipografi kinetik, dan animasi dinamis penarik perhatian.",
      webTitle: "Rekayasa Web & Aplikasi",
      webDesc: "Pengembangan website dan aplikasi korporat berkecepatan tinggi dengan Next.js dan Tailwind CSS.",
      contentTitle: "Pembuatan Konten & Strategi",
      contentDesc: "Penyusunan narasi visual lengkap dari ide konsep hingga format konten media sosial siap rilis.",
    },
    showcase: {
      tag: "Koleksi Karya",
      title: "Karya Pilihan & Eksplorasi",
      filterAll: "Semua Karya",
      filterVideo: "Video & Motion (9:16)",
      filterWeb: "Web & Aplikasi",
      playPreview: "Tonton Pratinjau",
      visitLive: "Kunjungi Web",
    },
    workflow: {
      tag: "Alur Kerja",
      title: "Bagaimana Kami Bekerja",
      s1Title: "1. Brief & Sasaran",
      s1Desc: "Menentukan arah tujuan, hook kreatif, target audiens, dan kebutuhan teknis proyek.",
      s2Title: "2. Konsep & Visual",
      s2Desc: "Penyusunan moodboard, rancangan visual AI, dan tata letak antarmuka UI.",
      s3Title: "3. Produksi & Koding",
      s3Desc: "Eksekusi editing video, sound design dinamis, serta pemrograman web yang bersih.",
      s4Title: "4. Finalisasi & Rilis",
      s4Desc: "Penyempurnaan detail, color grading sinematik, dan deployment langsung ke server.",
    },
    creator: {
      lead: "hanvisuals diarahkan & diprogram oleh",
      name: "Ihan",
      bio: "memadukan visi sinematik dengan rekayasa digital tech-native.",
      button: "Instagram Personal",
    },
    outro: {
      title: "Mari bangun karya luar biasa bersama.",
      sub: "Tanpa birokrasi berbelit. Komunikasi langsung, pengerjaan cepat, dan kesepakatan harga fleksibel.",
      dmBtn: "DM untuk Diskusi & Harga",
      emailBtn: "Kirim Email",
      copied: "Email berhasil disalin!",
    },
  },
};
```

---

## 8. Anti-Slop Audit Checklist (Standar Kualitas)

Sebelum web diluncurkan, pastikan seluruh kriteria lolos pengujian berikut:

- [x] **Zero Corporate Jargon**: Tidak menggunakan frasa klise ("synergy", "360-degree holistic marketing", "disruptive paradigm"). Bahasa lugas, percaya diri, dan santai.
- [x] **Color Discipline (No Slop Tinting)**: Warna Cozy Slate (`#2D3142`) **tidak pernah** diselipkan ke dalam simbol *The Play Prism*.
- [x] **WCAG AAA Compliance**: Teks putih `#FDFCF9` memiliki rasio kontras `15.4:1` di atas latar `#15171E` (melampaui batas minimal 7:1).
- [x] **Mobile Scrolling Hygiene**: Event pelacak mouse dinonaktifkan di layar sentuh untuk mencegah *stuttering* scroll 60 FPS pada smartphone.
- [x] **Silent UI Default**: Tidak ada efek suara sintetis pada tombol hover/klik. Video dimulai dalam status `muted` dengan tombol kontrol eksplisit.
- [x] **Frictionless Conversion**: Menghilangkan form berbelit; fokus pada direct action (DM Instagram, 1-Click Copy Email).
- [x] **Aspect Ratio Respect**: Format 9:16 untuk video dan 16:10 untuk web mockup tidak saling tumpang-tindih atau terdistorsi.