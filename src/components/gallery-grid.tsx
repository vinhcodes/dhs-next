"use client";

import React, { useState } from 'react';
import ImageCarousel from '@/components/ui/image-carousel';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];
  
  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  const openCarousel = (index: number) => {
    const originalIndex = images.findIndex(img => img.id === filteredImages[index].id);
    setSelectedImageIndex(originalIndex);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Pinterest-style Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openCarousel(index)}
          >
            <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg mb-1 leading-tight">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-200 font-medium">
                    {image.category}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-xs font-medium text-gray-700">
                  {image.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Carousel */}
      {selectedImageIndex !== null && (
        <ImageCarousel
          images={images}
          initialIndex={selectedImageIndex}
          onClose={closeCarousel}
        />
      )}
    </>
  );
};

export default GalleryGrid;