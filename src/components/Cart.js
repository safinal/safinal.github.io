'use client';
import Image from 'next/image';
import { FaQuoteRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiGoogleslides } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import Link from 'next/link';
import { BASE_URL } from '../config';

const Cart = (props) => {

  return (
    <div className="shadow-4xl md:hover:shadow-3xl cursor-pointer grid self-center sm:grid-cols-3 mb-4 md:mb-8 w-full md:w-[90%] lg:w-[80%] xl:w-[85%] 2xl:w-[70%] bg-[#F4F7FA] sm:bg-white p-5 lg:p-5 rounded-lg lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-[1.01]">
      <div className="w-full col-span-1 sm:col-span-1 p-1 ld:p-0 flex items-center justify-center">
        <Image src={BASE_URL + props.data.image} className="h-full m-auto rounded-lg" alt="alt"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="sm:col-span-2 flex flex-col justify-between ml-1.5 sm:ml-2 md:ml-10">
        <div>
          <div className="flex flex-col sm:flex-col-reverse mt-2">
            <p className={`text-xs text-[#E3898B] mt-2 sm:mt-1 inline py-1 font-bold`}>{props.data.journal ? `${props.data.journal}, ${props.data.year}` : props.data.year}</p>
            {props.data.url ? (
              <Link href={props.data.url}>
                <h1 className="font-bold text-sm md:text-base xl:text-lg 2xl:text-xl text-[#7C7D81]">
                  {props.data.title}
                </h1>
              </Link>
            ) : (
              <h1 className="font-bold text-sm md:text-base xl:text-lg 2xl:text-xl text-[#7C7D81]">
                {props.data.title}
              </h1>
            )}
          </div>
          {props.author && <div className="text-[#A8AFB4] text-[9px] md:text-xs mt-2 md:mt-5">
            {props.data.authors.map((author, index) => 
              author.link ? (
                <Link className="hover:text-gray-dark" key={index} href={author.link}>
                  {author.name}{author.co ? "*" : ""} {index + 1 !== props.data.authors.length && <span className="text-[#A8AFB4]"> | </span>}
                </Link>
              ) : (
                <span key={index} className="text-[#A8AFB4]">
                  {author.name}{author.co ? "*" : ""} {index + 1 !== props.data.authors.length && <span className="text-[#A8AFB4]"> | </span>}
                </span>
              )
            )}
          </div>}
        </div>
        <div className="[&>*]:mt-2 md:[&>*]:mt-4 flex flex-wrap [&>*]:mr-2 mb-0 sm:mb-2">
          {props.data.bibtex &&
            <button onClick={() => {
              props.setShowModal(true);
              props.setModalData(props.data.bibtex.data);
              props.setCartTitle(props.data.title);
            }} className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaQuoteRight />
              <span className="text-xs ml-1">BibTeX</span>
            </button>
          }
          {props.data.pdf &&
            <Link href={props.data.pdf}>
              <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#b31b1b] border-[#8CA7C3] hover:border-[#b31b1b] text-[#8CA7C3] hover:text-[#b31b1b] rounded flex items-center">
                <FaFilePdf />
                <span className="text-xs ml-1">PDF</span>
              </button>
            </Link>
          }
          {props.data.code &&
            <Link href={props.data.code}>
              <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#000000] border-[#8CA7C3] hover:border-[#000000] text-[#8CA7C3] hover:text-[#000000] rounded flex items-center">
                <FaCode />
                <span className="text-xs ml-1">Code</span>
              </button>
            </Link>
          }
          {props.data.website &&
            <Link href={props.data.url}>
              <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#EB8317] border-[#8CA7C3] hover:border-[#EB8317] text-[#8CA7C3] hover:text-[#EB8317] rounded flex items-center">
                <IoEarthSharp />
                <span className="text-xs ml-1">Website</span>
              </button>
            </Link>
          }
          {props.data.youtube &&
            <Link href={props.data.youtube}>
              <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#f70000] border-[#8CA7C3] hover:border-[#f70000] text-[#8CA7C3] hover:text-[#f70000] rounded flex items-center">
                <FaYoutube />
                <span className="text-xs ml-1">YouTube</span>
              </button>
            </Link>
          }
          {props.data.slides &&
            <Link href={props.data.slides}>
              <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#3D5300] border-[#8CA7C3] hover:border-[#3D5300] text-[#8CA7C3] hover:text-[#3D5300] rounded flex items-center">
                <SiGoogleslides />
                <span className="text-xs ml-1">Slides</span>
              </button>
            </Link>
          }
          {props.data.huggingFace &&
            <Link href={props.data.huggingFace}>
              <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#e7be1d] border-[#8CA7C3] hover:border-[#e7be1d] text-[#8CA7C3] hover:text-[#e7be1d] rounded flex items-center">
                <SiHuggingface />
                <span className="text-xs ml-1">HuggingFace</span>
              </button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
