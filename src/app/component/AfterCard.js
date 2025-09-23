"use client"
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AfterCard = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const titleRefs = useRef([]);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set([titleRefs.current, descriptionRef.current], {
      opacity: 0,
      y: 50,
    });

    // Title animation
    gsap.to(titleRefs.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Description animation
    gsap.to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Video scale animation
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToTitleRefs = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  return (
    <div className='w-full h-fit bg-black border-t border-studio-dark-grey'>
      <div className='w-full h-fit mt-[11vh] px-4 md:px-6 lg:px-12'>
        {/* Main heading */}
        <div 
          ref={textRef}
          className='text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] tracking-tight leading-none font-bold md:font-semibold max-w-4xl'
        >
          <div ref={addToTitleRefs} className="studio-hero-text">
            Back to the simple,
          </div>
          <div ref={addToTitleRefs} className="studio-hero-text">
            intuitive, and inspiring.
          </div>
        </div>

        {/* Content section */}
        <div className='mt-[10vh] md:mt-[8vw] lg:mt-[6vw] md:flex md:items-start md:gap-8 lg:gap-12'>
          {/* Video */}
          <div className='w-full md:w-1/2 lg:w-3/5 overflow-hidden rounded-lg'>
            <video
              ref={videoRef}
              src={'./video/AfterCardVid.mp4'}
              loop
              autoPlay
              muted
              playsInline
              className='w-full h-auto object-cover'
            />
          </div>

          {/* Text content */}
          <div className='mt-[6vh] md:mt-0 md:w-1/2 lg:w-2/5 md:pt-8'>
            <div 
              ref={descriptionRef}
              className='studio-body-text text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12'
            >
              Big multinational companies or small local brands. Partner approach with one 
              universal goal - to create authentic, functional, and beautiful design.
            </div>

            {/* CTA Button */}
            <div className='flex items-center space-x-6'>
              <span className='studio-body-text text-lg md:text-xl lg:text-2xl font-semibold'>
                Let's talk
              </span>
              
              <motion.button 
                className='studio-button w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center group'
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#3b3b3b",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className='w-5 h-5 md:w-6 md:h-6 text-white' />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Additional content matching Studio Size */}
        <div 
          ref={contentRef}
          className='mt-[15vh] md:mt-[10vh] lg:mt-[8vh] pb-[10vh] border-b border-studio-dark-grey'
        >
          <div className='max-w-4xl'>
            <p className='studio-body-text text-base md:text-lg lg:text-xl leading-relaxed text-studio-light-grey mb-6'>
              Great design has no expiration date. It lasts for years and inspires instantly. 
              Our creative freedom enables us to spend more time on fewer projects and focus on 
              the intellectual, functional, and artistic aspects of business.
            </p>
            <p className='studio-body-text text-base md:text-lg lg:text-xl leading-relaxed text-studio-light-grey'>
              Looking to create profound ideas, timeless design, and beauty in everyday life.
            </p>
            
            <motion.button 
              className='mt-8 px-6 py-3 border border-studio-grey rounded-full text-sm md:text-base font-medium hover:bg-studio-grey hover:text-black transition-all duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Studio
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterCard;