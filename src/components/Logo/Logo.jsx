import React from 'react';

function Logo() {
  return (
    <div className='flex'>
      <img
        src='src/assets/logo.svg'
        className='size-9'
      />
      <p className='fredoka-lunara self-center text-2xl pl-1.5'>lunara</p>
    </div>
  );
}

export default Logo;
