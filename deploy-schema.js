import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ihw8wkpe',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You'll need to get this token
  apiVersion: '2024-09-11',
})

// Video schema to deploy
const videoSchema = {
  _type: 'schema.type',
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: { required: true }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: { required: true }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      validation: { required: true }
    },
    {
      name: 'poster',
      title: 'Custom Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Introduction', value: 'introduction' },
          { title: 'Exterior Painting', value: 'exterior' },
          { title: 'Interior Painting', value: 'interior' },
          { title: 'Cabinet Refinishing', value: 'cabinet' },
          { title: 'Pool Deck Painting', value: 'pool' },
          { title: 'Fence Staining', value: 'fence' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Testimonial', value: 'testimonial' },
          { title: 'Before & After', value: 'before-after' },
        ],
      },
    },
    {
      name: 'featured',
      title: 'Featured Video',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}

console.log('Schema ready for deployment. You can manually add this to your Sanity project.')
console.log('Go to: https://sanity.io/manage → dhs-next → Schema')