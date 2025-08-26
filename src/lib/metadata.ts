import { Metadata } from 'next'

export const siteConfig = {
  name: 'DHS - Diverse Home Solution',
  description: 'Professional painting services in Tampa Bay. Expert exterior painting, interior painting, cabinet refinishing, and more. Licensed, insured, and serving Tampa, St. Petersburg, Clearwater.',
  url: 'https://diversehomesolution.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/dhspainting',
    facebook: 'https://facebook.com/diversehomesolution',
    instagram: 'https://instagram.com/diversehomesolution',
  },
  contact: {
    phone: '(727) 614-5087',
    email: 'info@diversehomesolution.com',
    address: 'Tampa Bay, FL',
  },
  services: [
    'Interior Painting',
    'Exterior Painting', 
    'Cabinet Makeover',
    'Pool Painting',
    'Fence Painting',
    'Garage Floor Painting'
  ],
  serviceAreas: [
    'Tampa',
    'St. Petersburg', 
    'Clearwater',
    'Pinellas Park',
    'Tampa Bay'
  ]
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/my-favicon/favicon.ico',
    shortcut: '/my-favicon/favicon.ico',
    apple: '/my-favicon/favicon.ico',
  },
  keywords: [
    'painting contractor',
    'house painter',
    'commercial painter',
    'Tampa painting',
    'St Petersburg painter',
    'Clearwater painting services',
    'interior painting',
    'exterior painting',
    'cabinet refinishing',
    'residential painter',
    'professional painter',
    'Tampa Bay painting contractor',
    'licensed painter Florida',
    'insured painting company'
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@dhspainting',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Add your actual verification code
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-site-verification-code',
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
  ogImage,
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  ogImage?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const combinedKeywords = [...defaultMetadata.keywords as string[], ...keywords]
  
  return {
    ...defaultMetadata,
    title,
    description,
    keywords: combinedKeywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
      images: [ogImage || siteConfig.ogImage],
    },
    alternates: {
      canonical: url,
    },
  }
}

// Structured Data Generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PaintingContractor',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tampa Bay',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: siteConfig.serviceAreas.map(area => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: siteConfig.services,
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50+',
    },
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.twitter,
    ],
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tampa Bay',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.9506,
      longitude: -82.4572,
    },
    openingHours: [
      'Mo-Fr 07:00-19:00',
      'Sa 08:00-17:00',
    ],
    paymentAccepted: ['Cash', 'Check', 'Credit Card'],
    currenciesAccepted: 'USD',
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  image?: string
  priceRange?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceAreas.map(area => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: 'Painting Services',
    priceRange: service.priceRange || '$$',
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}