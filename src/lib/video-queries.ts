import { groq } from 'next-sanity'

// Query for all videos for carousel (changed from featured only)
export const featuredVideosQuery = groq`
  *[_type == "video"] | order(order asc, publishedAt desc) {
    _id,
    title,
    slug,
    description,
    videoFile,
    poster,
    duration,
    category,
    tags,
    publishedAt,
    "posterUrl": poster.asset->url,
    "videoUrl": videoFile.asset->url
  }
`

// Query for videos by category
export const videosByCategoryQuery = groq`
  *[_type == "video" && category == $category] | order(order asc, publishedAt desc) {
    _id,
    title,
    slug,
    description,
    videoFile,
    poster,
    duration,
    category,
    tags,
    publishedAt,
    "posterUrl": poster.asset->url,
    "videoUrl": videoFile.asset->url
  }
`

// Query for single video by slug
export const videoBySlugQuery = groq`
  *[_type == "video" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    videoFile,
    poster,
    duration,
    category,
    tags,
    publishedAt,
    seo,
    "posterUrl": poster.asset->url,
    "videoUrl": videoFile.asset->url,
    "videoAsset": videoFile.asset->
  }
`

// Query for all videos (admin/management)
export const allVideosQuery = groq`
  *[_type == "video"] | order(order asc, publishedAt desc) {
    _id,
    title,
    slug,
    description,
    videoFile,
    poster,
    duration,
    category,
    tags,
    featured,
    order,
    publishedAt,
    "posterUrl": poster.asset->url,
    "videoUrl": videoFile.asset->url
  }
`

// Query for video categories with counts
export const videoCategoriesQuery = groq`
  {
    "categories": *[_type == "video"] {
      category
    } | group(category) {
      "category": key,
      "count": count(*)
    }
  }
`