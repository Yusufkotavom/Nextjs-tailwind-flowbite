export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export interface FooterSection {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  email: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
  readingTime?: number;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  features?: string[];
  benefits?: string[];
  testimonials?: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}