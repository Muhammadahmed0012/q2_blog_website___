'use client'
import { useState } from 'react';

const Card2 = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`h-[20rem] w-[20rem] rounded-xl border-2 transition-all duration-300 ${
        isClicked
          ? 'bg-[#7c4ee4] text-white border-white'
          : 'bg-[#ffffff] text-black border-black border-opacity-10'
      }`}
    >
      <div className="flex flex-col items-start pl-3 pt-5 justify-center space-y-3">
        <h2
          className={`text-6xl font-semibold opacity-30 ${
            isClicked ? 'opacity-100' : ''
          }`}
        >
          𝟬𝟐
        </h2>
        <span
          className={`text-2xl font-semibold ${
            isClicked ? 'text-white' : 'text-[#7c4ee4]'
          }`}
        >
        Analysing
        </span>
        <p
          className={`w-[19rem] text-[15px] font-extralight ${
            isClicked ? 'opacity-100' : 'opacity-70'
          }`}
        >
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line solely on the bottom line.
        </p>
      </div>
    </div>
  );
};

export default Card2;
