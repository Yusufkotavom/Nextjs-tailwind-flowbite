import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, Badge } from 'flowbite-react';
import Layout from '../../../layouts/Layout';
import { siteConfig } from '../../../../config/site.config';

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

// Data lengkap untuk setiap industri
const industryData = {
  teknologi: {
    ...siteConfig.industries.find(i => i.slug === 'teknologi')!,
    hero: {
      title: 'Solusi Teknologi & IT untuk Bisnis Modern',
      subtitle: 'Transformasi digital yang mengoptimalkan operasional dan meningkatkan efisiensi bisnis teknologi Anda.',
      image: '/images/industries/teknologi-hero.jpg'
    },
    features: [
      'Sistem Manajemen Proyek',
      'Platform Kolaborasi Tim',
      'Integrasi API & Microservices',
      'Cloud Infrastructure',
      'DevOps & CI/CD Pipeline',
      'Keamanan Siber Berlapis'
    ],
    benefits: [
      'Otomatisasi proses bisnis hingga 80%',
      'Peningkatan produktivitas tim',
      'Skalabilitas sistem yang fleksibel',
      'Keamanan data terjamin',
      'Integrasi dengan tools existing'
    ],
    services: [
      {
        name: 'Software Development',
        description: 'Pengembangan aplikasi custom sesuai kebutuhan bisnis',
        icon: '💻'
      },
      {
        name: 'System Integration',
        description: 'Integrasi sistem existing dengan solusi baru',
        icon: '🔗'
      },
      {
        name: 'Cloud Migration',
        description: 'Migrasi infrastruktur ke cloud dengan aman',
        icon: '☁️'
      }
    ],
    testimonials: [
      {
        name: 'Budi Santoso',
        company: 'TechStart Indonesia',
        position: 'CTO',
        content: 'Platform yang dikembangkan membantu kami meningkatkan efisiensi operasional hingga 70%. Tim sangat profesional!',
        rating: 5
      }
    ]
  },
  kesehatan: {
    ...siteConfig.industries.find(i => i.slug === 'kesehatan')!,
    hero: {
      title: 'Platform Digital untuk Layanan Kesehatan',
      subtitle: 'Sistem informasi kesehatan yang memudahkan pengelolaan data pasien dan meningkatkan kualitas pelayanan.',
      image: '/images/industries/kesehatan-hero.jpg'
    },
    features: [
      'Sistem Informasi Rumah Sakit (SIRS)',
      'Rekam Medis Elektronik',
      'Sistem Antrian Online',
      'Telemedicine Platform',
      'Apotek Online Integration',
      'Medical Dashboard & Analytics'
    ],
    benefits: [
      'Pengelolaan data pasien yang efisien',
      'Peningkatan kualitas pelayanan',
      'Kepatuhan terhadap regulasi kesehatan',
      'Integrasi dengan BPJS Kesehatan',
      'Laporan analytics real-time'
    ],
    services: [
      {
        name: 'Hospital Management System',
        description: 'Sistem manajemen rumah sakit terintegrasi',
        icon: '🏥'
      },
      {
        name: 'Telemedicine Platform',
        description: 'Platform konsultasi online dokter-pasien',
        icon: '👨‍⚕️'
      },
      {
        name: 'Medical Mobile App',
        description: 'Aplikasi mobile untuk pasien dan tenaga medis',
        icon: '📱'
      }
    ],
    testimonials: [
      {
        name: 'Dr. Sari Wijaya',
        company: 'RS Sehat Sentosa',
        position: 'Direktur',
        content: 'Sistem informasi yang dikembangkan sangat membantu dalam pengelolaan data pasien dan meningkatkan efisiensi operasional.',
        rating: 5
      }
    ]
  },
  ecommerce: {
    ...siteConfig.industries.find(i => i.slug === 'ecommerce')!,
    hero: {
      title: 'Platform E-Commerce untuk Bisnis Retail',
      subtitle: 'Solusi jual beli online lengkap dengan payment gateway, inventory management, dan analytics.',
      image: '/images/industries/ecommerce-hero.jpg'
    },
    features: [
      'Multi-vendor Marketplace',
      'Payment Gateway Integration',
      'Inventory Management System',
      'Order Tracking & Logistics',
      'Customer Relationship Management',
      'Sales Analytics & Reporting'
    ],
    benefits: [
      'Jangkauan pasar yang lebih luas',
      'Otomatisasi proses penjualan',
      'Integrasi dengan marketplace populer',
      'Analytics penjualan real-time',
      'Customer support terintegrasi'
    ],
    services: [
      {
        name: 'E-Commerce Website',
        description: 'Website toko online dengan fitur lengkap',
        icon: '🛒'
      },
      {
        name: 'Mobile Commerce App',
        description: 'Aplikasi mobile untuk shopping experience',
        icon: '📱'
      },
      {
        name: 'Marketplace Integration',
        description: 'Integrasi dengan Tokopedia, Shopee, dll',
        icon: '🏪'
      }
    ],
    testimonials: [
      {
        name: 'Andi Wijaya',
        company: 'Fashion Store Online',
        position: 'Owner',
        content: 'Platform e-commerce yang dikembangkan meningkatkan penjualan online kami hingga 300%. Sangat recommend!',
        rating: 5
      }
    ]
  }
};

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = industryData[params.slug as keyof typeof industryData];
  
  if (!industry) {
    notFound();
  }

  return (
    <Layout
      seo={{
        title: industry.name,
        description: `Solusi digital terpercaya untuk industri ${industry.name.toLowerCase()}. ${industry.description}`,
        type: 'website',
      }}
      richSnippet={{ type: 'organization' }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge color={industry.color} size="lg" className="mb-4">
                <span className="text-lg mr-2">{industry.icon}</span>
                {industry.name}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
                {industry.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {industry.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  as={Link}
                  href="/contact"
                  size="xl"
                  className="bg-primary-600 hover:bg-primary-700"
                >
                  Konsultasi Gratis
                </Button>
                <Button
                  as={Link}
                  href="/pricing"
                  color="light"
                  size="xl"
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
                >
                  Lihat Paket Harga
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Image
                src={industry.hero.image}
                alt={industry.name}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fitur-fitur canggih yang dirancang khusus untuk kebutuhan industri {industry.name.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap yang disesuaikan dengan kebutuhan spesifik industri {industry.name.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industry.services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Button
                  as={Link}
                  href="/contact"
                  color={industry.color}
                  size="sm"
                  className="w-full"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
              Manfaat untuk Bisnis Anda
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Keuntungan nyata yang akan Anda rasakan setelah menggunakan solusi kami.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industry.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-600 font-bold text-sm">✓</span>
                </div>
                <p className="text-lg text-primary-50">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Testimoni Klien
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepercayaan klien adalah prioritas utama kami.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {industry.testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-lg text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.position}</div>
                  <div className="text-primary-600">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
            Siap Mengembangkan Bisnis {industry.name} Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan digital bisnis {industry.name.toLowerCase()} Anda dengan tim ahli kami. 
            Konsultasi pertama gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/contact"
              size="xl"
              className="bg-primary-600 hover:bg-primary-700"
            >
              Mulai Konsultasi Gratis
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

export async function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({
    slug,
  }));
}