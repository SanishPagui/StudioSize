"use client"
import React from 'react'
import MenuComponent from './component/MenuComponent'
import HeroText from '@app/HeroText'
import MainVideo from './component/MainVideo'
import FeaturedWorks from './component/FeaturedWorks'
import Cards from './component/Cards'

export default function Page() {
  return (
    <div className="hero w-auto bg-black text-white h-dvh">
      <MenuComponent/>
      <HeroText/>
      <MainVideo/>
      <FeaturedWorks/>
      <Cards/>
    </div>
  )
}