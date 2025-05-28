import React from 'react';

function SuperHeader({ children }) {
  return (
    <div className='flex bg-[#FECE00] h-14.5 items-center justify-center'>
      <p className='text-[#141313] text-lg cursor-pointer hover:underline'>
        {children}
      </p>
    </div>
  );
}

export default SuperHeader;
