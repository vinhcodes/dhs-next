"use client"

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FaYelp } from "react-icons/fa";
import { LetterAvatar } from "./letter-avatar";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
  verified: boolean;
}

const ReviewCarousel: React.FC<{ reviews?: Review[] }> = ({
  reviews: propReviews,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Default reviews if none provided
  const defaultReviews: Review[] = [
    {
      id: 1,
      name: "Vinh N.",
      date: "2025-06-20",
      rating: 5,
      text: "He took time to walk through the space with me, helped me pick the right colors and finishes for each room, and offered thoughtful advice without being pushy. Before painting, he did a thorough prep: patching holes, smoothing walls, and carefully taping everything off. The attention to detail was clear -- clean lines, no drips, and a really smooth finish throughout.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b67c?w=150&h=150&fit=crop&crop=face",
      verified: true,
    },
    {
      id: 2,
      name: "Roy K.",
      date: "2025-06-13",
      rating: 5,
      text: "I hired them to repaint the interior of my one-story home. They were really great. Punctual. Professional. Super clean. The home looks amazing, and they were very pleasant to have in my home. They did a great job and I would hire them again.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
    },
    {
      id: 3,
      name: "Wayne Chapman",
      date: "2025-04-26",
      rating: 5,
      text: "Great crew. Very professional, hard working, and attentive to detail. House looks brand new. Wouldn't hesitate to hire them again.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
    },
    {
      id: 4,
      name: "Jennifer Runk",
      date: "2025-04-23",
      rating: 5,
      text: "We just had Peach Painting do a 5th project for us, this was a small project of painting three new cabinets to match the cabinets that they painted...",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true,
    },
    {
      id: 5,
      name: "Michael Torres",
      date: "2025-04-20",
      rating: 5,
      text: "I recently hired Peach Painting for a complete exterior paint job and I couldn't be more satisfied with the results. The team was professional...",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      verified: true,
    },
  ];

  const reviews = propReviews || defaultReviews;

  // Responsive reviews to show based on screen size
  const getReviewsToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 4; // desktop
    }
    return 4; // default
  };

  const [reviewsToShow, setReviewsToShow] = useState(4); // Start with default for SSR
  const [isClient, setIsClient] = useState(false);
  const totalSlides = Math.max(0, reviews.length - reviewsToShow + 1);

  // Handle hydration and window resize
  React.useEffect(() => {
    setIsClient(true);
    setReviewsToShow(getReviewsToShow());

    const handleResize = () => {
      setReviewsToShow(getReviewsToShow());
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center gap-0.5 md:gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 md:w-4 md:h-4 ${
              star <= rating
                ? "fill-red-600 text-red-600"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
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
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / reviewsToShow)
              }%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2 md:px-3"
              >
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  {/* Header with avatar and Yelp icon */}
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <LetterAvatar name={review.name} />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">{review.name}</h4>
                        <p className="text-xs md:text-sm text-gray-500">{formatDate(review.date)}</p>
                      </div>
                    </div>
                    {/* Yelp icon */}
                    <div>
                      <FaYelp size={24} color="red" />
                    </div>
                  </div>

                  {/* Star rating and verified badge */}
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <StarRating rating={review.rating} />
                    {review.verified && (
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-2 h-2 md:w-2.5 md:h-2.5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-2 md:mb-3 line-clamp-6">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows - Hidden on mobile, visible on tablet/desktop */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center shadow-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center shadow-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentIndex >= totalSlides - 1}
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 md:mt-8 gap-1.5 md:gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;