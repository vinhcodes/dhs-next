"use client";

import React, { useState, useEffect } from 'react';
import SanityVideoCarousel from './ui/sanity-video-carousel';
import VideoDialog from './ui/video-dialog';
import TitleWithLine from './ui/title-with-line';
import { OptimizedVideo, getFeaturedVideos, getOptimalVideoSource } from '@/lib/video-utils';

const SanityVideoSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos, setVideos] = useState<OptimizedVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch videos from Sanity
  useEffect(() => {
    const loadVideos = async () => {
      try {
        const fetchedVideos = await getFeaturedVideos();
        setVideos(fetchedVideos);
      } catch (err) {
        console.error('Failed to load videos:', err);
        setError('Failed to load videos. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadVideos();
  }, []);

  const handleVideoClick = (video: OptimizedVideo, index: number) => {
    setCurrentVideoIndex(index);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleVideoChange = (index: number) => {
    setCurrentVideoIndex(index);
  };

  // Transform videos for VideoDialog (legacy format compatibility)
  const transformedVideos = videos.map(video => ({
    id: video.id,
    src: getOptimalVideoSource(video.sources),
    title: video.title,
    poster: video.poster,
  }));

  if (isLoading) {
    return (
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <TitleWithLine 
              titleText="See Our Work in Action"
              className="text-2xl sm:text-3xl lg:text-4xl mb-4"
            />
          </div>
          
          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="aspect-video bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
                <div className="text-gray-400">Loading videos...</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TitleWithLine 
              titleText="See Our Work in Action"
              className="text-2xl sm:text-3xl lg:text-4xl mb-4"
            />
            <p className="text-red-600 mt-4">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!videos.length) {
    return (
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TitleWithLine 
              titleText="See Our Work in Action"
              className="text-2xl sm:text-3xl lg:text-4xl mb-4"
            />
            <p className="text-gray-600 mt-4">No featured videos available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <TitleWithLine 
              titleText="See Our Work in Action"
              className="text-2xl sm:text-3xl lg:text-4xl mb-4"
            />
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Watch our professional painting process and customer transformations
            </p>
          </div>

          {/* Video Carousel */}
          <div className="w-full flex justify-center">
            <SanityVideoCarousel
              videos={videos}
              onVideoClick={handleVideoClick}
              className="w-full"
              showDuration={true}
              showCategory={true}
            />
          </div>

          {/* Description */}
          <div className="text-center mt-8 sm:mt-12 max-w-3xl mx-auto px-4">
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              From start to finish, see how our experienced team transforms homes across Florida. 
              Watch our meticulous preparation process, premium materials application, and the 
              stunning final results that our customers love.
            </p>
          </div>
        </div>
      </section>

      {/* Video Dialog */}
      <VideoDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        videos={transformedVideos}
        currentVideoIndex={currentVideoIndex}
        onVideoChange={handleVideoChange}
      />
    </>
  );
};

export default SanityVideoSection;