import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

import LanguageSelector from "../LanguageSelector/LanguageSelector";

function FooterLegal() {
  return (
    <div className="bg-[#44423E] px-8 py-6">
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
        <div>
          <ul className="flex max-w-lg m-[-6px] md:flex-wrap">
            <li className="text-[#C7C6C5] text-xs hover:underline cursor-pointer max-w-32 md:mr-4 md:min-w-32 m-1.5 md:my-1.5">
              <a href="#">© 2025 Lunara Inc.</a>
            </li>
            <li className="text-[#C7C6C5] text-xs hover:underline cursor-pointer hidden md:block max-w-32 md:mr-4 md:min-w-32 m-1.5 md:my-1.5">
              <a href="#">Terms & conditions</a>
            </li>
            <li className="text-[#C7C6C5] text-xs hover:underline cursor-pointer hidden md:block m-w-32 md:mr-4 md:min-w-32 m-1.5 md:my-1.5">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="text-[#C7C6C5] text-xs hover:underline cursor-pointer hidden md:block m-w-32 md:mr-4 md:min-w-32 m-1.5 md:my-1.5">
              <a href="#">Consumer Health Data</a>
            </li>
            <li className="text-[#C7C6C5] text-xs hover:underline cursor-pointer hidden md:block m-w-32 md:mr-4 md:min-w-32 m-1.5 md:my-1.5">
              <a href="#">Sharing Settings</a>
            </li>
            <li className="text-[#C7C6C5] text-xs hover:underline cursor-pointer hidden md:block m-w-32 md:mr-4 md:min-w-32 m-1.5 md:my-1.5">
              <a href="#">CA Privacy Notice</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center min-[1000px]:flex-row md:justify-end">
          <ul className="flex">
            <li className="rounded-full m-1.5 p-0.5 bg-[#44423E]">
              <a href="#">
                {
                  <FacebookLogo
                    size={28}
                    color="white"
                    weight="fill"
                  />
                }
              </a>
            </li>
            <li className="rounded-full m-1.5 p-0.5 bg-[#44423E]">
              <a href="#">
                {
                  <InstagramLogo
                    size={28}
                    color="white"
                    weight="fill"
                  />
                }
              </a>
            </li>
            <li className="rounded-full m-1.5 p-0.5 bg-[#44423E]">
              <a href="#">
                {
                  <LinkedinLogo
                    size={28}
                    color="white"
                    weight="fill"
                  />
                }
              </a>
            </li>
            <li className="rounded-full m-1.5 p-0.5 bg-[#44423E]">
              <a href="#">
                {
                  <XLogo
                    size={28}
                    color="white"
                    weight="fill"
                  />
                }
              </a>
            </li>
            <li className="rounded-full m-1.5 p-0.5 bg-[#44423E]">
              <a href="#">
                {
                  <YoutubeLogo
                    size={28}
                    color="white"
                    weight="fill"
                  />
                }
              </a>
            </li>
          </ul>
          <div className="hidden md:flex ml-16 w-max focus:outline-blue-700">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLegal;
