"use client"

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  image: string;
  category: string;
}

const ImageCard: React.FC<{ image: GalleryImage }> = ({ image }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[400px] relative group cursor-pointer">
      <img
        src={image.image}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay with title and category */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
          <p className="text-sm text-gray-200">{image.category}</p>
        </div>
      </div>
    </div>
  );
};

export const GalleryCarousel: React.FC<{ images?: GalleryImage[] }> = ({
  images: propImages,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Default gallery images if none provided
  const defaultImages: GalleryImage[] = [
    {
      id: 1,
      title: "Exterior House Paint",
      image: "/images/gallery/1.png",
      category: "Exterior Painting",
    },
    {
      id: 2,
      title: "Exterior Doors Painting",
      image: "/images/gallery/2.png",
      category: "Exterior Painting",
    },
    {
      id: 3,
      title: "Exterior House Paint",
      image: "/images/gallery/3.png",
      category: "Exterior Painting",
    },
    {
      id: 4,
      title: "Cabinet Makeover",
      image: "/images/gallery/4.png",
      category: "Cabinet Refinishing",
    },
    {
      id: 5,
      title: "Garage Door Painting",
      image: "/images/gallery/5.png",
      category: "Exterior Painting",
    },
  ];

  const images = propImages || defaultImages;

  // Responsive images to show based on screen size
  const getImagesToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3; // default
  };

  const [imagesToShow, setImagesToShow] = useState(3); // Start with default for SSR
  const [isClient, setIsClient] = useState(false);
  const totalSlides = Math.max(0, images.length - imagesToShow + 1);

  // Handle hydration and window resize
  React.useEffect(() => {
    setIsClient(true);
    setImagesToShow(getImagesToShow());

    const handleResize = () => {
      setImagesToShow(getImagesToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < totalSlides - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative">
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / imagesToShow)}%)`,
            }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4"
              >
                <ImageCard image={image} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute right-16 -bottom-8 bg-white hover:bg-orange-500 text-gray-800 hover:text-white w-12 h-12 rounded-full items-center justify-center shadow-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-gray-300"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-2 -bottom-8 bg-white hover:bg-orange-500 text-gray-800 hover:text-white w-12 h-12 rounded-full items-center justify-center shadow-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-gray-300"
          disabled={currentIndex >= totalSlides - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-orange-500" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};