import FoundingandEstablishing from "../../componets/home/history/foundingAndEstablishing";
import WhyNameGateway from "../../componets/home/history/whyNameGateway";
import VideoBanner from "../../componets/videoBanner";
export default function History() {
  return (
    <>
      <VideoBanner
        video="history-video"
        title="The Church In the Historical Perspective."
        subtitle="Learn more about our church history."
      />
      <FoundingandEstablishing />
      <WhyNameGateway />
    </>
  );
}
