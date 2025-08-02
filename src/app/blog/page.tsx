import Link from 'next/link';
import Image from 'next/image';
import { Badge } from 'flowbite-react';
import Layout from '../../layouts/Layout';
import { getAllPosts, getAllCategories, getFeaturedPosts, formatDate } from '../../lib/blog';
import BlogClient from './BlogClient';

export default async function BlogPage() {
  const initialPosts = getAllPosts();
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();

  return (
    <Layout
      seo={{
        title: 'Blog',
        description: 'Artikel terbaru tentang teknologi, bisnis digital, dan tips pengembangan bisnis di Indonesia.',
        type: 'website',
      }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Blog <span className="text-primary-600">Bisnis Indonesia</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Temukan artikel terbaru, tips, dan insights tentang teknologi dan bisnis digital 
            yang membantu mengembangkan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
              Artikel Pilihan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-6">
                    <Badge color="primary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{formatDate(post.date)}</span>
                      <span>{Math.ceil(post.readingTime || 0)} min baca</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Client Component */}
      <BlogClient 
        initialPosts={initialPosts}
        categories={categories}
      />
    </Layout>
  );
}