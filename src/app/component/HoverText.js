import React from 'react'

const HoverText = () => {
  return (
    <div className='bg-black h-fit w-full border-t-2 border-black'>
        <div className='pl-2 mt-[20vw] '>
            <div>Services</div>
            <div className='pl-1 text-[10vw] md:text-[5vw] md:leading-[6vw] mt-[4vw] leading-[12vw] md:flex '>
                <div className='w-1/2'>

                </div>
                <div className='md:cursor-pointer md:hover:text-white'>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Branding</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Brand Strategy</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Motion graphics</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Video editing</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>3D animation</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Audio production</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Web design</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Photography</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Naming</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Packaging</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Advertising</div>
                    <div className='text-[#3b3b3b] font-extrabold tracking-tighter'>Brand art</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HoverText