import React from 'react';

function NeedCard({imageSrc}) {
  return (
    <div className="flex items-center gap-20 border-2 border-gray-300 rounded-lg py-2 pl-6 pr-4 cursor-pointer">
      <p className="text-2xl">Practice meditation</p>
      <div className="flex items-center">
        <img
          src={imageSrc}
          className="size-16"
          alt=""
        />
        <img
          src="src/assets/Chevron Right Icon.svg"
          className="size-8"
          alt=""
        />
      </div>
    </div>
  );
}

export default NeedCard;
