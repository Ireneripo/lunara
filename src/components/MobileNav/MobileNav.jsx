import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import {
  List,
  X,
  CaretRight,
  UserCircle,
  Question,
} from '@phosphor-icons/react';

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <div className="flex justify-between items-center w-full">
        <Logo />

        <div className="flex items-center gap-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow shadow-gray-500 min-w-fit cursor-pointer font-semibold h-8 px-6 text-sm">
            Try for free
          </Button>
          <button
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            {!isMenuOpen && (
              <List
                size={30}
                weight="light"
              />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={toggleMenu}
        >
          <div className="fixed top-0 right-0 w-90 p-4 bg-white shadow-2xl shadow-gray-300 h-screen z-[9999] isolate">
            <div className="flex justify-end mb-5 h-18">
              <button
                className="cursor-pointer"
                onClick={toggleMenu}
              >
                {isMenuOpen && (
                  <X
                    size={30}
                    weight="bold"
                    className="bg-gray-100 text-black rounded-full size-fit p-1"
                  />
                )}
              </button>
            </div>
            <div className="">
              <nav>
                <ul className="flex flex-col gap-5 md:gap-8 text-2xl">
                  {menuItems.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center gap-6 cursor-pointer"
                    >
                      {item.name}
                      <CaretRight
                        size={20}
                        weight="bold"
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="border-t border-gray-500 mt-8"></div>
            <div className="flex flex-col pt-6 mt-2 font-bold text-lg">
              <button className="flex items-center gap-2 cursor-pointer h-12">
                <UserCircle
                  size={28}
                  weight="bold"
                  className="text-gray-400"
                />
                Login
              </button>
              <button className="flex items-center gap-2 cursor-pointer h-12">
                <Question
                  size={28}
                  weight="bold"
                  className="text-gray-400"
                />
                Help
              </button>
            </div>
            <div className="hidden md:flex mt-8 justify-center">
              <div className="relative w-[300px] cursor-pointer">
                <img
                  className="rounded-3xl w-full h-[230px] object-cover"
                  src="src/assets/MobileNavSun.webp"
                  alt="MobileNavSun"
                />
                <div className="absolute bottom-0 w-full bg-[#F9F4F2] rounded-b-3xl shadow-md py-4 flex items-center justify-center h-[42px]">
                  <p>Try for free →</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 w-full">
              <Button className="text-white rounded-full hover:rounded-[32px] bg-gray-800 hover:bg-black shadow shadow-gray-500 w-[90%] h-18 cursor-pointer font-bold text-2xl mx-auto">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNav;
