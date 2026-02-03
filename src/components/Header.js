'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import menu from '../../public/images/icons/menu.svg';

const Header = () => {
    const [mobileBar, setMobileBar] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('[id*="Section"]');
            if (sections.length === 0) return;

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }

            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='relative'>
            <div className="bg-black fixed w-full z-40 flex justify-between items-center px-7 sm:px-10 lg:px-32 py-4">
                <div className="text-[#B1C7DE] text-2xl xl:text-3xl 2xl:text-4xl">
                    S a f i n a l
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    <Link href="#aboutSection">
                        <li className={activeSection === 'aboutSection' ? 'text-[#B1C7DE]' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>About</li>
                        <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'aboutSection' ? 'bg-[#B1C7DE]' : 'bg-transparent'}`}></div>
                    </Link>
                    <Link href="#newsSection">
                        <li className={activeSection === 'newsSection' ? 'text-[#B1C7DE]' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>News</li>
                        <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'newsSection' ? 'bg-[#B1C7DE]' : 'bg-transparent'}`}></div>
                    </Link>
                    <Link href="#publicationSection">
                        <li className={activeSection === 'publicationSection' ? 'text-[#B1C7DE] ' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>Publications</li>
                        <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'publicationSection' ? 'bg-[#B1C7DE]' : 'bg-transparent'}`}></div>
                    </Link>
                    <Link href="#TalksSection">
                        <li className={activeSection === 'TalksSection' ? 'text-[#B1C7DE]' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>Presentations</li>
                        <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'TalksSection' ? 'bg-[#B1C7DE]' : 'bg-transparent'}`}></div>
                    </Link>
                </ul>
                <button className="md:hidden" onClick={() => setMobileBar(!mobileBar)}>
                    <Image alt="menu" src={menu} />
                </button>
            </div>
            {/* {mobileBar && ( */}
            <div className={`md:hidden fixed top-16 left-0 w-full bg-black text-white font-bold flex flex-col items-start px-7 sm:px-10 pt-4 pb-6 space-y-4
                ${mobileBar ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
                transform transition-all duration-500 ease-in-out z-20`}>
                <Link href="#aboutSection" onClick={() => setMobileBar(false)}>
                    <span className={activeSection === 'aboutSection' ? 'text-[#B1C7DE]' : 'text-white'}>About</span>
                </Link>
                <Link href="#newsSection" onClick={() => setMobileBar(false)}>
                    <span className={activeSection === 'newsSection' ? 'text-[#B1C7DE]' : 'text-white'}>News</span>
                </Link>
                <Link href="#publicationSection" onClick={() => setMobileBar(false)}>
                    <span className={activeSection === 'publicationSection' ? 'text-[#B1C7DE]' : 'text-white'}>Publications</span>
                </Link>
                <Link href="#TalksSection" onClick={() => setMobileBar(false)}>
                    <span className={activeSection === 'TalksSection' ? 'text-[#B1C7DE]' : 'text-white'}>Presentations</span>
                </Link>
            </div>
            {/* )} */}
        </div>
    );
};

export default Header;
