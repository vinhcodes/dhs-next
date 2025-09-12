"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Settings } from 'lucide-react';

interface VideoSource {
  src: string;
  quality: string;
  bitrate: number;
}

interface AdaptiveVideoPlayerProps {
  sources: VideoSource[];
  poster?: string;
  title?: string;
  className?: string;
}

const AdaptiveVideoPlayer: React.FC<AdaptiveVideoPlayerProps> = ({
  sources,
  poster,
  title,
  className = ""
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentQuality, setCurrentQuality] = useState<string>('auto');
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<number>(0);
  const [isBuffering, setIsBuffering] = useState(false);

  // Detect connection speed
  useEffect(() => {
    const detectConnectionSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection && connection.effectiveType) {
          const speedMap: {[key: string]: number} = {
            'slow-2g': 0.5,
            '2g': 1,
            '3g': 2,
            '4g': 10
          };
          setConnectionSpeed(speedMap[connection.effectiveType] || 2);
        }
      }
    };

    detectConnectionSpeed();
  }, []);

  // Auto-select quality based on connection
  useEffect(() => {
    if (connectionSpeed > 0 && currentQuality === 'auto') {
      let recommendedQuality = '480p';
      
      if (connectionSpeed >= 8) recommendedQuality = '1080p';
      else if (connectionSpeed >= 4) recommendedQuality = '720p';
      else if (connectionSpeed >= 2) recommendedQuality = '480p';
      else recommendedQuality = '360p';

      // Find the best available quality
      const availableSource = sources.find(s => s.quality === recommendedQuality) || sources[0];
      if (videoRef.current && availableSource) {
        videoRef.current.src = availableSource.src;
      }
    }
  }, [connectionSpeed, sources, currentQuality]);

  // Handle buffering events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleWaiting = () => setIsBuffering(true);
    const handleCanPlay = () => setIsBuffering(false);
    const handleLoadStart = () => setIsBuffering(true);

    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);

    return () => {
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
    };
  }, []);

  const togglePlay = () => {
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

  const changeQuality = (quality: string) => {
    const source = sources.find(s => s.quality === quality);
    if (source && videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const wasPlaying = !videoRef.current.paused;
      
      videoRef.current.src = source.src;
      videoRef.current.currentTime = currentTime;
      
      if (wasPlaying) {
        videoRef.current.play();
      }
    }
    setCurrentQuality(quality);
    setShowQualityMenu(false);
  };

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        poster={poster}
        preload="metadata" // Only load metadata initially
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>

      {/* Buffering Indicator */}
      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="p-2 hover:bg-white/20 rounded">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button onClick={toggleMute} className="p-2 hover:bg-white/20 rounded">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>

          {/* Quality Selector */}
          <div className="relative">
            <button
              onClick={() => setShowQualityMenu(!showQualityMenu)}
              className="p-2 hover:bg-white/20 rounded flex items-center gap-2"
            >
              <Settings size={16} />
              <span className="text-xs">{currentQuality}</span>
            </button>

            {showQualityMenu && (
              <div className="absolute bottom-full right-0 mb-2 bg-black/90 rounded p-2 min-w-[120px]">
                <button
                  onClick={() => changeQuality('auto')}
                  className={`block w-full text-left px-3 py-1 text-sm hover:bg-white/20 rounded ${
                    currentQuality === 'auto' ? 'text-blue-400' : ''
                  }`}
                >
                  Auto
                </button>
                {sources.map((source) => (
                  <button
                    key={source.quality}
                    onClick={() => changeQuality(source.quality)}
                    className={`block w-full text-left px-3 py-1 text-sm hover:bg-white/20 rounded ${
                      currentQuality === source.quality ? 'text-blue-400' : ''
                    }`}
                  >
                    {source.quality}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdaptiveVideoPlayer;