import { ArrowRight } from 'lucide-react'
import React from 'react'
const AfterCard = () => {
  return (
    <div className='w-full h-fit bg-black border-t-2 border-black'>
        <div className='w-full h-fit mt-[11vh] '>
            <div className='pl-[2vh] md:pr-[50vw] text-[8vw] md:text-[5vw] tracking-tight text leading-none w-[75vw] font-bold md:font-semibold md:w-full'>
                <div>
                    Back to the simple,
                </div>
                <div className='leading-none'>
                    intuitive and inspiring.
                </div>
            </div>
            <div className='mt-[10vh] md:mt-[3vw] md:flex md:items-center md:justify-center'>
                <div className='w-[90vw] md:w-[150vw]'>
                    <video
                        src={'./video/AfterCardVid.mp4'}
                        loop
                        autoPlay
                        muted
                        className='w-full'
                    />
                </div>
                <div className='mt-[4vh]  pr-[24%] md:pr-0 md:items-center md:mt-[15vw]'>   
                    <div className='pl-[2vh] md:text-[2vw] font-semibold text-[4vw] tracking-tight leading-tight'>
                        Big multinational companies or small local brands. Partner approach with one universal goal - to create authentic, functional, and beautiful design.
                    </div>
                    <div className='pl-[2vh] mt-[3.5vh] flex space-x-11'>
                        <div className='text-[4vw] md:text-[2vw] font-semibold'>
                            Let's talk
                        </div>
                        <button className='z-0 font-semibold -translate-y-[1.5vw] bg-[#242323] rounded-full flex items-center justify-center cursor-pointer w-[9vw] h-[9vw] md:w-[5vw] md:h-[5vw]'>
                            <ArrowRight/>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default AfterCard