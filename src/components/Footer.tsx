import Link from 'next/link';
import Image from 'next/image';
import { Footer as FlowbiteFooter } from 'flowbite-react';
import { siteConfig } from '../../config/site.config';
import navigation from '../../data/navigation.json';
import { FooterSection } from '../types';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FlowbiteFooter container className="bg-gray-900 text-white">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-6 md:mb-0">
            <FlowbiteFooter.Brand
              as={Link}
              href="/"
              src="/images/logo-white.png"
              alt={`${siteConfig.name} Logo`}
              name={siteConfig.name}
              className="text-white"
            />
            <p className="mt-4 text-gray-300 max-w-md">
              {siteConfig.description}
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📍</span>
                <span className="text-gray-300">{siteConfig.company.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📞</span>
                <a 
                  href={`tel:${siteConfig.company.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.company.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">✉️</span>
                <a 
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.company.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">🕒</span>
                <span className="text-gray-300">
                  {siteConfig.company.workingHours.weekdays}
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <span className="text-2xl">📱</span>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-2xl">📷</span>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-2xl">📘</span>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-2xl">💼</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {navigation.footer.map((section: FooterSection) => (
              <div key={section.title}>
                <FlowbiteFooter.Title title={section.title} className="text-white" />
                <FlowbiteFooter.LinkGroup col>
                  {section.links.map((link) => (
                    <FlowbiteFooter.Link
                      key={link.name}
                      as={Link}
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </FlowbiteFooter.Link>
                  ))}
                </FlowbiteFooter.LinkGroup>
              </div>
            ))}
          </div>
        </div>
        
        <FlowbiteFooter.Divider className="border-gray-700" />
        
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright
            href="/"
            by={siteConfig.company.name}
            year={currentYear}
            className="text-gray-400"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}