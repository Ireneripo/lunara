import React from 'react';
// import { List, X } from '@phosphor-icons/react';
import Logo from '../Logo/Logo';

function DesktopNav() {
  const menuItems = [
    { name: 'For You', href: '/for-you' },
    { name: 'For Business', href: '/for-business' },
    { name: 'For Providers', href: '/for-providers' },
    { name: 'Our Plans', href: '/our-plans' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <div className="flex items-center">
        <Logo />
        <nav>
          <ul className="flex gap-6 ml-20 cursor-pointer">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="hover:font-medium min-w-fit"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default DesktopNav;
