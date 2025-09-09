import Cta from "../componets/home/cta";
import Explore from "../componets/home/explore";
import Faq from "../componets/home/faq";
import Team from "../componets/home/leaders";
import Step from "../componets/home/steps";
import VideoBanner from "../componets/videoBanner";
import Contact from "../componets/home/contact";
export default function Home() {
  return (
    <div>
      <VideoBanner
        title="Welcome To Gateway Baptist Church."
        subtitle="... Community of Grace."
        video="3373659-hd_1920_1080_24fps"
      />
      <Cta />
      <Team />
      <Explore />
      <Step />
      <Faq />
      <Contact />
    </div>
  );
}
