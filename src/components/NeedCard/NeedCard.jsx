import React from 'react';

function NeedCard({ imageSrc, title }) {
  return (
    <div className="flex items-center w-full border-2 border-gray-300 rounded-lg p-3 cursor-pointer overflow-hidden lg:h-20">
      <p className="lg:text-2xl text-lg truncate flex-1 font-light">{title}</p>
      <div className="flex items-center gap-3 flex-shrink-0 ml-3">
        <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0">
          <img
            src={imageSrc}
            className="w-full h-full object-contain"
            alt="Need Card Image"
          />
        </div>
        <div className="w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0">
          <img
            src="src/assets/Chevron Right Icon.svg"
            className="w-full h-full object-contain"
            alt="Chevron Right Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default NeedCard;
