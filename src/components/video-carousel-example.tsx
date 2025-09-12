"use client";

import React, { useState } from 'react';
import VideoCarousel from './ui/video-carousel';
import VideoDialog from './ui/video-dialog';

// Example video data - replace with your actual videos
const sampleVideos = [
  {
    id: '1',
    src: '/videos/sample1.mp4',
    title: 'Demo Video 1',
    poster: '/images/video1-thumb.jpg',
    thumbnail: '/images/video1-thumb.jpg'
  },
  {
    id: '2',
    src: '/videos/sample2.mp4',
    title: 'Demo Video 2',
    poster: '/images/video2-thumb.jpg',
    thumbnail: '/images/video2-thumb.jpg'
  },
  {
    id: '3',
    src: '/videos/sample3.mp4',
    title: 'Demo Video 3',
    poster: '/images/video3-thumb.jpg',
    thumbnail: '/images/video3-thumb.jpg'
  }
];

const VideoCarouselExample: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoClick = (video: { id: string; src: string; title?: string; poster?: string }, index: number) => {
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Video Carousel</h2>
      
      <VideoCarousel
        videos={sampleVideos}
        onVideoClick={handleVideoClick}
        className="mb-8"
      />

      <VideoDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        videos={sampleVideos}
        currentVideoIndex={currentVideoIndex}
        onVideoChange={handleVideoChange}
      />

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Features:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Click any video in the carousel to open it in the dialog</li>
          <li>Navigate between videos using arrow keys (← →) or click the navigation buttons</li>
          <li>Standard video controls: play/pause (spacebar), mute (M key), fullscreen</li>
          <li>Close dialog with Escape key or click outside</li>
          <li>Thumbnail navigation in the carousel</li>
          <li>Video counter shows current position</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCarouselExample;