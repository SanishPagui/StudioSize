"use client"
import React, { useEffect, useRef } from 'react';
import MenuComponent from '../component/MenuComponent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const LabsPage = () => {
  const titleRef = useRef(null);
  const experimentRefs = useRef([]);

  const experiments = [
    {
      id: 1,
      title: "Typography Explorations",
      description: "Experimental typeface designs and typography treatments",
      type: "Type Design",
      year: "2023"
    },
    {
      id: 2,
      title: "Motion Studies",
      description: "Kinetic typography and motion graphics experiments",
      type: "Motion",
      year: "2023"
    },
    {
      id: 3,
      title: "Color Theory",
      description: "Exploring color relationships and emotional impact",
      type: "Color",
      year: "2023"
    },
    {
      id: 4,
      title: "Geometric Patterns",
      description: "Mathematical patterns and algorithmic design",
      type: "Pattern",
      year: "2023"
    },
    {
      id: 5,
      title: "Brand Symbols",
      description: "Conceptual logo and symbol explorations",
      type: "Symbol",
      year: "2023"
    },
    {
      id: 6,
      title: "Interactive Design",
      description: "Web animations and interactive experiences",
      type: "Digital",
      year: "2023"
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

    // Experiment animations
    experimentRefs.current.forEach((experiment, index) => {
      if (experiment) {
        gsap.fromTo(experiment,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: experiment,
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

  const addToExperimentRefs = (el) => {
    if (el && !experimentRefs.current.includes(el)) {
      experimentRefs.current.push(el);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <MenuComponent />
      
      <div className="pt-32 md:pt-40 px-4 md:px-6 lg:px-12 pb-20">
        <div className="mb-16 md:mb-24">
          <h1 
            ref={titleRef}
            className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-semibold leading-[0.9] tracking-tight mb-8"
          >
            Labs
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
            Our experimental space for exploring new ideas, techniques, and creative directions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {experiments.map((experiment, index) => (
            <div 
              key={experiment.id}
              ref={addToExperimentRefs}
              className="group cursor-pointer"
            >
              <div className="border border-gray-800 rounded-lg p-8 h-[300px] flex flex-col justify-between hover:border-gray-600 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      {experiment.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {experiment.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {experiment.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {experiment.description}
                  </p>
                </div>
                
                <div className="flex items-center text-gray-500 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm">Explore</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            More experiments coming soon
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're constantly exploring new creative territories. Check back regularly 
            to see our latest experiments and creative explorations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LabsPage;