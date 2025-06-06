import React from 'react';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

function FooterEnd() {
  return (
    <div className="bg-[#44423E] px-8 py-6">
      <div className="flex flex-col items-center gap-6">
        <ul className="flex gap-6">
          <li>
            <a href="#">
              {
                <FacebookLogo
                  size={24}
                  color="white"
                />
              }
            </a>
          </li>
          <li>
            <a href="#">
              {
                <InstagramLogo
                  size={24}
                  color="white"
                />
              }
            </a>
          </li>
          <li>
            <a href="#">
              {
                <LinkedinLogo
                  size={24}
                  color="white"
                />
              }
            </a>
          </li>
          <li>
            <a href="#">
              {
                <XLogo
                  size={24}
                  color="white"
                />
              }
            </a>
          </li>
          <li>
            <a href="#">
              {
                <YoutubeLogo
                  size={24}
                  color="white"
                />
              }
            </a>
          </li>
        </ul>
        <div>
          <ul className="flex gap-6">
            <li className="text-white text-sm hover:underline cursor-pointer">
              <a href="#">© 2025 Lunara. All rights reserved.</a>
            </li>
            <li className="text-white text-sm hover:underline cursor-pointer hidden md:block">
              <a href="#">Terms & conditions</a>
            </li>
            <li className="text-white text-sm hover:underline cursor-pointer hidden md:block">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="text-white text-sm hover:underline cursor-pointer hidden md:block">
              <a href="#">Consumer Health Data</a>
            </li>
            <li className="text-white text-sm hover:underline cursor-pointer hidden md:block">
              <a href="#">Sharing Settings</a>
            </li>
            <li className="text-white text-sm hover:underline cursor-pointer hidden md:block">
              <a href="#">CA Privacy Notice</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterEnd;
