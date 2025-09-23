"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HoverText = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const serviceRefs = useRef([]);

  const services = [
    'Branding',
    'Brand Strategy', 
    'Motion graphics',
    'Video editing',
    '3D animation',
    'Audio production',
    'Web design',
    'Photography',
    'Naming',
    'Packaging',
    'Advertising',
    'Brand art'
  ];

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Services animation
    serviceRefs.current.forEach((service, index) => {
      if (service) {
        gsap.fromTo(service,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: service,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToServiceRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  return (
    <div className='bg-black w-full border-t border-gray-800'>
      <div className='px-4 md:px-6 lg:px-12 py-20 md:py-32'>
        <div 
          ref={titleRef}
          className='text-lg md:text-xl text-gray-400 mb-12 md:mb-16'
        >
          Services
        </div>

        <div className='md:flex md:gap-16'>
          <div className='hidden md:block md:w-1/3'></div>
          
          <div className='md:w-2/3'>
            {services.map((service, index) => (
              <div
                key={index}
                ref={addToServiceRefs}
                className='service-item text-[10vw] md:text-[5vw] lg:text-[4vw] font-extrabold tracking-tighter leading-[0.9] text-gray-600 hover:text-white transition-all duration-300 ease-out cursor-pointer mb-2 md:mb-4'
                onMouseEnter={(e) => {
                  gsap.to(e.target, {
                    color: '#ffffff',
                    x: 20,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, {
                    color: '#6b7280',
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverText;