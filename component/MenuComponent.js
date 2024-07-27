import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
const MenuComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
    <>
    <div className=" navbar w-full  h-20 md:h-32 flex flex-wrap items-center justify-between ">
      <div className=" p-5 lg:p-12">
      <Image className='cursor-pointer '
      src="/HeroLogo.svg"
      width={150}
      height={200}
      alt=""
      />
      </div>
      <div onClick={toggleMenu} className=" cursor-pointer w-[13%] h-[100%] flex flex-col justify-center items-center md:hidden">
        <div className={` w-8 h-0.5 bg-white my-1 duration-700 transform ${menuOpen?"rotate-[45deg] translate-y-0.5":"translate-y-0"}`}></div>
        <div className={` w-8 h-0.5 bg-white my-1 duration-700 transform ${menuOpen?"-rotate-[45deg] -translate-y-2":"translate-y-0"}`}></div>
      </div>
    
    <div className={`fixed w-full h-full bg-black transform transition-opacity ease-in ${menuOpen?"opacity-100 translate-y-[55%] duration-[.2s]":"opacity-0 translate-y-[60%] duration-[2.5s]"}`} >
    </div>
    <div className={`fixed ease-in w-[50%] md:static md-flex md:translate-y-[32%] md:transition-none h-full transform ${menuOpen?"translate-y-[58%] duration-[.1s]":"translate-y-[150%] duration-[2.5s]"}`}>
    <ul className={`p-4 md:static md:flex md:justify-end md:opacity-100 md:h-16 md:items-center md:transition-none transition-transform ${menuOpen?"-translate-y-5 duration-[1s]":"-translate-y-0 duration-[1s]"}`}>
      <div className={`md:flex md:-translate-y-4`}>
      <li><Link href='#' className={`block pr-4 md:transition-none md:hover:underline text-6xl md:text-lg lg:text-xl font-bold text-white md:opacity-100 transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1s]":"opacity-0 duration-[.5s]"}`}>Home</Link></li>
      <li><Link href='#' className={`block pr-4 md:transition-none md:hover:underline text-6xl md:text-lg lg:text-xl font-bold text-white md:opacity-100 transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.2s]":"opacity-0 duration-[.4s]"}`}>Portfolio</Link></li>
      <li><Link href='#' className={`block pr-4 md:transition-none md:hover:underline text-6xl md:text-lg lg:text-xl font-bold text-white md:opacity-100 transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.4s]":"opacity-0 duration-[.3s]"}`}>Studio</Link></li>
      <li><Link href='#' className={`block pr-4 md:transition-none md:hover:underline text-6xl md:text-lg lg:text-xl font-bold text-white md:opacity-100 transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.6s]":"opacity-0 duration-[.2s]"}`}>Labs</Link></li>
      <li><Link href='#' className={`block md:transition-none md:hover:underline text-6xl md:text-lg lg:text-xl font-bold text-white md:opacity-100 transform ease-in transition-opacity ${menuOpen?"opacity-100 duration-[1.8s]":"opacity-0 duration-[.2s]"}`}>Contact</Link></li>
      </div>
    </ul>
      </div>
    </div>  
    </>
  )
}

export default MenuComponent