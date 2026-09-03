import Introduction from "@/components/introduction/Introduction";
import News from "@/components/News";
import Image from "next/image";
import { getData } from "../../lib/getData";
import Publications from "@/components/Publications";
import MastersThesis from "@/components/MastersThesis";
import TalksPresentations from "@/components/TalksPresentations";

export default function Home() {

  const news = getData('news.json');
  const awards = getData('HonorsAwards.json');
  const publications = getData('publications.json');
  const mastersThesis = getData('mastersThesis.json');
  const talksPresentations = getData('TalksPresentations.json');
  const experience = getData('Experience.json');

  return (
    <div className="">
      <Introduction />
      <News data={news} />
      <MastersThesis data={mastersThesis} />
      <Publications data={publications} />
      <TalksPresentations data={talksPresentations} />
    </div>
  );
}
