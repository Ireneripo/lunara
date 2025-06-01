import React from 'react';
import Button from '../Button/Button';

function Hero() {
  return (
    <div className='bg-[#F9F4F2]'>
      <div className='flex justify-between items-center py-8 px-12 max-w-7xl mx-auto gap-22'>
        <div className='w-1/2'>
          <div className='self-center'>
            <h1 className='text-6xl font-semibold mb-4'>
              Find your path to mental wellness
            </h1>
            <p className='text-lg text-gray-500'>
              Discover the power of mindfulness and meditation with our app,
              improve your sleep and say goodbye to stressful days.
            </p>
            <Button className='bg-[#141313]/90 hover:bg-[#141313] text-white px-11 py-5 rounded-full shadow shadow-gray-500 text-2xl font-semibold mt-7 cursor-pointer'>
              Try for $0
            </Button>
          </div>
        </div>
        <div className='w-1/2'>
          <img
            className='w-11/12'
            src='src/assets/hero.webp'
            alt='Phone with background'
          />
        </div>
      </div>
    </div>
  );
}
// className='bg-[#F9F4F2]

export default Hero;
