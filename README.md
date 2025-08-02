# 🇮🇩 Website Bisnis Indonesia – Next.js + Tailwind + Flowbite

Proyek ini adalah website lengkap menggunakan **Next.js**, **Tailwind CSS**, dan **Flowbite React**, dirancang khusus untuk **bisnis yang beroperasi di Indonesia**. Fokus utama pada **kecepatan**, **SEO**, dan **kemudahan pengelolaan konten** secara modular — tanpa perlu menyentuh HTML.

## ✨ Fitur Utama

### ✅ Halaman
- `/` – Landing Page multi-purpose dengan navigasi ke semua industri
- `/industri/[slug]` – Landing pages untuk berbagai industri populer:
  - Teknologi & IT
  - Kesehatan & Medis  
  - Pendidikan & Pelatihan
  - E-Commerce & Retail
  - Keuangan & Fintech
  - Kuliner & F&B
  - Properti & Real Estate
  - Otomotif & Transportasi
- `/pricing` – Halaman Harga dalam **IDR** (Rupiah)
- `/about` – Tentang Perusahaan berbasis di **Indonesia**
- `/contact` – Form Kontak dengan alamat & jam operasional lokal
- `/blog` – Blog dengan fitur lengkap:
  - Pencarian dengan Fuse.js
  - Filter kategori
  - Pagination
  - Featured posts
- `/blog/[slug]` – Artikel detail dengan rich content
- `/author/[slug]` – Profil penulis
- `/404` – Halaman tidak ditemukan yang user-friendly

### 🧩 Struktur Modular & Komponen
- `components/Header.tsx` – Navigasi responsive dengan dropdown
- `components/Footer.tsx` – Footer lengkap dengan informasi kontak
- `components/SEO.tsx` – Metadata dinamis dengan next-seo
- `components/RichSnippet.tsx` – JSON-LD untuk Google Rich Snippets
- `layouts/Layout.tsx` – Layout utama semua halaman
- Blog components dengan sidebar, pencarian, dan related posts

### 🇮🇩 Konten & Branding Lokal Indonesia
- **Mata uang**: IDR (Rupiah) dengan format Indonesia
- **Zona waktu**: WIB/WITA/WIT
- **Bahasa**: Indonesia di seluruh konten
- **Metadata bisnis**: Lokasi Indonesia, perusahaan lokal
- **Gaya bahasa**: Sopan, sesuai bisnis profesional Indonesia
- **Social media**: WhatsApp, Instagram, Facebook, LinkedIn, TikTok

### ⚙️ Konfigurasi Modular
Semua pengaturan dapat diubah melalui file config tanpa menyentuh HTML:
- **Metadata & branding**: `config/site.config.ts`
- **Navigasi**: `data/navigation.json`
- **Penulis blog**: `content/authors/*.json`
- **Artikel**: `content/blog/*.mdx`
- **Logo & favicon**: `public/images/`

### 🎯 SEO & Performa Teroptimasi
- Integrasi `next-seo` dengan metadata dinamis
- JSON-LD Rich Snippets: `BlogPosting`, `Organization`, `BreadcrumbList`, `LocalBusiness`
- `next/image` untuk kompresi & lazy loading otomatis
- Fonts optimized dengan `next/font`
- Sitemap dinamis dan robots.txt
- Clean URLs dan canonical URLs
- Security headers dan performance optimization

## 🧰 Teknologi yang Digunakan

| Teknologi         | Fungsi                               | Version |
|-------------------|--------------------------------------|---------|
| `Next.js`         | Framework React full-stack          | 14+     |
| `TypeScript`      | Type safety                          | 5+      |
| `Tailwind CSS`    | Utility-first CSS framework         | 3+      |
| `Flowbite React`  | UI components                        | 0.7+    |
| `next-seo`        | SEO optimization                     | 6+      |
| `gray-matter`     | Markdown frontmatter parsing         | 4+      |
| `next-mdx-remote` | MDX content rendering               | 4+      |
| `fuse.js`         | Fuzzy search untuk blog             | 7+      |
| `reading-time`    | Estimasi waktu baca artikel         | 1+      |
| `slugify`         | URL-friendly slugs                  | 1+      |
| `clsx`            | Conditional CSS classes             | 2+      |

## 🚀 Menjalankan Proyek

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/username/website-bisnis-indonesia.git
cd website-bisnis-indonesia

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build untuk Production

```bash
# Build optimized untuk production
npm run build

# Start production server
npm start
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📁 Struktur Folder

```
website-bisnis-indonesia/
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── page.tsx           # Homepage
│   │   ├── about/page.tsx     # About page
│   │   ├── pricing/page.tsx   # Pricing page
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── blog/              # Blog pages
│   │   ├── industri/[slug]/   # Industry pages
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # Reusable components
│   ├── layouts/               # Layout components
│   ├── lib/                   # Utility libraries
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Helper functions
├── config/                    # Configuration files
│   └── site.config.ts         # Site configuration
├── data/                      # Static data files
│   └── navigation.json        # Navigation structure
├── content/                   # Content files
│   ├── blog/                  # Blog posts (.mdx)
│   └── authors/               # Author profiles (.json)
├── public/                    # Static assets
│   ├── images/                # Images
│   └── robots.txt             # SEO robots file
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

## ⚡ Fitur Blog System

### Pengelolaan Konten
- **Format**: MDX (Markdown + JSX)
- **Frontmatter**: Metadata lengkap (title, excerpt, date, author, category, tags, SEO)
- **Reading time**: Otomatis dihitung
- **Featured posts**: Highlight artikel penting
- **Categories & Tags**: Sistem organisasi konten

### Fitur Pencarian
- **Fuzzy search** dengan Fuse.js
- Pencarian di title, excerpt, content, tags, dan category
- **Filter kategori** dropdown
- **Pagination** untuk performance

### SEO Blog
- Individual meta tags per artikel
- JSON-LD BlogPosting schema
- Canonical URLs
- Social media meta tags (Open Graph, Twitter)

## 🎨 Kustomisasi

### Mengubah Branding
Edit `config/site.config.ts`:

```typescript
export const siteConfig = {
  name: "Nama Perusahaan Anda",
  title: "Website Bisnis Anda - Tagline",
  description: "Deskripsi bisnis Anda...",
  // ... konfigurasi lainnya
};
```

### Menambah Industri Baru
Tambahkan di `config/site.config.ts`:

```typescript
industries: [
  {
    id: "industri-baru",
    name: "Nama Industri",
    slug: "industri-baru", 
    description: "Deskripsi industri...",
    icon: "🏭",
    color: "blue"
  }
]
```

### Mengubah Navigasi
Edit `data/navigation.json` untuk mengubah menu header dan footer.

### Menambah Artikel Blog
Buat file baru di `content/blog/nama-artikel.mdx`:

```markdown
---
title: "Judul Artikel"
excerpt: "Ringkasan artikel..."
date: "2024-01-15"
author: "admin"
category: "Kategori"
tags: ["tag1", "tag2"]
featured: false
image: "/images/blog/artikel.jpg"
---

# Konten artikel dalam Markdown...
```

## 🔧 Optimasi Performance

### Built-in Optimizations
- **Image optimization** dengan next/image
- **Font optimization** dengan next/font
- **Bundle optimization** dengan Next.js
- **Static generation** untuk halaman yang memungkinkan
- **Compression** dan minification otomatis

### Lighthouse Score Target
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

## 📤 Deployment

### Vercel (Recommended)
```bash
# Deploy ke Vercel
npm i -g vercel
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
out
```

### DigitalOcean App Platform
- Connect GitHub repository
- Build command: `npm run build`
- Run command: `npm start`

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🛡️ Security

### Headers Keamanan
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff  
- Referrer-Policy: strict-origin-when-cross-origin

### Best Practices
- No sensitive data di client-side
- Input validation di form
- HTTPS enforcement (production)
- Rate limiting (jika diperlukan)

## 🐛 Troubleshooting

### Common Issues

**Build Error: Cannot resolve module**
```bash
# Clear cache dan reinstall
rm -rf .next node_modules package-lock.json
npm install
```

**Images tidak muncul**
- Pastikan path image benar di `public/images/`
- Check `next.config.js` image domains configuration

**Blog posts tidak muncul**
- Pastikan file `.mdx` di folder `content/blog/`
- Check frontmatter format
- Pastikan date format: "YYYY-MM-DD"

## 📈 Analytics & Monitoring

### Google Analytics
Tambahkan di `src/app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

### Performance Monitoring
- Vercel Analytics (built-in jika deploy di Vercel)
- Google PageSpeed Insights
- Lighthouse CI untuk monitoring otomatis

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Use Tailwind classes, avoid custom CSS
- Write meaningful commit messages
- Test di multiple devices/browsers
- Maintain 90+ Lighthouse scores

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Flowbite](https://flowbite.com/) - UI components
- [Vercel](https://vercel.com/) - Hosting platform

---

**💡 Tips**: 
- Gunakan `npm run dev` untuk development
- Selalu test build dengan `npm run build` sebelum deploy
- Monitor Core Web Vitals untuk SEO optimal
- Update dependencies secara berkala untuk security

**🆘 Butuh bantuan?** Buka issue di GitHub atau hubungi tim development.

---

Dibuat dengan ❤️ untuk bisnis Indonesia 🇮🇩

