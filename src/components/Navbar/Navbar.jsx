import React from 'react';
import { List, X } from '@phosphor-icons/react';
import Logo from '../Logo/Logo';

function Navbar() {
  return (
    <>
      <div className="flex items-center">
        <Logo />
        <ul className="flex gap-6 ml-20 cursor-pointer">
          <li className="hover:font-medium min-w-fit">For You</li>
          <li className="hover:font-medium min-w-fit">For Business</li>
          <li className="hover:font-medium min-w-fit">For Providers</li>
          <li className="hover:font-medium min-w-fit">Our Plans</li>
          <li className="hover:font-medium min-w-fit">Resources</li>
          <li className="hover:font-medium min-w-fit">About</li>
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
