import React from 'react'
const MainVideo = () => {
  return (
    <div className='mt-2 w-full'>
        <video className="w-screen" poster="https:/studio-size.com/wp-content/uploads/2024/06/Reel-Preview-2.gif"></video>
        <div className='absolute z-10 '>
        <h1 className='-translate-y-20  pl-4 text-xl font-extrabold'>Showreel</h1>
        <h2 className='-translate-y-20 text-gray-500 text-xl pl-4'>45sec</h2>
        </div>
    </div>
  )
}

export default MainVideo