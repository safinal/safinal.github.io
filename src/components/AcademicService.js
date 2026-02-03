import React from 'react'
import { getData } from '../../lib/getData'

const AcademicService = () => {
  const data = getData("AcademicService.json");
  
  return (
    <div id="AcademicServiceSection" className="pb-10 scroll-mt-32">
      <div className="container m-auto">
        <div className="px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 py-8 md:py-16 text-gray-dark">
          <h1 className=" text-xl xl:text-2xl 2xl:text-3xl">Academic service</h1>
          <div className="pt-8 xl:pt-12 pl-8 md:pl-16">
            {data.academics.map((academic, index) =>
              <div key={index} className="flex">
                <div className="text-[#A9B3BA] text-xs md:text-sm mr-2 md:mr-4 mt-3">{academic.year}</div>
                <div className="text-sm sm:texty-base md:text-lg flex flex-wrap items-center">
                  {academic.conferences.map((conference, index) =>
                    <div className="flex items-center mr-5 my-2">
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 mr-2 md:mr-3 bg-[#4D4D4D] rounded-full"></span>
                      <p key={index} className="w-[90%] font-semibold">{conference.name}<span className="font-normal">{` (${conference.papers} papers)`}</span></p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicService