import Link from 'next/link';
import { Button, Card, Badge } from 'flowbite-react';
import Layout from '../../layouts/Layout';
import { siteConfig } from '../../../config/site.config';
import { PricingPlan } from '../../types';

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Cocok untuk bisnis kecil yang baru memulai',
    price: 2500000,
    currency: 'IDR',
    period: 'paket',
    features: [
      'Website responsive 5 halaman',
      'Domain gratis 1 tahun',
      'Hosting gratis 1 tahun',
      'SSL Certificate',
      'Basic SEO setup',
      'Contact form',
      'Google Analytics',
      'Support email 3 bulan'
    ],
    buttonText: 'Pilih Starter',
    buttonLink: '/contact?plan=starter'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Untuk bisnis yang ingin berkembang pesat',
    price: 7500000,
    currency: 'IDR',
    period: 'paket',
    features: [
      'Website responsive unlimited halaman',
      'Domain gratis 1 tahun',
      'Hosting premium 1 tahun',
      'SSL Certificate',
      'Advanced SEO optimization',
      'Blog system dengan CMS',
      'Contact form & live chat',
      'Google Analytics & Search Console',
      'Social media integration',
      'Mobile app basic (Android)',
      'Support prioritas 6 bulan'
    ],
    popular: true,
    buttonText: 'Pilih Professional',
    buttonLink: '/contact?plan=professional'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solusi lengkap untuk perusahaan besar',
    price: 15000000,
    currency: 'IDR',
    period: 'paket',
    features: [
      'Website & aplikasi mobile lengkap',
      'Domain & hosting premium 1 tahun',
      'SSL Certificate premium',
      'Full SEO optimization',
      'E-commerce integration',
      'Payment gateway setup',
      'Admin dashboard lengkap',
      'Advanced analytics & reporting',
      'API integration',
      'Multi-language support',
      'Backup otomatis',
      'Support dedicated 1 tahun',
      '3x revisi design'
    ],
    buttonText: 'Pilih Enterprise',
    buttonLink: '/contact?plan=enterprise'
  }
];

const addOnServices = [
  {
    name: 'Maintenance Bulanan',
    price: 500000,
    description: 'Update konten, backup, monitoring, dan support teknis'
  },
  {
    name: 'Digital Marketing',
    price: 2000000,
    description: 'Google Ads, Facebook Ads, SEO optimization bulanan'
  },
  {
    name: 'E-commerce Setup',
    price: 3000000,
    description: 'Integrasi payment gateway, inventory management'
  },
  {
    name: 'Mobile App (iOS)',
    price: 5000000,
    description: 'Aplikasi iOS native dengan fitur lengkap'
  }
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function PricingPage() {
  return (
    <Layout
      seo={{
        title: 'Paket Harga',
        description: 'Paket harga website dan aplikasi mobile terjangkau untuk bisnis Indonesia. Mulai dari Rp 2.5 juta dengan fitur lengkap.',
        type: 'website',
      }}
      richSnippet={{ type: 'organization' }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Paket Harga Terjangkau untuk <span className="text-primary-600">Bisnis Indonesia</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk 
            domain, hosting, dan support dari tim ahli kami.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <span className="text-green-600 font-semibold">✓ Garansi 100% Uang Kembali</span>
            <span className="text-green-600 font-semibold">✓ Tidak Ada Biaya Tersembunyi</span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative text-center p-8 ${
                  plan.popular ? 'border-2 border-primary-500 shadow-xl' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <Badge 
                    color="primary" 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  >
                    Paling Populer
                  </Badge>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary-600">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-gray-500 text-lg">/{plan.period}</span>
                </div>
                
                <ul className="text-left space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  as={Link}
                  href={plan.buttonLink}
                  size="lg"
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary-600 hover:bg-primary-700' 
                      : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Layanan Tambahan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tingkatkan performa bisnis Anda dengan layanan tambahan kami.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOnServices.map((service, index) => (
              <Card key={index} className="text-center p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  {formatPrice(service.price)}
                </div>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Proses Pengerjaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses yang terstruktur dan transparan untuk hasil yang optimal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Konsultasi</h3>
              <p className="text-gray-600">Diskusi kebutuhan dan requirement project</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Design</h3>
              <p className="text-gray-600">Pembuatan mockup dan prototype</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Development</h3>
              <p className="text-gray-600">Coding dan implementasi fitur</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Launch</h3>
              <p className="text-gray-600">Testing, deployment, dan go-live</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Apakah ada biaya tambahan setelah website jadi?
              </h3>
              <p className="text-gray-600">
                Tidak ada biaya wajib setelah website selesai. Anda hanya perlu memperpanjang 
                domain dan hosting setelah 1 tahun (sekitar Rp 500rb/tahun).
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Berapa lama proses pembuatan website?
              </h3>
              <p className="text-gray-600">
                Paket Starter: 1-2 minggu, Professional: 2-4 minggu, Enterprise: 4-8 minggu. 
                Timeline tergantung kompleksitas dan kecepatan feedback dari klien.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Apakah saya bisa request revisi?
              </h3>
              <p className="text-gray-600">
                Ya, setiap paket mendapat revisi gratis. Starter: 2x revisi, Professional: 3x revisi, 
                Enterprise: unlimited revisi selama masa pengerjaan.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Bagaimana dengan maintenance website?
              </h3>
              <p className="text-gray-600">
                Kami menyediakan layanan maintenance mulai Rp 500rb/bulan yang mencakup 
                update konten, backup, monitoring, dan support teknis.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
            Siap Memulai Project Anda?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami. 
            Dapatkan penawaran khusus untuk project Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/contact"
              size="xl"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Konsultasi Gratis Sekarang
            </Button>
            <Button
              as={Link}
              href={siteConfig.social.whatsapp}
              color="success"
              size="xl"
              target="_blank"
            >
              Chat via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}