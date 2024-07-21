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
        <div className="navbar relative w-full h-24 flex items-center p-5 justify-between ">
          <div className="cursor-pointer">
            <Image 
            src="/HeroLogo.svg"
            width={170}
            height={200}
            alt=""
          />
          </div>
          <div onClick={toggleMenu} className="cursor-pointer h-[70%]  flex flex-col justify-center items-center">
            <div className={`w-8 h-[7%] bg-white my-1 duration-700 transform origin-top ${menuOpen?"rotate-[45deg] w-9 translate-y-1":"translate-y-0"}`}></div>
            <div className={`w-8 h-[7%] bg-white my-1 duration-700 transform origin-bottom ${menuOpen?"-rotate-[45deg] w-9 -translate-y-2":"translate-y-0"}`}></div>
          </div>
        </div>
        <div className={`fixed duration-1000 w-full h-full bg-black transform transition-opacity ease-in ${menuOpen?"opacity-100":"opacity-0"}`} >
        </div>
        <div className={`fixed ease-in w-full  h-full transform ${menuOpen?"translate-y-[5%] duration-[.1s]":"translate-y-[100%] duration-[2s]"}`}>
          <ul className={`p-5 `}>
            <li><Link href='#' className={`block text-8xl font-extrabold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.5s]":"opacity-0 duration-[1.5s]"}`}>Home</Link></li>
            <li><Link href='#' className={`block text-8xl font-extrabold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.8s]":"opacity-0 duration-[1.3s]"}`}>Portfolio</Link></li>
            <li><Link href='#' className={`block text-8xl font-extrabold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.2s]":"opacity-0 duration-[1.1s]"}`}>Studio</Link></li>
            <li><Link href='#' className={`block text-8xl font-extrabold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.5s]":"opacity-0 duration-[.9s]"}`}>Labs</Link></li>
            <li><Link href='#' className={`block text-8xl font-extrabold text-white transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[2.8s]":"opacity-0 duration-[.7s]"}`}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}