import { cta } from "./home";
export default function Cta() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-sky-500/100">
                Welcome
              </h2>

              <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {cta.heading}
              </p>
              {cta.paragraph.map((p) => {
                return <p className="mt-6 text-lg/8 text-gray-600">{p}</p>;
              })}
            </div>
          </div>
          <img
            alt="Church"
            src="/images/cta-image.jpg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
