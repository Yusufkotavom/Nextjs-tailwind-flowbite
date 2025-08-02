import { NextSeo, NextSeoProps } from 'next-seo';
import { siteConfig } from '../../config/site.config';

interface SEOProps extends Partial<NextSeoProps> {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export default function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  tags,
  ...props
}: SEOProps) {
  const seoTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.seo.defaultTitle;
  
  const seoDescription = description || siteConfig.seo.defaultDescription;
  const seoImage = image || siteConfig.seo.defaultImage;
  const seoUrl = url || siteConfig.seo.siteUrl;

  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      canonical={seoUrl}
      openGraph={{
        type: type as any,
        locale: siteConfig.seo.locale,
        url: seoUrl,
        title: seoTitle,
        description: seoDescription,
        images: [
          {
            url: seoImage,
            width: 1200,
            height: 630,
            alt: title || siteConfig.name,
          },
        ],
        site_name: siteConfig.name,
        ...(publishedTime && { article: { publishedTime, modifiedTime, authors: author ? [author] : [], tags } }),
      }}
      twitter={{
        handle: '@bisnisindonesia',
        site: '@bisnisindonesia',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'author',
          content: author || siteConfig.author,
        },
        {
          name: 'keywords',
          content: tags?.join(', ') || siteConfig.keywords.join(', '),
        },
        {
          property: 'og:locale',
          content: siteConfig.seo.locale,
        },
        {
          name: 'theme-color',
          content: '#3b82f6',
        },
      ]}
      {...props}
    />
  );
}