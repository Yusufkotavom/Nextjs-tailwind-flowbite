import Script from 'next/script';
import { siteConfig } from '../../config/site.config';

interface OrganizationSnippetProps {
  type: 'organization';
}

interface BlogPostSnippetProps {
  type: 'blogPost';
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

interface BreadcrumbSnippetProps {
  type: 'breadcrumb';
  items: Array<{
    name: string;
    url: string;
  }>;
}

interface LocalBusinessSnippetProps {
  type: 'localBusiness';
}

type RichSnippetProps = 
  | OrganizationSnippetProps 
  | BlogPostSnippetProps 
  | BreadcrumbSnippetProps
  | LocalBusinessSnippetProps;

export default function RichSnippet(props: RichSnippetProps) {
  const generateStructuredData = () => {
    switch (props.type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteConfig.company.name,
          url: siteConfig.url,
          logo: `${siteConfig.url}/images/logo.png`,
          description: siteConfig.description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.company.address,
            addressLocality: 'Jakarta',
            addressRegion: 'DKI Jakarta',
            postalCode: '10220',
            addressCountry: 'ID',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.company.phone,
            contactType: 'customer service',
            availableLanguage: 'Indonesian',
          },
          sameAs: Object.values(siteConfig.social),
        };

      case 'blogPost':
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: props.title,
          description: props.description,
          author: {
            '@type': 'Person',
            name: props.author,
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.company.name,
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.url}/images/logo.png`,
            },
          },
          datePublished: props.datePublished,
          dateModified: props.dateModified || props.datePublished,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': props.url,
          },
          ...(props.image && {
            image: {
              '@type': 'ImageObject',
              url: props.image,
              width: 1200,
              height: 630,
            },
          }),
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: props.items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: siteConfig.company.name,
          image: `${siteConfig.url}/images/logo.png`,
          '@id': siteConfig.url,
          url: siteConfig.url,
          telephone: siteConfig.company.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.company.address,
            addressLocality: 'Jakarta',
            addressRegion: 'DKI Jakarta',
            postalCode: '10220',
            addressCountry: 'ID',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -6.2088,
            longitude: 106.8456,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '09:00',
              closes: '15:00',
            },
          ],
          sameAs: Object.values(siteConfig.social),
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}