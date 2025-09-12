"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface OptimizedVideo {
  id: string;
  title?: string;
  poster?: string;
  sources: {
    low: string;    // 480p or lower
    medium: string; // 720p
    high: string;   // 1080p
  };
}

interface OptimizedVideoCarouselProps {
  videos: OptimizedVideo[];
  onVideoClick: (video: OptimizedVideo, index: number) => void;
  className?: string;
}

const OptimizedVideoCarousel: React.FC<OptimizedVideoCarouselProps> = ({
  videos,
  onVideoClick,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoThumbnails, setVideoThumbnails] = useState<{[key: string]: string}>({});
  const [connectionQuality, setConnectionQuality] = useState<'slow' | 'medium' | 'fast'>('medium');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const thumbnailRefs = useRef<{[key: string]: HTMLDivElement}>({});

  // Detect connection quality
  useEffect(() => {
    const detectConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            setConnectionQuality('slow');
          } else if (connection.effectiveType === '3g') {
            setConnectionQuality('medium');
          } else {
            setConnectionQuality('fast');
          }
        }
      }
    };

    detectConnection();
  }, []);

  // Generate thumbnails only when needed (lazy loading)
  const generateThumbnailOnDemand = (video: OptimizedVideo): Promise<string> => {
    return new Promise((resolve) => {
      // Use appropriate quality based on connection
      const videoSrc = connectionQuality === 'slow' ? video.sources.low : 
                      connectionQuality === 'medium' ? video.sources.medium : 
                      video.sources.high;

      const videoElement = document.createElement('video');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      videoElement.crossOrigin = 'anonymous';
      videoElement.currentTime = 1;
      
      videoElement.onloadeddata = () => {
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        
        if (ctx) {
          ctx.drawImage(videoElement, 0, 0);
          const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.7); // Lower quality for faster loading
          resolve(thumbnailUrl);
        }
      };
      
      videoElement.onerror = () => resolve('');
      videoElement.src = videoSrc;
    });
  };

  // Intersection Observer for lazy thumbnail loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = entry.target.getAttribute('data-video-id');
            const video = videos.find(v => v.id === videoId);
            
            if (video && !videoThumbnails[videoId!] && !video.poster) {
              generateThumbnailOnDemand(video).then((thumbnail) => {
                if (thumbnail) {
                  setVideoThumbnails(prev => ({ ...prev, [videoId!]: thumbnail }));
                }
              });
            }
          }
        });
      },
      { rootMargin: '100px' } // Load thumbnails 100px before they come into view
    );

    // Observe all thumbnail containers
    Object.values(thumbnailRefs.current).forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [videos, videoThumbnails]);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  const getVideoThumbnail = (video: OptimizedVideo) => {
    return video.poster || videoThumbnails[video.id] || '';
  };

  const getOptimalVideoSource = (video: OptimizedVideo) => {
    switch (connectionQuality) {
      case 'slow': return video.sources.low;
      case 'medium': return video.sources.medium;
      case 'fast': return video.sources.high;
      default: return video.sources.medium;
    }
  };

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No videos available
      </div>
    );
  }

  return (
    <div className={`video-carousel w-full max-w-4xl mx-auto ${className}`}>
      {/* Main Video Display */}
      <div className="relative mb-4 sm:mb-6">
        <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg mx-auto">
          <div
            className="relative aspect-video bg-gray-900 flex items-center justify-center w-full"
            onClick={() => onVideoClick(videos[currentIndex], currentIndex)}
            ref={(ref) => {
              if (ref) {
                thumbnailRefs.current[videos[currentIndex].id] = ref;
              }
            }}
            data-video-id={videos[currentIndex].id}
          >
            {getVideoThumbnail(videos[currentIndex]) ? (
              <img
                src={getVideoThumbnail(videos[currentIndex])}
                alt={videos[currentIndex].title || `Video ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <Play size={32} className="text-white/70 sm:w-12 sm:h-12" />
              </div>
            )}
            
            {/* Connection Quality Indicator */}
            <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
              {connectionQuality} quality
            </div>
            
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 rounded-full p-2 sm:p-3">
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
              >
                <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextVideo();
                }}
                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={16} className="sm:w-5 sm:h-5" />
              </button>
            </>
          )}
        </div>

        {/* Video Title */}
        {videos[currentIndex].title && (
          <h3 className="mt-3 sm:mt-4 text-center text-base sm:text-lg font-semibold text-gray-900 px-4">
            {videos[currentIndex].title}
          </h3>
        )}
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
              >
                <div 
                  className="w-16 h-10 sm:w-20 sm:h-12 bg-gray-800 flex items-center justify-center"
                  ref={(ref) => {
                    if (ref) {
                      thumbnailRefs.current[video.id] = ref;
                    }
                  }}
                  data-video-id={video.id}
                >
                  {getVideoThumbnail(video) ? (
                    <img
                      src={getVideoThumbnail(video)}
                      alt={video.title || `Video ${index + 1}`}
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
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Video Counter */}
      {videos.length > 1 && (
        <div className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
          {currentIndex + 1} of {videos.length}
        </div>
      )}
    </div>
  );
};

export default OptimizedVideoCarousel;