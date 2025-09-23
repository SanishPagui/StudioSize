"use client"
import React, { useEffect } from 'react'
import MenuComponent from './component/MenuComponent'
import HeroText from '@app/HeroText'
import MainVideo from './component/MainVideo'
import FeaturedWorks from './component/FeaturedWorks'
import Cards from './component/Cards'
import AfterCard from './component/AfterCard'
import HoverText from './component/HoverText'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  useEffect(() => {
    // Initialize Lenis with optimized settings
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
    })

    // Animation frame function
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(() => {})
    }
  }, [])

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <MenuComponent />
      <HeroText />
      <MainVideo />
      <FeaturedWorks />
      <Cards />
      <AfterCard />
      <HoverText />
    </div>
  )
}