"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: string;
  src: string;
  title?: string;
  poster?: string;
  thumbnail?: string;
}

interface VideoCarouselProps {
  videos: Video[];
  onVideoClick: (video: Video, index: number) => void;
  className?: string;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videos,
  onVideoClick,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoThumbnails, setVideoThumbnails] = useState<{[key: string]: string}>({});
  const videoRefs = useRef<{[key: string]: HTMLVideoElement}>({});

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  // Generate thumbnail from video first frame
  const generateVideoThumbnail = (videoSrc: string, videoId: string): Promise<string> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      video.crossOrigin = 'anonymous';
      video.currentTime = 1; // Get frame at 1 second
      
      video.onloadeddata = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        if (ctx) {
          ctx.drawImage(video, 0, 0);
          const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.8);
          resolve(thumbnailUrl);
        }
      };
      
      video.onerror = () => {
        // If video fails to load, resolve with empty string
        resolve('');
      };
      
      video.src = videoSrc;
    });
  };

  // Generate thumbnails for videos without posters
  useEffect(() => {
    const generateThumbnails = async () => {
      const newThumbnails: {[key: string]: string} = {};
      
      for (const video of videos) {
        if (!video.poster && !video.thumbnail) {
          try {
            const thumbnail = await generateVideoThumbnail(video.src, video.id);
            if (thumbnail) {
              newThumbnails[video.id] = thumbnail;
            }
          } catch (error) {
            console.log(`Could not generate thumbnail for video ${video.id}`);
          }
        }
      }
      
      if (Object.keys(newThumbnails).length > 0) {
        setVideoThumbnails(prev => ({ ...prev, ...newThumbnails }));
      }
    };

    generateThumbnails();
  }, [videos]);

  // Get thumbnail for a video
  const getVideoThumbnail = (video: Video) => {
    return video.poster || video.thumbnail || videoThumbnails[video.id] || '';
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
          >
            {getVideoThumbnail(videos[currentIndex]) ? (
              <img
                src={getVideoThumbnail(videos[currentIndex])}
                alt={videos[currentIndex].title || `Video ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <Play size={32} className="text-white/70 sm:w-12 sm:h-12" />
              </div>
            )}
            
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
                disabled={videos.length <= 1}
              >
                <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextVideo();
                }}
                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 transition-colors opacity-0 group-hover:opacity-100"
                disabled={videos.length <= 1}
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
                <div className="w-16 h-10 sm:w-20 sm:h-12 bg-gray-800 flex items-center justify-center">
                  {getVideoThumbnail(video) ? (
                    <img
                      src={getVideoThumbnail(video)}
                      alt={video.title || `Video ${index + 1}`}
                      className="w-full h-full object-cover"
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

export default VideoCarousel;