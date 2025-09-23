"use client"
import React, { useEffect, useRef } from 'react';
import MenuComponent from '../component/MenuComponent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const StudioPage = () => {
  const titleRef = useRef(null);
  const contentRefs = useRef([]);

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

    // Content animations
    contentRefs.current.forEach((content, index) => {
      if (content) {
        gsap.fromTo(content,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
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

  const addToContentRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
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
          About Studio
        </h1>

        <div className="max-w-6xl space-y-16 md:space-y-24">
          {/* Philosophy Section */}
          <div 
            ref={addToContentRefs}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
                Our Philosophy
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Great design has no expiration date. It lasts for years and inspires instantly. 
                Our creative freedom enables us to spend more time on fewer projects and focus on 
                the intellectual, functional, and artistic aspects of business.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Looking to create profound ideas, timeless design, and beauty in everyday life.
              </p>
            </div>
          </div>

          {/* Approach Section */}
          <div 
            ref={addToContentRefs}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
                Our Approach
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Big multinational companies or small local brands. Partner approach with one 
                universal goal - to create authentic, functional, and beautiful design.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                We believe in the power of simplicity and the beauty of well-crafted design. 
                Our multidisciplinary approach ensures that every project receives the attention 
                and expertise it deserves.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div 
            ref={addToContentRefs}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
                What We Do
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {[
                'Branding',
                'Strategy',
                'Packaging',
                'Motion',
                'Web Design',
                'Photography',
                'Naming',
                'Brand Art'
              ].map((service, index) => (
                <div key={index} className="border-b border-gray-800 pb-4">
                  <span className="text-lg md:text-xl font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div 
            ref={addToContentRefs}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
                The Team
              </h2>
            </div>
            <div className="space-y-8">
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Creative Director</h3>
                <p className="text-gray-400">
                  Leading creative vision and ensuring every project meets our high standards.
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Design Team</h3>
                <p className="text-gray-400">
                  Talented designers specializing in various disciplines from branding to motion.
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Strategy</h3>
                <p className="text-gray-400">
                  Strategic thinkers who help shape brands and their market position.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div 
            ref={addToContentRefs}
            className="text-center py-16 border-t border-gray-800"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
              Let's work together
            </h2>
            <motion.button 
              className="px-8 py-4 border border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioPage;