"use client"
import React, { useEffect, useRef, useState } from 'react';
import MenuComponent from '../component/MenuComponent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: ''
  });

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

    // Animations
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

    gsap.fromTo([formRef.current, infoRef.current],
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
        stagger: 0.2
      }
    );

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <MenuComponent />
      
      <div className="pt-32 md:pt-40 px-4 md:px-6 lg:px-12 pb-20">
        <h1 
          ref={titleRef}
          className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-semibold leading-[0.9] tracking-tight mb-16 md:mb-24"
        >
          Let's talk
        </h1>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl">
          {/* Contact Form */}
          <div ref={formRef}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Start a project
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:border-white focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:border-white focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:border-white focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-black border-b border-gray-700 py-3 text-lg focus:border-white focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select budget</option>
                    <option value="5k-15k">$5k - $15k</option>
                    <option value="15k-30k">$15k - $30k</option>
                    <option value="30k-50k">$30k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Tell us about your project *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="px-8 py-4 border border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                Get in touch
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We're always excited to hear about new projects and opportunities. 
                Let's discuss how we can bring your vision to life.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <a href="mailto:hello@studio-size.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  hello@studio-size.com
                </a>
              </div>

              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>

              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-gray-400">
                  New York, NY<br />
                  United States
                </p>
              </div>

              <div className="border-b border-gray-800 pb-6">
                <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Behance
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Dribbble
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">What to expect</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Response within 24 hours</li>
                <li>• Free initial consultation</li>
                <li>• Detailed project proposal</li>
                <li>• Collaborative design process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;