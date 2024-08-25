import React from 'react';

const HeroText = () => {
  return (
    <div className="border-t-[1px] pt-[20vw] text-4xl md:py-48 lg:pt-48 border-black w-full h-[25%] sm:text-6xl sm:h-[40%] md:text-6xl flex flex-col md:h-[25%] tracking-tighter xl:text-8xl xl:h-[45%] lg:pl-12 lg:text-7xl lg:h-[35%] justify-center pl-3 md:pl-6">
      <div className=" font-semibold mt-20 sm:mt-20 md:mt-36 lg:mt-40">Design studio</div>
      <div className='lg:flex gap-4'>
        <div className=" font-semibold">for timeless</div>
        <div className=" font-semibold">branding</div>
      </div>
    </div>
  );
};

export default HeroText;
