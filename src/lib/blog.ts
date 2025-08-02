import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, Author } from '../types';
import slugify from 'slugify';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');
const authorsDirectory = path.join(process.cwd(), 'content/authors');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      const readingTimeResult = readingTime(content);

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        content,
        date: data.date || '',
        author: data.author || '',
        category: data.category || '',
        tags: data.tags || [],
        featured: data.featured || false,
        image: data.image || '',
        readingTime: readingTimeResult.minutes,
        seo: {
          title: data.seoTitle || data.title,
          description: data.seoDescription || data.excerpt,
          keywords: data.seoKeywords || data.tags,
        },
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const readingTimeResult = readingTime(content);

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content,
      date: data.date || '',
      author: data.author || '',
      category: data.category || '',
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image || '',
      readingTime: readingTimeResult.minutes,
      seo: {
        title: data.seoTitle || data.title,
        description: data.seoDescription || data.excerpt,
        keywords: data.seoKeywords || data.tags,
      },
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured).slice(0, 3);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts();
  
  // Filter out current post and find related posts by category and tags
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      post,
      score: calculateRelatedScore(currentPost, post)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);

  return relatedPosts;
}

function calculateRelatedScore(currentPost: BlogPost, otherPost: BlogPost): number {
  let score = 0;
  
  // Same category gets higher score
  if (currentPost.category === otherPost.category) {
    score += 10;
  }
  
  // Shared tags get points
  const sharedTags = currentPost.tags.filter(tag => 
    otherPost.tags.includes(tag)
  );
  score += sharedTags.length * 5;
  
  return score;
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = [...new Set(allPosts.map(post => post.category))];
  return categories.filter(Boolean);
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = [...new Set(allPosts.flatMap(post => post.tags))];
  return tags.filter(Boolean);
}

export function getAllAuthors(): Author[] {
  if (!fs.existsSync(authorsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(authorsDirectory);
  const allAuthorsData = fileNames
    .filter(fileName => fileName.endsWith('.json'))
    .map((fileName) => {
      const id = fileName.replace(/\.json$/, '');
      const fullPath = path.join(authorsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const data = JSON.parse(fileContents);

      return {
        id,
        ...data,
      } as Author;
    });

  return allAuthorsData;
}

export function getAuthorById(id: string): Author | null {
  try {
    const fullPath = path.join(authorsDirectory, `${id}.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(fileContents);

    return {
      id,
      ...data,
    } as Author;
  } catch (error) {
    return null;
  }
}

export function getPostsByAuthor(authorId: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.author === authorId);
}

export function generateSlug(title: string): string {
  return slugify(title, {
    lower: true,
    strict: true,
    locale: 'id',
  });
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Search functionality
export function searchPosts(query: string): BlogPost[] {
  const allPosts = getAllPosts();
  const searchQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery) ||
    post.excerpt.toLowerCase().includes(searchQuery) ||
    post.content.toLowerCase().includes(searchQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
    post.category.toLowerCase().includes(searchQuery)
  );
}