import React, { useEffect } from 'react'


const MainVideo = () => {
  return (
    <div className='mt-2 w-full'>
        <video className="w-screen" poster="https:/studio-size.com/wp-content/uploads/2024/06/Reel-Preview-2.gif"></video>
        <h1 className='absolute z-10 md:hidden -translate-y-20  pl-4 text-xl sm:text-2xl font-extrabold'>Showreel</h1>
        <h2 className='absolute z-10 md:hidden -translate-y-12 text-gray-500 sm:text-2xl text-xl pl-4'>45sec</h2>
        <div className='flex w-full bg-red-500 justify-end'>
        <button className='absolute z-10 md:hidden -translate-x-6 -translate-y-20 bg-white w-14 h-14 sm:h-20 sm:w-20 sm:-translate-y-[96px] rounded-full'></button>
        <svg className='absolute z-10 md:hidden -translate-x-6 w-12 h-10 -translate-y-[72px] sm:h-14 sm:w-14 sm:-translate-y-[85px] sm:-translate-x-8 text-black' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        </div>
    </div>
  )
}

export default MainVideo