import React from 'react';

function Logo() {
  return (
    <div className='flex'>
      <img
        src='src/assets/logo.svg'
        className='size-10'
      />
      <p className='fredoka-lunara self-center text-2xl pl-2'>lunara</p>
    </div>
  );
}

export default Logo;
