"use client";

import React, { useState } from 'react';
import VideoCarousel from './ui/video-carousel';
import VideoDialog from './ui/video-dialog';
import TitleWithLine from './ui/title-with-line';

// Your actual video files
const videos = [
  {
    id: '1',
    src: '/videos/dhs-intro-video.mp4',
    title: 'DHS Introduction Video',
    poster: '/videos/dhs-intro-thumb.png'
  },
  {
    id: '2',
    src: '/videos/video_02.MP4',
    title: 'Exterior Painting Project'
  },
  {
    id: '3',
    src: '/videos/video_03.MP4',
    title: 'Interior Transformation'
  },
  {
    id: '4',
    src: '/videos/video_04.MP4',
    title: 'Cabinet Refinishing'
  },
  {
    id: '5',
    src: '/videos/video_05.MP4',
    title: 'Pool Deck Painting'
  },
  {
    id: '6',
    src: '/videos/video 06.MP4',
    title: 'Commercial Project'
  },
  {
    id: '7',
    src: '/videos/video_07.MP4',
    title: 'Fence Staining Project'
  },
  {
    id: '8',
    src: '/videos/video_08.MP4',
    title: 'Before & After Showcase'
  }
];

const VideoSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoClick = (_video: { id: string; src: string; title?: string; poster?: string }, index: number) => {
    setCurrentVideoIndex(index);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleVideoChange = (index: number) => {
    setCurrentVideoIndex(index);
  };

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
            <VideoCarousel
              videos={videos}
              onVideoClick={handleVideoClick}
              className="w-full"
            />
          </div>

          {/* Optional Description */}
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
        videos={videos}
        currentVideoIndex={currentVideoIndex}
        onVideoChange={handleVideoChange}
      />
    </>
  );
};

export default VideoSection;