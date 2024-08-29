"use client"
import React,{useEffect} from 'react'
import MenuComponent from './component/MenuComponent'
import HeroText from '@app/HeroText'
import MainVideo from './component/MainVideo'
import FeaturedWorks from './component/FeaturedWorks'
import Cards from './component/Cards'
import AfterCard from './component/AfterCard'
import HoverText from './component/HoverText'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { ReactLenis, useLenis } from 'lenis/react'
import Lenis from '@studio-freight/lenis'
gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  useEffect(()=>{
    const lenis=new Lenis({
      duration: 2,
      easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t)),
      smooth:true,
      direction:'vertical',
      gestureDirection:'vertical',
      smoothTouch: false,
    })
    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return()=>{
      lenis.destroy()
    }
  })
  return (
    <div id='smooth-wrapper' className="hero w-auto bg-black text-white h-dvh">
      <div id='smooth-content'>
        <MenuComponent/>
        <HeroText/>
        <MainVideo/>
        <FeaturedWorks/>
        <Cards/>
        <AfterCard/>
        <HoverText/>
      </div>
    </div>
  )
}