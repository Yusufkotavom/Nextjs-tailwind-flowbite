import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from 'flowbite-react';
import Layout from '../layouts/Layout';
import { siteConfig } from '../../config/site.config';

export default function HomePage() {
  return (
    <Layout
      seo={{
        title: 'Beranda',
        description: siteConfig.description,
        type: 'website',
      }}
      richSnippet={{ type: 'organization' }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading">
                Solusi Digital Terpercaya untuk{' '}
                <span className="text-primary-600">Bisnis Indonesia</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kami membantu bisnis Indonesia bertransformasi digital dengan solusi 
                website, aplikasi mobile, dan platform e-commerce yang modern dan efektif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                src="/images/hero-illustration.jpg"
                alt="Digital Solutions Indonesia"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Klien Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Kota di Indonesia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">Uptime Server</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Solusi untuk Berbagai Industri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami memahami kebutuhan unik setiap industri dan menyediakan solusi 
              yang disesuaikan untuk bisnis Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.industries.map((industry) => (
              <Card key={industry.id} className="hover:shadow-lg transition-shadow">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {industry.description}
                  </p>
                  <Button
                    as={Link}
                    href={`/industri/${industry.slug}`}
                    color={industry.color}
                    size="sm"
                    className="w-full"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Layanan Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dari konsep hingga implementasi, kami menyediakan layanan digital 
              lengkap untuk mengembangkan bisnis Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Website Development
              </h3>
              <p className="text-gray-600">
                Website responsif dan SEO-friendly yang meningkatkan kredibilitas 
                dan jangkauan bisnis Anda.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mobile App Development
              </h3>
              <p className="text-gray-600">
                Aplikasi mobile Android dan iOS yang user-friendly dan 
                mengoptimalkan pengalaman pelanggan.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                E-Commerce Solutions
              </h3>
              <p className="text-gray-600">
                Platform jual beli online terintegrasi dengan payment gateway 
                dan sistem manajemen inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Pengalaman bertahun-tahun melayani bisnis Indonesia dengan 
              komitmen kualitas dan kepuasan pelanggan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Berpengalaman</h3>
              <p className="text-primary-100">
                Tim ahli dengan pengalaman 5+ tahun di industri teknologi Indonesia.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Cepat & Efisien</h3>
              <p className="text-primary-100">
                Proses development yang terstruktur dengan timeline yang jelas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Harga Terjangkau</h3>
              <p className="text-primary-100">
                Paket harga yang kompetitif dengan kualitas premium.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Keamanan Terjamin</h3>
              <p className="text-primary-100">
                Sistem keamanan berlapis untuk melindungi data bisnis Anda.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3">Support 24/7</h3>
              <p className="text-primary-100">
                Tim support yang siap membantu Anda kapan saja.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🇮🇩</div>
              <h3 className="text-xl font-semibold mb-3">Lokal Indonesia</h3>
              <p className="text-primary-100">
                Memahami kebutuhan dan budaya bisnis Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan digital bisnis Anda dengan tim ahli kami. 
            Konsultasi pertama gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/contact"
              size="xl"
              className="bg-primary-600 hover:bg-primary-700"
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