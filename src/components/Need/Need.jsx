import React from 'react';
import NeedCard from '../NeedCard/NeedCard';
import need7 from '../../assets/need7.svg';
import need2 from '../../assets/need2.svg';
import need3 from '../../assets/need3.svg';
import need4 from '../../assets/need4.svg';
import need8 from '../../assets/need8.svg';
import need6 from '../../assets/need6.svg';

function Need() {
  return (
    <div className="flex flex-col items-center pt-16 pb-32 px-12 bg-white min-[1440px]:max-w-[90rem] mx-auto">
      <h2 className="text-3xl font-semibold mt-5 mb-10 text-center">
        What kind of meditation do you need right now?
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-[98%]">
        <NeedCard
          imageSrc={need7}
          title="Stress less"
        />
        <NeedCard
          imageSrc={need2}
          title="Sleep soundly"
        />
        <NeedCard
          imageSrc={need3}
          title="Manage anxiety"
        />
        <NeedCard
          imageSrc={need4}
          title="Process thoughts"
        />
        <NeedCard
          imageSrc={need8}
          title="Practice meditation"
        />
        <NeedCard
          imageSrc={need6}
          title="Start therapy"
        />
      </div>
    </div>
  );
}

export default Need;
