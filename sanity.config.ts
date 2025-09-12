import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { schema } from './src/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'DHS Painting Videos',
  
  projectId: 'ihw8wkpe',
  dataset: 'production',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Videos')
              .child(
                S.documentTypeList('video')
                  .title('All Videos')
                  .defaultOrdering([
                    { field: 'featured', direction: 'desc' },
                    { field: 'order', direction: 'asc' },
                    { field: 'publishedAt', direction: 'desc' }
                  ])
                  .child((documentId) =>
                    S.document().documentId(documentId).schemaType('video')
                  )
              ),
            S.divider(),
            S.listItem()
              .title('Featured Videos')
              .child(
                S.documentTypeList('video')
                  .title('Featured Videos')
                  .filter('_type == "video" && featured == true')
                  .defaultOrdering([
                    { field: 'order', direction: 'asc' },
                    { field: 'publishedAt', direction: 'desc' }
                  ])
              ),
            S.listItem()
              .title('Videos by Category')
              .child(
                S.list()
                  .title('Categories')
                  .items([
                    S.listItem()
                      .title('Introduction')
                      .child(
                        S.documentTypeList('video')
                          .title('Introduction Videos')
                          .filter('_type == "video" && category == "introduction"')
                      ),
                    S.listItem()
                      .title('Exterior Painting')
                      .child(
                        S.documentTypeList('video')
                          .title('Exterior Painting Videos')
                          .filter('_type == "video" && category == "exterior"')
                      ),
                    S.listItem()
                      .title('Interior Painting')
                      .child(
                        S.documentTypeList('video')
                          .title('Interior Painting Videos')
                          .filter('_type == "video" && category == "interior"')
                      ),
                    S.listItem()
                      .title('Cabinet Refinishing')
                      .child(
                        S.documentTypeList('video')
                          .title('Cabinet Refinishing Videos')
                          .filter('_type == "video" && category == "cabinet"')
                      ),
                    S.listItem()
                      .title('Testimonials')
                      .child(
                        S.documentTypeList('video')
                          .title('Customer Testimonials')
                          .filter('_type == "video" && category == "testimonial"')
                      ),
                  ])
              ),
          ])
    }),
    visionTool(),
  ],
  
  schema,
  
  document: {
    actions: (prev, { schemaType }) => {
      if (schemaType === 'video') {
        return prev.filter((action) => action.action !== 'delete')
      }
      return prev
    }
  }
})