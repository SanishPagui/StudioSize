"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroText = () => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
      y: 100,
      opacity: 0
    });
    
    gsap.set(tagsRef.current, {
      y: 50,
      opacity: 0
    });

    // Animate lines in sequence
    tl.to(line1Ref.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(line2Ref.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8")
    .to(line3Ref.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8")
    .to(tagsRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="px-4 md:px-6 lg:px-12 pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20"
    >
      <div className="max-w-7xl">
        <div 
          ref={line1Ref}
          className="text-[12vw] md:text-[8vw] lg:text-[6vw] xl:text-[5.5vw] font-semibold leading-[0.9] tracking-tight"
        >
          Design studio
        </div>
        
        <div className="flex flex-wrap lg:flex-nowrap gap-2 lg:gap-8">
          <div 
            ref={line2Ref}
            className="text-[12vw] md:text-[8vw] lg:text-[6vw] xl:text-[5.5vw] font-semibold leading-[0.9] tracking-tight"
          >
            for timeless
          </div>
          <div 
            ref={line3Ref}
            className="text-[12vw] md:text-[8vw] lg:text-[6vw] xl:text-[5.5vw] font-semibold leading-[0.9] tracking-tight"
          >
            branding
          </div>
        </div>
        
        <div 
          ref={tagsRef}
          className="mt-8 lg:mt-12 flex flex-wrap gap-4 text-sm md:text-base lg:text-lg text-gray-400 font-normal"
        >
          <span>strategy</span>
          <span>packaging</span>
          <span>motion</span>
          <span>naming</span>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
