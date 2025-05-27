import React from 'react';
import Navbar from '../Navbar/Navbar';
import Options from '../Options/Options';
import SuperHeader from '../SuperHeader/SuperHeader';

function Header() {
  return (
    <>
      {/* <div className="flex items-center mt-7"> */}
      <SuperHeader>Lunara therapy is now available →</SuperHeader>
      <div className='flex justify-between mx-12 mt-4'>
        <Navbar />
        <Options />
      </div>
    </>
  );
}

export default Header;
