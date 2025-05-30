import React from 'react';
import Button from '../Button/Button';

function Hero() {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex gap-12 p-12 my-0 w-[85%]'>
        <div className='self-center'>
          <h1 className='text-6xl font-semibold mb-4'>
            Find your path to mental wellness
          </h1>
          <p className='text-lg text-gray-500'>
            Discover the power of mindfulness and meditation with our app,
            improve your sleep and say goodbye to stressful days.
          </p>
          <Button className='bg-[#141313]/90 hover:bg-[#141313] text-white px-11 py-5 rounded-full shadow shadow-gray-500 text-xl font-semibold mt-6 cursor-pointer'>
            Try for $0
          </Button>
        </div>
        <div className='w-[850px]'>
          <img
            className='w-full'
            src='src/assets/hero2.png'
            alt='Phone with background'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
