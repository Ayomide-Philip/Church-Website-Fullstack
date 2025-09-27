import { CheckCircle } from "lucide-react";
import { Form, useActionData } from "react-router-dom";

export default function Contact() {
  const response = useActionData();
 
  return (
    <section className="text-gray-600 body-font relative pt-5">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4042328308647!2d3.893266975001243!3d7.42043619259002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d2469bd9aa7%3A0xed55e2fa30d60b64!2sGateway%20Baptist%20Church%2C%20Sango%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1742063925651!5m2!1sen!2sng"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        {!response?.data ? (
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Write us a message and we will get back to you as soon as
              possible.
            </p>
            <Form method="post">
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white cursor-pointer bg-blue-500 border-0 py-2 w-full px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Submit
              </button>
            </Form>
          </div>
        ) : (
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className="h-[300px] flex flex-col justify-center items-center gap-5">
              <h1 className="font-bold uppercase text-2xl text-center text-blue-800">
                Sent
              </h1>
              <p className="text-center text-black">
                {`Your message has been sent successfully, a response
              would be sent back to your email address ${response?.data?.feedback?.email}, we look foward to seeing you again`}
                .
              </p>
              <div className="animate-bounce">
                <CheckCircle className="h-15 w-15 text-blue-700" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
