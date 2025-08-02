'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, TextInput, Badge, Select } from 'flowbite-react';
import Layout from '../../layouts/Layout';
import { getAllPosts, getAllCategories, getFeaturedPosts, formatDate } from '../../lib/blog';
import { BlogPost } from '../../types';
import Fuse from 'fuse.js';

const POSTS_PER_PAGE = 9;

export default function BlogPage({ 
  initialPosts, 
  categories, 
  featuredPosts 
}: { 
  initialPosts: BlogPost[];
  categories: string[];
  featuredPosts: BlogPost[];
}) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Setup Fuse.js for fuzzy search
  const fuse = new Fuse(posts, {
    keys: ['title', 'excerpt', 'content', 'tags', 'category'],
    threshold: 0.3,
  });

  useEffect(() => {
    let filtered = posts;

    // Filter by search query
    if (searchQuery) {
      const searchResults = fuse.search(searchQuery);
      filtered = searchResults.map(result => result.item);
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, posts]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
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
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="md:col-span-2">
                <TextInput
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  icon={() => <span>🔍</span>}
                />
              </div>
              <div>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Semua Kategori</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            
            {/* Results Info */}
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Menampilkan {filteredPosts.length} artikel
                {searchQuery && ` untuk "${searchQuery}"`}
                {selectedCategory && ` dalam kategori "${selectedCategory}"`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {currentPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge color="light">{post.category}</Badge>
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} color="gray" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
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
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  <Button
                    color="light"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Sebelumnya
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      color={currentPage === page ? 'primary' : 'light'}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    color="light"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Selanjutnya
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Tidak ada artikel ditemukan
              </h3>
              <p className="text-gray-600 mb-6">
                Coba ubah kata kunci pencarian atau pilih kategori lain.
              </p>
              <Button
                color="primary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                }}
              >
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

// This will be called at build time
export async function getStaticProps() {
  const initialPosts = getAllPosts();
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      initialPosts,
      categories,
      featuredPosts,
    },
  };
}