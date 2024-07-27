import React from 'react'
import Image from "next/image";
const MainVideo = () => {
  return (
    <div className='flex'>
        <video className="w-full" poster="https://studio-size.com/wp-content/uploads/2024/06/Reel-Preview-2.gif"></video>
        <h1 className='absolute mt-64 pl-5  text-2xl font-extrabold'>Showreel</h1>
        <h2 className='absolute mt-72 text-gray-500 text-xl pl-5'>45sec</h2>
    </div>
  )
}

export default MainVideo