import { generatePageMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/metadata';
import { Metadata } from 'next';
import CabinetTemplate from '@/components/pages/cabinets';
import React from 'react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cabinet Refinishing & Makeover Services Tampa Bay | Kitchen Cabinet Painting',
  description: 'Transform your kitchen with professional cabinet refinishing in Tampa, St. Petersburg, Clearwater. Save thousands vs replacement. Free estimates!',
  path: '/cabinet-makeover',
  keywords: [
    'cabinet refinishing Tampa',
    'kitchen cabinet painting Tampa Bay',
    'cabinet makeover St Petersburg',
    'cabinet refacing Clearwater',
    'kitchen cabinet restoration Florida',
    'professional cabinet painters Tampa'
  ]
});

export default function CabinetPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://diversehomesolution.com' },
    { name: 'Services', url: 'https://diversehomesolution.com/#services' },
    { name: 'Cabinet Makeover', url: 'https://diversehomesolution.com/cabinet-makeover' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Cabinet Refinishing & Makeover Services',
    description: 'Professional cabinet refinishing and makeover services for kitchens and bathrooms',
    url: 'https://diversehomesolution.com/cabinet-makeover',
    priceRange: '$$'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, serviceSchema]),
        }}
      />
      <CabinetTemplate />
    </>
  );
}
