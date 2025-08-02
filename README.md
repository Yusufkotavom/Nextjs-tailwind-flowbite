> Bertindaklah sebagai developer profesional. Buat proyek website menggunakan Next.js (App Router preferred), Tailwind CSS, dan Flowbite React, dengan struktur modular, SEO optimal, dan performa tinggi.




---

🌐 Halaman Utama:

1. / – Landing Page - SaaS lengkap hero feature service 


2. /pricing – Pricing Page
3. /service - page
4. /Service - individual page
   Website development
   Software development
   SEO optimize
   Backlink service

3. /about – About Page


4. /contact – Contact Page


5. /blog – Blog Overview Page


6. /blog/[slug] – Blog Detail Page


7. /author/[slug] – Author Page


8. /404 – Custom 404 Page




---

⚙️ Fitur Kunci:

🧩 Struktur Modular dan Partial

Komponen Partial:

Header.tsx

Footer.tsx

SEO.tsx – reusable SEO component

RichSnippet.tsx – untuk structured data JSON-LD

Layout.tsx – pembungkus semua halaman



📚 Blog Lengkap:

Artikel dari .mdx dengan frontmatter (title, slug, author, category, tags, date, image)

Sidebar blog:

Pencarian artikel (gunakan fuse.js)

Daftar kategori (filter by click)


Navigasi antar halaman (pagination)

Kategori dan Tag di bawah setiap artikel

Related posts

Author detail (bio, photo, link)


⚙️ Kontrol Konten:

Navigasi, link sosial media → navigation.json dan socials.json

Konfigurasi global → site.config.ts (title, logo, favicon, warna tema, dsb)

Semua update cukup dari file config/JSON/MDX


💡 SEO & Rich Snippet:

Komponen SEO reusable (<SEO />)

JSON-LD untuk BlogPosting, Organization, Breadcrumb (via RichSnippet.tsx)

next-seo config global

Canonical URL per halaman

sitemap.xml dan robots.txt otomatis


🎨 UI dan Theme:

Tailwind CSS + Flowbite

Support dark mode

Styling global di tailwind.config.js

Class dinamis via clsx


🚀 Optimasi Kecepatan:

Gunakan next/image untuk semua gambar

Fonts via next/font

Lazy load untuk gambar dan komponen berat

Preload link internal

Gunakan ISR (Incremental Static Regeneration) jika perlu



---

✅ Teknologi & Dependensi:

next (latest LTS)

tailwindcss

flowbite-react

next-seo

gray-matter + next-mdx-remote

clsx, slugify, fuse.js

dotenv, prettier, eslint



---

📁 Struktur Folder yang Disarankan:

/app (atau /pages)
/components
/layouts
/config (site.config.ts, theme.config.ts)
/data (navigation.json, socials.json)
/content/blog/*.mdx
/content/authors/*.json
/public (logo, favicon, images)
/styles
/utils (slugify.ts, seo.ts, etc.)


---

📌 Syarat Output:

✅ Semua kode harus:

Bersih (clean code)

Tanpa typo

Teruji saat build (next build)

Mengikuti best practice React/Next.js

Modular dan mudah dikembangkan



---

🧠 Tujuan Akhir:

Website siap produksi:
✅ Cepat
✅ SEO kuat
✅ Mudah dikonfigurasi
✅ Scalable
✅ Dapat di-deploy ke Vercel langsung


---

Jika kamu ingin saya ubah prompt ini menjadi versi bahasa Inggris, dijadikan README.md untuk starter project, atau dipecah menjadi bagian-bagian tugas terpisah, tinggal bilang saja!

