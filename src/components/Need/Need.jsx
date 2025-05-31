import React from 'react';
import NeedCard from '../NeedCard/NeedCard';

function Need() {
  return (
    <div className="flex flex-col items-center pt-16 pb-32 px-12 bg-white">
      <h2 className="text-4xl font-semibold">
        What kind of meditation do you need right now?
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-12">
        <NeedCard imageSrc={'src/assets/need7.svg'}/>
        <NeedCard imageSrc={'src/assets/need2.svg'}/>
        <NeedCard imageSrc={'src/assets/need3.svg'}/>
        <NeedCard imageSrc={'src/assets/need4.svg'}/>
        <NeedCard imageSrc={'src/assets/need8.svg'}/>
        <NeedCard imageSrc={'src/assets/need6.svg'}/>
      </div>
    </div>
  );
}

export default Need;
