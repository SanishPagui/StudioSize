"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Gloria",
      description: "Praise the bubbles",
      video: "./video/FW1.mp4"
    },
    {
      id: 2,
      title: "Exat",
      description: "Modernism in motion",
      video: "./video/FW2.mp4"
    },
    {
      id: 3,
      title: "Divote",
      description: "Clean Korean cosmetics",
      video: "./video/FW3.mp4"
    },
    {
      id: 4,
      title: "VK Ikons",
      description: "Iconic wine blend",
      video: "./video/FW4.mp4"
    },
    {
      id: 5,
      title: "Ars Futura",
      description: "Future starts today",
      video: "./video/FW5.mp4"
    },
    {
      id: 6,
      title: "Vignelli Anniversary",
      description: "Paying tribute to Massimo",
      video: "./video/FW6.mp4"
    },
    {
      id: 7,
      title: "Umaki",
      description: "Trip for your taste buds",
      video: "./video/FW7.mp4"
    },
    {
      id: 8,
      title: "Cinderic",
      description: "Minimal architecture",
      video: "./video/FW8.mp4"
    },
    {
      id: 9,
      title: "Bronza",
      description: "Coined pasta",
      video: "./video/FW9.mp4"
    },
    {
      id: 10,
      title: "Motion Array",
      description: "Awesome motion templates",
      video: "./video/FW10.mp4"
    },
    {
      id: 11,
      title: "Pomalo",
      description: "Laid-back skincare",
      video: "./video/FW11.mp4"
    }
  ];

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 20%",
              toggleActions: "play none none reverse",
              once: false
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div className='w-full bg-black py-8 md:py-12'>
      <div 
        ref={containerRef}
        className='flex gap-6 md:gap-8 px-4 md:px-6 lg:px-12 overflow-x-auto no-scrollbar'
        style={{
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        {projects.map((project, index) => (
          <div 
            key={project.id}
            ref={addToCardRefs}
            className='flex-shrink-0 w-[280px] md:w-[350px] lg:w-[400px] group'
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-900">
              <video
                src={project.video}
                loop
                autoPlay
                muted
                playsInline
                className='w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </div>
            
            <div className='mt-4'>
              <h3 className='text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-gray-300'>
                {project.title}
              </h3>
              <p className='text-gray-400 text-sm md:text-base'>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;