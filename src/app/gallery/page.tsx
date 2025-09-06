import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery-grid';

export const metadata: Metadata = {
  title: 'Gallery - DHS Painting',
  description: 'View our portfolio of professional painting projects in Tampa Bay. From interior and exterior painting to cabinet refinishing and specialty finishes.',
  openGraph: {
    title: 'Gallery - DHS Painting',
    description: 'View our portfolio of professional painting projects in Tampa Bay.',
    type: 'website',
  },
};

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/1.png',
    alt: 'Modern Exterior House Painting - Professional paint job on residential home',
    title: 'Modern Exterior House Paint',
    category: 'Exterior Painting',
  },
  {
    id: 2,
    src: '/images/gallery/2.png',
    alt: 'Exterior Door and Trim Painting - Fresh paint on entry door and trim work',
    title: 'Exterior Door & Trim',
    category: 'Exterior Painting',
  },
  {
    id: 3,
    src: '/images/gallery/3.png',
    alt: 'Full Service Exterior - Complete exterior painting transformation',
    title: 'Full Service Exterior',
    category: 'Exterior Painting',
  },
  {
    id: 4,
    src: '/images/gallery/4.png',
    alt: 'Kitchen Cabinet Refinishing - Before and after cabinet makeover',
    title: 'Kitchen Cabinet Refinish',
    category: 'Cabinet Refinishing',
  },
  {
    id: 5,
    src: '/images/gallery/5.png',
    alt: 'Garage Door Painting - Professional garage door paint finish',
    title: 'Garage Door Paint Job',
    category: 'Exterior Painting',
  },
  {
    id: 6,
    src: '/images/gallery/6.png',
    alt: 'Residential Exterior Painting - Complete home exterior makeover',
    title: 'Residential Exterior Makeover',
    category: 'Exterior Painting',
  },
  {
    id: 7,
    src: '/images/gallery/7.png',
    alt: 'House Siding Painting - Fresh paint on home siding and trim',
    title: 'House Siding Paint',
    category: 'Exterior Painting',
  },
  {
    id: 8,
    src: '/images/gallery/9.png',
    alt: 'Interior Bedrooom Painting - Professional interior wall painting',
    title: 'Interior Bedroom Paint',
    category: 'Interior Painting',
  },
  {
    id: 9,
    src: '/images/gallery/10.png',
    alt: 'Interior Room Painting - Professional interior wall painting',
    title: 'Interior Room Paint',
    category: 'Interior Painting',
  },
  {
    id: 10,
    src: '/images/gallery/11.png',
    alt: 'Custom Cabinet Finish - Specialized cabinet painting and refinishing',
    title: 'Custom Cabinet Finish 1',
    category: 'Cabinet Refinishing',

  },
  {
    id: 11,
    src: '/images/gallery/12.png',
    alt: 'Custom Cabinet Finish - Specialized cabinet painting and refinishing',
    title: 'Custom Cabinet Finish 2',
    category: 'Cabinet Refinishing',
  },
  {
    id: 12,
    src: '/images/gallery/13.png',
    alt: 'Interior Bedrooom Painting - Professional interior wall painting',
    title: 'Interior Bedroom Paint',
    category: 'Interior Painting',
  },
  {
    id: 13,
    src: '/images/gallery/14.png',
    alt: 'Full Service Exterior - Complete exterior painting transformation',
    title: 'Full Service Exterior',
    category: 'Exterior Painting',
  },
  {
    id: 14,
    src: '/images/gallery/15.png',
    alt: 'Complete Home Makeover - Full exterior and interior painting project',
    title: 'Complete Home Makeover',
    category: 'Exterior Painting',
  },
  {
    id: 15,
    src: '/images/gallery/16.png',
    alt: 'Fence Painting Service - Wooden fence painting and staining',
    title: 'Fence Paint & Stain',
    category: 'Fence Painting',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of professional painting projects throughout Tampa Bay. 
            From stunning exterior transformations to elegant interior designs and custom cabinet refinishing.
          </p>
        </div>

        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}