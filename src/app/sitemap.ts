import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/contact',
    '/interior-painting',
    '/exterior-painting',
    '/cabinet-makeover',
    '/pool-painting',
    '/fence-painting',
    '/garage-floor-painting',
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}