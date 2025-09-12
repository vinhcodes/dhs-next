"use client";

import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { OptimizedVideo, getOptimalVideoSource, formatDuration } from '@/lib/video-utils';

interface SanityVideoCarouselProps {
  videos: OptimizedVideo[];
  onVideoClick: (video: OptimizedVideo, index: number) => void;
  className?: string;
  showDuration?: boolean;
  showCategory?: boolean;
}

const SanityVideoCarousel: React.FC<SanityVideoCarouselProps> = ({
  videos,
  onVideoClick,
  className = "",
  showDuration = true,
  showCategory = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [connectionQuality, setConnectionQuality] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [isLoading, setIsLoading] = useState(true);

  // Detect connection quality
  useEffect(() => {
    const detectConnection = () => {
      if (typeof window !== 'undefined' && 'connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          const { effectiveType, downlink } = connection;
          
          if (downlink) {
            if (downlink < 1) setConnectionQuality('slow');
            else if (downlink < 5) setConnectionQuality('medium');
            else setConnectionQuality('fast');
          } else {
            switch (effectiveType) {
              case 'slow-2g':
              case '2g':
                setConnectionQuality('slow');
                break;
              case '3g':
                setConnectionQuality('medium');
                break;
              case '4g':
              default:
                setConnectionQuality('fast');
                break;
            }
          }
        }
      }
      setIsLoading(false);
    };

    detectConnection();
  }, []);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  const getQualityBadgeColor = () => {
    switch (connectionQuality) {
      case 'slow': return 'bg-red-500/80';
      case 'medium': return 'bg-yellow-500/80';
      case 'fast': return 'bg-green-500/80';
      default: return 'bg-gray-500/80';
    }
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="aspect-video bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Loading videos...</div>
        </div>
      </div>
    );
  }

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No videos available
      </div>
    );
  }

  const currentVideo = videos[currentIndex];

  return (
    <div className={`video-carousel w-full max-w-4xl mx-auto ${className}`}>
      {/* Main Video Display */}
      <div className="relative mb-4 sm:mb-6">
        <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg mx-auto">
          <div
            className="relative aspect-video bg-gray-900 flex items-center justify-center w-full"
            onClick={() => onVideoClick(currentVideo, currentIndex)}
          >
            {currentVideo.poster ? (
              <img
                src={currentVideo.poster}
                alt={currentVideo.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <Play size={32} className="text-white/70 sm:w-12 sm:h-12" />
              </div>
            )}
            
            {/* Video Info Overlay */}
            <div className="absolute top-2 left-2 flex gap-2">
              {/* Connection Quality Indicator */}
              <div className={`${getQualityBadgeColor()} text-white text-xs px-2 py-1 rounded flex items-center gap-1`}>
                <div className={`w-2 h-2 rounded-full ${connectionQuality === 'fast' ? 'bg-white' : connectionQuality === 'medium' ? 'bg-white/80' : 'bg-white/60'}`} />
                {connectionQuality}
              </div>
              
              {/* Duration Badge */}
              {showDuration && currentVideo.duration && (
                <div className="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Clock size={12} />
                  {formatDuration(currentVideo.duration)}
                </div>
              )}
            </div>

            {/* Category Badge */}
            {showCategory && currentVideo.category && (
              <div className="absolute top-2 right-2 bg-blue-600/90 text-white text-xs px-2 py-1 rounded capitalize">
                {currentVideo.category.replace('-', ' ')}
              </div>
            )}
            
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 rounded-full p-2 sm:p-3 transform group-hover:scale-110 transition-transform duration-200">
                <Play size={20} className="text-gray-900 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {videos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevVideo();
                }}
                className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous video"
              >
                <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextVideo();
                }}
                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next video"
              >
                <ChevronRight size={16} className="sm:w-5 sm:h-5" />
              </button>
            </>
          )}
        </div>

        {/* Video Info */}
        <div className="mt-3 sm:mt-4 text-center px-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
            {currentVideo.title}
          </h3>
          {currentVideo.description && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {currentVideo.description}
            </p>
          )}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {videos.length > 1 && (
        <div className="flex justify-center">
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 px-4 max-w-full">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => goToVideo(index)}
                className={`flex-shrink-0 relative rounded overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? 'ring-2 ring-blue-500 opacity-100'
                    : 'opacity-70 hover:opacity-100'
                }`}
                title={video.title}
              >
                <div className="w-16 h-10 sm:w-20 sm:h-12 bg-gray-800 flex items-center justify-center">
                  {video.poster ? (
                    <img
                      src={video.poster}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <Play size={12} className="text-white/70 sm:w-4 sm:h-4" />
                  )}
                </div>
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-blue-500/20" />
                )}
                
                {/* Duration on thumbnail */}
                {video.duration && (
                  <div className="absolute bottom-0 right-0 bg-black/80 text-white text-xs px-1 py-0.5 text-[10px]">
                    {formatDuration(video.duration)}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Video Counter & Quality Info */}
      <div className="flex justify-between items-center mt-3 sm:mt-4 px-4">
        {videos.length > 1 && (
          <div className="text-xs sm:text-sm text-gray-500">
            {currentIndex + 1} of {videos.length}
          </div>
        )}
        
        <div className="text-xs text-gray-400 ml-auto">
          Optimized for {connectionQuality} connection
        </div>
      </div>
    </div>
  );
};

export default SanityVideoCarousel;