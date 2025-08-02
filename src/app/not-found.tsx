import Link from 'next/link';
import { Button } from 'flowbite-react';
import Layout from '../layouts/Layout';

export default function NotFound() {
  return (
    <Layout
      seo={{
        title: '404 - Halaman Tidak Ditemukan',
        description: 'Halaman yang Anda cari tidak ditemukan. Kembali ke halaman utama atau hubungi kami untuk bantuan.',
        type: 'website',
      }}
    >
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Animation */}
            <div className="text-8xl lg:text-9xl font-bold text-primary-600 mb-4 animate-bounce-subtle">
              404
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
              Oops! Halaman Tidak Ditemukan
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada. 
              Jangan khawatir, mari kita bantu Anda menemukan yang Anda butuhkan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                as={Link}
                href="/"
                size="xl"
                className="bg-primary-600 hover:bg-primary-700"
              >
                🏠 Kembali ke Beranda
              </Button>
              <Button
                as={Link}
                href="/contact"
                color="light"
                size="xl"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
              >
                📞 Hubungi Kami
              </Button>
            </div>
            
            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Mungkin Anda mencari:
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/pricing" 
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl">💰</span>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Paket Harga</div>
                    <div className="text-sm text-gray-500">Lihat paket dan layanan kami</div>
                  </div>
                </Link>
                
                <Link 
                  href="/about" 
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl">🏢</span>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Tentang Kami</div>
                    <div className="text-sm text-gray-500">Kenali tim dan perusahaan kami</div>
                  </div>
                </Link>
                
                <Link 
                  href="/blog" 
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl">📝</span>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Blog</div>
                    <div className="text-sm text-gray-500">Artikel dan tips bisnis</div>
                  </div>
                </Link>
                
                <Link 
                  href="/industri/teknologi" 
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl">💻</span>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Solusi Teknologi</div>
                    <div className="text-sm text-gray-500">Layanan untuk industri IT</div>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Help Text */}
            <div className="mt-8 text-gray-500">
              <p>
                Jika Anda yakin ini adalah kesalahan, silakan{' '}
                <Link href="/contact" className="text-primary-600 hover:underline">
                  hubungi tim support kami
                </Link>
                {' '}untuk bantuan lebih lanjut.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}