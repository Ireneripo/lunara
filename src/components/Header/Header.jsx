import React from 'react';
import Navbar from '../Navbar/Navbar';
import Options from '../Options/Options';

function Header() {
  return (
    <>
      {/* <div className="flex items-center mt-7"> */}
      <div className='flex justify-between mx-12 mt-7'>
        <Navbar />
        <Options />
      </div>
    </>
  );
}

export default Header;
