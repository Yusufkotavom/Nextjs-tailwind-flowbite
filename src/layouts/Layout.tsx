import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import RichSnippet from '../components/RichSnippet';

interface LayoutProps {
  children: ReactNode;
  seo?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
  richSnippet?: {
    type: 'organization' | 'blogPost' | 'breadcrumb' | 'localBusiness';
    [key: string]: any;
  };
  className?: string;
}

export default function Layout({ 
  children, 
  seo, 
  richSnippet,
  className = ''
}: LayoutProps) {
  return (
    <>
      <SEO {...seo} />
      {richSnippet && <RichSnippet {...richSnippet} />}
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className={`flex-grow ${className}`}>
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
}