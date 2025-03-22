import React from 'react'
import { getData } from '../../lib/getData';
import Link from 'next/link';
import Image from 'next/image';
import { BASE_URL } from '../config';

const Footer = () => {
    const data = getData('socialMedia.json');

    return (
        <div className="bg-[#819EB4] h-24 flex items-center justify-center">
            <ul className="flex items-center [&>*]:mx-1.5 md:[&>*]:mx-3 justify-center">
                {data.socialMedias.map(socialMedia =>
                    <li>
                        <Link href={socialMedia.link}>
                            <Image
                                alt={socialMedia.alt}
                                src={BASE_URL + socialMedia.image}
                                width={30}
                                height={30}
                                className="max-w-[50px] max-h-[50px] md:max-w-[60px] md:max-h-[60px] lg:max-w-[70px] lg:max-h-[70px]"
                                style={{ objectFit: 'contain' }}
                            />
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Footer