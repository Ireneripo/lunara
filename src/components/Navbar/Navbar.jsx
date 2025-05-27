import React from 'react';
import { List, X } from '@phosphor-icons/react';
import Logo from '../Logo/Logo';

function Navbar() {
  return (
    <>
      <div className='flex items-center'>
        <Logo />
        <ul className='flex gap-6 ml-20'>
          <li className='hover:font-medium'>For You</li>
          <li className='hover:font-medium'>For Business</li>
          <li className='hover:font-medium'>For Providers</li>
          <li className='hover:font-medium'>Our Plans</li>
          <li className='hover:font-medium'>Resources</li>
          <li className='hover:font-medium'>About</li>
        </ul>
      </div>

      {/* <List
        size={32}
        weight="bold"
      />
      <X
        size={32}
        weight="bold"
      /> */}
    </>
  );
}

export default Navbar;
