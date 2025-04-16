'use client';
import Image from 'next/image';
import EducationButton from '../EducationButton';
import Educations from '../Educations';
import introductionRectangle1 from '../../../public/images/design/introductionRectangle1.svg';
import { useState } from 'react';

const DetaiIntroduction = (props) => {
    const [showEducation, setShowEducation] = useState(false);

    return (
        <div id="aboutSection" className="scroll-mt-32">
            <Image alt="" src={introductionRectangle1} className="absolute -top-16 xl:-top-8 left-0 hidden md:block" />
            <div className="mb-32 3xl:mb-40 mt-[3rem] lg:mt-[5rem] 3xl:mt-[8rem]">
                <p className="text-gray text-2xl xl:text-3xl 3xl:text-5xl font-medium mb-3 xl:mb-4 hidden md:block">Hello! I’m</p>
                <h2 className="text-gray-dark text-3xl xl:text-4xl 3xl:text-6xl font-black hidden md:block">Ali Nafisi</h2>
                <p className="text-gray-dark text-sm md:text-base 2xl:text-lg 3xl:text-xl text-justify mt-[10rem] md:mt-4 xl:mt-6 3xl:mt-10">
                    I’m a Master’s student in Artificial Intelligence at Bu-Ali Sina University and a graduate researcher at the <a className="text-blue-500" href="https://rivlab.github.io/">Robot Intelligence & Vision Lab</a>, under the supervision of <a className="text-blue-500" href="https://scholar.google.com/citations?hl=en&user=5YX31NgAAAAJ">Prof. Hassan Khotanlou</a>. I earned my BSc in Computer Engineering from the University of Kurdistan in 2023.
                </p>
                <p className=" text-gray-dark text-sm md:text-base 2xl:text-lg 3xl:text-xl text-justify mt-2 xl:mt-3 3xl:mt-5">
                    I have broad interests in Deep Learning, with a particular focus on its applications in Trustworthy AI and Multimodal Generative Models. I am also passionate about Deep Learning-Guided Program Synthesis, aiming to develop intelligent systems capable of true invention, adaptation, and innovation. Additionally, I have a strong interest in Deep Reinforcement Learning, which I believe holds great potential for pushing the boundaries of AI beyond human-level performance across various domains.
                </p>
                <p className="text-gray-dark text-sm md:text-base 2xl:text-lg 3xl:text-xl text-justify mt-2 xl:mt-3 3xl:mt-5">
                    Currently, my research is focused on Debiasing Image Datasets using Generative Models, addressing critical issues of fairness and reliability in AI systems.
                </p>
                <p className="text-gray-dark text-sm md:text-base 2xl:text-lg 3xl:text-xl text-justify mt-2 xl:mt-3 3xl:mt-5">
                    I’m actively seeking a PhD position where I can continue to grow as a researcher and contribute to impactful, cutting-edge projects.
                </p>
                <EducationButton showEducation={showEducation} setShowEducation={setShowEducation} />
                <div className={`${showEducation ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700`}>
                    {props.educationData.educations.map((education, index) =>
                        <Educations key={index} index={index} length={props.educationData.educations.length} educationData={education} showEducation={showEducation} setShowEducation={setShowEducation} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetaiIntroduction;
