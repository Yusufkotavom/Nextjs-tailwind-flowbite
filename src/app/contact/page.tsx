'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Card, TextInput, Textarea, Select, Label } from 'flowbite-react';
import Layout from '../../layouts/Layout';
import { siteConfig } from '../../../config/site.config';
import { ContactForm } from '../../types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Terima kasih! Pesan Anda telah dikirim. Tim kami akan menghubungi Anda dalam 24 jam.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: ''
      });
    } catch (error) {
      setSubmitMessage('Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout
      seo={{
        title: 'Hubungi Kami',
        description: 'Hubungi tim ahli Bisnis Indonesia untuk konsultasi gratis. Kami siap membantu transformasi digital bisnis Anda.',
        type: 'website',
      }}
      richSnippet={{ type: 'localBusiness' }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Mari Diskusikan <span className="text-primary-600">Project Anda</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Tim ahli kami siap membantu mewujudkan visi digital bisnis Anda. 
            Konsultasi pertama gratis dan tanpa komitmen.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">Konsultasi Gratis</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">Respon 24 Jam</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">Tim Berpengalaman</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                Kirim Pesan
              </h2>
              
              {submitMessage && (
                <div className={`p-4 mb-6 rounded-lg ${
                  submitMessage.includes('Terima kasih') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" value="Nama Lengkap *" />
                    <TextInput
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" value="Email *" />
                    <TextInput
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" value="Nomor WhatsApp" />
                    <TextInput
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" value="Nama Perusahaan" />
                    <TextInput
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="PT. Nama Perusahaan"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" value="Layanan yang Dibutuhkan" />
                  <Select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Pilih layanan</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="ecommerce">E-Commerce Platform</option>
                    <option value="system">System Integration</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="consultation">Konsultasi Digital</option>
                    <option value="other">Lainnya</option>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" value="Pesan *" />
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan tentang project atau kebutuhan bisnis Anda..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  Informasi Kontak
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h3>
                      <p className="text-gray-600">{siteConfig.company.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                      <p className="text-gray-600">
                        <a href={`tel:${siteConfig.company.phone}`} className="hover:text-primary-600">
                          {siteConfig.company.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                      <p className="text-gray-600">
                        <a 
                          href={siteConfig.social.whatsapp} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-600"
                        >
                          {siteConfig.company.whatsapp}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a 
                          href={`mailto:${siteConfig.company.email}`}
                          className="hover:text-primary-600"
                        >
                          {siteConfig.company.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                      <div className="text-gray-600">
                        <p>Senin - Jumat: {siteConfig.company.workingHours.weekdays}</p>
                        <p>Sabtu: {siteConfig.company.workingHours.saturday}</p>
                        <p>Minggu: {siteConfig.company.workingHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-8 bg-primary-600 text-white">
                <h3 className="text-xl font-bold mb-4">Butuh Respon Cepat?</h3>
                <p className="text-primary-100 mb-6">
                  Untuk konsultasi urgent atau pertanyaan cepat, hubungi kami langsung via WhatsApp.
                </p>
                <Button
                  as={Link}
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  color="success"
                  size="lg"
                  className="w-full"
                >
                  Chat WhatsApp Sekarang
                </Button>
              </Card>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jawaban untuk pertanyaan umum seputar layanan kami.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Berapa lama waktu pengerjaan project?
              </h3>
              <p className="text-gray-600">
                Tergantung kompleksitas project. Website sederhana 1-2 minggu, 
                aplikasi mobile 4-8 minggu. Kami akan memberikan timeline detail setelah konsultasi.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Apakah ada garansi untuk project yang dikerjakan?
              </h3>
              <p className="text-gray-600">
                Ya, kami memberikan garansi 3-6 bulan untuk bug fixing dan support teknis 
                setelah project selesai.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Bagaimana sistem pembayaran?
              </h3>
              <p className="text-gray-600">
                Pembayaran bertahap: 30% DP, 40% saat development, 30% saat selesai. 
                Kami menerima transfer bank dan e-wallet.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Apakah bisa maintenance website setelah selesai?
              </h3>
              <p className="text-gray-600">
                Tentu! Kami menyediakan layanan maintenance mulai Rp 500rb/bulan 
                yang mencakup update, backup, dan support.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}