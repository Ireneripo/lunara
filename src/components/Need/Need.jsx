import React from 'react';
import NeedCard from '../NeedCard/NeedCard';

function Need() {
  return (
    <div className="flex flex-col items-center pt-16 pb-32 px-12 bg-white min-[1440px]:max-w-[90rem] mx-auto">
      <h2 className="text-4xl font-semibold mt-5 mb-10">
        What kind of meditation do you need right now?
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-[98%]">
        <NeedCard
          imageSrc={'src/assets/need7.svg'}
          title="Stress less"
        />
        <NeedCard
          imageSrc={'src/assets/need2.svg'}
          title="Sleep soundly"
        />
        <NeedCard
          imageSrc={'src/assets/need3.svg'}
          title="Manage anxiety"
        />
        <NeedCard
          imageSrc={'src/assets/need4.svg'}
          title="Process thoughts"
        />
        <NeedCard
          imageSrc={'src/assets/need8.svg'}
          title="Practice meditation"
        />
        <NeedCard
          imageSrc={'src/assets/need6.svg'}
          title="Start therapy"
        />
      </div>
    </div>
  );
}

export default Need;
