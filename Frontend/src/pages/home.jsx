import Cta from "../componets/home/cta";
import Explore from "../componets/home/explore";
import Faq from "../componets/home/faq";
import Team from "../componets/home/leaders";
import Step from "../componets/home/steps";
import VideoBanner from "../componets/videoBanner";
import Contact from "../componets/home/contact";
import { toast, ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <div>
      <ToastContainer />
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

export async function Action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    const req = await fetch("http://localhost:3000/feedback", {
      method: "POST",
      body: JSON.stringify({ email, message }),
      headers: { "Content-Type": "application/json" },
    });
    const response = await req.json();
    console.log(response);

    if (!response.success) {
      return toast.error(`${response.error}`);
    }
    return response;
  } catch (err) {
    console.log(err);
  }
}
