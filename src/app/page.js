import Introduction from "@/components/introduction/Introduction";
import News from "@/components/News";
import Image from "next/image";
import { getData } from "../../lib/getData";
import Publications from "@/components/Publications";
import HonorsAwards from "@/components/HonorsAwards";
import Experience from "@/components/Experience";
import TalksPresentations from "@/components/TalksPresentations";
import Research from "@/components/Research";
import AcademicService from "@/components/AcademicService";

export default function Home() {

  const news = getData('news.json');
  const awards = getData('HonorsAwards.json');
  const publications = getData('publications.json');
  const talksPresentations = getData('TalksPresentations.json');
  const experience = getData('Experience.json');

  return (
    <div className="">
      <Introduction />
      {/* <Research /> */}
      <News data={news} />
      <Publications data={publications} />
      <Experience data={experience}/>
      <HonorsAwards data={awards} />
      <TalksPresentations data={talksPresentations} />
      {/* <AcademicService /> */}
    </div>
  );
}
