# Product Requirement Document (PRD)
## Project: hanvisuals: Official Interactive Portfolio Web
**Version**: 1.0.0  
**Status**: Ready for Implementation  
**Author**: Ihan & Han Visuals Architecture Team  
**Tech Stack**: Next.js (App Router), Tailwind CSS, Framer Motion, Official Play Prism SVG System  
**Hosting Target**: Vercel / Cloudflare Pages (Pure Static Zero-Latency Architecture)

---

## 1. Executive Summary & Brand Foundation

### 1.1 Visi Produk
Membangun web portofolio resmi untuk **hanvisuals** yang memposisikan studio sebagai entitas kreatif-teknis modern (*hybrid creative & digital engineering power*). Web ini menggabungkan dua kapabilitas inti: **produksi visual berdaya pikat tinggi** (9:16 vertical video, AI motion graphics, short-form storytelling) dan **rekayasa digital korporat** (web & application development), dengan interaktivitas 60fps yang elegan, responsif, dan bebas hambatan birokrasi.

### 1.2 Persona & Karakter Studio
* **Founder & Solo Engine**: Ihan (*The Creator / Magician*).
* **Tone of Voice**: *Casual minimalist*, modern, percaya diri, *tech-native*, solutif, dan tanpa basa-basi korporat kaku.
* **Kalibrasi Motion & Energi**:
  * **Energy**: `Level 3` (Berani, dinamis, percaya diri).
  * **Rhythm**: `Level 2` (Terukur, ritmis, tidak terburu-buru).
  * **Motion**: `Level 3` (Fluid, kinetik berbasis kurva pegas elastis `cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 2. Target Pengguna & Jalur Konversi

### 2.1 Persona Pengunjung
1. **Brand Marketing Leads & Creative Directors**:
   * *Tujuan*: Memvalidasi estetika visual, retensi video 9:16, dan kapabilitas AI visual dalam waktu <30 detik.
   * *Kebutuhan*: Pengalaman interaktif instan, tombol play video responsif, dan komunikasi cepat.
2. **Corporate Executives & Startup Founders**:
   * *Tujuan*: Memverifikasi keahlian teknis pengembangan website dan aplikasi korporat yang clean, scalable, dan modern.
   * *Kebutuhan*: Screenshot antarmuka dalam format desktop (16:10), kejelasan stack teknologi, serta alur kerja yang terstruktur.

### 2.2 Model Konversi (Direct Zero-Friction Deal)
* **Status Pricing**: *"DM for pricing / Let's deal"*. Menghilangkan tabel harga kaku atau form estimasi rumit.
* **Kanal Komunikasi Utama**:
  1. **Instagram DM Studio**: Direct link ke [`@hanvisuals._`](https://www.instagram.com/hanvisuals._?cplk=MWhkOGE0cGYzajAwOA%3D%3D&utm_source=qr).
  2. **Direct Email Inquiry**: `muhammadroihannn@gmail.com` dengan tombol aksi ganda (*Open Mail Client* + *1-Click Copy to Clipboard*).
  3. **Personal Creator Link**: Direct link ke Instagram personal [`@ihanwchy`](https://www.instagram.com/ihanwchy).

---

## 3. Arsitektur Informasi & Anatomi Halaman

Situs dirancang dalam format **High-Impact Single Page Application (SPA)** yang terbagi ke dalam 7 seksi ritmis:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Floating Glass Pill Navbar (Logo, Status Dot, Lang, Nav) │
├─────────────────────────────────────────────────────────────┤
│ 2. Hero Section (Anchor + Dynamic Typewriter + Ambient Glow)│
├─────────────────────────────────────────────────────────────┤
│ 3. Services Bento Grid (4 Disiplin Layanan & Deliverables)  │
├─────────────────────────────────────────────────────────────┤
│ 4. Selected Works Showcase (Filter: All, Video 9:16, Web)   │
├─────────────────────────────────────────────────────────────┤
│ 5. The 4-Step Production Pipeline (Workflow Kredibilitas)   │
├─────────────────────────────────────────────────────────────┤
│ 6. Ultra-Minimalist Creator Strip (Engineered by Ihan)      │
├─────────────────────────────────────────────────────────────┤
│ 7. Outro Portal & Big Contact Card (Deal CTA)               │
├─────────────────────────────────────────────────────────────┤
│ Fixed Floating Action Dock (Quick DM / Quick Email)         │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Spesifikasi Fitur Fungsional

### 4.1 F1: Sistem Interaksi Kursor Ganda (Dual-Axis Cursor Engine)
* **Ambient Canvas Spotlight**:
  * Di latar belakang kanvas `#15171E`, sebuah radial spotlight lembut berdiameter ~600px mengikuti posisi pointer mouse secara dinamis melalui CSS variables (`--mouse-x`, `--mouse-y`) menggunakan listener `requestAnimationFrame`.
  * Spotlight memancarkan gradasi warna redup campuran Vivid Turquoise (`#51B8B9`, opacity 0.08) dan Warm Tangerine (`#FA9F1B`, opacity 0.05).
* **Card Border Spotlight**:
  * Seluruh kartu Bento dan kartu portofolio memiliki garis tepi reaktif (*reactive glowing border*). Saat kursor melintas, garis tepi kartu menyala secara lokal mengikuti arah kursor.
* **Anti-Lag Touchscreen Fallback**:
  * Deteksi otomatis media query `@media (hover: none) and (pointer: coarse)`.
  * Pada smartphone/tablet, event listener pelacak kursor dinonaktifkan sepenuhnya untuk menghemat daya GPU/baterai, digantikan oleh radial glow statis di belakang Hero section.

### 4.2 F2: Hero Word Cycling / Typewriter Component
* **Struktur Kalimat**:
  * Kalimat jangkar statis:  
    *EN*: *"Crafting high-impact "*  
    *ID*: *"Menciptakan karya "*
  * Kata berputar dinamis (looping tak terbatas dengan efek mengetik, menahan 2.2 detik, menghapus cepat):
    1. **"video editing"** → Aksen: *Warm Tangerine* (`#FA9F1B`)
    2. **"web & apps"** → Aksen: *Vivid Turquoise* (`#51B8B9`)
    3. **"motion graphics"** → Aksen: *Sunshine Yellow* (`#FFDC56`)
    4. **"visual content"** → Aksen: *Flamingo Coral* (`#FA7C83`)
  * Kalimat penutup statis:  
    *EN*: *" for forward-thinking brands."*  
    *ID*: *" untuk brand masa depan."*
* **Karakter Cursor**: Garis kursor vertikal berkedip (blinking caret) menggunakan warna *Pure Warm Light* (`#FDFCF9`).

### 4.3 F3: Sistem Dwibahasa Instan (Zero-Reload i18n Context)
* **Kamus Terpusat**: Seluruh salinan teks antarmuka disimpan dalam file konfigurasi kamus `dictionaries.js`.
* **State Management**: React Context (`LanguageContext`) dengan opsi `['en', 'id']`.
* **Default Language**: Bahasa Inggris (`EN`).
* **Penyimpanan Preferensi**: Tersinkronisasi dengan `localStorage` (`hanvisuals_lang`).
* **Performa**: Transisi pergantian bahasa terjadi 0ms tanpa me-refresh halaman browser.

### 4.4 F4: Galeri Portofolio Dual-Card & Filter Segmented
* **Filter Switcher Segmented**: Pill filter dengan pill background geser animasi Framer Motion (`layoutId="activeFilter"`):
  * `All` (Semua karya)
  * `Videos & Motion` (Khusus konten vertikal)
  * `Web & Apps` (Khusus proyek rekayasa digital)
* **Dual-Card Layout**:
  1. **Vertical Device Mockup (9:16)**:
     * Dikhususkan untuk Video Editing, Reels/TikTok Content, dan Motion Graphics.
     * Rasio kontainer `aspect-[9/16]`, sudut melengkung `rounded-3xl`, border tipis glassmorphism.
     * Fitur: Hover-to-preview animasi, Play Button pill overlay, tag durasi/rasio, dan trigger modal detail.
  2. **Browser Window Mockup (16:10)**:
     * Dikhususkan untuk Web & Mobile Apps Development.
     * Header jendela peramban virtual lengkap dengan 3 dot kontrol macOS (Red, Yellow, Green mini dots) dan pill address bar minimalis.
     * Tag stack teknologi (misal: `Next.js`, `Tailwind`, `React`, `TypeScript`).
* **Penyimpanan Data Terpusat**: Seluruh metadata slot karya dikonfigurasi melalui `data/portfolioData.js`. Menyediakan slot placeholder siap pakai untuk file lokal MP4, URL embed eksternal, dan gambar cover.

### 4.5 F5: Direct Action Contact System
* **Instagram Action**: Membuka tautan resmi Instagram DM di tab baru.
* **Email Action**:
  * Tombol utama membuka URL scheme `mailto:muhammadroihannn@gmail.com`.
  * Tombol sekunder: Tombol salin (Copy icon). Saat diklik, alamat email disalin ke clipboard pengguna, memicu status visual *"Copied to clipboard!"* selama 2 detik dengan aksen warna Vivid Turquoise (`#51B8B9`).
* **Fixed Floating Glass Dock**:
  * Melayang di pojok kanan bawah desktop (`bottom-6 right-6`), tersembunyi di Hero paling atas, lalu muncul halus saat di-scroll ke bawah.
  * Berisi tombol ringkas: Chat DM Instagram & Copy Email.

### 4.6 F6: 100% Silent UI & Audio Policy
* **Navigasi & Interaksi**: Tidak ada sound effect sintesis pada aksi klik, tombol, atau hover.
* **Media Audio**: Video portofolio dimulai secara otomatis dalam status *Muted* (tanpa suara). Audio hanya diputar jika pengguna mengklik toggle suara (*Unmute*) secara eksplisit.

---

## 5. Token Desain & Panduan Visual Resmi

### 5.1 Distribusi Palet Warna (Aturan 60-30-10)
Sistem warna mengunci palet resmi hanvisuals:

| Peran | Nama Token | HEX Code | Persentase | Penerapan pada Web |
| :--- | :--- | :--- | :--- | :--- |
| **Dominan** | **Dark Canvas** | `#15171E` | **60%** | Kanvas latar belakang utama halaman, backdrop modal. |
| **Struktural** | **Cozy Slate** | `#2D3142` | **30%** | Kartu bento, kontainer mockup, garis border sekunder, panel navigasi. |
| **Aksen Spektrum** | **Vivid Turquoise** | `#51B8B9` | **2.5%** | Status dot ketersediaan, tag Web/Dev, tombol primer. |
| **Aksen Spektrum** | **Warm Tangerine** | `#FA9F1B` | **2.5%** | Tag Video/Motion, hover glow, spotlight sekunder. |
| **Aksen Spektrum** | **Sunshine Yellow**| `#FFDC56` | **2.5%** | Lencana AI, highlight kata dinamis, aksen tipografi. |
| **Aksen Spektrum** | **Flamingo Coral** | `#FA7C83` | **1.5%** | Aksen kreatif, gradient mesh, hover state. |
| **Aksen Spektrum** | **Coral Crimson**  | `#EA4C56` | **1.0%** | Dot aksen, badge penutup, micro-interaction. |
| **Netral Terang** | **Pure Warm Light**| `#FDFCF9` | - | Teks judul utama (Headings), caret kursor, ikon kontras tinggi. |

### 5.2 Tipografi Resmi
* **Font Family**: **Plus Jakarta Sans** (Google Fonts).
* **Wordmark Resmi**: `hanvisuals` (wajib *all lowercase*, tracking `-0.02em`, weight `800/ExtraBold`).
* **Tingkatan Hirarki**:
  * `Display / H1`: `text-4xl md:text-6xl lg:text-7xl`, font weight 800, tracking `-0.03em`, leading tight.
  * `Section Title / H2`: `text-3xl md:text-5xl`, font weight 700, tracking `-0.02em`.
  * `Card Title / H3`: `text-xl md:text-2xl`, font weight 700.
  * `Body Text`: `text-base md:text-lg`, font weight 400/500, leading relaxed, warna slate terang (`#94A3B8`).
  * `Badge / Micro`: `text-xs md:text-sm`, font weight 600, tracking `+0.05em`, uppercase/capitalize.

### 5.3 Karakter Simbol Logo (*The Play Prism*)
* Bentuk segitiga tombol *Play* geometris berimbang yang tersusun atas perpaduan segmen spektrum resmi dengan *negative-space void* berwarna putih di bagian tengahnya.
* Aturan mutlak: Dilarang memasukkan warna Cozy Slate (`#2D3142`) ke dalam simbol Play Prism.

---

## 6. Arsitektur Kode & Struktur Direktori

### 6.1 Direktori Berkas (Next.js App Router)
```
hanvisuals-portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── videos/
│       └── placeholders/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.js             # Floating glass pill navbar
│   │   ├── Hero.js               # Anchor text + dynamic typewriter
│   │   ├── ServicesBento.js      # 4-card interactive bento grid
│   │   ├── Showcase.js           # Dual-card video 9:16 & web showcase
│   │   ├── VideoCard.js          # Vertical 9:16 interactive player card
│   │   ├── WebCard.js            # Desktop 16:10 browser window card
│   │   ├── Workflow.js           # 4-Step production pipeline
│   │   ├── CreatorStrip.js       # Minimalist strip engineered by Ihan
│   │   ├── OutroContact.js       # Big deal portal & contact buttons
│   │   ├── FloatingDock.js       # Persistent bottom-right quick action
│   │   ├── AmbientCursor.js      # Cursor-following ambient spotlight
│   │   └── LanguageSwitcher.js   # EN | ID instant toggle button
│   ├── context/
│   │   └── LanguageContext.js    # State management dwibahasa
│   ├── data/
│   │   ├── dictionaries.js       # Kamus teks EN & ID lengkap
│   │   └── portfolioData.js      # Modul data daftar video & karya web
│   └── lib/
│       └── utils.js              # ClassNames merger (clsx + twMerge)
├── tailwind.config.js
└── package.json
```

---

## 7. Skema Data & Kontrak Antarmuka

### 7.1 Skema Data Karya (`portfolioData.js`)
```javascript
export const portfolioItems = [
  {
    id: "proj-1",
    title: "Cinematic Brand Commercial",
    category: "video", // "video" | "web"
    aspectRatio: "9:16",
    deliverables: "Commercial Video, Sound Design, Color Grading",
    thumbnailUrl: "/placeholders/commercial-thumb.jpg",
    videoSource: "/videos/placeholder-1.mp4", // Mendukung MP4 lokal atau stream URL
    tags: ["9:16 Video", "Direction", "Color Grade"],
    client: "Forward Studio",
    year: "2026"
  },
  {
    id: "proj-2",
    title: "Omni Digital Corporate Platform",
    category: "web", // "video" | "web"
    aspectRatio: "16:10",
    deliverables: "High-Performance Web App, Design System, Next.js Engine",
    thumbnailUrl: "/placeholders/webapp-thumb.jpg",
    liveUrl: "https://example.com",
    tags: ["Next.js", "Tailwind CSS", "Enterprise App"],
    client: "Nexus Global",
    year: "2026"
  }
];
```

### 7.2 Skema Kamus Dwibahasa (`dictionaries.js`)
Kamus mencakup seluruh teks navigasi, hero subtitle, deskripsi layanan bento, judul alur kerja, kartu profil Ihan, hingga label tombol kontak dalam Bahasa Inggris (`en`) dan Bahasa Indonesia (`id`).

---

## 8. Persyaratan Non-Fungsional (NFR)

1. **Performa & Frame Rate**:
   * Seluruh animasi kursor dan transisi Framer Motion berjalan pada kecepatan **60 FPS stabil**.
   * Skor Google Lighthouse: Performance > 95, Accessibility > 95, Best Practices = 100, SEO = 100.
2. **Aksesibilitas (WCAG AAA Compliance)**:
   * Rasio kontras teks putih (`#FDFCF9`) di atas kanvas gelap (`#15171E`) melampaui `14:1` (standar minimum WCAG AAA adalah 7:1).
   * Elemen interaktif memiliki atribut `aria-label` yang lengkap untuk *screen reader*.
3. **Optimasi Aset Video**:
   * Video placeholder menggunakan atribut `playsInline`, `preload="metadata"`, dan lazy-loading saat elemen belum masuk ke viewport (*Intersection Observer*).
4. **Metadata SEO & Social Graph (OpenGraph)**:
   * `og:title`: `"hanvisuals | Visual Storytelling, AI Motion & Digital Engineering"`
   * `og:description`: `"Engineered by Ihan. Crafting high-retention 9:16 videos, kinetic AI motion graphics, and high-performance corporate web applications."`
   * `og:image`: Banner Dark Canvas rasio 1200×630 dengan simbol *The Play Prism*.

---

## 9. Rencana Rilis & Roadmap Pengembangan

* **Fase 1 (MVP: Peluncuran Saat Ini)**:
  * Implementasi antarmuka lengkap Single-Page Application Next.js + Tailwind CSS.
  * Sistem Ambient Spotlight kursor ganda dan Hero Typewriter dinamis.
  * Bento grid layanan, galeri placeholder dual-card (9:16 + 16:10), dan filter segmented.
  * Integrasi kamus dwibahasa EN/ID instan.
  * Direct action link ke Instagram `@hanvisuals._`, email `muhammadroihannn@gmail.com`, dan persona `@ihanwchy`.
* **Fase 2 (Pembaruan Mendatang)**:
  * Integrasi Supabase Client SDK untuk form intake brief otomatis.
  * Video CDN streaming kustom untuk resolusi adaptive 4K.