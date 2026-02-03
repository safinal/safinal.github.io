'use client';
import Link from 'next/link';

const DateText = (props) => {
    const makeText = (textObject) => {
        return textObject.map((i, index) => {
            if (typeof i === 'string') {
                return i; 
            } else if (typeof i === 'object' && i.url && i.word) {
                return (
                    <Link className="font-bold" key={index} href={i.url}>
                        {i.word}
                    </Link>
                ); 
            }
        });
    }

    return (
        <div className="my-6 md:my-12 pl-1 xl:pl-10 2xl:pl-14 pt-4 pr-2 3:pt-10">
            {props.data.slice(0, 3).map((n, index) =>
                <div key={index} className="text-gray-dark flex items-start">
                    <p className="text-[9px] sm:text-xs md:text-sm lg:text-base min-w-[27%] lg:min-w-[10%] w-[19rem] sm:w-36 pt-0.5 sm:pt-2 text-right mr-3 sm:mr-6">{n.date}</p>
                    <div className="mt-[0.4rem] md:mt-[0.7rem]">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 mx-3 sm:mx-7 bg-[#BCC0C2] rounded-full"></div>
                        <div className="w-0.5 sm:w-1 h-16 sm:h-14 mx-[0.87rem] sm:mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>
                    </div>
                    <p className="text-xs md:text-sm xl:text-lg 3xl:text-xl min-w-[60%] sm:min-w-[60%] ml-3 sm:ml-6">{makeText(n.text)}</p>
                </div>)}
            {props.data.slice(3, 4).map((n, index) =>
                <div key={index} className={`${props.showAll ? 'text-gray-dark' : 'text-gray'} flex items-start scroll-mt-32`}>
                    <p className="text-[9px] sm:text-xs md:text-sm lg:text-base min-w-[27%] lg:min-w-[10%] w-[19rem] sm:w-36 pt-2 text-right mr-3 sm:mr-6">{n.date}</p>
                    <div className="mt-[0.5rem] md:mt-[0.7rem]">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 mx-3 sm:mx-7 bg-[#BCC0C2] rounded-full"></div>
                        {props.showAll && <div className="w-0.5 sm:w-1 h-16 sm:h-14 mx-[0.87rem] sm:mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>}
                    </div>
                    <p className="text-xs md:text-sm xl:text-lg 3xl:text-xl min-w-[60%] sm:min-w-[60%] ml-3 sm:ml-6">{makeText(n.text)}</p>
                </div>)}

            <div className={`${props.showAll ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700`}>
                {props.showAll && props.data.slice(4).map((n, index) =>
                    <div key={index} className={`text-gray-dark flex items-start`}>
                        <p className="text-[9px] sm:text-xs md:text-sm lg:text-base min-w-[27%] lg:min-w-[10%] w-[19rem] sm:w-36 pt-2 text-right mr-3 sm:mr-6">{n.date}</p>
                        <div className="mt-[0.5rem] md:mt-[0.7rem]">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 mx-3 sm:mx-7 bg-[#BCC0C2] rounded-full"></div>
                            {props.data.length !== index + 5 && <div className="w-0.5 sm:w-1 h-16 sm:h-14 mx-[0.87rem] sm:mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>}
                        </div>
                        <p className="text-xs md:text-sm xl:text-lg 3xl:text-xl min-w-[60%] sm:min-w-[60%] ml-3 sm:ml-6">{makeText(n.text)}</p>
                    </div>)}
            </div>
        </div>
    );
};

export default DateText;
