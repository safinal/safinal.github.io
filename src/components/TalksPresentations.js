'use client'
import { useState } from 'react';
import Image from 'next/image';
import Cart from './Cart';
import talksRectangle1 from '../../public/images/design/talksRectangle1.svg';
import talksRectangle2 from '../../public/images/design/talksRectangle2.svg';
import talksRectangle3 from '../../public/images/design/talksRectangle3.svg';

const TalksPresentations = (props) => {
  const [showAllTalksPresentations, setShowAllTalksPresentations] = useState(false);

  return (
    <div id="TalksSection" className="relative scroll-mt-16">
      <Image src={talksRectangle1} alt="" className="absolute left-0 top-[20%] -z-10 hidden lg:block" />
      <Image src={talksRectangle2} alt="" className="absolute right-0 top-[50%] -z-10 hidden lg:block" />
      <Image src={talksRectangle3} alt="" className="absolute right-8 top-[70%] -z-10 hidden lg:block" />
      <div className="container m-auto px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-8 md:pt-16">
        <div className="">
          <p className="text-gray-dark  text-xl xl:text-2xl 2xl:text-3xl mb-3">Presentations</p>
        </div>
        <div className="flex flex-col items-center justify-center pt-8 xl:pt-16">
          {props.data.TalksPresentations.slice(0, 3).map((talksPresentations, index) =>
            <Cart key={index} author={false} data={talksPresentations} />
          )}
        </div>
        <div className={`${showAllTalksPresentations ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700 flex flex-col items-center justify-center`}>
          {showAllTalksPresentations && props.data.TalksPresentations.slice(3).map((talksPresentations, index) =>
            <Cart key={index} author={false} data={talksPresentations} />
          )}
        </div>
          {
            props.data.TalksPresentations.length > 3 &&
            <button className="text-[#748595] text-xs md:text-sm xl:text-base bg-primary1 mt-6 py-2 px-4 rounded-lg mx-auto flex mb-10"
            onClick={() => setShowAllTalksPresentations(!showAllTalksPresentations)}
          >
            {showAllTalksPresentations ? 'show less' : `show more`}
          </button>
          }
      </div>
    </div>
  )
}

export default TalksPresentations
