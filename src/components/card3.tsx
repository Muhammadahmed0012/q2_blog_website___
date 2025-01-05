'use client'
import { useState } from 'react';

const Card3 = () => {
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
          𝟬𝟯
        </h2>
        <span
          className={`text-2xl font-semibold ${
            isClicked ? 'text-white' : 'text-[#7c4ee4]'
          }`}
        >
          News Publishing
        </span>
        <p
          className={`w-[19rem] text-[15px] font-extralight ${
            isClicked ? 'opacity-100' : 'opacity-70'
          }`}
        >
         Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
        </p>
      </div>
    </div>
  );
};

export default Card3;
