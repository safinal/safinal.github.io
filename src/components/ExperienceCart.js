'use client'
import { useState } from 'react'
import Image from 'next/image'


const ExperienceCart = (props) => {
    const [showAll, setShowAll] = useState(false);
    const imageProps = {
        alt: "",
        src: props.data.logo,
        layout: "intrinsic",
        width: 200,
        height: 200,
        objectFit: "contain",
        className: "absolute w-12 md:w-16 lg:w-20 h-auto"
    };



    return (
        <div className={`relative bg-[#F3F6F9] hover:shadow-4xl cursor-pointer mb-8 md:mb-11 w-full sm:w-[75%] xl:w-[65%] 2xl:w-[55%] ${props.data.information.length <= 2 ? 'pb-4 md:pb-8 px-3 md:px-5 lg:px-4 pt-3 md:pt-5 lg:pt-4' : 'p-4 md:p-5 lg:p-5'} rounded-lg lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-[1.01]`} >
            <div className="flex">
                {props.data.url ? (
                    <a href={props.data.url}>
                        <Image {...imageProps} />
                    </a>
                ) : (
                    <Image {...imageProps} />
                )}                
                <div className="text-[#313C44] ml-16 md:ml-20 lg:ml-28">
                    <p className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">{props.data.position}</p>
                    <div className="text-xs sm:text-sm md:text-base">
                            {props.data.url ? (
                            <p className=""><a href={props.data.url}>{props.data.laboratory}</a></p>
                            ) : (
                                <p className="">{props.data.laboratory}</p>
                            )}
                        
                        <p>{props.data.type}</p>
                        <p className="text-[#787F85]">{props.data.date}</p>
                    </div>
                    <div className="mt-2">
                    {props.data.information.slice(0, 2).map((info, index) => (
                        <div key={index} className="flex mb-1 text-xs sm:text-sm text-[#4D4D4D]">
                        <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 mt-[7px] sm:mt-2 mr-1 sm:mr-2 bg-[#4D4D4D] rounded-full"></span>
                        <p className="w-[90%] md:w-full">{info}</p>
                        </div>
                    ))}
                    </div>
                    <div className={`${showAll ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out`}>
                        {showAll &&
                            <div>
                                {props.data.information.slice(2).map((info, index) =>
                                    <div key={index} className="flex mb-1 text-xs sm:text-sm text-[#4D4D4D]">
                                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 mt-[7px] sm:mt-2 mr-1 sm:mr-2 bg-[#4D4D4D] rounded-full"></span>
                                    <p className="w-[90%] md:w-full">{info}</p>
                                    </div>
                                )}
                            </div>}
                    </div>
                </div>
            </div >
            {props.data.information.length > 2 && <button className="flex text-xs md:text-sm xl:text-base m-auto text-[#959595] my-2 md:mt-3" onClick={() => setShowAll(!showAll)}>
                {showAll ? 'show less' : 'show more'}
            </button>}
        </div>
    )
}

export default ExperienceCart