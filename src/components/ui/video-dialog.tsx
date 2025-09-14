"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: string;
  src: string;
  title?: string;
  poster?: string;
}

interface VideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videos: Video[];
  currentVideoIndex: number;
  onVideoChange?: (index: number) => void;
  // Legacy props for backward compatibility
  videoSrc?: string;
  title?: string;
  poster?: string;
}

const VideoDialog: React.FC<VideoDialogProps> = ({
  isOpen,
  onClose,
  videos,
  currentVideoIndex,
  onVideoChange,
  // Legacy props for backward compatibility
  videoSrc,
  title,
  poster,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Support both new array format and legacy single video format
  const currentVideos = videos || (videoSrc ? [{ id: '1', src: videoSrc, title, poster }] : []);
  const currentVideo = currentVideos[currentVideoIndex] || currentVideos[0];
  const hasMultipleVideos = currentVideos.length > 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
      if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
      if (e.key === 'ArrowLeft' && hasMultipleVideos && onVideoChange) {
        const prevIndex = (currentVideoIndex - 1 + currentVideos.length) % currentVideos.length;
        onVideoChange(prevIndex);
      }
      if (e.key === 'ArrowRight' && hasMultipleVideos && onVideoChange) {
        const nextIndex = (currentVideoIndex + 1) % currentVideos.length;
        onVideoChange(nextIndex);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, hasMultipleVideos, onVideoChange, currentVideoIndex, currentVideos.length]);

  // Reset video state when video changes
  useEffect(() => {
    if (isOpen && videoRef.current && currentVideo) {
      // Force reload the video element
      videoRef.current.load();
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(true);
      
      // Wait for the video to be ready before playing
      const playVideo = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            setIsPlaying(false);
          });
        }
      };
      
      videoRef.current.addEventListener('loadeddata', playVideo, { once: true });
    }
  }, [currentVideoIndex, isOpen, currentVideo]);

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isOpen]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };


  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000) as NodeJS.Timeout;
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !currentVideo) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-5xl mx-4"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
          title="Close"
        >
          <X size={24} />
        </button>

        {/* Title and Video Counter */}
        <div className="absolute -top-16 left-0 right-0 flex justify-between items-center">
          {currentVideo.title && (
            <div className="text-white text-lg font-semibold">
              {currentVideo.title}
            </div>
          )}
          {hasMultipleVideos && (
            <div className="text-white/80 text-sm">
              {currentVideoIndex + 1} of {currentVideos.length}
            </div>
          )}
        </div>

        {/* Video Container */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl group">
          <video
            key={currentVideo.id}
            ref={videoRef}
            className="w-full h-auto max-h-[80vh] object-contain cursor-pointer"
            poster={currentVideo.poster}
            onClick={togglePlayPause}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            preload="metadata"
          >
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Navigation Arrows */}
          {hasMultipleVideos && onVideoChange && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIndex = (currentVideoIndex - 1 + currentVideos.length) % currentVideos.length;
                  onVideoChange(prevIndex);
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors opacity-0 group-hover:opacity-100"
                title="Previous video (←)"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIndex = (currentVideoIndex + 1) % currentVideos.length;
                  onVideoChange(nextIndex);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors opacity-0 group-hover:opacity-100"
                title="Next video (→)"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}


          {/* Video Controls */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Progress Bar */}
            <div
              className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-white rounded-full transition-all duration-150"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <button
                  onClick={togglePlayPause}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>

                {/* Mute/Unmute */}
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>

                {/* Time */}
                <span className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Fullscreen */}
              <button
                onClick={() => {
                  if (videoRef.current) {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      videoRef.current.requestFullscreen();
                    }
                  }
                }}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Maximize2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDialog;