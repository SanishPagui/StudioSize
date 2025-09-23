"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Play, Pause } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MainVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const playButtonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    // Scroll-triggered zoom animation
    const videoElement = videoRef.current;
    const containerElement = containerRef.current;

    if (videoElement && containerElement) {
      // Set initial scale
      gsap.set(videoElement, { scale: 1 });

      // Create scroll-triggered animation
      gsap.to(videoElement, {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Play button hover animation
      const button = playButtonRef.current;
      if (button) {
        const handleMouseEnter = () => {
          gsap.to(button, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          button.removeEventListener('mouseenter', handleMouseEnter);
          button.removeEventListener('mouseleave', handleMouseLeave);
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className='relative z-10 mt-[20vw] sm:mt-[5vw] md:mt-4 w-full bg-black overflow-hidden'
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="relative">
        <video 
          ref={videoRef}
          src={'/video/HeaderVideo.mp4'} 
          autoPlay
          loop 
          muted 
          playsInline
          className='w-full h-[85vw] sm:h-[60vw] md:h-[50vw] lg:h-[45vw] xl:h-[40vw] object-cover'
        />
        
        {/* Video Overlay and Controls */}
        <div className={`absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 ${showControls ? 'bg-opacity-10' : ''}`}>
          {/* Showreel Label */}
          <div className='absolute top-4 left-4 md:top-6 md:left-6'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold mb-1'>Showreel</h1>
            <h2 className='text-studio-light-grey text-sm md:text-base'>45sec</h2>
          </div>
          
          {/* Custom Play Button */}
          <div className='absolute top-4 right-4 md:top-6 md:right-6'>
            <button 
              ref={playButtonRef}
              onClick={togglePlay}
              className='studio-button w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group'
            >
              {isPlaying ? (
                <Pause className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white ml-0' />
              ) : (
                <Play className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white ml-1' />
              )}
            </button>
          </div>

          {/* Play Reel Button - Centered */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={togglePlay}
              className='bg-white bg-opacity-90 backdrop-blur-sm text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105'
            >
              PLAY REEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;