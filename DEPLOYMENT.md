# 🚀 Panduan Deployment ke Vercel

## Prerequisites
- Akun Vercel (https://vercel.com)
- Git repository (GitHub, GitLab, atau Bitbucket)
- Node.js 18+ terinstall

## 📋 Langkah-langkah Deployment

### 1. Persiapan Project
```bash
# Pastikan build berhasil
npm run build

# Test locally
npm run start
```

### 2. Deploy via Vercel CLI

#### Install Vercel CLI (jika belum)
```bash
npm install -g vercel
```

#### Login ke Vercel
```bash
vercel login
```

#### Deploy Project
```bash
# Deploy untuk pertama kali
vercel

# Atau deploy dengan custom domain
vercel --prod
```

### 3. Deploy via Vercel Dashboard

1. **Push ke Git Repository**
   ```bash
   git add .
   git commit -m "Initial commit: Website Bisnis Indonesia"
   git push origin main
   ```

2. **Import Project di Vercel**
   - Buka https://vercel.com/dashboard
   - Klik "Add New..." → "Project"
   - Import dari Git repository
   - Pilih repository "website-bisnis-indonesia"

3. **Configure Build Settings**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Environment Variables (Optional)**
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

5. **Deploy**
   - Klik "Deploy"
   - Tunggu proses build selesai

## 🔧 Konfigurasi Domain Custom

### 1. Via Vercel Dashboard
1. Buka project di Vercel Dashboard
2. Go to "Settings" → "Domains"
3. Add custom domain (contoh: bisnisindonesia.com)
4. Configure DNS records sesuai instruksi Vercel

### 2. DNS Configuration
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

## 📊 Performance Optimization

### Vercel Analytics
```javascript
// Tambahkan di src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Speed Insights
```javascript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## 🛠️ Post-Deployment Checklist

### ✅ Testing
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Blog posts display properly
- [ ] Contact form functional
- [ ] Mobile responsive
- [ ] SEO meta tags present

### ✅ Performance
- [ ] Lighthouse score 90+
- [ ] Images optimized
- [ ] Core Web Vitals green
- [ ] SSL certificate active

### ✅ SEO
- [ ] Sitemap accessible (/sitemap.xml)
- [ ] Robots.txt configured (/robots.txt)
- [ ] Google Search Console setup
- [ ] Google Analytics configured

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to your Git repository:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main
# Vercel will auto-deploy
```

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear cache dan rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Image Issues
- Pastikan semua images ada di folder `public/images/`
- Update `next.config.js` jika menggunakan external images

### Environment Variables
- Set di Vercel Dashboard → Settings → Environment Variables
- Restart deployment setelah menambah env vars

## 📞 Support

Jika mengalami masalah deployment:
1. Check Vercel deployment logs
2. Verify build passes locally
3. Check Vercel documentation
4. Contact support jika diperlukan

---

**🎉 Selamat! Website Bisnis Indonesia sudah live di Vercel!**

Access your site at: `https://your-project-name.vercel.app`