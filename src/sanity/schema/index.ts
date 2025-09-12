import { type SchemaTypeDefinition } from 'sanity'
import { videoType } from './video'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [videoType],
}