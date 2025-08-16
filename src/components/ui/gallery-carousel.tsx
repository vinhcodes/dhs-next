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
    <div className="group cursor-pointer">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[280px] md:h-[320px] relative group-hover:shadow-lg transition-all duration-300">
        <img
          src={image.image}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="font-semibold text-lg mb-1 leading-tight">{image.title}</h3>
            <p className="text-sm text-gray-200 font-medium">{image.category}</p>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-xs font-medium text-gray-700">{image.category}</span>
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

  const [imagesToShow, setImagesToShow] = useState(3);
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
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Work
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our completed projects throughout Tampa Bay
          </p>
        </div>

        <div className="relative">
          <div 
            className="overflow-hidden rounded-2xl"
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
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <ImageCard image={image} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
              disabled={currentIndex >= totalSlides - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? "bg-blue-600 w-8" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};