import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // You'll need to set this
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: '2024-09-11',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Video URL helper with optimization
export function getVideoUrl(asset: any, options: {
  quality?: 'low' | 'medium' | 'high' | 'auto'
  format?: 'mp4' | 'webm'
  width?: number
  height?: number
} = {}) {
  if (!asset?._ref) return ''
  
  const baseUrl = `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${asset._ref.replace('file-', '').replace('-mp4', '.mp4').replace('-webm', '.webm')}`
  
  // Add optimization parameters
  const params = new URLSearchParams()
  
  if (options.quality) {
    params.append('q', options.quality)
  }
  
  if (options.width) {
    params.append('w', options.width.toString())
  }
  
  if (options.height) {
    params.append('h', options.height.toString())
  }
  
  if (options.format) {
    params.append('fm', options.format)
  }
  
  const queryString = params.toString()
  return queryString ? `${baseUrl}?${queryString}` : baseUrl
}

// Get optimized video URLs for different qualities
export function getOptimizedVideoUrls(asset: any) {
  return {
    low: getVideoUrl(asset, { quality: 'low', width: 640 }),
    medium: getVideoUrl(asset, { quality: 'medium', width: 1280 }),
    high: getVideoUrl(asset, { quality: 'high', width: 1920 }),
    auto: getVideoUrl(asset, { quality: 'auto' })
  }
}

// Generate video poster/thumbnail from Sanity
export function getVideoPoster(asset: any, options: {
  time?: number // Time in seconds
  width?: number
  height?: number
  quality?: number
} = {}) {
  if (!asset?._ref) return ''
  
  const { time = 1, width = 1280, height = 720, quality = 80 } = options
  
  // Sanity's video thumbnail API
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${asset._ref.replace('file-', '').replace('-mp4', '.mp4')}?t=${time}&w=${width}&h=${height}&q=${quality}&fm=jpg`
}