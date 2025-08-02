'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Dropdown } from 'flowbite-react';
import { siteConfig } from '../../config/site.config';
import navigation from '../../data/navigation.json';
import { NavigationItem } from '../types';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar fluid rounded className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <NavbarBrand as={Link} href="/">
        <Image
          src="/images/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt={`${siteConfig.name} Logo`}
          width={40}
          height={40}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900 font-heading">
          {siteConfig.name}
        </span>
      </NavbarBrand>
      
      <div className="flex md:order-2">
        <Link
          href="/contact"
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 transition-colors"
        >
          Hubungi Kami
        </Link>
        <NavbarToggle />
      </div>
      
      <NavbarCollapse>
        {navigation.main.map((item: NavigationItem) => (
          <div key={item.name}>
            {item.children ? (
              <Dropdown
                label={item.name}
                inline
                className="text-gray-900 hover:text-primary-700"
              >
                {item.children.map((child) => (
                  <Dropdown.Item key={child.name} as={Link} href={child.href}>
                    <div className="flex flex-col">
                      <span className="font-medium">{child.name}</span>
                      {child.description && (
                        <span className="text-sm text-gray-500">{child.description}</span>
                      )}
                    </div>
                  </Dropdown.Item>
                ))}
              </Dropdown>
            ) : (
              <NavbarLink
                as={Link}
                href={item.href}
                className="text-gray-900 hover:text-primary-700 transition-colors"
              >
                {item.name}
              </NavbarLink>
            )}
          </div>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}