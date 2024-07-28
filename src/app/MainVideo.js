import React, { useEffect } from 'react'
import { useState } from 'react';

const MainVideo = () => {
  return (
    <div className='mt-2 w-full'>
        <video className="w-screen" poster="https:/studio-size.com/wp-content/uploads/2024/06/Reel-Preview-2.gif"></video>
        <div className='absolute z-10 md:hidden'>
        <h1 className='-translate-y-20  pl-4 text-xl sm:text-2xl font-extrabold'>Showreel</h1>
        <h2 className='-translate-y-20 text-gray-500 sm:text-2xl text-xl pl-4'>45sec</h2>
        </div>
    </div>
  )
}

export default MainVideo