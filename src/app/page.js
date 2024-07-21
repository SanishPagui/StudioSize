"use client"

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="hero w-auto bg-black text-white h-dvh">
      <div className="">
        <div className="navbar relative w-full h-16 flex items-center p-5 justify-between ">
          <div className="cursor-pointer">
            <Image 
            src="/HeroLogo.svg"
            width={120}
            height={200}
            alt=""
          />
          </div>
          <div onClick={toggleMenu} className="cursor-pointer h-[80%]  flex flex-col justify-center items-center">
            <div className={`w-8 h-8 bg-white my-1 duration-700 transform origin-top ${menuOpen?"rotate-[45deg] translate-y-0.5":"translate-y-0"}`}></div>
            <div className={`w-8 h-8 bg-white my-1 duration-700 transform origin-bottom ${menuOpen?"-rotate-[45deg] -translate-y-2":"translate-y-0"}`}></div>
          </div>
        </div>
        <div className={`fixed duration-1000 w-full h-full bg-black transform transition-opacity ease-in ${menuOpen?"opacity-100":"opacity-0"}`} >
        </div>
        <div className={`fixed ease-in w-full  h-full transform ${menuOpen?"translate-y-[1%] duration-[.1s]":"translate-y-[100%] duration-[2s]"}`}>
          <ul className={`p-4`}>
            <li><Link href='#' className={`block text-6xl font-bold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1s]":"opacity-0 duration-[1.1s]"}`}>Home</Link></li>
            <li><Link href='#' className={`block text-6xl font-bold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.2s]":"opacity-0 duration-[1s]"}`}>Portfolio</Link></li>
            <li><Link href='#' className={`block text-6xl font-bold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.4s]":"opacity-0 duration-[.9s]"}`}>Studio</Link></li>
            <li><Link href='#' className={`block text-6xl font-bold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.6s]":"opacity-0 duration-[.8s]"}`}>Labs</Link></li>
            <li><Link href='#' className={`block text-6xl font-bold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.8s]":"opacity-0 duration-[.7s]"}`}>Contact</Link></li>
          </ul>
        </div>
            <div id="menufooter" className={`fixed top-[90%] ease-in-out w-full h-full transform ${menuOpen?"translate-y-0 duration-[1s]":"translate-y-[150%] duration-[4s]"}`}>
              <div className={`p-2`}>
              <ul className="grid grid-cols-3 grid-rows-3">
                <li><Link href='#' className={`block font-bold p-0.5 text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.4s]":"opacity-0 duration-[.7s]"}`}>Instagram</Link></li>
                <li><Link href='#' className={`block font-bold p-0.5 text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.4s]":"opacity-0 duration-[.7s]"}`}>Vimeo</Link></li>
                <li><Link href='#' className={`block font-bold p-0.5 text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.4s]":"opacity-0 duration-[.7s]"}`}>Savee.it</Link></li>
                <li><Link href='#' className={`block font-bold p-0.5 text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.5s]":"opacity-0 duration-[.4s]"}`}>Behance</Link></li>
                <li><Link href='#' className={`block font-bold p-0.5 text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.5s]":"opacity-0 duration-[.4s]"}`}>Youtube</Link></li>
                <li><Link href='#' className={`block font-bold p-0.5 text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.5s]":"opacity-0 duration-[.4s]"}`}>Fonts in Use</Link></li>
                <li><Link href='#' className={`block font-bold p-0.5 text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.6s]":"opacity-0 duration-[.3s]"}`}>Dribble</Link></li>
                <li><Link href='#' className={`block font-bold p-0.5 text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.6s]":"opacity-0 duration-[.3s]"}`}>LinkedIn</Link></li>
                <li><Link href='#' className={`block font-bold p-0.5 text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.6s]":"opacity-0 duration-[.3s]"}`}>Pinterest</Link></li>
                
              </ul>
              </div>
        </div>
      </div>
    </div>
  )
}