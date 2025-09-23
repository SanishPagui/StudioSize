"use client"
import React, { useEffect, useRef } from 'react';
import MenuComponent from '../component/MenuComponent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Gloria",
      description: "Praise the bubbles",
      category: "Branding",
      year: "2023",
      video: "/video/FW1.mp4",
      slug: "gloria"
    },
    {
      id: 2,
      title: "Exat",
      description: "Modernism in motion",
      category: "Motion",
      year: "2023",
      video: "/video/FW2.mp4",
      slug: "exat"
    },
    {
      id: 3,
      title: "Divote",
      description: "Clean Korean cosmetics",
      category: "Packaging",
      year: "2023",
      video: "/video/FW3.mp4",
      slug: "divote"
    },
    {
      id: 4,
      title: "VK Ikons",
      description: "Iconic wine blend",
      category: "Branding",
      year: "2022",
      video: "/video/FW4.mp4",
      slug: "vk-ikons"
    },
    {
      id: 5,
      title: "Ars Futura",
      description: "Future starts today",
      category: "Web Design",
      year: "2023",
      video: "/video/FW5.mp4",
      slug: "ars-futura"
    },
    {
      id: 6,
      title: "Vignelli Anniversary",
      description: "Paying tribute to Massimo",
      category: "Typography",
      year: "2022",
      video: "/video/FW6.mp4",
      slug: "vignelli"
    },
    {
      id: 7,
      title: "Umaki",
      description: "Trip for your taste buds",
      category: "Branding",
      year: "2023",
      video: "/video/FW7.mp4",
      slug: "umaki"
    },
    {
      id: 8,
      title: "Cinderic",
      description: "Minimal architecture",
      category: "Branding",
      year: "2022",
      video: "/video/FW8.mp4",
      slug: "cinderic"
    },
    {
      id: 9,
      title: "Bronza",
      description: "Coined pasta",
      category: "Packaging",
      year: "2023",
      video: "/video/FW9.mp4",
      slug: "bronza"
    },
    {
      id: 10,
      title: "Motion Array",
      description: "Awesome motion templates",
      category: "Motion",
      year: "2023",
      video: "/video/FW10.mp4",
      slug: "motion-array"
    },
    {
      id: 11,
      title: "Pomalo",
      description: "Laid-back skincare",
      category: "Branding",
      year: "2022",
      video: "/video/FW11.mp4",
      slug: "pomalo"
    }
  ];

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Title animation
    gsap.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
      }
    );

    // Project animations
    projectRefs.current.forEach((project, index) => {
      if (project) {
        gsap.fromTo(project,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <MenuComponent />
      
      <div className="pt-32 md:pt-40 px-4 md:px-6 lg:px-12 pb-20">
        <h1 
          ref={titleRef}
          className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-semibold leading-[0.9] tracking-tight mb-16 md:mb-24"
        >
          Selected Work
        </h1>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16"
        >
          {projects.map((project, index) => (
            <Link href={`/work/${project.slug}`} key={project.id}>
              <div 
                ref={addToProjectRefs}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-900 mb-6">
                  <video
                    src={project.video}
                    loop
                    autoPlay
                    muted
                    playsInline
                    className='w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-gray-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-base">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;