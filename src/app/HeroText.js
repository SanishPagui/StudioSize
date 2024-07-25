import React from 'react';

const HeroText = () => {
  const packaging = ['p', 'a', 'c', 'k', 'a', 'g', 'i', 'n', 'g'];
  const motion = [ 'm','o','t','i','o','n'];
  const naming = [ 'n','a','m','i','n','g'];
  const branding = [ 'b','r','a','n','d','i','n','g'];
  return (
    <div className="w-full h-[40%] flex flex-col justify-center pl-6">
      <span className="text-7xl font-semibold">Design studio</span>
      <span className="text-7xl font-semibold">for timeless</span>
      <div className="flex font-semibold text-7xl">
        <div className='fixed hidden'>
        {packaging.map((item, index) => (
          <span key={index} className="mr-1">{item}</span>
        ))}
        </div>
        <div className='fixed hidden'>

        {motion.map((item, index) => (
          <span key={index} className="mr-1">{item}</span>
        ))}
        </ div>
        <div className='fixed hidden'>

        {naming.map((item, index) => (
          <span key={index} className="mr-1">{item}</span>
        ))}
        </div>
        <div className='fixed hidden'>

        {branding.map((item, index) => (
          <span key={index} className="mr-1">{item}</span>
        ))}
        </div>
      </div>
    </div>
  );
};

export default HeroText;
