import React from 'react';
import { CaretRight } from '@phosphor-icons/react';

function NeedCard({ imageSrc, title }) {
  return (
    <div className="group flex items-center w-full border-2 border-gray-300 rounded-lg p-3 cursor-pointer overflow-hidden lg:h-20">
      <p className="text-lg min-[1440px]:text-2xl truncate flex-1 font-light">
        {title}
      </p>
      <div className="flex items-center gap-3 flex-shrink-0 ml-3">
        <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0">
          <img
            src={imageSrc}
            className="w-full h-full object-contain"
            alt="Need Card Image"
          />
        </div>
        <div className="w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0">
          <CaretRight
            size={20}
            weight="bold"
            className="transition-transform duration-200 ease-in-out group-hover:translate-x-2"
          />
        </div>
      </div>
    </div>
  );
}

export default NeedCard;
