import { client, getOptimizedVideoUrls, getVideoPoster } from './sanity'
import { featuredVideosQuery, videosByCategoryQuery, videoBySlugQuery, allVideosQuery } from './video-queries'

export interface SanityVideo {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  videoFile: {
    asset: {
      _ref: string
      url?: string
    }
  }
  poster?: {
    asset: {
      _ref: string
      url?: string
    }
  }
  duration?: number
  category?: string
  tags?: string[]
  featured?: boolean
  order?: number
  publishedAt: string
  posterUrl?: string
  videoUrl?: string
}

export interface OptimizedVideo {
  id: string
  title: string
  description?: string
  category?: string
  tags?: string[]
  duration?: number
  publishedAt: string
  sources: {
    low: string
    medium: string
    high: string
    auto: string
  }
  poster: string
  slug: string
}

// Transform Sanity video to optimized format
export function transformSanityVideo(video: SanityVideo): OptimizedVideo {
  const optimizedUrls = getOptimizedVideoUrls(video.videoFile.asset)
  
  // Use custom poster or generate from video
  let posterUrl = video.posterUrl || ''
  if (!posterUrl && video.videoFile.asset) {
    posterUrl = getVideoPoster(video.videoFile.asset, { 
      time: 1, 
      width: 1280, 
      height: 720, 
      quality: 80 
    })
  }

  return {
    id: video._id,
    title: video.title,
    description: video.description,
    category: video.category,
    tags: video.tags,
    duration: video.duration,
    publishedAt: video.publishedAt,
    sources: optimizedUrls,
    poster: posterUrl,
    slug: video.slug.current,
  }
}

// Fetch featured videos for carousel
export async function getFeaturedVideos(): Promise<OptimizedVideo[]> {
  try {
    const videos: SanityVideo[] = await client.fetch(featuredVideosQuery)
    return videos.map(transformSanityVideo)
  } catch (error) {
    console.error('Error fetching featured videos:', error)
    return []
  }
}

// Fetch videos by category
export async function getVideosByCategory(category: string): Promise<OptimizedVideo[]> {
  try {
    const videos: SanityVideo[] = await client.fetch(videosByCategoryQuery, { category })
    return videos.map(transformSanityVideo)
  } catch (error) {
    console.error('Error fetching videos by category:', error)
    return []
  }
}

// Fetch single video by slug
export async function getVideoBySlug(slug: string): Promise<OptimizedVideo | null> {
  try {
    const video: SanityVideo = await client.fetch(videoBySlugQuery, { slug })
    return video ? transformSanityVideo(video) : null
  } catch (error) {
    console.error('Error fetching video by slug:', error)
    return null
  }
}

// Fetch all videos
export async function getAllVideos(): Promise<OptimizedVideo[]> {
  try {
    const videos: SanityVideo[] = await client.fetch(allVideosQuery)
    return videos.map(transformSanityVideo)
  } catch (error) {
    console.error('Error fetching all videos:', error)
    return []
  }
}

// Detect user's connection quality and return appropriate video source
export function getOptimalVideoSource(
  sources: OptimizedVideo['sources'],
  connectionType?: string
): string {
  if (!connectionType || typeof window === 'undefined') {
    return sources.auto
  }

  // Check Navigator connection API
  const connection = (navigator as { connection?: { effectiveType: string; downlink?: number } }).connection
  if (connection) {
    const { effectiveType, downlink } = connection
    
    // Use downlink speed if available (Mbps)
    if (downlink) {
      if (downlink < 1) return sources.low
      if (downlink < 5) return sources.medium
      return sources.high
    }
    
    // Fallback to effective type
    switch (effectiveType) {
      case 'slow-2g':
      case '2g':
        return sources.low
      case '3g':
        return sources.medium
      case '4g':
      default:
        return sources.high
    }
  }

  return sources.auto
}

// Generate video metadata for SEO
export function generateVideoMetadata(video: OptimizedVideo) {
  return {
    title: video.title,
    description: video.description || `Watch ${video.title} - Professional painting services`,
    openGraph: {
      title: video.title,
      description: video.description,
      images: [
        {
          url: video.poster,
          width: 1280,
          height: 720,
          alt: video.title,
        },
      ],
      videos: [
        {
          url: video.sources.high,
          width: 1920,
          height: 1080,
        },
      ],
      type: 'video.other',
    },
    twitter: {
      card: 'player',
      title: video.title,
      description: video.description,
      images: [video.poster],
    },
  }
}

// Format duration for display
export function formatDuration(seconds?: number): string {
  if (!seconds) return '0:00'
  
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}