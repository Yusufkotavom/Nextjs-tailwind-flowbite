export const siteConfig = {
  name: "Bisnis Indonesia",
  title: "Website Bisnis Indonesia - Solusi Digital Terpercaya",
  description: "Platform terpercaya untuk bisnis Indonesia. Kami menyediakan solusi digital terbaik untuk mengembangkan bisnis Anda di era modern.",
  url: "https://bisnisindonesia.com",
  author: "Tim Bisnis Indonesia",
  keywords: [
    "bisnis indonesia",
    "solusi digital",
    "website bisnis",
    "jasa digital",
    "UMKM indonesia",
    "startup indonesia",
    "e-commerce indonesia"
  ],
  
  // Informasi Perusahaan
  company: {
    name: "PT Bisnis Indonesia Digital",
    address: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
    phone: "+62 21 1234 5678",
    whatsapp: "+62 812 3456 7890",
    email: "info@bisnisindonesia.com",
    timezone: "WIB",
    workingHours: {
      weekdays: "09:00 - 18:00 WIB",
      saturday: "09:00 - 15:00 WIB",
      sunday: "Tutup"
    }
  },

  // Social Media
  social: {
    instagram: "https://instagram.com/bisnisindonesia",
    facebook: "https://facebook.com/bisnisindonesia",
    twitter: "https://twitter.com/bisnisindonesia",
    linkedin: "https://linkedin.com/company/bisnisindonesia",
    youtube: "https://youtube.com/@bisnisindonesia",
    tiktok: "https://tiktok.com/@bisnisindonesia",
    whatsapp: "https://wa.me/6281234567890"
  },

  // SEO Configuration
  seo: {
    defaultTitle: "Website Bisnis Indonesia - Solusi Digital Terpercaya",
    titleTemplate: "%s | Bisnis Indonesia",
    defaultDescription: "Platform terpercaya untuk bisnis Indonesia. Kami menyediakan solusi digital terbaik untuk mengembangkan bisnis Anda di era modern.",
    siteUrl: "https://bisnisindonesia.com",
    defaultImage: "/images/og-image.jpg",
    locale: "id_ID",
    type: "website"
  },

  // Currency & Locale
  currency: "IDR",
  locale: "id-ID",
  region: "Indonesia",

  // Industries/Verticals
  industries: [
    {
      id: "teknologi",
      name: "Teknologi & IT",
      slug: "teknologi",
      description: "Solusi teknologi untuk transformasi digital bisnis Anda",
      icon: "💻",
      color: "blue"
    },
    {
      id: "kesehatan",
      name: "Kesehatan & Medis",
      slug: "kesehatan",
      description: "Platform digital untuk layanan kesehatan modern",
      icon: "🏥",
      color: "green"
    },
    {
      id: "pendidikan",
      name: "Pendidikan & Pelatihan",
      slug: "pendidikan",
      description: "Solusi e-learning dan manajemen pendidikan",
      icon: "🎓",
      color: "purple"
    },
    {
      id: "ecommerce",
      name: "E-Commerce & Retail",
      slug: "ecommerce",
      description: "Platform jual beli online untuk bisnis retail",
      icon: "🛒",
      color: "orange"
    },
    {
      id: "keuangan",
      name: "Keuangan & Fintech",
      slug: "keuangan",
      description: "Solusi finansial digital untuk bisnis modern",
      icon: "💰",
      color: "yellow"
    },
    {
      id: "kuliner",
      name: "Kuliner & F&B",
      slug: "kuliner",
      description: "Platform digital untuk bisnis makanan dan minuman",
      icon: "🍽️",
      color: "red"
    },
    {
      id: "properti",
      name: "Properti & Real Estate",
      slug: "properti",
      description: "Solusi digital untuk bisnis properti dan real estate",
      icon: "🏠",
      color: "indigo"
    },
    {
      id: "otomotif",
      name: "Otomotif & Transportasi",
      slug: "otomotif",
      description: "Platform digital untuk industri otomotif dan transportasi",
      icon: "🚗",
      color: "gray"
    }
  ]
};

export type SiteConfig = typeof siteConfig;