import Header from "../componets/header";
import Cta from "../componets/home/cta";
import VideoBanner from "../componets/videoBanner";
export default function Home() {
  return (
    <>
      <Header />
      <VideoBanner
        title="Welcome To Gateway Baptist Church."
        subtitle="... Community of Grace."
        video="3373659-hd_1920_1080_24fps"
      />
      <Cta />
    </>
  );
}
