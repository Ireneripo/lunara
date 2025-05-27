import React from 'react';
import Navbar from '../Navbar/Navbar';
import Options from '../Options/Options';
import SuperHeader from '../SuperHeader/SuperHeader';

function Header() {
  return (
    <div className='bg-[#ffffff]'>
      <SuperHeader>Lunara therapy is now available →</SuperHeader>
      <div className='flex justify-between mx-12 h-20'>
        <Navbar />
        <Options />
      </div>
    </div>
  );
}

export default Header;
