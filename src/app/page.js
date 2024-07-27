"use client"
import React from 'react'
import MenuComponent from '../../component/MenuComponent'
import HeroText from '@app/HeroText'
import MainVideo from '@app/MainVideo'
export default function Page() {
  return (
    <div className="hero w-auto bg-black text-white h-dvh">
      <MenuComponent/>
      <HeroText/>
      <MainVideo/>
    </div>
  )
}