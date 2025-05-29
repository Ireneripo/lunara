import React from 'react';
import Button from '../Button/Button';

function Hero() {
  return (
    <div className='flex justify-between mx-40 gap-36 mt-36'>
      <div>
        <h1 className='text-6xl font-semibold mb-4'>
          Find your path to mental wellness
        </h1>
        <p className='text-lg text-gray-500'>
          Discover the power of mindfulness and meditation with our app, improve
          your sleep and say goodbye to stressful days.
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
