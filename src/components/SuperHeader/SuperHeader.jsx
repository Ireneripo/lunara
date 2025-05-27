import React from 'react';

function SuperHeader({ children }) {
  return (
    <div className='flex bg-[#FECE00] h-14.5 items-center justify-center text-lg hover:underline cursor-pointer'>
      {children}
    </div>
  );
}

export default SuperHeader;
