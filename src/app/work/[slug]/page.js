"use client"
import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import MenuComponent from '../../component/MenuComponent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const ProjectPage = () => {
  const params = useParams();
  const titleRef = useRef(null);
  const contentRefs = useRef([]);

  // Mock project data - in real app this would come from API/CMS
  const projects = {
    'gloria': {
      title: 'Gloria',
      description: 'Praise the bubbles',
      category: 'Branding',
      year: '2023',
      client: 'Gloria Beverages',
      services: ['Brand Identity', 'Packaging Design', 'Art Direction'],
      overview: 'Gloria is a premium sparkling water brand that celebrates the joy of effervescence. Our challenge was to create a brand identity that captures the playful yet sophisticated nature of the product.',
      challenge: 'The sparkling water market is crowded with established players. Gloria needed to stand out while communicating premium quality and joyful experience.',
      solution: 'We developed a bubbly, energetic brand identity with custom typography that mimics the movement of bubbles. The color palette is fresh and vibrant, evoking celebration and purity.',
      images: ['/video/FW1.mp4'],
      nextProject: 'exat'
    },
    'exat': {
      title: 'Exat',
      description: 'Modernism in motion',
      category: 'Motion Graphics',
      year: '2023',
      client: 'Exat Studio',
      services: ['Motion Design', 'Brand Identity', 'Digital Design'],
      overview: 'Exat is a design studio specializing in modernist architecture. We created a motion-first brand identity that reflects their geometric, clean aesthetic.',
      challenge: 'How do you represent architectural precision and movement in a brand identity that works across all touchpoints?',
      solution: 'We developed a modular logo system that can animate and transform while maintaining its core geometric principles. The motion language is precise yet fluid.',
      images: ['/video/FW2.mp4'],
      nextProject: 'divote'
    },
    'divote': {
      title: 'Divote',
      description: 'Clean Korean cosmetics',
      category: 'Packaging',
      year: '2023',
      client: 'Divote Cosmetics',
      services: ['Packaging Design', 'Brand Identity', 'Art Direction'],
      overview: 'Divote brings Korean skincare philosophy to the global market with clean, effective formulations and minimal packaging.',
      challenge: 'Standing out in the competitive K-beauty market while maintaining authenticity and premium positioning.',
      solution: 'Clean, minimal packaging with subtle Korean typography influences. The design emphasizes purity and effectiveness through thoughtful use of white space.',
      images: ['/video/FW3.mp4'],
      nextProject: 'gloria'
    }
  };

  const project = projects[params.slug] || projects['gloria'];

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
        {/* Project Header */}
        <div ref={titleRef} className="mb-16 md:mb-24">
          <div className="flex items-center mb-6">
            <Link href="/work" className="text-gray-400 hover:text-white transition-colors duration-300">
              ← Back to Work
            </Link>
          </div>
          
          <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-semibold leading-[0.9] tracking-tight mb-8">
            {project.title}
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">Category</h3>
              <p className="text-lg">{project.category}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">Year</h3>
              <p className="text-lg">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">Client</h3>
              <p className="text-lg">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">Services</h3>
              <p className="text-lg">{project.services.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Project Video */}
        <div ref={addToContentRefs} className="mb-16 md:mb-24">
          <video
            src={project.images[0]}
            loop
            autoPlay
            muted
            playsInline
            className='w-full h-[60vh] md:h-[70vh] object-cover rounded-lg'
          />
        </div>

        {/* Project Content */}
        <div className="max-w-4xl space-y-16 md:space-y-24">
          <div ref={addToContentRefs} className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Overview</h2>
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                {project.overview}
              </p>
            </div>
          </div>

          <div ref={addToContentRefs} className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Challenge</h2>
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                {project.challenge}
              </p>
            </div>
          </div>

          <div ref={addToContentRefs} className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Solution</h2>
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div ref={addToContentRefs} className="mt-24 pt-16 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 mb-2">Next Project</p>
              <Link href={`/work/${project.nextProject}`} className="text-2xl md:text-3xl font-semibold hover:text-gray-300 transition-colors duration-300">
                {projects[project.nextProject]?.title} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;