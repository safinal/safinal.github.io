import image from '../../../public/images/bgImage.jpg';
import DetaiIntroduction from './DetaiIntroduction';
import ImageIntroduction from './ImageIntroduction';
import { getData } from '../../../lib/getData';
import MobileIntroduction from './MobileImageIntroduction';

const Introduction = async () => {
    const educationData = getData('educations.json');

    return (
        <div className="relative 3xl:bg-cover bg-no-repeat pt-[4.5rem]" style={{
            "backgroundImage": `linear-gradient(rgb(255 255 255/91%), rgb(255 255 255/91%)), url(${image.src})`,
        }}>
            <div className="grid md:grid-cols-2 container m-auto px-7 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-44 pt-7 3xl:pt-8">
                <MobileIntroduction />
                <DetaiIntroduction educationData={educationData} />
                <ImageIntroduction />
            </div>
        </div>
    );
};

export default Introduction;