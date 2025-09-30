import { purposeStatement } from "./home";

export default function MissionSection() {
  return (
    <div className="w-full h-full  ">
      <div className="w-full mx-auto py-5  ">
        <div className="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-2">
          <div className="flex gap-2 items-center">
            <img
              src="/images/images.png"
              alt="Church Profile"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-[2.2rem] md:h-[2.2rem] lg:w-[3rem] lg:h-[3rem] rounded-full"
            />

            <h2 className="text-sm font-semibold text-black">
              Gateway Baptist Church
            </h2>
          </div>

          <div className="text-gray-500">|</div>
          <h4 className="text-sm font-semibold  text-gray-700">5 MIN READ</h4>
        </div>
        <h1 className="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-2 pt-2 text-black">
          Our Purpose Statement | Our Mission and Vision as a Church.
        </h1>
        <div className="p-3">
          <div className="md:w-[80%] xs:w-[90%] mx-auto pt-4">
            {purposeStatement.map((purpose, idx) => {
              return (
                <div key={idx}>
                  <h1 className="font-semibold text-lg mt-4 text-black">
                    {purpose.id}. {purpose.heading}
                  </h1>
                  <p className="mt-2 text-md text-black">{purpose.paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
