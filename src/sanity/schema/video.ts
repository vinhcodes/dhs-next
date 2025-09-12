import { defineType, defineField } from 'sanity'

export const videoType = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'poster',
      title: 'Custom Poster Image',
      type: 'image',
      description: 'Optional custom thumbnail. If not provided, will auto-generate from video.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'duration',
      title: 'Duration (seconds)',
      type: 'number',
      description: 'Video duration in seconds',
    }),
    defineField({
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
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Video',
      type: 'boolean',
      description: 'Show in main video carousel',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in video carousel (lower numbers first)',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'poster',
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category || 'Uncategorized',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Published Date (Newest)',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})