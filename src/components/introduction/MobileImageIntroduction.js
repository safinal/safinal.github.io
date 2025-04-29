import Image from 'next/image';
import mobileintroductionRectangle1 from '../../../public/images/design/mobileintroductionRectangle1.svg';
import mobileintroductionRectangle2 from '../../../public/images/design/mobileintroductionRectangle2.svg';
import person from '../../../public/images/Ali_Nafisi_Profile2.jpg';
import { getData } from '../../../lib/getData';
import Link from 'next/link';
import { BASE_URL } from '../../config';

const MobileIntroduction = () => {
  const data = getData('mobileSocialMedia.json');

  return (
    <div className="md:hidden">
      <Image alt="" src={mobileintroductionRectangle2} className="absolute left-0 top-20" />
      <div className="">
        <Image alt="" src={mobileintroductionRectangle1} className="absolute right-0 top-6" />
        <Image alt="" src={person} className="absolute right-4 top-24 w-36 h-36" />
        <div className="absolute top-[8.5rem] right-[10.5rem]">
          <p className="text-[#BDC7D1] text-xs">Hello! I’m</p>
          <p className="text-[#D6E2EF] font-medium">Ali Nafisi</p>
        </div>
        <ul className="absolute top-[13rem] right-[10rem] flex items-center w-fit rounded-lg [&>*]:mx-1 px-1 3xl:mt-6 bg-[#D5DADE]">
          {data.socialMedias.map(socialMedia =>
            <li>
              <Link href={socialMedia.link}>
              <Image
                  alt={socialMedia.alt}
                  src={BASE_URL + socialMedia.image}
                  width={26}
                  height={26}
                  className="max-w-[50px] max-h-[50px] md:max-w-[60px] md:max-h-[60px] lg:max-w-[70px] lg:max-h-[70px]"
                  style={{ objectFit: 'contain' }}
              />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileIntroduction;
