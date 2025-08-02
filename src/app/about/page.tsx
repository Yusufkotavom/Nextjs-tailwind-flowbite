import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from 'flowbite-react';
import Layout from '../../layouts/Layout';
import { siteConfig } from '../../../config/site.config';

const teamMembers = [
  {
    name: 'Andi Wijaya',
    position: 'CEO & Founder',
    bio: 'Berpengalaman 10+ tahun di industri teknologi Indonesia',
    image: '/images/team/andi.jpg',
    linkedin: '#'
  },
  {
    name: 'Sari Indah',
    position: 'CTO',
    bio: 'Expert dalam web development dan mobile app development',
    image: '/images/team/sari.jpg',
    linkedin: '#'
  },
  {
    name: 'Budi Santoso',
    position: 'Lead Designer',
    bio: 'UI/UX Designer dengan fokus pada user experience terbaik',
    image: '/images/team/budi.jpg',
    linkedin: '#'
  },
  {
    name: 'Maya Putri',
    position: 'Digital Marketing Manager',
    bio: 'Specialist dalam digital marketing dan SEO optimization',
    image: '/images/team/maya.jpg',
    linkedin: '#'
  }
];

const milestones = [
  { year: '2019', title: 'Pendirian Perusahaan', description: 'Memulai perjalanan dengan visi membantu bisnis Indonesia go digital' },
  { year: '2020', title: '100+ Klien', description: 'Mencapai milestone 100 klien puas di seluruh Indonesia' },
  { year: '2021', title: 'Ekspansi Layanan', description: 'Menambah layanan mobile app development dan e-commerce' },
  { year: '2022', title: '500+ Project', description: 'Menyelesaikan 500+ project dengan tingkat kepuasan 98%' },
  { year: '2023', title: 'Tim Nasional', description: 'Memiliki tim di Jakarta, Surabaya, dan Bali' },
  { year: '2024', title: 'Award Winner', description: 'Meraih penghargaan Best Digital Agency Indonesia' }
];

export default function AboutPage() {
  return (
    <Layout
      seo={{
        title: 'Tentang Kami',
        description: `Tentang ${siteConfig.company.name} - Perusahaan teknologi terpercaya yang membantu bisnis Indonesia bertransformasi digital sejak 2019.`,
        type: 'website',
      }}
      richSnippet={{ type: 'organization' }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
                Membangun Masa Depan Digital <span className="text-primary-600">Indonesia</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sejak 2019, kami telah membantu 500+ bisnis Indonesia bertransformasi digital 
                dengan solusi teknologi terdepan dan pelayanan terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  as={Link}
                  href="/contact"
                  size="xl"
                  className="bg-primary-600 hover:bg-primary-700"
                >
                  Mulai Berkolaborasi
                </Button>
                <Button
                  as={Link}
                  href="/pricing"
                  color="light"
                  size="xl"
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
                >
                  Lihat Portfolio
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/about-hero.jpg"
                alt="Tim Bisnis Indonesia"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 text-center">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Misi Kami</h2>
              <p className="text-gray-600 leading-relaxed">
                Memberdayakan bisnis Indonesia dengan teknologi digital yang inovatif, 
                terjangkau, dan mudah digunakan untuk mencapai pertumbuhan yang berkelanjutan.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-5xl mb-6">👁️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Visi Kami</h2>
              <p className="text-gray-600 leading-relaxed">
                Menjadi partner teknologi terdepan yang membantu setiap bisnis Indonesia 
                berkembang di era digital dengan solusi yang tepat sasaran.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip yang memandu setiap langkah kami dalam melayani klien.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kepercayaan</h3>
              <p className="text-gray-600">
                Membangun hubungan jangka panjang berdasarkan kepercayaan dan transparansi.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inovasi</h3>
              <p className="text-gray-600">
                Selalu menggunakan teknologi terdepan untuk memberikan solusi terbaik.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kualitas</h3>
              <p className="text-gray-600">
                Berkomitmen memberikan hasil terbaik dengan standar kualitas tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestone penting dalam perjalanan membangun ekosistem digital Indonesia.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Tim Ahli Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesional berpengalaman yang berdedikasi untuk kesuksesan bisnis Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>
                <Button
                  as={Link}
                  href={member.linkedin}
                  size="sm"
                  color="light"
                  className="w-full"
                >
                  LinkedIn
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Project Selesai</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Kepuasan Klien</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Kota di Indonesia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-primary-100">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
            Mari Berkolaborasi dengan Kami
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan 500+ bisnis Indonesia yang telah mempercayai kami 
            untuk transformasi digital mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/contact"
              size="xl"
              className="bg-primary-600 hover:bg-primary-700"
            >
              Mulai Konsultasi
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