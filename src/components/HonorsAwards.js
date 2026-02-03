'use client';
import DateText from './DateText';
import { useState } from 'react';
import awardsRectangle1 from '../../public/images/design/awardsRectangle1.svg';
import awardsRectangle2 from '../../public/images/design/awardsRectangle2.svg';
import Image from 'next/image';


const HonorsAwards = (props) => {
  const [showAllAwards, setShowAllAwards] = useState(false);

  return (
    <div id="HonorsSection" className="bg-[#F7F2EA] relative pb-10 scroll-mt-32">
      <Image alt="" src={awardsRectangle1} className="absolute right-0 -top-44" />
      <div className="container m-auto">
        <div className="px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-8 md:pt-16">
          <h1 className="text-gray-dark text-2xl 2xl:text-3xl">Honors & Awards</h1>
          <DateText showAll={showAllAwards} data={props.data.awards} />
        </div>
        {
          props.data.awards.length >= 5 &&
          <button className="text-[#748595] text-xs md:text-sm xl:text-base mx-auto mt-7 flex" onClick={() => setShowAllAwards(!showAllAwards)}>
          {showAllAwards ? `show less` :`show more`}
        </button>
        }
      </div>
      <Image alt="" src={awardsRectangle2} className="absolute right-16" />
    </div>

  );
};

export default HonorsAwards;
