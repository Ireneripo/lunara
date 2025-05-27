import React from 'react';
import Button from '../Button/Button';

function Hero() {
  return (
    <div className='flex justify-between mx-44 gap-36 mt-20'>
      <div>
        <h1 className='text-6xl font-bold mb-4'>
          Find your path to mental wellness
        </h1>
        <p className='text-lg'>
          Our app is a collection of tools to help you manage your mental
        </p>
        <Button className='bg-[#141313]/90 hover:bg-[#141313] text-white px-11 py-5 rounded-full shadow shadow-gray-500 text-xl font-semibold mt-6 cursor-pointer'>
          Try 14 days free
        </Button>
      </div>
      <div className='w-1/2 flex'>
        <img
          className='w-full self-center'
          src='src/assets/hero-phone.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default Hero;
